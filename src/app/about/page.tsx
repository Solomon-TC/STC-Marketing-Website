import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "About | STC Marketing",
  description:
    "STC Marketing is an Oregon-based advertising company helping local businesses grow with direct mail and modern websites.",
};

const VALUES = [
  {
    title: "Community over competition",
    description:
      "The Spotlights puts multiple businesses on one card — because we believe local businesses grow stronger when they lift each other up, not when they undercut each other.",
  },
  {
    title: "Craft, not shortcuts",
    description:
      "Every ad, every postcard, every website is built from scratch. No stock templates, no cut corners. If your name is on it, it should look like someone cared.",
  },
  {
    title: "Consistency wins",
    description:
      "One mailer doesn't change a business. Showing up in the same mailboxes month after month does. Everything we build is designed to be part of a long game.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Built in Oregon, for
            <span className="text-tan italic"> Oregon businesses.</span>
          </>
        }
        description="STC Marketing combines old-school direct mail with modern web design to help local businesses get found and get chosen."
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">The people behind it</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl max-w-2xl">
              Who Are We?
            </h2>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
            <Reveal>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { src: "/images/abu2.jpg", alt: "Silas and Solomon as kids" },
                  { src: "/images/abu1.jpg", alt: "Silas at OSU graduation" },
                  { src: "/images/abu6.jpg", alt: "Silas and Solomon growing up" },
                  { src: "/images/abu5.jpg", alt: "Solomon at OSU intramural championship", position: "object-top" },
                  { src: "/images/abu4.jpg", alt: "Backpacking in the mountains" },
                  { src: "/images/abu3.jpg", alt: "Traveling abroad" },
                ].map((photo) => (
                  <div key={photo.src} className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className={`object-cover ${photo.position ?? ""}`}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 text-fog leading-relaxed">
                <p>
                  STC is the shared initials of brothers{" "}
                  <span className="text-paper">Silas and Solomon Capell.</span>
                </p>
                <p>
                  We have a love for business, and found that through STC
                  Marketing we can combine our skills to connect individuals of
                  our home communities to the great local companies within them.
                  The Spotlight aims to be a source of trust for the community
                  and an exclusive opportunity for businesses to spread awareness
                  of their brand as the leader of their field.
                </p>
                <p>
                  Silas is an OSU Alumni in Finance, and he was a co-founder of
                  Valley Boy&apos;s Window &amp; Gutter Cleaning LLC. Solomon is
                  a 4th year student in Business at OSU with an affinity for
                  marketing design. Both enjoy travel, adventure, backpacking,
                  Jiu Jitsu, playing basketball, and time spent with friends and
                  family.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">Our story</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
              Marketing that respects the customer&apos;s mailbox &mdash; and your budget.
            </h2>
            <div className="mt-6 space-y-5 text-fog leading-relaxed">
              <p>
                STC Marketing started with a simple observation: most local
                advertising is either ignored online or thrown away in the
                mailbox. We set out to build something that couldn&apos;t be
                ignored &mdash; The Spotlights, an oversized postcard sized
                and designed to earn a second look.
              </p>
              <p>
                As more of our clients asked us to help with their websites
                too, we expanded into web design &mdash; applying the same
                standard of craft to the page someone lands on after they
                scan that postcard. Today we help Oregon businesses show up
                consistently, in the mailbox and online.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">What we believe</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl max-w-2xl">
              The principles behind every project.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-charcoal p-8 h-full">
                  <h3 className="text-paper text-lg">{v.title}</h3>
                  <p className="mt-3 text-sm text-mist leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
