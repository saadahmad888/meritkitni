# Merit Calculator (meritkitni)

- `www/` – the app (website and APK use the same files). Formulas are in the "FORMULA FILE" block in `www/index.html`.
- `android/` – Android project. You never need to open it; GitHub builds the APK.
- `.github/workflows/build-apk.yml` – builds the APK on every change and publishes it under Releases.

Website: Cloudflare Pages, build command empty, output directory `www`.
APK: Releases → latest → MeritCalculator.apk
