import Reveal from "./Reveal";
import Stars from "./Stars";

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/STC+Marketing/@44.0236851,-125.8667041,6z/data=!4m8!3m7!1s0x86ff769f1c774309:0xae64d79979c4a35f!8m2!3d44.1455904!4d-120.5834015!9m1!1b1!16s%2Fg%2F11z9f7s66t?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D";

const REVIEWS = [
  {
    quote:
      "They have earned a customer based on their quality, communication and business practice. Very excited to work with them for the long term as well as recommend them to anyone I can.",
    name: "Ron Starr",
  },
  {
    quote:
      "Love working with company, they always take care of you and put your best interest first. 5 stars!",
    name: "Daniel Muro",
  },
  {
    quote:
      "It's always a great experience working with the team at STC. They recently created a professional website for me that has helped position me at the top of my industry in my local area. More importantly, they took the time to understand my vision and bring it to life.",
    name: "Jack Chlumak",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">Client reviews</span>
          <h2 className="font-display text-balance mt-4 text-4xl text-paper sm:text-5xl max-w-2xl">
            Oregon businesses, real results.
          </h2>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-charcoal py-2.5 pl-5 pr-4 transition-colors duration-300 hover:border-pine-light/40"
          >
            <Stars className="h-4 w-4" />
            <span className="text-sm text-paper">5.0 rating on Google</span>
            <span className="text-sm text-mist">·</span>
            <span className="text-sm text-pine-light group-hover:text-paper transition-colors duration-300">
              Read our reviews
            </span>
          </a>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.1}>
              <figure className="h-full rounded-2xl border border-white/10 bg-charcoal p-8 flex flex-col">
                <Stars />
                <blockquote className="mt-5 text-fog leading-relaxed flex-1">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-paper">
                  {review.name}
                  <span className="block text-xs uppercase tracking-widest text-mist mt-1">
                    Google review
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
