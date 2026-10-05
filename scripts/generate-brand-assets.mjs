import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const logo = 'src/assets/logo/zivis-farm-logo.jpg';
const faviconDir = 'public/favicons';
await mkdir(faviconDir, { recursive: true });

// The sunflower sits in the lower-left of the round mark.
const sunflower = await sharp(logo)
  .extract({ left: 70, top: 620, width: 360, height: 360 })
  .png()
  .toBuffer();

const icons = [
  ['shortcut-icon.png', 32],
  ['apple-touch-icon-180.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];

for (const [name, size] of icons) {
  await sharp(sunflower)
    .resize(size, size)
    .png({ compressionLevel: 9, palette: size <= 32 })
    .toFile(`${faviconDir}/${name}`);
}

const paper = '#FDF9F1';

const logoCard = await sharp(logo)
  .resize(500, 500, { fit: 'contain', background: paper })
  .jpeg({ quality: 86 })
  .toBuffer();

const caption = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="600" y="275" font-family="Palatino, Georgia, serif" font-size="68" fill="#4A2F22">Pumpkin patch</text>
  <text x="600" y="345" font-family="Georgia, Palatino, serif" font-size="30" fill="#4f6632">Weekends · Colorado Springs</text>
  <line x1="600" y1="390" x2="860" y2="390" stroke="#D9692B" stroke-width="3"/>
</svg>`);

await sharp({
  create: { width: 1200, height: 630, channels: 3, background: paper },
})
  .composite([
    { input: caption, left: 0, top: 0 },
    { input: logoCard, left: 56, top: 65 },
  ])
  .jpeg({ quality: 84 })
  .toFile('public/og.jpg');
