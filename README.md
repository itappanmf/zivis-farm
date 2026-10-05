# Zivi's Farm

A small static website for [Zivi's Farm](https://zivisfarm.com), a weekend pumpkin patch in Colorado Springs. Flower season is the next chapter, and the site already makes room for it.

Built with [Astro](https://astro.build). Pages are HTML, the type and photographs are self-hosted, and there is no client-side JavaScript.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to Vercel. The project is a static Astro site, and `vercel.json` sets cache headers for the hashed assets.

## Before launch

Facts that are still placeholders live in [`src/data/site.ts`](src/data/site.ts):

- The public domain (`site` in `astro.config.mjs` and `site.url`)
- Friday, Saturday, and Sunday clock times
- The first and last weekend of the season
- Admission price
- Email, Instagram, and Facebook
- The dog's name, if you want it in a caption

The photographs in `src/assets/photos` were exported from a phone at 771×1024. They are fine for the portrait layouts on the site, and a higher-resolution frame of the pumpkin field would hold up better as a full-width hero. A few frames include children — confirm you have permission to publish them.

The beer-fridge photograph was left out on purpose.
