# Bilingual Academic Homepage Design

## Intent

Create a concise, polished academic homepage for Liu Lechun that presents current education, full-duplex research interests, and two selected publications in English and Chinese. The primary audiences are prospective supervisors, research collaborators, and academic visitors.

## Goals

- Establish the current affiliation and research focus within the first screen.
- Present exactly the two publications listed in the latest English RA CV, with formal titles, author order, venue, year, and DOI links.
- Provide complete English and Chinese versions with a visible language switch.
- Work well on desktop and mobile, remain keyboard accessible, and load without external frameworks, fonts, or trackers.
- Deploy as the public GitHub Pages user site `ghostLLC.github.io`.

## Non-goals

- No blog, CMS, contact form, analytics, or backend.
- No exhaustive internships, awards, coursework, or unpublished-project claims.
- No portrait selection from unrelated photo folders.

## Constraints and source decisions

- Education and publication facts come from `D:\Desktop\华农\Master\RA申请\CV_Liu_Lechun_RA_EN.pdf`, dated 2026-10-28 and identified as the latest English version by its adjacent README.
- Research interests come from the current full-duplex notes under `D:\Desktop\Research\master-research\full-duplex`, especially speculative listening, inference acceleration, and end-to-end evaluation.
- City University of Hong Kong (Dongguan) is described only as a con-offer, not current enrollment.
- Publish the email and GitHub profile already present in the CV; omit phone number and street-level location.
- Publication titles remain in English in both language versions.

## Approaches

1. **Two static HTML pages with shared CSS (selected).** `index.html` is English and `zh.html` is Chinese. This is robust without JavaScript, allows both languages to be indexed, and can be served directly by GitHub Pages. Content edits must be mirrored across two files.
2. **One HTML page with a JavaScript translation dictionary.** Less duplicated markup and instantaneous switching, but weaker no-script behavior and language-specific metadata/SEO.
3. **React or another generated site.** Useful for a growing application, but unnecessary build and dependency overhead for this small academic profile.

## Visual and interaction design

- Editorial academic style: warm off-white background, deep navy text, muted teal accent, serif display headings, and sans-serif body text.
- A spacious two-column hero with an original, decorative full-duplex waveform illustration rather than a stock image.
- Sections for Research, Selected Publications, Education, and Contact. Research uses three concise cards; publications use a numbered list; education uses a chronological layout.
- One semantic navigation tree, visible skip link, logical heading hierarchy, visible focus indicators, sufficiently large interactive targets, responsive typography with `clamp()`, and reduced-motion support.
- Language links preserve the current section hash when supported; without JavaScript they still open the other language's homepage.
- Inline decorative SVG is hidden from assistive technology. All meaningful content remains HTML text.

## Assumptions

- The requested GitHub webpage means a public user site at `https://ghostllc.github.io/` under the already authenticated `ghostLLC` account.
- English is the default international academic version, with an equally complete Chinese page.
- The CV PDF itself is not hosted because the requested deliverable is the homepage and the CV contains a phone number.
- No custom domain is configured.

## Verification

- Check both pages for required content, valid internal links, correct DOI/email/GitHub URLs, language metadata, and no unintended phone-number exposure.
- Serve locally over HTTP and verify desktop and mobile layouts, keyboard navigation, language links, and section navigation in the built-in browser.
- Run an automated accessibility audit and inspect results rather than relying only on the score.
- Publish to `ghostLLC/ghostLLC.github.io`, enable Pages from the `main` branch root, and verify the live English and Chinese URLs.
