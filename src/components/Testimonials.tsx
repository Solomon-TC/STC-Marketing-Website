import Reveal from "./Reveal";
import Stars from "./Stars";
import GlowCard from "./GlowCard";
import { SITE } from "@/lib/site";

/**
 * Website-focused reviews, quoted verbatim from Google. Ron Starr's review is
 * about The Newberg Spotlight, so it isn't shown on this website-only section.
 */
const REVIEWS = [
  {
    quote:
      "It's always a great experience working with the team at STC. They recently created a professional website for me that has helped position me at the top of my industry in my local area. More importantly, they took the time to understand my vision and bring it to life.",
    name: "Jack Chlumak",
  },
  {
    quote:
      "These guys did a great job. My website looks great and they had it done super fast.",
    name: "Jesse Robinson",
  },
  {
    quote:
      "Great people, with very nice personalities. I would recommend them to others business that are trying to start like me. Also they are always there, when I call them for any questions, plus great price.",
    name: "Moisés Sotelo",
  },
  {
    quote:
      "Love working with company, they always take care of you and put your best interest first. 5 stars!",
    name: "Daniel Muro",
  },
];

export default function Testimonials({ tone = "ink" }: { tone?: "ink" | "charcoal" }) {
  return (
    <section className={`${tone === "ink" ? "bg-ink" : "bg-charcoal"} border-t border-white/5 py-24 lg:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">Client reviews</span>
          <h2 className="font-display text-balance mt-4 max-w-2xl text-4xl text-paper sm:text-5xl">
            Real clients. Real results.
          </h2>

          <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-ink/60 py-2.5 pl-5 pr-4 transition-colors duration-300 hover:border-pine-light/40"
          >
            <Stars className="h-4 w-4" />
            <span className="text-sm text-paper">{SITE.rating.value} rating on Google</span>
            <span className="text-sm text-mist">&middot;</span>
            <span className="text-sm text-pine-light transition-colors duration-300 group-hover:text-paper">
              Read our reviews
            </span>
          </a>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.08}>
              <GlowCard>
                <figure className="flex h-full flex-col p-8 sm:p-10">
                  <Stars />
                  <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-fog">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 text-sm text-paper">
                    {review.name}
                    <span className="mt-1 block text-xs uppercase tracking-widest text-mist">
                      Google review
                    </span>
                  </figcaption>
                </figure>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
