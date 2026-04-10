# Third-Party Notices

Last updated: 2026-04-08

This project uses third-party software, fonts, and media assets. Review this file before production releases.

## 1) Third-Party Fonts

The site loads fonts from Google Fonts:

- Montserrat
- Space Grotesk

Used in:

- `public/index.html`
- `public/privacy-policy.html`
- `public/terms-and-support.html`

References:

- https://fonts.google.com/specimen/Montserrat
- https://fonts.google.com/specimen/Space+Grotesk
- https://fonts.google.com/attribution

Notes:

- Keep the current font attributions and license references documented.
- If required by legal/compliance policy, self-host the font files and keep license text in-repo.

## 2) Third-Party Images / Media

### Unsplash (remote hosted)

Used in:

- `src/components/about/About.js`

Current sources:

- https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&h=700&fit=crop
- https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=700&fit=crop
- https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&h=700&fit=crop

References:

- https://unsplash.com/license

Notes:

- Verify each image is allowed for the intended commercial use.
- Prefer local copies under `public/assets/team/` to avoid runtime dependency on external URLs.

### Local brand/media files

Local files currently tracked in `public/`:

- `public/logo.svg`
- `public/logo-wordmark.svg`
- `public/logo192.png`
- `public/logo512.png`
- `public/apple-touch-icon.png`
- `public/favicon-32x32.png`
- `public/favicon-16x16.png`
- `public/assets/servicios/vector-ciberseguridad.png`
- `public/assets/servicios/vector-estrategias.png`
- `public/brand/logo-navbar.png`

Notes:

- Ensure all local image assets are original, licensed, or internally owned.
- If any asset was adapted from third-party references, retain source/license proof.

## 3) Third-Party npm Packages

Primary dependencies declared in `package.json`:

- `react`
- `react-dom`
- `react-scripts`
- `styled-components`
- `react-intersection-observer`
- `web-vitals`
- `@testing-library/dom`
- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `eslint`
- `eslint-config-react-app`
- `wrangler`

Notes:

- Most packages in this ecosystem are permissive (commonly MIT), but exact licenses must be validated in CI/release workflow.
- Generate a machine-readable license report before release:

```bash
pnpm install
pnpm licenses list --json > THIRD_PARTY_LICENSES.json
```

- Keep `THIRD_PARTY_LICENSES.json` archived with release artifacts if required by your policy.

## 4) Trademark and Brand Similarity Reminder

- Avoid logos that can be confused with protected trademarks from other companies/frameworks.
- Ensure final logo/icon set is sufficiently distinct and original.

## 5) Recommended Compliance Checklist

- [ ] Confirm Google Fonts usage policy and attribution requirements.
- [ ] Confirm Unsplash image usage for commercial context.
- [ ] Replace remote photos with locally stored, approved assets.
- [ ] Generate and store `THIRD_PARTY_LICENSES.json`.
- [ ] Keep proof-of-license/source links in project records.
