/**
 * Single source for the farm's name, hours, and the bits still to confirm.
 * Search this file for "TODO" before the site goes live.
 */

export const site = {
  name: "Zivi's Farm",
  legalName: "Zivi's Farm LLC",
  /** TODO: confirm the public domain before launch. */
  url: 'https://zivisfarm.com',
  homeTitle: "Zivi's Farm · Pumpkin Patch in Colorado Springs",
  description:
    'A weekend pumpkin patch on the prairie outside Colorado Springs. Hayrides, heirloom pumpkins, and a flower farm on the way.',
  locale: 'en_US',
  email: 'john@zivisfarm.com',
  emailPublic: true,
  phoneDisplay: '(303) 549-5107',
  phoneTel: 'tel:+13035495107',
  phoneSchema: '+1-303-549-5107',
  address: {
    street: '3398 Daydreamer Drive',
    city: 'Colorado Springs',
    region: 'CO',
    postalCode: '80908',
    country: 'US',
  },
  /** Open 10:00–17:00 Friday, Saturday, and Sunday. */
  hours: [
    {
      day: 'Friday',
      schemaDay: 'https://schema.org/Friday',
      label: '10–5',
      opens: '10:00',
      closes: '17:00',
    },
    {
      day: 'Saturday',
      schemaDay: 'https://schema.org/Saturday',
      label: '10–5',
      opens: '10:00',
      closes: '17:00',
    },
    {
      day: 'Sunday',
      schemaDay: 'https://schema.org/Sunday',
      label: '10–5',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  /**
   * TODO: confirm the first and last weekend.
   * start is the weekend we know the patch was already open (early October 2026), not an announced opening day.
   * Leave end empty until the farm names a last day.
   */
  season: {
    name: 'Pumpkin Patch',
    year: 2026,
    start: '2026-10-02',
    end: '',
  },
  /** TODO: admission price, if there is one. Null means the site does not advertise a number. */
  price: null as string | null,
  /** TODO: real profile URLs. Empty strings render as "soon", not as links. */
  social: {
    instagram: '',
    facebook: '',
  },
} as const;

export const hoursSummary = 'Friday, Saturday, and Sunday, 10 to 5';
export const hoursPill = 'Fri–Sun, 10–5';

export const nearby = ['Colorado Springs', 'Black Forest', 'Falcon', 'Peyton'] as const;

export const nav = [
  { href: '/pumpkin-patch/', label: 'Pumpkin Patch' },
  { href: '/visit/', label: 'Visit' },
  { href: '/about/', label: 'Our Story' },
  { href: '/flowers/', label: 'Flowers' },
] as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
)}`;

export const faqs = [
  {
    question: 'Are dogs welcome?',
    answer:
      'The farm dog rides the tractor, and a bunny lives here too. If you want to bring your own dog, ask at the gate before you unload — we have not set a blanket pet rule, and the animals already here come first.',
  },
  {
    question: 'What does it cost?',
    answer:
      'We have not posted admission or pumpkin prices yet. The stand will tell you the number before you commit to anything. Nothing on this site is a price.',
  },
  {
    question: 'How should we pay?',
    answer:
      'Bring a card and a little cash until we say otherwise. We will post the method that actually works once the stand has used it for a few weekends.',
  },
  {
    question: 'Is the patch accessible?',
    answer:
      'The ground is prairie grass and dirt, and the wagon is a step up. It is a field, not a paved park. If someone in your group needs a steadier way through, tell us when you arrive and we will help you find one.',
  },
  {
    question: 'Do we need tickets ahead of time?',
    answer:
      'No. Come during open hours and we will get you onto a wagon. If a Saturday ever needs a timed entry, we will say so on this page first.',
  },
  {
    question: 'What if the weather turns?',
    answer:
      'Sun, cold, and prairie wind are part of the visit — bring a layer. If a storm makes the patch unsafe we close, and we say so at the gate.',
  },
] as const;
