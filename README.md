<div align="center">

<img src="https://meritkitni.pages.dev/icon-192.png" alt="Merit Calculator logo" width="96" height="96">

# Merit Calculator

**Merit kitni banegi?** Enter your Matric, Inter and entry test marks once and see your aggregate for every Pakistani university you’re applying to, each with its own formula.

[![Build Android APK](https://github.com/saadahmad888/meritkitni/actions/workflows/build-apk.yml/badge.svg)](https://github.com/saadahmad888/meritkitni/actions/workflows/build-apk.yml)
[![Website](https://img.shields.io/badge/website-meritkitni.pages.dev-17794D)](https://meritkitni.pages.dev)
[![Android APK](https://img.shields.io/badge/Android-download%20APK-3DDC84?logo=android&logoColor=white)](https://github.com/saadahmad888/meritkitni/releases/latest/download/MeritCalculator.apk)
[![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-lightgrey)](LICENSE)

[Website](https://meritkitni.pages.dev) · [Web app](https://meritkitni.pages.dev/app/) · [Download APK](https://github.com/saadahmad888/meritkitni/releases/latest/download/MeritCalculator.apk) · [Releases](https://github.com/saadahmad888/meritkitni/releases)

<img src="https://meritkitni.pages.dev/og-image.jpg" alt="Merit Calculator preview" width="720">

</div>

---

## About

Every university in Pakistan weighs Matric, Intermediate and the entry test differently. UET Lahore uses 17% / 50% / 33%, NUST uses 10% / 15% / 75%, and University of Gujrat’s computing programmes use Inter Part-I marks only. Students usually work each one out by hand, and a single mistake can mean applying to the wrong place.

Merit Calculator does the maths for every university at once. It runs as a website, an installable web app, and a native Android app built from the same code.

## Features

- **One input, every university.** Enter marks once and compare aggregates across 38 admission formulas, ranked from highest to lowest.
- **Real formula rules.** Punjab University’s ¼ Matric academic record, GCU’s Part-I academics, GIKI’s averaged 15%, and the Hafiz-e-Quran bonus are all handled.
- **Target score finder.** Shows exactly how many entry test marks a student needs to reach a target aggregate.
- **Official vs estimate.** Formulas published by a university are marked *Official*. Where weights aren’t published, they’re marked *Estimate* and can be adjusted in the app.
- **Works offline and stays private.** No account and no tracking. Marks are stored only on the user’s device.
- **In-app updates.** The Android app checks for new releases and offers a one-tap update.
- **SEO-ready university pages.** Each university has its own page with a mini calculator, formula table, worked example, FAQs and structured data.

## Universities covered

| Region | Universities |
|---|---|
| **Lahore** | UET Lahore, Punjab University, GCU Lahore, UVAS, FAST-NUCES, COMSATS, ITU, UMT, UCP, University of Lahore, Superior University, LCWU, University of Education, KEMU & medical colleges |
| **Gujranwala** | UET RCET Gujranwala, PU Gujranwala Campus, GIFT University, Gujranwala Medical College |
| **Gujrat** | University of Gujrat, University of Chenab, PMAS-Arid / GIMS, Nawaz Sharif Medical College |
| **Other cities** | NUST, GIKI, PIEAS, Air University, Bahria University, NUTECH, QAU |

Formulas were last checked in **October 2026** against university admission notices.

## Tech stack

| Layer | Technology |
|---|---|
| App & website | HTML, CSS and vanilla JavaScript (no framework, no build step) |
| Android app | [Capacitor 6](https://capacitorjs.com/) wrapping the same web code |
| Builds | GitHub Actions builds and signs the APK on every push |
| Hosting | Cloudflare Pages |
| Offline | Service worker and web app manifest (installable PWA) |
| SEO | Per-university pages, JSON-LD structured data, Open Graph images, sitemap |

## Project structure

```
meritkitni/
├── www/                           # Everything Cloudflare publishes (and the APK bundles)
│   ├── index.html                 # Landing page
│   ├── app/index.html             # The calculator app (contains the formula file)
│   ├── <university>-merit-calculator/   # 25 SEO pages, one per university
│   ├── assets/                    # Shared CSS and the mini-calculator script
│   ├── og/                        # Social share images for each page
│   ├── privacy.html, terms.html   # Legal pages
│   └── sitemap.xml, robots.txt    # Search engine files
├── android/                       # Capacitor Android project (built by GitHub Actions)
├── .github/workflows/build-apk.yml   # Builds, signs and publishes the APK
├── capacitor.config.json
└── package.json
```

## Updating formulas

All formulas live in one clearly marked block near the top of the script in `www/app/index.html`:

```js
/* ================= FORMULA FILE ================= */
{id:"uet", city:"Lahore", uni:"UET Lahore", prog:"Engineering (ECAT)",
 kind:"std", w:[17,50,33], test:"ECAT", status:"official"}
```

`w` is the weight of Matric, Inter and the entry test. Edit a value, commit, and:

1. **Cloudflare Pages** redeploys the website in about a minute.
2. **GitHub Actions** builds a new signed APK and publishes it under [Releases](https://github.com/saadahmad888/meritkitni/releases).
3. **Installed apps** see an *Update available* banner the next time they open.

## Accuracy

Results are estimates for planning only. They aren’t official merit lists and don’t guarantee admission. Universities can change formulas between admission cycles, so students should always confirm on the university’s official admission page. Merit Calculator isn’t affiliated with any university, testing body or the PMDC.

Spotted an outdated formula? [Open an issue](https://github.com/saadahmad888/meritkitni/issues) with a link to the official admission notice.

## Author

**Saad Ahmad**, Senior Frontend Developer

[![Website](https://img.shields.io/badge/isaadahmad.com-0F2419)](https://isaadahmad.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/isaadahmad)
[![X](https://img.shields.io/badge/X-000000?logo=x&logoColor=white)](https://twitter.com/isaadahmad)
[![Email](https://img.shields.io/badge/hello@isaadahmad.com-17794D?logo=gmail&logoColor=white)](mailto:hello@isaadahmad.com)

Need an app, website or tool like this? [Get in touch](https://isaadahmad.com/contact).

## License

Copyright © 2026 Saad Ahmad. All rights reserved. See [LICENSE](LICENSE) for details.
