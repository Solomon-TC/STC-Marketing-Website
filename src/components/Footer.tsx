import Link from "next/link";
import Image from "next/image";
import { CITIES } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/stc-logo.png"
              alt="STC Marketing logo"
              width={32}
              height={32}
              className="opacity-90"
            />
            <span className="font-display text-lg text-paper">
              STC <span className="text-pine-light">Marketing</span>
            </span>
          </div>
          <p className="text-sm text-mist leading-relaxed max-w-xs">
            Custom websites for local businesses across the country. Designed,
            built, hosted, and managed so you get found.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-fog mb-4">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-mist">
            <li>
              <Link href="/website-design" className="hover:text-pine-light transition-colors">
                Websites
              </Link>
            </li>
            <li>
              <Link href="/the-spotlights" className="hover:text-pine-light transition-colors">
                The Spotlights
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-fog mb-4">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-mist">
            <li>
              <Link href="/about" className="hover:text-pine-light transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pine-light transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-fog mb-4">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm text-mist">
            <li>
              <a href="mailto:stcmarketingco@gmail.com" className="hover:text-pine-light transition-colors">
                stcmarketingco@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+15038080452" className="hover:text-pine-light transition-colors">
                (503) 808-0452
              </a>
            </li>
            <li className="text-mist">Serving local businesses nationwide</li>
          </ul>
        </div>
      </div>

      {/* Service areas — sitewide internal links to city landing pages */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
          <h4 className="text-xs uppercase tracking-widest text-fog mb-4">
            Web design by city
          </h4>
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {CITIES.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/website-design/${city.slug}`}
                  className="text-sm text-mist hover:text-pine-light transition-colors"
                >
                  Web design in {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-mist">
          <span>&copy; {new Date().getFullYear()} STC Marketing. All rights reserved.</span>
          <span>Built for local business.</span>
        </div>
      </div>
    </footer>
  );
}
