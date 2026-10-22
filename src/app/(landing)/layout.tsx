import Image from "next/image";
import Link from "next/link";
import MetaPixel from "@/components/MetaPixel";
import Stars from "@/components/Stars";
import { SITE } from "@/lib/site";

/**
 * Stripped-down chrome for paid-traffic landing pages: no site navigation, so
 * the only way forward is the form. Legal links stay, since ad platforms
 * require a visible privacy policy on pages that collect leads.
 */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaPixel />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/75 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <Image src="/images/stc-logo.png" alt="STC Marketing logo" width={30} height={30} priority />
            <span className="font-display text-lg tracking-wide text-paper">
              STC <span className="text-pine-light">Marketing</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            {/* Opens in a new tab so checking the reviews doesn't lose the page. */}
            <a
              href={SITE.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Rated ${SITE.rating.value} out of 5 on Google — read our reviews`}
              className="group flex items-center gap-2"
            >
              <Stars className="h-3.5 w-3.5" />
              <span className="text-xs text-fog transition-colors duration-300 group-hover:text-paper">
                {SITE.rating.value}
                <span className="hidden sm:inline"> on Google</span>
              </span>
            </a>
            <a
              href="#book"
              className="hidden shrink-0 rounded-full border border-pine-light/60 px-5 py-2 text-sm uppercase tracking-wide text-pine-light transition-colors duration-300 hover:bg-pine-light hover:text-ink sm:inline-flex"
            >
              Book a call
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-white/10 bg-charcoal">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-mist sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>&copy; {new Date().getFullYear()} STC Marketing. Based in Newberg, Oregon.</span>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-pine-light">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-pine-light">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
