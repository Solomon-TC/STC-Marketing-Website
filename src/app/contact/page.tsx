import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | STC Marketing",
  description:
    "Get in touch with STC Marketing to get on a Spotlights mailer or start a new website for your Oregon business.",
};

const DETAILS = [
  { label: "Email", value: "stcmarketingco@gmail.com", href: "mailto:stcmarketingco@gmail.com" },
  { label: "Phone", value: "(503) 808-0452", href: "tel:+15038080452" },
  { label: "Service area", value: "Oregon, statewide" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk,
            <span className="text-tan italic"> we&apos;re here to help.</span>
          </>
        }
        description="Let us know what you're looking for and we'll reach out to see what we can do to help you and your business."
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
