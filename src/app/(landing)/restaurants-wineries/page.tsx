import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import LeadForm from "./LeadForm";
import MobileBookBar from "./MobileBookBar";

export const metadata: Metadata = {
  title: "Websites for Restaurants & Wineries | Introductory Call",
  description:
    "Exceptional custom websites for restaurants and wineries — reservations, menus, and events built in. Book an Introductory Call with STC Marketing.",
  // Paid-traffic page: kept out of search so it doesn't compete with the main site.
  robots: { index: false, follow: false },
};

const ICON = "h-6 w-6 text-pine-light";
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const FEATURES = [
  {
    title: "Designed from scratch",
    body: "No templates. A site designed around your brand, your space, and the guests you want to attract.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} aria-hidden {...stroke}>
        <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z" />
      </svg>
    ),
  },
  {
    title: "Reservations built in",
    body: "Connect OpenTable so guests can book a table without leaving your site or picking up the phone.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} aria-hidden {...stroke}>
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 10h17M8 3v4M16 3v4M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Menus that sell the meal",
    body: "Beautiful, readable menus that look as good on a phone as they do on the table.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} aria-hidden {...stroke}>
        <path d="M6 3.5h12v17H6z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: "Events & private dining",
    body: "Showcase tastings, events, and buyouts, with inquiries landing straight in your inbox.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} aria-hidden {...stroke}>
        <path d="M8 3h8l-1 7a3 3 0 0 1-6 0z" />
        <path d="M12 13v6M8.5 21h7" />
      </svg>
    ),
  },
  {
    title: "Reviews front and center",
    body: "Your best Google reviews placed right where guests are deciding where to go.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} aria-hidden {...stroke}>
        <path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" />
      </svg>
    ),
  },
  {
    title: "Managed for you",
    body: "Hosting, security, updates, and support handled after launch. You run the floor; we run the site.",
    icon: (
      <svg viewBox="0 0 24 24" className={ICON} aria-hidden {...stroke}>
        <path d="M12 21s8-4 8-10V5l-8-3-8 3v6c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const WHY_US = [
  {
    title: "Direct access",
    body: "You talk to the two people designing and building your site, not an account manager.",
  },
  {
    title: "Built from scratch",
    body: "Every site is custom-designed around your brand. Nothing is recycled from a template.",
  },
  {
    title: "We stay after launch",
    body: "Hosting, updates, and support are part of the deal, so your site stays sharp for years.",
  },
  {
    title: "Fast, straight answers",
    body: "We reply within one business day, and you get a clear plan and a straight number.",
  },
];

const FAQS = [
  {
    q: "Is the Introductory Call free?",
    a: "Yes. It's a free, no-obligation 30-minute phone call to learn about your business and talk through what an exceptional website could do for you.",
  },
  {
    q: "What happens on the call?",
    a: "We learn about your business, your guests, and your goals, share ideas for what your site should look like and do, and follow up with a clear plan and a straight number.",
  },
  {
    q: "Can guests make reservations on the website?",
    a: "Yes. We connect your site to OpenTable so guests can book a table right from your site.",
  },
  {
    q: "Do you work with restaurants and wineries outside Oregon?",
    a: "Yes. We're based in Newberg, Oregon, and work with clients across the country. The whole process runs remotely.",
  },
  {
    q: "What does a website cost?",
    a: "It depends on the size of the site and what it needs to do. We'll give you a clear, straight number after the call — no packages to decode.",
  },
  {
    q: "Do you handle hosting and updates?",
    a: "Yes. Hosting, security, software updates, and ongoing support are all included after launch.",
  },
];

/** Demo restaurant site. Always presented as a concept, never as a client. */
const ASHWOOD_URL = "https://ashwoodprimedemo.vercel.app/";

export default function RestaurantsWineriesPage() {
  return (
    <>
      {/* Hero and form share one section, so they sit on one continuous
          background. CSS-animated so both appear before JavaScript loads. */}
      <section className="relative isolate overflow-hidden bg-ink grain">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="aurora-a absolute -top-[12%] left-[5%] h-[38rem] w-[38rem] rounded-full bg-pine/25 blur-3xl" />
          <div className="aurora-b absolute top-[2%] right-[0%] h-[32rem] w-[32rem] rounded-full bg-tan/12 blur-3xl" />
          {/* A third glow lower down carries the light in behind the form. */}
          <div className="aurora-b absolute top-[48%] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-pine/15 blur-3xl" />
        </div>

        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-28 pb-10 text-center sm:pt-44 sm:pb-14 lg:px-10">
          <h1 className="rise-in font-display text-balance text-5xl leading-[1.04] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            Exceptional websites for{" "}
            <span className="text-tan italic">ambitious businesses.</span>
          </h1>
          <p
            className="rise-in mt-7 max-w-2xl text-lg leading-relaxed text-fog sm:text-xl"
            style={{ animationDelay: "140ms" }}
          >
            We design, build, and manage custom websites for businesses that
            want to lead their market. Answer a few quick questions below to
            book your Introductory Call.
          </p>
          <ul
            className="rise-in mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs uppercase tracking-widest text-mist"
            style={{ animationDelay: "260ms" }}
          >
            <li>Custom-built, never templated</li>
            <li aria-hidden className="hidden sm:block">&middot;</li>
            <li>Managed after launch</li>
          </ul>
        </div>

        {/* The form, centered under the headline */}
        <div
          id="book"
          className="rise-in mx-auto max-w-2xl scroll-mt-20 px-6 pb-24 lg:pb-32"
          style={{ animationDelay: "380ms" }}
        >
          <LeadForm />
        </div>
      </section>

      {/* About + differentiators */}
      <section className="border-t border-white/5 bg-charcoal py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">Who you&apos;ll work with</span>
            <h2 className="font-display text-balance mt-4 text-4xl text-paper sm:text-5xl">
              Two brothers. One standard:{" "}
              <span className="text-tan italic">exceptional.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-fog">
              STC Marketing is Silas and Solomon Capell — brothers based in
              Newberg, Oregon, right in the heart of wine country. When you work
              with us, you work directly with the two people designing,
              building, and maintaining your site.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <GlowCard>
                  <div className="p-7">
                    <h3 className="text-lg text-paper">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">{w.body}</p>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials tone="ink" only={["Jack Chlumak", "Jesse Robinson"]} />

      {/* What you get */}
      <section className="border-t border-white/5 bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">What you get</span>
            <h2 className="font-display text-balance mt-4 max-w-3xl text-4xl text-paper sm:text-5xl">
              Everything a hospitality website needs, done properly.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={Math.min(i * 0.07, 0.3)}>
                <GlowCard>
                  <div className="p-8">
                    {f.icon}
                    <h3 className="font-display mt-6 text-2xl text-paper">{f.title}</h3>
                    <p className="mt-3 leading-relaxed text-fog">{f.body}</p>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant concept — a demo build, labeled as one */}
      <section className="border-t border-white/5 bg-ink py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr] lg:px-10">
          <Reveal>
            <a
              href={ASHWOOD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore the Ashwood Prime concept site"
              className="group relative block pb-[18%] sm:pb-[14%]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
                <Image
                  src="/images/portfolio/ashwood-prime.webp"
                  alt="Ashwood Prime restaurant concept homepage, designed by STC Marketing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute right-[-4%] bottom-0 aspect-[16/10] w-[58%] overflow-hidden rounded-xl border border-white/15 shadow-2xl shadow-black/70 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 sm:right-[-6%]">
                <Image
                  src="/images/portfolio/ashwood-prime-menu.webp"
                  alt="Ashwood Prime menu section with wine pairings"
                  fill
                  sizes="(max-width: 1024px) 60vw, 400px"
                  className="object-cover object-top"
                />
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-tan/30 px-3 py-1 text-xs uppercase tracking-widest text-tan">
              Restaurant concept
            </span>
            <h2 className="font-display text-balance mt-5 text-4xl text-paper sm:text-5xl">
              A taste of what we&apos;d build for{" "}
              <span className="text-tan italic">you.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-fog">
              Ashwood Prime is a steakhouse concept we designed and built to show
              what a hospitality site from us looks like. It isn&apos;t a real
              restaurant — but every part of it is the real thing.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Reservations one tap away, from every page",
                "A signature menu with a wine pairing for every cut",
                "Private dining showcased room by room",
                "A full wine list and photography that sets the mood",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-paper">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pine-light" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <a
                href={ASHWOOD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-wide text-pine-light transition-colors duration-300 hover:text-paper"
              >
                Explore the live concept
                <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  &#8599;
                </span>
              </a>
              {/* Opens in a new tab so the visitor keeps their place on this page. */}
              <a
                href="/website-design#work"
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-wide text-fog transition-colors duration-300 hover:text-paper"
              >
                See our client work
                <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  &#8599;
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection faqs={FAQS} eyebrow="Questions" heading="Before you book." tone="charcoal" />

      <MobileBookBar />
    </>
  );
}
