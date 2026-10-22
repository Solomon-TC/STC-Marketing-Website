"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import CalBooking from "./CalBooking";
import { submitLead } from "./actions";
import { trackPixel } from "@/components/MetaPixel";
import { SITE } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const OTHER = "Something else";

type Step =
  | {
      kind: "single";
      id: "businessType" | "budget";
      title: string;
      subtitle?: string;
      options: string[];
      /** Option that reveals a write-in field instead of advancing. */
      other?: string;
    }
  | { kind: "text"; id: "timeline"; title: string; subtitle?: string; placeholder: string }
  | { kind: "contact"; id: "contact"; title: string; subtitle?: string }
  | { kind: "booking"; id: "booking"; title: string; subtitle?: string };

const STEPS: Step[] = [
  {
    kind: "single",
    id: "businessType",
    title: "What kind of business do you run?",
    options: ["Restaurant", "Winery or brewery", "Home service", OTHER],
    other: OTHER,
  },
  {
    kind: "text",
    id: "timeline",
    title: "When do you need it done by?",
    subtitle: "A date, a season, or an opening you're building toward.",
    placeholder: "e.g. Before our spring opening",
  },
  {
    kind: "single",
    id: "budget",
    title: "What's your budget?",
    subtitle: "It helps us recommend the right scope on the call.",
    options: ["$1,000 – $2,500", "$2,500 – $5,000", "$5,000 – $10,000", "$10,000+"],
  },
  {
    kind: "contact",
    id: "contact",
    title: "Where should we reach you?",
    subtitle: "We'll use this to confirm your call. No spam, ever.",
  },
  {
    kind: "booking",
    id: "booking",
    title: "Pick a time for your Introductory Call.",
    subtitle: "A 30-minute phone call. We'll ring you at the number you gave us.",
  },
];

type Answers = {
  businessType: string;
  businessOther: string;
  timeline: string;
  budget: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  company: string;
};

const EMPTY: Answers = {
  businessType: "",
  businessOther: "",
  timeline: "",
  budget: "",
  name: "",
  business: "",
  email: "",
  phone: "",
  company: "",
};

type ContactField = "name" | "business" | "email" | "phone";
type Errors = Partial<Record<ContactField, string>>;

function validate(a: Answers): Errors {
  const errors: Errors = {};
  if (!a.name.trim()) errors.name = "Please enter your name.";
  if (!a.business.trim()) errors.business = "Please enter your business name.";
  if (!/^\S+@\S+\.\S+$/.test(a.email.trim())) errors.email = "Please enter a valid email address.";
  if (a.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a phone number we can call.";
  return errors;
}

const slide: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 48, filter: "blur(6px)" }),
  center: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.45, ease: EASE } },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir * -48,
    filter: "blur(6px)",
    transition: { duration: 0.28, ease: EASE },
  }),
};

const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

const INPUT =
  "w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-paper placeholder:text-mist/60 focus:border-pine-light focus:outline-none focus:ring-1 focus:ring-pine-light";

export default function LeadForm() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [outcome, setOutcome] = useState<"booked" | "received" | "failed" | null>(null);

  const topRef = useRef<HTMLDivElement>(null);
  const interacted = useRef(false);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const attribution = useRef<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    attribution.current = Object.fromEntries(
      ATTRIBUTION_KEYS.flatMap((k) => {
        const v = params.get(k);
        return v ? [[k, v]] : [];
      })
    );
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  // Move focus into each new step so keyboard and screen-reader users land in
  // the right place: the input on write-in steps, the heading everywhere else.
  // Skipped on first load so the page doesn't jump.
  const focusOnMount = useCallback((el: HTMLElement | null) => {
    if (el && interacted.current) el.focus({ preventScroll: true });
  }, []);

  const step = STEPS[index];
  const done = outcome !== null;
  // Counts the finished state as a final slot, so the bar only fills completely
  // once they've actually booked, not on arrival at the calendar.
  const progress = done ? 100 : Math.round(((index + 1) / (STEPS.length + 1)) * 100);

  function goTo(next: number) {
    interacted.current = true;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
    const top = topRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 80) topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function chooseSingle(s: Extract<Step, { kind: "single" }>, value: string) {
    interacted.current = true;
    setAnswers((a) => ({ ...a, [s.id]: value }));
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    // "Something else" waits for the write-in instead of moving on.
    if (s.other && value === s.other) return;
    // A short pause lets the selection register visually before moving on.
    advanceTimer.current = setTimeout(() => goTo(index + 1), 280);
  }

  function updateField(field: keyof Answers, value: string) {
    setAnswers((a) => ({ ...a, [field]: value }));
    if (field in errors) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function continueIf(ok: boolean) {
    return (e: FormEvent) => {
      e.preventDefault();
      if (ok) goTo(index + 1);
    };
  }

  async function submitContact(e: FormEvent) {
    e.preventDefault();
    const found = validate(answers);
    setErrors(found);
    if (Object.keys(found).length) return;

    setSubmitting(true);
    const result = await submitLead({
      ...answers,
      businessOther: answers.businessType === OTHER ? answers.businessOther : "",
      attribution: attribution.current,
    }).catch(
      (): { ok: false; invalid: false; message: string } => ({
        ok: false,
        invalid: false,
        message: "Network error",
      })
    );
    setSubmitting(false);

    if (!result.ok && result.invalid) {
      setErrors({ email: result.message });
      return;
    }

    trackPixel("Lead", { content_name: "Introductory Call — restaurants & wineries" });

    if (SITE.calLink) {
      // Even if the email failed, booking still captures them through Cal.com.
      goTo(index + 1);
    } else {
      interacted.current = true;
      setOutcome(result.ok ? "received" : "failed");
    }
  }

  const businessLabel =
    answers.businessType === OTHER && answers.businessOther.trim()
      ? `${OTHER}: ${answers.businessOther.trim()}`
      : answers.businessType;

  const bookingNotes = [
    businessLabel,
    answers.timeline && `Needs it by: ${answers.timeline.trim()}`,
    answers.budget && `Budget: ${answers.budget}`,
    `Phone: ${answers.phone}`,
  ]
    .filter(Boolean)
    .join(" · ");

  const firstName = answers.name.trim().split(/\s+/)[0] || "there";

  return (
    <div ref={topRef} className="scroll-mt-28 rounded-3xl border border-white/10 bg-charcoal p-6 shadow-2xl shadow-black/40 sm:p-10">
      {/* Progress */}
      <div className="flex items-center justify-between text-xs uppercase tracking-widest text-mist">
        <span>{done ? "All set" : `Step ${index + 1} of ${STEPS.length}`}</span>
        <span aria-hidden>{progress}%</span>
      </div>
      <div
        className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-label="Form progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-pine-light to-tan"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 110, damping: 20 }}
        />
      </div>

      <div className="relative mt-8 min-h-[320px]">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          {done ? (
            <motion.div
              key="done"
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex min-h-[320px] flex-col items-center justify-center text-center"
            >
              {outcome === "failed" ? (
                <>
                  <h3 ref={focusOnMount} tabIndex={-1} className="font-display text-3xl text-paper outline-none">
                    Almost there.
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-fog">
                    We couldn&apos;t send your details just now. Please email{" "}
                    <a href={`mailto:${SITE.email}`} className="text-pine-light underline underline-offset-2">
                      {SITE.email}
                    </a>{" "}
                    or call{" "}
                    <a href={`tel:${SITE.phoneRaw}`} className="text-pine-light underline underline-offset-2">
                      {SITE.phone}
                    </a>{" "}
                    and we&apos;ll set up your call.
                  </p>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 52 52" className="h-16 w-16" aria-hidden>
                    <motion.circle
                      cx="26"
                      cy="26"
                      r="24"
                      fill="none"
                      stroke="#6b8a72"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                    <motion.path
                      d="M16 27l7 7 14-15"
                      fill="none"
                      stroke="#c9a06a"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.45, delay: 0.45, ease: EASE }}
                    />
                  </svg>
                  <h3 ref={focusOnMount} tabIndex={-1} className="font-display mt-6 text-3xl text-paper outline-none">
                    {outcome === "booked" ? "You're booked." : `Thanks, ${firstName}.`}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-fog">
                    {outcome === "booked"
                      ? `We'll call you at ${answers.phone} at the time you picked. A confirmation is on its way to ${answers.email}.`
                      : `We've got your details and will call you at ${answers.phone} within one business day to set up your Introductory Call.`}
                  </p>
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key={step.id}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <h3
                ref={step.kind === "text" ? undefined : focusOnMount}
                tabIndex={-1}
                className="font-display text-balance text-2xl text-paper outline-none sm:text-3xl"
              >
                {step.title}
              </h3>
              {step.subtitle && <p className="mt-2 text-fog">{step.subtitle}</p>}

              {step.kind === "single" && (
                <>
                  <div role="radiogroup" aria-label={step.title} className="mt-7 grid gap-3 sm:grid-cols-2">
                    {step.options.map((opt) => (
                      <OptionButton
                        key={opt}
                        selected={answers[step.id] === opt}
                        onClick={() => chooseSingle(step, opt)}
                      >
                        {opt}
                      </OptionButton>
                    ))}
                  </div>

                  <AnimatePresence initial={false}>
                    {step.other && answers[step.id] === step.other && (
                      <motion.form
                        key="other"
                        onSubmit={continueIf(Boolean(answers.businessOther.trim()))}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6">
                          <label htmlFor="lf-other" className="mb-2 block text-xs uppercase tracking-widest text-mist">
                            Tell us what kind of business
                          </label>
                          <div className="flex flex-col gap-4 sm:flex-row">
                            <input
                              id="lf-other"
                              ref={focusOnMount}
                              value={answers.businessOther}
                              onChange={(e) => updateField("businessOther", e.target.value)}
                              placeholder="e.g. Golf course, event venue"
                              className={INPUT}
                            />
                            <PrimaryButton type="submit" disabled={!answers.businessOther.trim()}>
                              Continue
                            </PrimaryButton>
                          </div>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </>
              )}

              {step.kind === "text" && (
                <form onSubmit={continueIf(Boolean(answers.timeline.trim()))} className="mt-7">
                  <label htmlFor="lf-timeline" className="sr-only">
                    {step.title}
                  </label>
                  <input
                    id="lf-timeline"
                    ref={focusOnMount}
                    value={answers.timeline}
                    onChange={(e) => updateField("timeline", e.target.value)}
                    placeholder={step.placeholder}
                    className={INPUT}
                  />
                  <div className="mt-8 flex justify-end">
                    <PrimaryButton type="submit" disabled={!answers.timeline.trim()}>
                      Continue
                    </PrimaryButton>
                  </div>
                </form>
              )}

              {step.kind === "contact" && (
                <form onSubmit={submitContact} noValidate className="mt-7 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="lf-name" label="Your name" autoComplete="name" value={answers.name} error={errors.name} onChange={(v) => updateField("name", v)} />
                    <Field id="lf-business" label="Business name" autoComplete="organization" value={answers.business} error={errors.business} onChange={(v) => updateField("business", v)} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="lf-email" label="Email" type="email" autoComplete="email" value={answers.email} error={errors.email} onChange={(v) => updateField("email", v)} />
                    <Field id="lf-phone" label="Phone" type="tel" autoComplete="tel" value={answers.phone} error={errors.phone} onChange={(v) => updateField("phone", v)} />
                  </div>

                  {/* Honeypot: hidden from people, irresistible to bots. */}
                  <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                    <label htmlFor="lf-company">Company</label>
                    <input
                      id="lf-company"
                      tabIndex={-1}
                      autoComplete="off"
                      value={answers.company}
                      onChange={(e) => updateField("company", e.target.value)}
                    />
                  </div>

                  <div className="mt-2 flex items-center justify-end">
                    <PrimaryButton type="submit" disabled={submitting}>
                      {submitting ? "Sending…" : SITE.calLink ? "Choose a time" : "Request my call"}
                    </PrimaryButton>
                  </div>
                </form>
              )}

              {step.kind === "booking" && (
                <div className="mt-6">
                  <p className="mb-5 flex items-start gap-2.5 rounded-xl border border-white/10 bg-ink/50 px-4 py-3 text-sm leading-relaxed text-fog">
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 shrink-0 text-pine-light"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    <span>
                      We&apos;re in Oregon, on <span className="text-paper">Pacific Time</span>. The
                      calendar shows times in your own time zone, which you can change below.
                    </span>
                  </p>
                  <CalBooking
                    calLink={SITE.calLink}
                    name={answers.name}
                    email={answers.email}
                    notes={bookingNotes}
                    onBooked={() => {
                      trackPixel("Schedule", { content_name: "Introductory Call" });
                      interacted.current = true;
                      setOutcome("booked");
                    }}
                  />
                </div>
              )}

              {index > 0 && step.kind !== "booking" && (
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  disabled={submitting}
                  className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm text-mist transition-colors duration-300 hover:text-paper disabled:opacity-50"
                >
                  <span aria-hidden>&larr;</span> Back
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function OptionButton({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`group flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left transition-colors duration-300 ${
        selected
          ? "border-pine-light bg-pine/25 text-paper"
          : "border-white/10 bg-ink/40 text-fog hover:border-white/25 hover:text-paper"
      }`}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
          selected ? "border-pine-light bg-pine-light" : "border-white/25"
        }`}
      >
        <motion.svg
          viewBox="0 0 12 12"
          className="h-3 w-3"
          initial={false}
          animate={{ scale: selected ? 1 : 0, opacity: selected ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path d="M2.5 6.2l2.3 2.3 4.7-5" fill="none" stroke="#0b0b0c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </span>
    </motion.button>
  );
}

function PrimaryButton({
  children,
  disabled,
  type = "button",
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="group relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-pine-light px-8 py-3.5 text-sm uppercase tracking-wide text-ink transition-[background-color,box-shadow,opacity] duration-300 hover:bg-[#7c9b83] hover:shadow-[0_0_40px_-10px_rgba(107,138,114,0.75)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:shadow-none"
    >
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
        &rarr;
      </span>
    </button>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-widest text-mist">
        {label} *
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-ink px-4 py-3 text-paper placeholder:text-mist/60 focus:outline-none focus:ring-1 ${
          error
            ? "border-red-400/70 focus:border-red-400 focus:ring-red-400"
            : "border-white/15 focus:border-pine-light focus:ring-pine-light"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
