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
  /** TODO: replace with the farm's real mailbox, then set emailPublic to true. */
  email: 'hello@zivisfarm.com',
  emailPublic: false,
  address: {
    street: '3398 Daydreamer Drive',
    city: 'Colorado Springs',
    region: 'CO',
    postalCode: '80908',
    country: 'US',
  },
  /**
   * Days are set: Friday afternoon, Saturday all day, Sunday all day.
   * TODO: fill opens and closes as 24-hour "HH:MM" once clock times are confirmed.
   * Leave them empty until then so guessed hours never reach the page or search results.
   */
  hours: [
    {
      day: 'Friday',
      schemaDay: 'https://schema.org/Friday',
      label: 'Afternoon',
      opens: '',
      closes: '',
    },
    {
      day: 'Saturday',
      schemaDay: 'https://schema.org/Saturday',
      label: 'All day',
      opens: '',
      closes: '',
    },
    {
      day: 'Sunday',
      schemaDay: 'https://schema.org/Sunday',
      label: 'All day',
      opens: '',
      closes: '',
    },
  ],
  /**
   * TODO: confirm the first and last weekend.
   * start is the weekend we know the patch was already open (early October 2026), not a announced opening day.
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

export const hoursSummary = 'Friday afternoons, Saturday and Sunday all day';

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
    question: 'What if the weather turns?',
    answer:
      'Sun, cold, and prairie wind are part of the visit — bring a layer. If a storm makes the patch unsafe we close, and we say so at the gate.',
  },
] as const;
