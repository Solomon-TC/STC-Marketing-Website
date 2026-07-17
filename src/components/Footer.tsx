import Link from "next/link";
import Image from "next/image";

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
            Local advertising for Oregon businesses. Oversized direct mail
            and modern websites that get you found.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-fog mb-4">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-mist">
            <li>
              <Link href="/the-spotlights" className="hover:text-pine-light transition-colors">
                The Spotlights
              </Link>
            </li>
            <li>
              <Link href="/website-design" className="hover:text-pine-light transition-colors">
                Websites
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
            <li className="text-mist">Serving Oregon, USA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-mist">
          <span>&copy; {new Date().getFullYear()} STC Marketing. All rights reserved.</span>
          <span>Built in Oregon.</span>
        </div>
      </div>
    </footer>
  );
}
