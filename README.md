# Compressly Website

The official website for **Compressly** — compress photos in seconds, entirely on your device.

Built with pure HTML, CSS, and JavaScript. No frameworks, no build step, no backend.

## Pages

- `index.html` — Home (hero, features, privacy highlights)
- `privacy.html` — Privacy Policy (App Store / Google Play compliant)
- `support.html` — Support and FAQ
- `404.html` — Not-found page (served automatically by GitHub Pages)

## Features

- Responsive, mobile-first layout
- Dark mode (follows system preference, with manual toggle)
- Soft scroll animations (respects `prefers-reduced-motion`)
- SEO friendly (meta descriptions, semantic HTML, FAQ structured data)
- Accessible (skip link, keyboard-friendly, ARIA labels)
- Zero dependencies — loads fast

## Deploying with GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. The site will be live at `https://<username>.github.io/<repo>/` within a minute or two.

To use a custom domain (e.g. `compressly.app`), add it under **Settings → Pages → Custom domain** and create the DNS records GitHub suggests.

## Customizing

- **Support email:** search for `support@compressly.app` in `privacy.html` and `support.html` and replace it.
- **App Store link:** when the app is live, replace the `href="#"` on the "Coming Soon on the App Store" button in `index.html` with the real store URL.
- **Accent color:** edit `--accent` in `css/style.css`.
