/**
 * Single source for facts that show up in more than one place,
 * including search markup. Anything marked TODO is a placeholder.
 */

export const site = {
  name: "Zivi's Farm",
  legalName: "Zivi's Farm LLC",
  url: "https://zivisfarm.com",
  description:
    "A weekend pumpkin patch in Colorado Springs. Pick a pumpkin, ride the hay wagon, and stay until the light goes gold. Flower season comes next spring.",
  // TODO: confirm the public email before launch.
  email: "hello@zivisfarm.com",
  locale: "en_US",
} as const;

export const address = {
  street: "3398 Daydreamer Drive",
  city: "Colorado Springs",
  region: "CO",
  postalCode: "80908",
  country: "US",
} as const;

export const addressLine = `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`;

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`;

/**
 * Days are set: Friday afternoon, Saturday and Sunday all day.
 * Clock times are planned placeholders — change them here and the
 * hours card and the search markup both update.
 */
export const hoursArePlaceholders = true;

export const hours = [
  { day: "Friday", short: "Fri", when: "Afternoon", opens: "13:00", closes: "17:00", clock: "1–5 pm" },
  { day: "Saturday", short: "Sat", when: "All day", opens: "10:00", closes: "17:00", clock: "10 am–5 pm" },
  { day: "Sunday", short: "Sun", when: "All day", opens: "10:00", closes: "17:00", clock: "10 am–5 pm" },
] as const;

export const hoursSummary = "Friday afternoons, Saturday and Sunday all day";

/** TODO: confirm the first and last weekend of the season. */
export const season = {
  name: "Pumpkin Patch",
  year: 2026,
  startDate: "2026-10-02",
  endDate: "2026-11-01",
  label: "Weekends this fall",
} as const;

/** TODO: set a real price. Null means we do not publish one. */
export const admission: string | null = null;

/** TODO: add profile URLs when the accounts exist. Empty stays off the page as a link. */
export const social = {
  instagram: "",
  facebook: "",
} as const;

export const nearby = ["Colorado Springs", "Black Forest", "Falcon", "Peyton"] as const;

export const faqs = [
  {
    question: "Do you allow dogs?",
    answer:
      "Yes. Leashed dogs are welcome on the wagon and in the patch. Bring water for them, and please ask us before you bring any other animal.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We have not posted admission yet. There will be no surprise at the gate — the price will be listed on this page before you need it. Pumpkins and gourds are priced when you pick them.",
  },
  {
    question: "Should we buy tickets ahead of time?",
    answer:
      "Not for now. Come during open hours and we will get you onto a wagon. If that changes on a busy Saturday, we will say so here.",
  },
  {
    question: "Can we visit with a stroller or wheelchair?",
    answer:
      "The patch is a grassy field, and the wagon has a step. Sturdy shoes help more than dress shoes. Tell us what you need when you arrive and we will do our best to get you out to the pumpkins.",
  },
  {
    question: "What if the weather turns?",
    answer:
      "A breeze is just the prairie being itself, and we stay open for it. If the wind or a storm makes the field unsafe, we will close and say so here.",
  },
  {
    question: "What should we bring?",
    answer:
      "Layers, sturdy shoes, and a way to pay. The sun is strong and the wind finds you. A hat helps. We have s'mores kits and carving kits if you want them, and water is the thing people wish they had brought.",
  },
] as const;

export const nav = [
  { href: "/pumpkin-patch/", label: "Pumpkin Patch" },
  { href: "/visit/", label: "Visit" },
  { href: "/about/", label: "Our Story" },
  { href: "/flowers/", label: "Flowers" },
] as const;
