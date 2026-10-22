export type City = {
  slug: string;
  name: string;
  county: string;
  region: "Yamhill County" | "Portland Metro" | "Willamette Valley";
  /** Used in <title> and meta description. Keep under ~155 chars when combined. */
  blurb: string;
  /** Two real paragraphs about doing business in this city. No filler. */
  intro: string[];
  /** The specific pitch angle that makes sense for this town. */
  angle: { heading: string; body: string };
  /** City-specific questions. Shared ones get appended at render time. */
  faqs: { q: string; a: string }[];
  /** Only set where real client work exists. */
  proof?: string;
};

export const CITIES: City[] = [
  {
    slug: "newberg",
    name: "Newberg",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Custom web design for Newberg, Oregon businesses — premium sites designed, built, and managed by the team that started here.",
    intro: [
      "Newberg is where STC Marketing started, and it's still home. Some of our first builds went live here, and we know firsthand how much business in this town starts with a referral and ends with a search.",
      "That search is the moment that matters. Someone hears your name, looks you up, and decides in a few seconds whether you're the real deal. A custom, fast, well-built site makes that decision easy.",
    ],
    angle: {
      heading: "Where referrals turn into searches.",
      body: "In a town where reputation travels fast, your website is where a recommendation either holds up or falls apart. We build sites that look as good as the work behind them, so the referral closes itself.",
    },
    proof:
      "We've built websites for Newberg businesses including Z&D Builders, Valley Boys Window & Gutter, Newberg Pet Cremation, All Starr Solutions, and Wholeheart Home.",
    faqs: [
      {
        q: "Do you work with businesses in Newberg, Oregon?",
        a: "Yes. Newberg is where STC Marketing started and where we're based. We've built websites for Newberg businesses including Z&D Builders, Valley Boys Window & Gutter, Newberg Pet Cremation, All Starr Solutions, and Wholeheart Home — and we work with clients across the country from here.",
      },
      {
        q: "Can I get on The Newberg Spotlight and get a website at the same time?",
        a: "Yes. The Newberg Spotlight puts your business in 5,000 Newberg mailboxes, and your website is where those people land when they look you up afterward. The two work better together than either does alone.",
      },
    ],
  },
  {
    slug: "dundee",
    name: "Dundee",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Custom web design for Dundee, Oregon businesses — wineries, tasting rooms, and service companies. Built from scratch and fully managed.",
    intro: [
      "Dundee punches far above its size. The Dundee Hills draw visitors from across the country, which means a lot of the people finding your business have never been to Oregon — and they're deciding where to go from a phone screen.",
      "For that audience, your website isn't confirming a reputation. It is the first impression. When someone is choosing between two tasting rooms from a hotel in Portland, the more polished, more useful site usually wins the visit.",
    ],
    angle: {
      heading: "Visitors decide before they arrive.",
      body: "Wine country traffic plans ahead — hours, photos, reservations, directions. A fast, beautifully designed site that answers those questions instantly, with booking built in, turns a browser into a guest.",
    },
    faqs: [
      {
        q: "Do you build websites for Dundee wineries and tasting rooms?",
        a: "Yes. Dundee is just down the road from our home base in Newberg. We design custom sites for wineries, tasting rooms, and service businesses — built from scratch, with reservations and booking tools wired in where they make sense.",
      },
    ],
  },
  {
    slug: "mcminnville",
    name: "McMinnville",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Custom websites for McMinnville, Oregon businesses — designed, built, hosted, and maintained. No templates, no guesswork.",
    intro: [
      "McMinnville is the largest city in Yamhill County and the most competitive place to do business in it. Third Street alone has more options per block than most towns have in total, and new residents arriving through Linfield and the wine industry are choosing providers from scratch.",
      "Those people pick by searching and comparing. When they have three tabs open, the business with the sharpest, fastest, most trustworthy site tends to get the call — even when everyone does good work.",
    ],
    angle: {
      heading: "When everyone's good, the details decide.",
      body: "In a crowded market, a premium site is a competitive edge you can see. Clean design, fast load times, and clear next steps make you the obvious choice before a prospect ever picks up the phone.",
    },
    faqs: [
      {
        q: "Do you work with McMinnville businesses?",
        a: "Yes. McMinnville is about fifteen minutes from our home base in Newberg. We handle design, build, hosting, and ongoing maintenance, so there's nothing technical for you to manage.",
      },
    ],
  },
  {
    slug: "lafayette",
    name: "Lafayette",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Custom web design for Lafayette, Oregon businesses — premium sites built and managed by a Yamhill County team.",
    intro: [
      "Lafayette sits right between Newberg and McMinnville on 99W, so most businesses here serve customers in both directions. Your real market is a lot bigger than the city limits.",
      "Your website is how you claim that market. Someone searching from McMinnville or Newberg has no way of knowing you cover their area — unless your site makes it obvious, and makes you look like the established choice while it's at it.",
    ],
    angle: {
      heading: "Your market is bigger than your town.",
      body: "Plenty of good businesses lose work to bigger-city competitors simply because nobody knew they served the area. A well-built site with clear service coverage and strong search signals fixes that.",
    },
    faqs: [
      {
        q: "Do you build websites for Lafayette businesses?",
        a: "Yes. Lafayette is minutes from our home base in Newberg. We design custom sites that make your full service area clear, and we manage hosting and updates after launch.",
      },
    ],
  },
  {
    slug: "carlton",
    name: "Carlton",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Custom web design for Carlton, Oregon businesses — built for a town that hosts visitors from all over the country.",
    intro: [
      "Carlton is small, but it draws steady wine-country traffic that has nothing to do with its population. In a downtown this compact, visitors are often choosing between places a two-minute walk apart.",
      "When the choice is that close, it usually comes down to what they found on their phone before they parked — hours, photos, what you offer, how to book. If that's hard to find, they walk into the place where it wasn't.",
    ],
    angle: {
      heading: "Small town, national audience.",
      body: "Your site is working for people looking at Carlton from three states away. It needs to introduce you to someone with zero context, make you look like the obvious stop, and do it in seconds.",
    },
    faqs: [
      {
        q: "Do you build websites for businesses in Carlton, Oregon?",
        a: "Yes. Carlton is about twenty minutes from our home base in Newberg. We design and build custom sites and handle hosting, updates, and support after launch.",
      },
    ],
  },
  {
    slug: "yamhill",
    name: "Yamhill",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Custom web design for Yamhill, Oregon businesses — a polished, professional site that makes you easy to find and easy to choose.",
    intro: [
      "Yamhill is a farming town, and most businesses here work well beyond the city limits — across the north end of the county and out toward the Coast Range. Customers spread over that much ground find services the same way everyone does now: by searching.",
      "That makes your website your best salesperson across a wide territory. It should look as professional as the work you do, load fast on a phone with spotty signal, and make it effortless to call or request a quote.",
    ],
    angle: {
      heading: "Look established across a wide territory.",
      body: "When customers are spread out, they can't stop by to size you up. Your website does that job for you — and a well-designed one tells them you're the serious, reliable choice.",
    },
    faqs: [
      {
        q: "Do you work with businesses in Yamhill?",
        a: "Yes. We build custom sites for businesses across Yamhill County, from owner-operators to growing teams. Every site is designed, hosted, and maintained by us, so the technical side is handled.",
      },
    ],
  },
  {
    slug: "sherwood",
    name: "Sherwood",
    county: "Washington County",
    region: "Portland Metro",
    blurb:
      "Custom web design for Sherwood, Oregon businesses — premium sites built, hosted, and managed, just up 99W from our Newberg base.",
    intro: [
      "Sherwood is the closest Portland-metro city to our home base and one of the fastest-growing. Old Town still has its character, but the neighborhoods around it are full of people who moved in recently and haven't picked their go-to anything yet.",
      "Those households choose by searching and comparing. A business with a modern, professional site gets shortlisted. One without gets skipped quietly — and you never find out it happened.",
    ],
    angle: {
      heading: "A growing market that's still choosing.",
      body: "Fast-growing suburbs are the best market there is for a great website, because so many customers have no existing loyalty. They're choosing from scratch, and they're choosing based on what they find online.",
    },
    faqs: [
      {
        q: "Do you serve Sherwood and the Portland metro?",
        a: "Yes. Sherwood is the closest metro city to our home base in Newberg, and we already work with clients across the Portland metro. We handle design, build, hosting, and ongoing management.",
      },
    ],
  },
  {
    slug: "tigard",
    name: "Tigard",
    county: "Washington County",
    region: "Portland Metro",
    blurb:
      "Custom web design for Tigard, Oregon businesses — sites built to stand out in a crowded Portland-metro market.",
    intro: [
      "Tigard is dense, competitive, and full of businesses chasing the same searches. Between the 217 corridor and Washington Square, most categories have a dozen credible options — and plenty of them are spending real money on marketing.",
      "You don't win that by outspending them. You win by having a site that's visibly better made — faster, clearer, more polished — and by being direct about what you do while everyone else hides behind vague language.",
    ],
    angle: {
      heading: "Standing out in a crowded market.",
      body: "In a market this saturated, a template site works against you: it looks like the four other template sites the customer just clicked through. A custom build reads as a serious business before anyone reads a word.",
    },
    faqs: [
      {
        q: "Can my Tigard business compete online with bigger companies?",
        a: "Yes — not by outspending them, but by out-building them. A fast, genuinely custom site with strong search fundamentals will out-convert a bigger competitor running a generic template, because visitors judge credibility in the first few seconds.",
      },
    ],
  },
  {
    slug: "tualatin",
    name: "Tualatin",
    county: "Washington County",
    region: "Portland Metro",
    blurb:
      "Custom websites for Tualatin, Oregon businesses — designed, built, hosted, and maintained for residential and commercial clients alike.",
    intro: [
      "Tualatin runs on a mix of commercial, industrial, and residential work along the I-5 corridor, so many businesses here serve two very different audiences — homeowners and other businesses — who want completely different things from a website.",
      "Homeowners want proof you're trustworthy and available. Commercial clients want proof you can deliver at scale and won't disappear mid-project. A site that tries to say both at once usually says neither. Getting that structure right is most of the work.",
    ],
    angle: {
      heading: "Two audiences, one site.",
      body: "If you serve both residential and commercial clients, your site has to guide each one to what they need without muddling either. That's an architecture problem, and it's worth solving before anyone picks colors.",
    },
    faqs: [
      {
        q: "Do you build websites for both residential and commercial businesses?",
        a: "Yes. If you serve both, we structure the site so each audience finds what it needs fast, instead of pushing homeowners and commercial clients through the same generic pitch.",
      },
    ],
  },
  {
    slug: "wilsonville",
    name: "Wilsonville",
    county: "Clackamas County",
    region: "Portland Metro",
    blurb:
      "Custom web design for Wilsonville, Oregon businesses — premium sites built, professionally hosted, and actively maintained.",
    intro: [
      "Wilsonville sits on I-5 with a real mix of corporate campuses and service businesses. That sets a professional baseline: people here spend their workdays around polished software and serious websites, and they hold everyone else to the same standard.",
      "It's a higher bar than most markets, and plenty of businesses miss it without realizing. Looking dated costs you more here than almost anywhere else.",
    ],
    angle: {
      heading: "A market that expects polish.",
      body: "When your customers live in well-made software all day, an outdated site stands out immediately. Meeting that standard isn't vanity — it's the price of being taken seriously.",
    },
    faqs: [
      {
        q: "Do you work with Wilsonville businesses?",
        a: "Yes. Wilsonville is well within our home region, and we already have clients across the Portland metro. We build the site, host it, keep it secure and current, and support it after launch.",
      },
    ],
  },
  {
    slug: "lake-oswego",
    name: "Lake Oswego",
    county: "Clackamas County",
    region: "Portland Metro",
    blurb:
      "High-end custom web design for Lake Oswego, Oregon businesses — built from scratch, never templated.",
    intro: [
      "Lake Oswego customers have options and are used to paying for quality. That cuts both ways: people here will invest in great work, but they're quick to dismiss anything that looks cheap.",
      "Your website is usually where that judgment happens, and it happens fast — before anyone reads your credentials or your reviews. A site that looks like it cost nothing suggests the work might too.",
    ],
    angle: {
      heading: "The site has to match the work.",
      body: "If you do premium work at premium prices, a generic template undercuts you before you ever quote. Your site should look like it belongs to exactly the kind of business you are.",
    },
    faqs: [
      {
        q: "Do you build high-end websites for Lake Oswego businesses?",
        a: "Yes. Every site we build is custom designed from scratch, which matters most in markets like Lake Oswego where customers are judging quality before they ever call.",
      },
    ],
  },
  {
    slug: "beaverton",
    name: "Beaverton",
    county: "Washington County",
    region: "Portland Metro",
    blurb:
      "Custom web design for Beaverton, Oregon businesses — fast, mobile-first sites built to rank and managed for you.",
    intro: [
      "Beaverton is one of the largest and most diverse cities in the state, and its business landscape reflects that. It also means the search competition is real — in most categories you're up against a long list of established names.",
      "Ranking here takes more than existing. It takes a site that's technically sound, genuinely fast, structured so search engines can read it, and clear about where you work. We build all of that in from the start rather than bolting it on later.",
    ],
    angle: {
      heading: "Big city, real competition.",
      body: "In a market this size, technical fundamentals stop being optional. Load speed, mobile layout, structure, and strong search signals separate the businesses that show up from the ones that don't.",
    },
    faqs: [
      {
        q: "Can you help my Beaverton business show up in search?",
        a: "That's built into every site we do — proper heading structure, real meta tags, structured data, fast load times, and mobile-first layouts. Search performance is part of the build, not an add-on.",
      },
    ],
  },
  {
    slug: "hillsboro",
    name: "Hillsboro",
    county: "Washington County",
    region: "Portland Metro",
    blurb:
      "Custom web design for Hillsboro, Oregon businesses — sites built to a technical standard, then hosted and maintained.",
    intro: [
      "Hillsboro pairs a major tech presence with a deep base of trades and service businesses, which makes for an unusually demanding audience. A lot of your customers work in software and notice immediately when a site is slow or broken on their phone.",
      "The trades here stay busy, and the businesses that land the best jobs tend to be the ones that look most credible before the first call. In a town that can tell the difference, a fast, well-engineered site is a real advantage.",
    ],
    angle: {
      heading: "An audience that notices the details.",
      body: "Slow pages and broken mobile layouts register with this crowd whether or not they could name the problem. Building it properly the first time is cheaper than losing jobs you never knew you were up for.",
    },
    faqs: [
      {
        q: "Do you serve Hillsboro and Washington County?",
        a: "Yes. We serve Hillsboro, Beaverton, Tigard, Tualatin, Sherwood, and the rest of the Portland metro, and we work with clients across the country from our base in Oregon.",
      },
    ],
  },
  {
    slug: "corvallis",
    name: "Corvallis",
    county: "Benton County",
    region: "Willamette Valley",
    blurb:
      "Custom web design for Corvallis, Oregon businesses — built, hosted, and managed, with clients already in the area.",
    intro: [
      "Corvallis has a constantly refreshing population thanks to Oregon State, so every year a meaningful share of your potential customers are people who just arrived and have no established plumber, dentist, gutter company, or contractor.",
      "They find services by searching, and they trust what they find. That's a real, recurring opportunity — but only if your business is easy to find and impressive when they land on it.",
    ],
    angle: {
      heading: "A new set of customers every year.",
      body: "In most towns the customer base turns over slowly. In Corvallis it refreshes constantly, which rewards businesses with a strong online presence far more than businesses relying on word of mouth alone.",
    },
    proof:
      "We built and manage the site for Well Hung Gutters, a gutter installation and cleaning company serving the Corvallis area.",
    faqs: [
      {
        q: "Do you have clients in the Corvallis area?",
        a: "Yes. We built and manage the website for Well Hung Gutters, a gutter installation and cleaning company based in nearby Philomath.",
      },
    ],
  },
];

/** Questions that apply everywhere, appended after the city-specific ones. */
export const SHARED_FAQS = (city: string) => [
  {
    q: `What's included in a website for a ${city} business?`,
    a: "Every build includes custom design with no templates, mobile-first responsive layouts, fast load times, integrations with the tools you use, on-page SEO and structured data, hosting and domain management, security and software updates, and ongoing support after launch.",
  },
  {
    q: "Do you use website templates?",
    a: "No. Every site is designed from scratch around your brand. Templates are the fastest way to look like every other business in your category, which is the opposite of what a website is supposed to do for you.",
  },
  {
    q: "Can you connect my site to the tools I already use?",
    a: "Yes. We integrate with tools like Jobber for scheduling and client management and OpenTable for reservations, route lead forms straight to your inbox, and add Google reviews and analytics. If you need something custom, we build it.",
  },
  {
    q: "Do you handle hosting and maintenance, or just build the site?",
    a: "Both. We design and build the site, then handle hosting, domain management, security, and software updates after launch. You don't have to manage any of the technical side or think about it again.",
  },
  {
    q: "Do you only work with businesses in Oregon?",
    a: "No. We're based in Oregon and build websites for clients across the country. The whole process runs remotely, so where you are doesn't limit what we can build.",
  },
  {
    q: "How do I get started?",
    a: "Send us a message through the contact form with a bit about your business and what you're after. We read every message and respond within one business day.",
  },
];

export function getCity(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}
