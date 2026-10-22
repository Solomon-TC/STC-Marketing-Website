import Reveal from "./Reveal";
import GlowCard from "./GlowCard";

/** Only tools we've actually integrated, or are actively offering. */
const TOOLS = ["Jobber", "OpenTable", "Resend", "Google Reviews", "Analytics"];

const CATEGORIES = [
  {
    title: "Booking & scheduling",
    body: "Let customers request a quote, book a job, or reserve a table straight from your site — through Jobber for service businesses or OpenTable for restaurants.",
  },
  {
    title: "Lead forms & email",
    body: "Contact and quote forms that land in your inbox reliably, with the details you need to follow up fast.",
  },
  {
    title: "Reviews & analytics",
    body: "Your Google reviews shown where they build trust, plus analytics so you can see what's actually bringing in business.",
  },
  {
    title: "Custom features",
    body: "Client logins, audio and media players, before-and-after sliders, interactive tools — built around how your business actually works.",
  },
];

export default function Integrations({ tone = "ink" }: { tone?: "ink" | "charcoal" }) {
  return (
    <section className={`${tone === "ink" ? "bg-ink" : "bg-charcoal"} border-t border-white/5 py-24 lg:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">Integrations</span>
            <h2 className="font-display text-balance mt-4 text-4xl text-paper sm:text-5xl">
              Connected to the tools you run on.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-fog">
              A great website shouldn&apos;t be an island. We wire your site into
              the software behind your business, so bookings, leads, and
              reviews flow exactly where they need to go.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {TOOLS.map((tool) => (
              <li
                key={tool}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-paper"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-pine-light" />
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={0.1 + i * 0.08}>
              <GlowCard>
                <div className="p-8">
                  <span className="font-display text-sm text-mist">0{i + 1}</span>
                  <h3 className="mt-5 text-lg text-paper">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{c.body}</p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
