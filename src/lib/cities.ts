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
      "Custom web design for Newberg, Oregon businesses. Built, hosted, and managed by a local team — no templates.",
    intro: [
      "Newberg is where STC Marketing started. It's where we run The Newberg Spotlight, and it's where a lot of our first websites went live. We know the businesses on First Street, we know how much of this town's work comes from word of mouth, and we know that word of mouth now ends with somebody looking you up on their phone.",
      "That last step is where most Newberg businesses lose the job. You get recommended, they search your name, and they find a site that hasn't been touched in six years — or no site at all. We build the page that closes that gap.",
    ],
    angle: {
      heading: "A town that runs on reputation.",
      body: "Newberg is small enough that your reputation travels fast, and big enough that new people move in every year who've never heard of you. A good website works for both — it confirms what your neighbors already said about you, and it introduces you to everyone who just got here.",
    },
    proof:
      "We've built and manage sites for Newberg businesses including Z&D Builders and Valley Boy's Window & Gutter.",
    faqs: [
      {
        q: "Do you work with businesses based in Newberg, Oregon?",
        a: "Yes. Newberg is our home base — it's where STC Marketing started and where we run The Newberg Spotlight direct mail postcard. We've built and currently manage websites for Newberg businesses including Z&D Builders and Valley Boy's Window & Gutter.",
      },
      {
        q: "Can I get on The Newberg Spotlight and get a website at the same time?",
        a: "Yes, and a lot of businesses do both. The Spotlight puts you in 5,000 Newberg mailboxes, and the website is where those people land when they look you up afterward. They work better together than either does alone.",
      },
    ],
  },
  {
    slug: "dundee",
    name: "Dundee",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Web design for Dundee, Oregon businesses — tasting rooms, trades, and local services. Custom built and fully managed.",
    intro: [
      "Dundee is a few minutes down 99W from us, and it punches well above its size. The Dundee Hills bring in visitors from all over the country, which means a lot of businesses here are being found by people who have never set foot in Oregon before.",
      "That changes what your website has to do. It isn't just confirming your reputation for locals — for a good share of your traffic, it *is* the first impression. If someone is deciding between two tasting rooms or two contractors from a hotel room in Portland, the better site usually wins.",
    ],
    angle: {
      heading: "Visitors decide before they arrive.",
      body: "Wine country traffic plans ahead. People look up hours, photos, and directions before they ever get in the car. A site that loads fast on a phone and answers those questions immediately turns a browser into someone standing at your door.",
    },
    faqs: [
      {
        q: "Do you build websites for Dundee wineries and tasting rooms?",
        a: "Yes. Dundee is a few minutes from our home base in Newberg. We build custom sites for any local business in the area — tasting rooms, trades, and service businesses alike. Every site is designed from scratch rather than dropped into a template.",
      },
    ],
  },
  {
    slug: "mcminnville",
    name: "McMinnville",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Custom websites for McMinnville, Oregon businesses. Designed, built, hosted, and maintained — no templates, no guesswork.",
    intro: [
      "McMinnville is the biggest city in Yamhill County and the busiest place to be a local business in it. Third Street alone has more competition per block than most towns have total, and there's a steady stream of new arrivals through Linfield and the wine industry who don't have a regular plumber, dentist, or contractor yet.",
      "Those people pick by searching. Not by asking a neighbor — they don't have one yet. That makes your website and your search presence the difference between getting called and getting skipped, and it's why a real site matters more here than in the smaller towns around it.",
    ],
    angle: {
      heading: "More competition means the details matter.",
      body: "In a town this size you're rarely the only option. When someone has three tabs open comparing you to two competitors, the business with the clearer, faster, better-looking site tends to get the call — even when all three do equally good work.",
    },
    faqs: [
      {
        q: "Do you work with McMinnville businesses?",
        a: "Yes. McMinnville is about fifteen minutes from our home base in Newberg, and it's one of the main markets we serve. We handle the design, build, hosting, and ongoing maintenance so you aren't managing any of it yourself.",
      },
    ],
  },
  {
    slug: "lafayette",
    name: "Lafayette",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Web design for Lafayette, Oregon businesses. A custom site built and managed by a local Yamhill County team.",
    intro: [
      "Lafayette sits right between Newberg and McMinnville on 99W, which means a lot of businesses here serve customers in both directions. Your actual service area is usually much bigger than the town itself.",
      "A website is how you make that legible. Someone searching in McMinnville has no way of knowing you're ten minutes away and happy to drive out — unless your site says so plainly. That's a small fix that opens up a lot of jobs.",
    ],
    angle: {
      heading: "Your service area is wider than your town.",
      body: "Small-town businesses routinely lose work to competitors in bigger cities simply because nobody knew they covered the area. Saying exactly where you work, in plain language, on a page built to be found, fixes that.",
    },
    faqs: [
      {
        q: "Is it worth having a website for a small Lafayette business?",
        a: "Yes — often more than for a business in a bigger city. If you serve customers in McMinnville and Newberg as well as Lafayette, your site is the main way people outside your town find out you cover their area at all.",
      },
    ],
  },
  {
    slug: "carlton",
    name: "Carlton",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Custom web design for Carlton, Oregon businesses. Built for a town that gets a lot of out-of-town visitors.",
    intro: [
      "Carlton is small, but it draws steady wine country traffic that has nothing to do with how many people live here. A downtown this compact means visitors are deciding between businesses that are all within a two-minute walk of each other.",
      "When the choice is that close, the deciding factor is usually whatever they found on their phone before they parked. Hours, photos, what you actually offer — if that's hard to find, they walk into the place where it wasn't.",
    ],
    angle: {
      heading: "Small town, national audience.",
      body: "Your website is doing work for people who are looking at Carlton from three states away. It has to explain who you are to someone with no local context at all, and do it in the few seconds before they scroll on.",
    },
    faqs: [
      {
        q: "Do you build websites for businesses in Carlton, Oregon?",
        a: "Yes. Carlton is about twenty minutes from our home base in Newberg. We build custom sites for local businesses there and handle hosting, updates, and support after launch.",
      },
    ],
  },
  {
    slug: "yamhill",
    name: "Yamhill",
    county: "Yamhill County",
    region: "Yamhill County",
    blurb:
      "Web design for Yamhill, Oregon businesses. A straightforward, custom-built site that makes you easy to find.",
    intro: [
      "Yamhill is a small farming town, and most businesses here work well beyond the city limits. Your customers are spread across the north end of the county and out toward the coast range, and a lot of them are finding services the same way everyone else does now — by searching.",
      "You don't need anything elaborate. You need a site that loads fast, says clearly what you do and where you'll travel, and gives someone an obvious way to call you.",
    ],
    angle: {
      heading: "Simple, fast, and easy to find.",
      body: "Not every business needs a big website. Most need a small, honest one that answers the three questions people actually have — what you do, where you work, how to reach you — without making them dig for it.",
    },
    faqs: [
      {
        q: "Do you take on small businesses in Yamhill?",
        a: "Yes. We work with businesses of all sizes across Yamhill County, including one-person operations. Every site is custom built, hosted, and maintained by us so you don't have to manage any of the technical side.",
      },
    ],
  },
  {
    slug: "sherwood",
    name: "Sherwood",
    county: "Washington County",
    region: "Portland Metro",
    blurb:
      "Custom web design for Sherwood, Oregon businesses. Built, hosted, and managed — serving the Portland metro from nearby Newberg.",
    intro: [
      "Sherwood is the closest Portland metro city to us — a short run up 99W from Newberg — and it's grown fast. Old Town still has the small-town feel, but the neighborhoods around it are full of people who moved in recently and have no established go-to for anything yet.",
      "Those households pick services by searching, and they compare before they call. A business with a current, professional site gets shortlisted. One without gets skipped quietly, and you never find out it happened.",
    ],
    angle: {
      heading: "A lot of new neighbors with no go-to yet.",
      body: "Growing suburbs are the best possible market for a good website, because a large share of your potential customers have no existing loyalty. They're choosing from scratch, and they're choosing based on what they can find.",
    },
    faqs: [
      {
        q: "Do you serve Sherwood and the Portland metro area?",
        a: "Yes. Sherwood is the closest metro city to our home base in Newberg, and we already work with clients in the Portland metro area. We handle the design, build, hosting, and ongoing management.",
      },
    ],
  },
  {
    slug: "tigard",
    name: "Tigard",
    county: "Washington County",
    region: "Portland Metro",
    blurb:
      "Web design for Tigard, Oregon businesses. Custom sites built to compete in a crowded Portland metro market.",
    intro: [
      "Tigard is dense, competitive, and full of businesses fighting for the same searches. Between the 217 corridor and the Washington Square area, most service categories here have a dozen credible options, and plenty of them are spending real money on marketing.",
      "You don't beat that by spending more. You beat it by having a site that's obviously better made than the competition's — faster, clearer, and built by someone who cared — and by being straightforward about what you do while everyone else hides behind vague language.",
    ],
    angle: {
      heading: "Standing out in a crowded market.",
      body: "In a market this saturated, a template site actively works against you, because it looks like the four other template sites the customer just clicked through. Something built from scratch reads as a real business before anyone reads a word.",
    },
    faqs: [
      {
        q: "Can a small business in Tigard compete online with bigger companies?",
        a: "Yes, but not by trying to outspend them. A well-built, fast, genuinely custom site plus clear local search signals will out-convert a bigger competitor running a generic template, because visitors judge credibility in the first few seconds and templates read as generic.",
      },
    ],
  },
  {
    slug: "tualatin",
    name: "Tualatin",
    county: "Washington County",
    region: "Portland Metro",
    blurb:
      "Custom websites for Tualatin, Oregon businesses. Designed, built, hosted, and maintained by an Oregon team.",
    intro: [
      "Tualatin runs on a mix of commercial, industrial, and residential work along the I-5 corridor, so businesses here often serve two very different kinds of customers — homeowners and other businesses — and those two groups want completely different things from a website.",
      "Homeowners want to know you're trustworthy and available. Commercial clients want to know you're capable at scale and won't disappear mid-project. A site that tries to say both things at once usually says neither. Getting that structure right is most of the work.",
    ],
    angle: {
      heading: "Two audiences, one site.",
      body: "If you do both residential and commercial work, your site has to serve both without muddling either. That's a structural problem, not a design problem, and it's the kind of thing worth thinking through before anyone picks colors.",
    },
    faqs: [
      {
        q: "Do you build websites for both residential and commercial businesses in Tualatin?",
        a: "Yes. If you serve both, we structure the site so each audience finds what it needs quickly rather than forcing homeowners and commercial clients through the same generic pitch.",
      },
    ],
  },
  {
    slug: "wilsonville",
    name: "Wilsonville",
    county: "Clackamas County",
    region: "Portland Metro",
    blurb:
      "Web design for Wilsonville, Oregon businesses. Custom built, professionally hosted, and actively maintained.",
    intro: [
      "Wilsonville sits right on I-5 with a real mix of corporate campuses and local service businesses. That gives it a professional baseline — people here work at companies with serious websites, and they unconsciously hold local businesses to a similar standard.",
      "That's a higher bar than in a smaller town, and it's a bar a lot of local businesses fail without realizing it. Looking dated here costs you more than it would somewhere else.",
    ],
    angle: {
      heading: "A market that expects a professional standard.",
      body: "When your customers spend their workdays around well-made software and polished corporate sites, an outdated page stands out immediately. Meeting that expectation isn't vanity — it's the price of being taken seriously.",
    },
    faqs: [
      {
        q: "Do you work with Wilsonville businesses?",
        a: "Yes. Wilsonville is well within our service area and we already have clients in the Portland metro. We build the site, host it, keep it updated and secure, and support it after launch.",
      },
    ],
  },
  {
    slug: "lake-oswego",
    name: "Lake Oswego",
    county: "Clackamas County",
    region: "Portland Metro",
    blurb:
      "High-end custom web design for Lake Oswego, Oregon businesses. Built from scratch, never templated.",
    intro: [
      "Lake Oswego customers have options and are used to paying for quality. That cuts both ways for a local business: people here will spend money on good work, but they're quick to write off anything that looks cheap.",
      "Your website is usually the first place that judgment happens, and it happens fast — before anyone reads your credentials or your reviews. A site that looks like it cost nothing suggests the work might too.",
    ],
    angle: {
      heading: "The site has to match the work.",
      body: "If you do premium work at premium prices, a generic template undercuts you before you ever quote. The site should look like it belongs to the kind of business you actually are.",
    },
    faqs: [
      {
        q: "Do you build high-end websites for Lake Oswego businesses?",
        a: "Yes. Every site we build is custom designed rather than assembled from a template, which matters most in markets like Lake Oswego where customers are actively judging quality before they call.",
      },
    ],
  },
  {
    slug: "beaverton",
    name: "Beaverton",
    county: "Washington County",
    region: "Portland Metro",
    blurb:
      "Custom web design for Beaverton, Oregon businesses. Fast, mobile-first sites built and managed for you.",
    intro: [
      "Beaverton is one of the largest and most diverse cities in the state, and the range of local businesses reflects that. It also means the search competition is real — for most service categories you're up against a long list of established names.",
      "Ranking here takes more than existing. It takes a site that's technically sound, genuinely fast, structured so search engines can read it, and specific about the neighborhoods you actually serve. We build all of that in from the start rather than bolting it on later.",
    ],
    angle: {
      heading: "Big city, real competition.",
      body: "In a market this size, the technical fundamentals stop being optional. Load speed, mobile layout, heading structure, and clear local signals are what separate the businesses that show up from the ones that don't.",
    },
    faqs: [
      {
        q: "Can you help my Beaverton business show up in local search?",
        a: "That's built into every site we do — proper heading structure, real meta tags, fast load times, mobile-first layouts, and clear signals about the areas you serve. We're an Oregon team and we build for Oregon local search specifically.",
      },
    ],
  },
  {
    slug: "hillsboro",
    name: "Hillsboro",
    county: "Washington County",
    region: "Portland Metro",
    blurb:
      "Web design for Hillsboro, Oregon businesses. Custom sites built to a technical standard, hosted and maintained.",
    intro: [
      "Hillsboro has a strong tech presence alongside a deep base of trades and local services, which makes for an unusually demanding audience. A meaningful share of your customers work in software and notice immediately when a site is slow or broken on their phone.",
      "It also means the trades here stay busy, and the businesses that win the best jobs tend to be the ones that look most credible before the first phone call. A fast, well-built site is a competitive advantage in a town where people can tell the difference.",
    ],
    angle: {
      heading: "An audience that notices the details.",
      body: "Slow load times and broken mobile layouts register with this crowd whether or not they could name the problem. Building it properly the first time is cheaper than losing jobs you never knew you were in the running for.",
    },
    faqs: [
      {
        q: "Do you serve Hillsboro and the greater Washington County area?",
        a: "Yes. We serve Hillsboro, Beaverton, Tigard, Tualatin, Sherwood, and the rest of the Portland metro from our base in Newberg, and we already have clients in the metro area.",
      },
    ],
  },
  {
    slug: "corvallis",
    name: "Corvallis",
    county: "Benton County",
    region: "Willamette Valley",
    blurb:
      "Custom web design for Corvallis, Oregon businesses. Built, hosted, and managed — with local clients already on the books.",
    intro: [
      "Corvallis has a constantly refreshing population thanks to Oregon State, which means a meaningful slice of your potential customers every year are people who arrived recently and have no established plumber, dentist, gutter company, or contractor.",
      "Those people find services by searching, and they trust what they find. That's a real, recurring opportunity — but only if your business is actually findable when they look.",
    ],
    angle: {
      heading: "A new set of customers every year.",
      body: "In most towns your customer base turns over slowly. In Corvallis it refreshes constantly, which rewards businesses that are easy to find online far more than businesses relying purely on long-standing word of mouth.",
    },
    proof:
      "We built and manage the site for Well Hung Gutters, a gutter installation and maintenance company serving Corvallis.",
    faqs: [
      {
        q: "Do you have clients in Corvallis?",
        a: "Yes. We built and manage the website for Well Hung Gutters, a gutter installation and maintenance company serving the Corvallis area.",
      },
    ],
  },
];

/** Questions that apply everywhere, appended after the city-specific ones. */
export const SHARED_FAQS = (city: string) => [
  {
    q: `What does STC Marketing include in a website for a ${city} business?`,
    a: "Every build includes custom design with no templates, mobile-first responsive layouts, fast load times, on-page SEO and real meta tags, hosting and domain management, security and software updates, and ongoing support after launch.",
  },
  {
    q: "Do you use website templates?",
    a: "No. Every site is designed from scratch around your brand. Templates are the fastest way to look like every other business in your category, which is the opposite of what a website is supposed to do for you.",
  },
  {
    q: "Do you handle hosting and maintenance, or just build the site?",
    a: "Both. We design and build the site, then handle hosting, domain management, security, and software updates after launch. You don't have to manage any of the technical side or think about it again.",
  },
  {
    q: `Is The Spotlights direct mail postcard available in ${city}?`,
    a:
      city === "Newberg"
        ? "Yes. The Newberg Spotlight is our shared 9x12\" postcard mailed to 5,000 Newberg households, with one business per industry on each card."
        : `The Spotlights currently runs in Newberg only. Website design, hosting, and management are available throughout Oregon, including ${city}.`,
  },
  {
    q: "How do I get started?",
    a: "Send us a message through the contact form with a bit about your business and what you're after. We read every message and respond within one business day.",
  },
];

export function getCity(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}

export const CITIES_BY_REGION = CITIES.reduce<Record<string, City[]>>((acc, city) => {
  (acc[city.region] ??= []).push(city);
  return acc;
}, {});
