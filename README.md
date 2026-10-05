# Zivi's Farm

Static website for [Zivi's Farm](https://zivisfarm.com), a weekend pumpkin patch outside Colorado Springs that is growing toward a flower farm. Built with Astro.

## Develop

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`. Deploy that output on Vercel (framework preset: Astro).

## Edit the facts in one place

Hours, the address, the season, prices, and social links live in [`src/data/site.ts`](src/data/site.ts). Search that file for `TODO` before launch.

- Hours are Friday, Saturday, and Sunday, 10 to 5. Phone and email are in `site.ts`.
- Admission, the last day of the season, and social URLs are still blank.
- The domain in `astro.config.mjs` is a placeholder: `https://zivisfarm.com`.

## Photos

Originals are in `src/assets/`. Astro serves them as AVIF and WebP. They are phone photos, so the full-width hero is soft on large screens — a higher-resolution frame of the dusk field would help. Several pictures show children; confirm you have permission to publish them. The beer-fridge photo was left out on purpose.

Favicons and `public/og.jpg` are generated from the logo:

```bash
node scripts/generate-brand-assets.mjs
```
