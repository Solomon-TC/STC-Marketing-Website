import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | STC Marketing",
  description:
    "Get in touch with STC Marketing to plan a Spotlights direct mail drop or a new website for your Oregon business.",
};

const DETAILS = [
  { label: "Email", value: "hello@stcmarketing.com", href: "mailto:hello@stcmarketing.com" },
  { label: "Phone", value: "(503) 555-1234", href: "tel:+15035551234" },
  { label: "Service area", value: "Oregon, statewide" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s plan your
            <span className="text-tan italic"> next drop.</span>
          </>
        }
        description="Tell us about your business and we'll put together a Spotlights mailer, a website, or both — built around your goals and your service area."
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">
              Get in touch
            </span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper">
              We respond within one business day.
            </h2>
            <dl className="mt-10 space-y-8">
              {DETAILS.map((d) => (
                <div key={d.label}>
                  <dt className="text-xs uppercase tracking-widest text-mist">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-lg">
                    {d.href ? (
                      <a href={d.href} className="text-paper hover:text-pine-light transition-colors">
                        {d.value}
                      </a>
                    ) : (
                      <span className="text-paper">{d.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
