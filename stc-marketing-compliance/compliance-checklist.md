# STC Marketing — Compliance Checklist

Generated: August 18, 2026 | stcmarketingco.com

---

## Default profile confirmation

- **Business:** STC Marketing (web design + direct mail, Oregon)
- **Site type:** Brochure/marketing site with a contact form
- **Form data:** Name, email, phone, message — used only by STC Marketing to respond to inquiries; not stored in a CRM or mailing list
- **Industry:** Not medical, health, financial, legal, or insurance ✓
- **E-commerce / bookings / user accounts:** None ✓
- **Analytics:** Vercel Web Analytics — cookieless, no ad retargeting (see Flag 1 below)
- **Traffic:** Oregon-focused; some out-of-state visitors possible (see Flag 2 below)

This site fits the default profile. A privacy policy and terms of service have been generated as `privacy-policy-page.md` and `terms-of-service-page.md` alongside this file.

**These documents are boilerplate, not legal advice.** If STC Marketing's situation changes (taking payments, adding GA or ad pixels, acquiring significant California or EU clients), revisit this checklist and consult an attorney before relying on these documents.

---

## Flags

### 1. Vercel Analytics disclosure

Vercel Web Analytics is installed on the site. It collects anonymous page-view data (page URL, approximate geographic region, device type) without cookies or cross-site tracking. This is not a GDPR/CCPA trigger under the current traffic profile, but it is a form of data collection and has been disclosed in the generated privacy policy under "Cookies and tracking."

**No further action needed** unless you later add Google Analytics, a Meta/Facebook Pixel, or any ad retargeting — at that point the privacy policy's tracking section needs to be rewritten and the site likely needs a real cookie consent banner.

### 2. Possible out-of-state visitors

The site is Oregon-focused, but visitors from California or other states are possible.

At STC Marketing's current scale, CCPA thresholds (100,000+ California consumers/year) and Oregon's own OCPA threshold (100,000+ consumers/year) are not triggered. The generated privacy policy is written in plain language that covers the relevant practices and is a reasonable good-faith step regardless of visitor origin.

**No further action needed** unless STC Marketing actively markets to or acquires significant paying customers from California, the EU, or the UK — at that point, consult an attorney before launch.

---

## Accessibility (ADA / WCAG 2.1 AA)

ADA Title III applies to business websites regardless of size or revenue. Run through the items below before/after any significant site change. Plaintiff firms use automated scanners to find easy targets, so these are not hypothetical.

### Items confirmed during this audit ✓

- `lang="en"` declared on `<html>` element ✓
- Semantic heading structure (`<h1>` via PageHero, `<h2>` in sections) ✓
- Page titles set in metadata for all routes ✓
- Form `<input>` elements have associated `<label htmlFor>` via the `Field` component ✓
- Form `<select>` and `<textarea>` — **fixed as part of this audit** (missing `htmlFor`/`id` associations were added to `src/app/contact/ContactForm.tsx`) ✓
- Interactive form fields have visible focus rings (`focus:border-pine-light focus:ring-1 focus:ring-pine-light`) ✓
- Keyboard operability of buttons and links — consistent with standard HTML behavior ✓

### Follow-up audit — August 18, 2026

- [x] **Alt text:** Checked every `<Image>` in the codebase. All have descriptive alt text (logo, hero mockup, portfolio slides, Spotlight scans, about-page photos). None missing.
- [x] **Background video:** `ProjectCarousel` videos (`vd1-zd-builders.mp4`, `vbw-demo.mp4`, `whg-demo.mp4`) are `muted` autoplay demo loops with no audio track conveying information — no captions required.
- [x] **Keyboard navigation:** Tabbed through the full homepage (header → hero CTAs → services → portfolio carousel dots/arrows → CTA banner → footer) and the full contact form (name, business, email, phone, interest dropdown, message, submit) at desktop width. Focus order is logical, nothing is unreachable, no keyboard traps. Every stop shows a visible focus indicator — native browser outline site-wide, and a custom `ring-1 ring-pine-light` replacement on the three form fields where `outline-none` is used (verified the ring is actually present via computed styles, not just assumed from the class name).
- [x] **Form field labels:** Confirmed via computed DOM that `name`, `business`, `email`, `phone`, `interest`, and `message` all resolve `hasLabel: true` after the `htmlFor`/`id` fix.
- [ ] **Required field errors:** Not re-verified this pass — the contact form shows a generic error message on failure (`state.message` in `ContactForm.tsx`). Confirm the actual server-side error text is specific enough to act on before launch.

### ✅ Fixed: `text-mist` contrast

`--color-mist` originally measured `#6b6b72`, which failed WCAG AA against the site's dark backgrounds (3.72:1 on `bg-ink`, 3.41:1 on `bg-charcoal` — both below the 4.5:1 minimum for normal text). It's used at `text-sm`/`text-xs` in ~30 places site-wide (footer, section eyebrows/labels, form labels, captions, stat labels), none large enough to qualify for the 3:1 exemption.

**Fix applied (user-approved, August 18, 2026):** lightened `--color-mist` from `#6b6b72` to `#808089` in [`src/app/globals.css`](../src/app/globals.css:7) — same hue/character, ~20% lighter. New ratios:

| Pair | Before | After | WCAG AA (4.5:1) |
|---|---|---|---|
| `text-mist` on `bg-ink` | 3.72:1 | **5.03:1** | ✅ Passes |
| `text-mist` on `bg-charcoal` | 3.41:1 | **4.61:1** | ✅ Passes |

Verified visually in the browser — reads as the same muted secondary gray, just legible now.
