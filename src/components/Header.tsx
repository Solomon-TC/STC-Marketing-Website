"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/the-spotlights", label: "The Spotlights" },
  { href: "/website-design", label: "Websites" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState<string | null>(null);
  const pathname = usePathname();

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(href: string) {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/stc-logo.png"
            alt="STC Marketing logo"
            width={36}
            height={36}
            className="opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
          <span className="font-display text-lg tracking-wide text-paper">
            STC <span className="text-pine-light">Marketing</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm tracking-wide uppercase transition-colors relative ${
                pathname === link.href
                  ? "text-pine-light"
                  : "text-fog hover:text-paper"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center rounded-full border border-pine-light/60 px-5 py-2.5 text-sm uppercase tracking-wide text-pine-light hover:bg-pine-light hover:text-ink transition-colors duration-300"
        >
          Get a Quote
        </Link>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="block h-px w-6 bg-paper origin-center"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block h-px w-6 bg-paper"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="block h-px w-6 bg-paper origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-ink border-b border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-base uppercase tracking-wide ${
                    pathname === link.href ? "text-pine-light" : "text-fog"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex w-fit items-center rounded-full border border-pine-light/60 px-5 py-2.5 text-sm uppercase tracking-wide text-pine-light"
              >
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
