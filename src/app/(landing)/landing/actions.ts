"use server";

import { Resend } from "resend";

export type LeadPayload = {
  businessType: string;
  /** Write-in text when they chose "Something else". */
  businessOther: string;
  /** Write-in answer to "When do you need it done by?" */
  timeline: string;
  budget: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  /** Honeypot. Real visitors never see or fill this field. */
  company: string;
  /** Ad attribution captured from the landing URL (utm_*, fbclid). */
  attribution: Record<string, string>;
};

/** `invalid` means the visitor should fix their input; otherwise sending failed on our side. */
export type LeadResult = { ok: true } | { ok: false; invalid: boolean; message: string };

const clip = (v: unknown, max = 300) => String(v ?? "").trim().slice(0, max);

export async function submitLead(lead: LeadPayload): Promise<LeadResult> {
  // Bots fill every field they find. Pretend it worked and send nothing.
  if (clip(lead.company)) return { ok: true };

  const name = clip(lead.name, 120);
  const business = clip(lead.business, 160);
  const email = clip(lead.email, 200);
  const phone = clip(lead.phone, 40);

  if (!name || !business || !/^\S+@\S+\.\S+$/.test(email) || phone.replace(/\D/g, "").length < 10) {
    return {
      ok: false,
      invalid: true,
      message: "Please double-check your name, business, email, and phone number.",
    };
  }

  const businessType = clip(lead.businessType, 60);
  const other = clip(lead.businessOther, 120);
  const businessLabel = other ? `${businessType}: ${other}` : businessType;

  const attribution = Object.entries(lead.attribution ?? {})
    .slice(0, 10)
    .map(([k, v]) => `${clip(k, 40)}: ${clip(v, 200)}`);

  try {
    // Created per call: the SDK throws on a missing key, and that should come
    // back as a normal failure rather than crash the module on import.
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "STC Marketing <contact@stcmarketingco.com>",
      to: "stcmarketingco@gmail.com",
      replyTo: email,
      subject: `New Introductory Call lead: ${business} (${businessLabel})`,
      text: [
        "New lead from the restaurants & wineries landing page.",
        "They were sent on to book a call next.",
        "",
        `Name: ${name}`,
        `Business: ${business}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        `Business type: ${businessLabel}`,
        `Needs it done by: ${clip(lead.timeline, 200)}`,
        `Budget: ${clip(lead.budget, 60)}`,
        "",
        "Ad attribution:",
        ...(attribution.length ? attribution : ["(none — direct visit)"]),
      ].join("\n"),
    });
    return { ok: true };
  } catch (err) {
    console.error("Lead email failed:", err);
    return { ok: false, invalid: false, message: "We couldn't send your details just now." };
  }
}
