# Bilingual Academic Homepage Implementation Plan

Design: `docs/superpowers/specs/2026-11-17-academic-homepage-design.md`

## 1. Build the static site

Create `index.html` for English and `zh.html` for Chinese with equivalent semantic sections: hero/about, research, two selected publications, education, and contact. Use exact CV facts and DOI links, omit phone/address, add canonical/hreflang metadata, and mark the current document language correctly.

Create `styles.css` for the responsive editorial layout, original full-duplex hero visual, visible keyboard focus, accessible contrast, mobile navigation wrapping, print basics, and reduced-motion handling. Create `assets/favicon.svg` and `.nojekyll`.

Create `script.js` only for progressive enhancement of language links so they preserve the current URL hash; the site and language navigation must work without JavaScript.

## 2. Validate source and content

Use ad-hoc local validation without adding a test scaffold: parse both HTML files, verify unique IDs and internal anchors, required headings/publications/DOIs, matching section structure, `lang`/hreflang metadata, local asset existence, and absence of the CV phone number. Run `node --check script.js` if Node is available.

## 3. Exercise the real site in a browser

Serve `D:\Desktop\ghostLLC.github.io` over local HTTP. Use the built-in Kimi Code browser to verify both languages, section links, language switching, desktop layout at 1440 px, and mobile layout at 390 px. Check text snapshots and screenshots for missing content, overflow, and visible interaction states. Test keyboard navigation and reduced motion where available.

Run an automated Lighthouse accessibility/best-practices/SEO audit if the local environment supports it. Inspect any reported issue, fix issues caused by this implementation, and rerun affected checks. Remove generated audit files afterward.

## 4. Publish and verify GitHub Pages

Initialize Git in the new site directory, inspect the final diff/status, and commit the completed site. Create public repository `ghostLLC/ghostLLC.github.io` using the authenticated GitHub CLI, push `main`, and enable GitHub Pages from the branch root. Wait for deployment, then verify the live English and Chinese pages and their DOI/GitHub/email links.

## Assumptions

- Public user-site repository: `ghostLLC/ghostLLC.github.io`.
- No custom domain, portrait, CV download, analytics, or external runtime dependency.
- The user request to make a GitHub webpage authorizes the required public repository creation, commit, push, and Pages enablement.
