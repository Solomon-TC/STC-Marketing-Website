import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How STC Marketing collects, uses, and protects information submitted through stcmarketingco.com.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="What we collect, how we use it, and who to contact with questions."
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-sm text-mist italic">Last updated: August 18, 2026</p>

          <p className="mt-6 text-fog leading-relaxed">
            STC Marketing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{" "}
            <a
              href="https://www.stcmarketingco.com"
              className="text-pine-light underline underline-offset-2 hover:text-paper transition-colors"
            >
              stcmarketingco.com
            </a>{" "}
            (the &ldquo;Site&rdquo;). This page explains what information we collect from visitors, how we use it, and who to contact with questions.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Information we collect</h2>
          <p className="mt-4 text-fog leading-relaxed">
            The only personal information we collect through this Site is what you choose to submit through our contact form — typically your name, email address, phone number, and the message you send us. We do not require you to create an account, and we do not knowingly collect information from anyone under the age of 13.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">How we use your information</h2>
          <p className="mt-4 text-fog leading-relaxed">
            We use the information you submit solely to respond to your inquiry and, if you become a customer, to provide the services you&apos;ve asked us for. Your contact form submissions are reviewed only by STC Marketing&apos;s owner and staff. We do not sell, rent, or share your personal information with third parties for their own marketing purposes.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Service providers</h2>
          <p className="mt-4 text-fog leading-relaxed">
            We use Vercel to host this Site. Vercel may process technical data (such as IP addresses) as part of providing hosting services. These providers access your information only as needed to perform their services for us and are not permitted to use it for any other purpose.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Cookies and tracking</h2>
          <p className="mt-4 text-fog leading-relaxed">
            This Site does not use advertising or tracking cookies. We use{" "}
            <a
              href="https://vercel.com/docs/analytics"
              className="text-pine-light underline underline-offset-2 hover:text-paper transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Analytics
            </a>
            , a privacy-first analytics tool that records anonymous page views — including page URL, approximate geographic region, and device type — without cookies or cross-site tracking. Our hosting provider may also keep standard server logs for security and maintenance purposes.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Data retention</h2>
          <p className="mt-4 text-fog leading-relaxed">
            We keep contact form submissions only as long as needed to respond to your inquiry and maintain our business records, after which they may be deleted.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Your choices</h2>
          <p className="mt-4 text-fog leading-relaxed">
            You can ask us at any time to tell you what information we have about you, or to delete it, by contacting us using the information below.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Changes to this policy</h2>
          <p className="mt-4 text-fog leading-relaxed">
            We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent changes.
          </p>

          <h2 className="font-display mt-12 text-2xl text-paper">Contact us</h2>
          <p className="mt-4 text-fog leading-relaxed">
            Questions about this policy? Email us at{" "}
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
