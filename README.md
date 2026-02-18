# example-nuxt

A server-side counter app built with [Nuxt](https://nuxt.com/), ready to deploy on [Trapiche](https://trapiche.cloud).

## Deploy on Trapiche

1. Push this repo to your GitHub account
2. Go to [trapiche.cloud](https://trapiche.cloud) and create a new deployment
3. Select this repository — Trapiche detects Nuxt automatically
4. Done. Runs in a Docker container managed by Trapiche.

## Detection

Trapiche detects this as a **Nuxt** app via `"nuxt"` in `package.json`.
- Deploy mode: **SSR / Docker**
- Build command: `npm run build`
- Start command: `npm start` → `node .output/server/index.mjs`

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```
