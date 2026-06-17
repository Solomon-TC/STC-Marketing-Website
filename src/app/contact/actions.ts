"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const business = formData.get("business") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const interest = formData.get("interest") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const interestLabel: Record<string, string> = {
    spotlights: "The Spotlights (direct mail)",
    website: "Website Design",
    both: "Both",
  };

  try {
    await resend.emails.send({
      from: "STC Marketing <contact@stcmarketingco.com>",
      to: "stcmarketingco@gmail.com",
      replyTo: email,
      subject: `New inquiry from ${name}${business ? ` — ${business}` : ""}`,
      text: [
        `Name: ${name}`,
        `Business: ${business || "—"}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Interested in: ${interestLabel[interest] ?? interest}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return { status: "success" };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try emailing us directly at stcmarketingco@gmail.com.",
    };
  }
}
