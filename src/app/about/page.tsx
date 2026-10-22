import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "About STC Marketing | Custom Web Design & Development",
  description:
    "STC Marketing is a web design company founded by brothers Silas and Solomon Capell. Based in Oregon, we design, build, and manage premium custom websites for businesses across the country.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Craft, not shortcuts",
    description:
      "Every site is designed and built from scratch. No templates, no page builders, no cut corners. If your name is on it, it should look like someone cared.",
  },
  {
    title: "Built to work, not just to look good",
    description:
      "A beautiful site that's slow, confusing, or disconnected from how you run your business isn't finished. Every build is fast, clear, and wired into the tools you use.",
  },
  {
    title: "We stay after launch",
    description:
      "A website isn't a one-time purchase. We host it, maintain it, and keep it improving, so it stays fast, secure, and current for years — not just on launch day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Two brothers building websites that
            <span className="text-tan italic"> actually work.</span>
          </>
        }
        description="Based in Oregon, STC Marketing designs, builds, and manages premium custom websites for businesses across the country."
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
                  We have a love for business, and STC Marketing is where we
                  combine our skills &mdash; Silas&apos;s business background
                  and Solomon&apos;s eye for design &mdash; to build websites
                  that help great companies look like the leaders they are.
                  What started with businesses in our hometown has grown into
                  work for clients across the country.
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
