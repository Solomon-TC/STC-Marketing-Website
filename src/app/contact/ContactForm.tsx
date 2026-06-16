"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative rounded-2xl border border-white/10 bg-charcoal p-8 lg:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center text-center py-16"
          >
            <span className="text-pine-light text-sm uppercase tracking-widest">
              Message sent
            </span>
            <h3 className="font-display mt-3 text-2xl text-paper">
              Thanks &mdash; we&apos;ll be in touch shortly.
            </h3>
            <p className="mt-2 text-sm text-mist max-w-sm">
              A member of the STC Marketing team will reach out within one
              business day to talk through your project.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="grid gap-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" type="text" required autoComplete="name" />
              <Field label="Business name" name="business" type="text" autoComplete="organization" />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Email" name="email" type="email" required autoComplete="email" />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-mist mb-2">
                I&apos;m interested in
              </label>
              <select
                name="interest"
                className="w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-paper focus:border-pine-light focus:outline-none focus:ring-1 focus:ring-pine-light"
                defaultValue="spotlights"
              >
                <option value="spotlights">The Spotlights (direct mail)</option>
                <option value="website">Website Design</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-mist mb-2">
                Tell us about your project
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-paper placeholder:text-mist/60 focus:border-pine-light focus:outline-none focus:ring-1 focus:ring-pine-light"
                placeholder="What's your service area, and what does success look like?"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer inline-flex items-center justify-center rounded-full bg-pine-light px-8 py-3.5 text-sm uppercase tracking-wide text-ink transition-transform duration-300 hover:scale-[1.02] hover:bg-pine"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest text-mist mb-2">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-white/15 bg-ink px-4 py-3 text-paper placeholder:text-mist/60 focus:border-pine-light focus:outline-none focus:ring-1 focus:ring-pine-light"
      />
    </div>
  );
}
