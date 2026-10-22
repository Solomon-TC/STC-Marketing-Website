"use client";

import { useEffect, useRef } from "react";

type Queued = { q: unknown[] };
type CalFn = ((...args: unknown[]) => void) & Queued;
type CalGlobal = CalFn & { ns: Record<string, CalFn>; loaded: boolean };

const NAMESPACE = "intro-call";
const EMBED_SRC = "https://app.cal.com/embed/embed.js";

/**
 * Cal.com's official embed loader, written out in TypeScript. Calls made before
 * embed.js arrives are queued and replayed once it loads, so no npm package is
 * needed.
 */
function getCal(): CalGlobal {
  const w = window as Window & { Cal?: CalGlobal };
  if (w.Cal) return w.Cal;

  const push = (target: Queued, args: unknown) => target.q.push(args);

  const cal: CalGlobal = Object.assign(
    (...args: unknown[]) => {
      if (!cal.loaded) {
        const script = document.createElement("script");
        script.src = EMBED_SRC;
        script.async = true;
        document.head.appendChild(script);
        cal.loaded = true;
      }
      if (args[0] === "init" && typeof args[1] === "string") {
        const namespace = args[1];
        const api: CalFn = Object.assign((...a: unknown[]) => push(api, a), { q: [] as unknown[] });
        cal.ns[namespace] = cal.ns[namespace] || api;
        push(cal.ns[namespace], args);
        push(cal, ["initNamespace", namespace]);
        return;
      }
      push(cal, args);
    },
    { q: [] as unknown[], ns: {} as Record<string, CalFn>, loaded: false }
  );

  w.Cal = cal;
  return cal;
}

export default function CalBooking({
  calLink,
  name,
  email,
  notes,
  onBooked,
}: {
  calLink: string;
  name: string;
  email: string;
  notes: string;
  onBooked: () => void;
}) {
  const started = useRef(false);
  const booked = useRef(false);
  // Keep the latest callback without re-running the embed setup.
  const onBookedRef = useRef(onBooked);
  useEffect(() => {
    onBookedRef.current = onBooked;
  }, [onBooked]);

  useEffect(() => {
    // React runs effects twice in development; one embed is enough.
    if (started.current) return;
    started.current = true;

    const Cal = getCal();
    Cal("init", NAMESPACE, { origin: "https://app.cal.com" });
    const ns = Cal.ns[NAMESPACE];

    ns("inline", {
      elementOrSelector: "#cal-inline",
      calLink,
      config: { name, email, notes, theme: "dark", layout: "month_view" },
    });
    ns("ui", {
      theme: "dark",
      layout: "month_view",
      hideEventTypeDetails: false,
      cssVarsPerTheme: { dark: { "cal-brand": "#6b8a72" } },
    });

    const handleBooked = () => {
      if (booked.current) return;
      booked.current = true;
      onBookedRef.current();
    };
    // Newer embeds emit the V2 event; listen for both so either version works.
    ns("on", { action: "bookingSuccessful", callback: handleBooked });
    ns("on", { action: "bookingSuccessfulV2", callback: handleBooked });
  }, [calLink, name, email, notes]);

  return (
    <div
      id="cal-inline"
      className="min-h-[560px] w-full overflow-auto rounded-xl"
      aria-label="Choose a time for your Introductory Call"
    />
  );
}
