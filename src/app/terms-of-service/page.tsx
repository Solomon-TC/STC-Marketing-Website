import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | STC Marketing",
  description: "The terms that govern your use of stcmarketingco.com, operated by STC Marketing.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that govern your use of this Site."
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-sm text-mist italic">Last updated: August 18, 2026</p>

          <p className="mt-6 text-fog leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of{" "}
            <a
              href="https://stcmarketingco.com"
              className="text-pine-light underline underline-offset-2 hover:text-paper transition-colors"
            >
              stcmarketingco.com
            </a>{" "}
            (the &ldquo;Site&rdquo;), operated by STC Marketing. By using this Site, you agree to these Terms. If you don&apos;t agree, please don&apos;t use the Site.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Use of this site</h2>
          <p className="mt-4 text-fog leading-relaxed">
            This Site is provided for general informational purposes, to describe our services and let you get in touch with us. You agree to use the Site only for lawful purposes and not to misuse it, interfere with its operation, or attempt to access it in unauthorized ways.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">No professional advice</h2>
          <p className="mt-4 text-fog leading-relaxed">
            Content on this Site is provided for general information about our services and does not constitute professional advice. For advice specific to your situation, please contact us directly.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Intellectual property</h2>
          <p className="mt-4 text-fog leading-relaxed">
            Unless otherwise noted, all text, images, logos, and other content on this Site are owned by STC Marketing or used with permission, and are protected by copyright and other intellectual property laws. You may not copy, reproduce, or distribute this content without our written permission.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Third-party links</h2>
          <p className="mt-4 text-fog leading-relaxed">
            This Site may contain links to third-party websites. We don&apos;t control those sites and aren&apos;t responsible for their content or practices.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">No warranty</h2>
          <p className="mt-4 text-fog leading-relaxed">
            This Site is provided &ldquo;as is&rdquo; without warranties of any kind, whether express or implied. We don&apos;t guarantee the Site will be uninterrupted, error-free, or available at all times.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Limitation of liability</h2>
          <p className="mt-4 text-fog leading-relaxed">
            To the fullest extent permitted by law, STC Marketing is not liable for any indirect, incidental, or consequential damages arising from your use of this Site. Nothing in these Terms limits liability for anything that can&apos;t be limited under Oregon or federal law.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Governing law</h2>
          <p className="mt-4 text-fog leading-relaxed">
            These Terms are governed by the laws of the State of Oregon, without regard to conflict-of-law principles. Any disputes arising from these Terms or the Site will be handled in the state or federal courts located in Oregon.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Changes to these terms</h2>
          <p className="mt-4 text-fog leading-relaxed">
            We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent changes. Continued use of the Site after changes means you accept the updated Terms.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Contact us</h2>
          <p className="mt-4 text-fog leading-relaxed">
            Questions about these Terms? Email us at{" "}
            <a
              href="mailto:stcmarketingco@gmail.com"
              className="text-pine-light underline underline-offset-2 hover:text-paper transition-colors"
            >
              stcmarketingco@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
