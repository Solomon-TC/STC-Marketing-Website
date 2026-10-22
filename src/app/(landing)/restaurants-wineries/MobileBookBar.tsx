"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Sticky booking button for phones. The form sits right under the hero, so this
 * shows whenever the form is out of view — mainly after the visitor scrolls
 * past it into the about, reviews and FAQ sections — and hides near the footer
 * so it never covers the legal links.
 */
export default function MobileBookBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const form = document.getElementById("book");
    const footer = document.querySelector("footer");
    const update = () => {
      const h = window.innerHeight;
      const f = form?.getBoundingClientRect();
      const formInView = f ? f.top < h && f.bottom > 0 : true;
      const footerInView = footer ? footer.getBoundingClientRect().top < h : false;
      setShow(window.scrollY > h * 0.4 && !formInView && !footerInView);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/90 p-4 backdrop-blur-md sm:hidden"
        >
          <a
            href="#book"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-pine-light py-3.5 text-sm uppercase tracking-wide text-ink"
          >
            Book your Introductory Call <span aria-hidden>&rarr;</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
