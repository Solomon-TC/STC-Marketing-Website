export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  description: string;
  url: string;
  /** Link label. Sites without their own domain yet get a friendlier label. */
  display: string;
};

/**
 * Single source of truth for client website work.
 * Used by the websites-page portfolio grid and the homepage carousel.
 */
export const WEBSITE_PROJECTS: Project[] = [
  {
    slug: "zd-builders",
    name: "Z&D Builders",
    category: "Roofing & Remodeling",
    location: "Newberg, OR",
    description:
      "Licensed, insured, and locally owned — full roof replacements through the siding, gutters, and paint that finish the job.",
    url: "https://zanddbuilders.com",
    display: "zanddbuilders.com",
  },
  {
    slug: "valley-boys",
    name: "Valley Boys Window & Gutter",
    category: "Exterior Cleaning",
    location: "Newberg, OR",
    description:
      "Window cleaning, roof care, gutter maintenance, and pressure washing across the Willamette and Rogue Valley.",
    url: "https://valleyboyswindows.com",
    display: "valleyboyswindows.com",
  },
  {
    slug: "pdx-construction",
    name: "PDX Construction Solutions",
    category: "Remodeling & Construction",
    location: "Portland, OR",
    description:
      "Remodeling, drywall, painting, siding, and hardscape for homes and businesses around Portland.",
    url: "https://pdxconstructionsolutions.com",
    display: "pdxconstructionsolutions.com",
  },
  {
    slug: "allstarr-solutions",
    name: "All Starr Solutions",
    category: "Hauling & Junk Removal",
    location: "Newberg, OR",
    description:
      "Heavy hauling and junk removal — the jobs other haulers turn down, with the phone answered 24 hours a day.",
    url: "https://allstarrsolutions.net",
    display: "allstarrsolutions.net",
  },
  {
    slug: "whole-heart-home",
    name: "Wholeheart Home",
    category: "House Cleaning",
    location: "Newberg, OR",
    description:
      "Detail-first house cleaning — standard, deep, and move-in/move-out cleans for Newberg and the surrounding area.",
    url: "https://wholehearthomellc.com",
    display: "wholehearthomellc.com",
  },
  {
    slug: "well-hung-gutters",
    name: "Well Hung Gutters",
    category: "Gutter Installation & Cleaning",
    location: "Philomath, OR",
    description:
      "Seamless gutter installation, gutter cleaning, roof cleaning, and solar panel cleaning for Willamette Valley homes.",
    url: "https://well-hung-gutters.vercel.app/",
    display: "View live site",
  },
  {
    slug: "pacific-crematory",
    name: "Pacific Crematory",
    category: "Cremation Equipment",
    location: "Oregon",
    description:
      "Oregon-built cold-hearth cremation equipment sold to funeral homes, crematories, and veterinary providers nationwide.",
    url: "https://pacificcrematory.com",
    display: "pacificcrematory.com",
  },
  {
    slug: "david-spatola",
    name: "David Spatola Entertainment",
    category: "Pianist, Vocalist & DJ",
    location: "NJ, NY & PA",
    description:
      "Twenty-five years of live piano and vocals for weddings, corporate parties, and open houses across the tri-state area.",
    url: "https://www.davidspatolaentertainment.com",
    display: "davidspatolaentertainment.com",
  },
];

export function projectImage(slug: string) {
  return `/images/portfolio/${slug}.webp`;
}
