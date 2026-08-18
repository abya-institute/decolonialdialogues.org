/**
 * Every fact in this file traces to the source prospectus
 * (.assets/Decolonial Dialogues-8_compressed.pdf) or to a decision the
 * organizers confirmed. Nothing here is invented.
 *
 * Editions run twice a year, in April and October. To publish the next one,
 * change `edition` and append the outgoing one to `pastEditions`. Nothing in
 * app/ hardcodes a date, a price, or a faculty name.
 */

export type Money = { amount: number; currency: 'EUR' };

export type Edition = {
  /** Stable id, e.g. "2026-10". Used for keys and anchors. */
  id: string;
  /** Human label for the edition itself, e.g. "October 2026". */
  label: string;
  startDate: string; // ISO date, first day
  endDate: string; // ISO date, last day
  /** Pre-formatted for display; keeps the em-dash and ordinals under our control. */
  dateRange: string;
  city: string;
  region: string;
  country: string;
  nights: number;
  fullPrice: Money;
  earlyPrice: Money;
  /** Inclusive. After this instant the full price applies. Europe/Madrid. */
  earlyPriceEndsAt: string;
  includes: string[];
  excludes: string[];
};

export type CurriculumEntry = {
  id: string;
  title: string;
  body: string;
};

export type FacultyMember = {
  id: string;
  name: string;
  /** Short standfirst used under the name. */
  role: string;
  bio: string;
  portrait: string;
  /** True while we are still using the low-resolution extraction from the PDF. */
  portraitIsPlaceholder: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  /** Edition the participant attended, as printed in the prospectus. */
  attribution: string;
};

export type ImageCredit = {
  src: string;
  title: string;
  author: string;
  licence: string;
  licenceUrl: string;
  sourceUrl: string;
  /** Where the file was downloaded from — the footer credit reads "via {source}". */
  source: 'Wikimedia Commons' | 'Unsplash';
  /** True where we cropped the original. CC BY-SA asks that changes be stated. */
  cropped?: boolean;
};

export const contact = {
  email: 'cit@dialogoglobal.com',
  instagramHandle: '@DecolonialDialogues',
  instagramUrl: 'https://www.instagram.com/decolonialdialogues/',
} as const;

export const programme = {
  name: 'Decolonial Dialogues',
  tagline: 'A transformative journey of liberation and decolonization',
  /** Verbatim from the prospectus. The promise the whole page has to keep. */
  manifesto: {
    lead: 'This isn’t just for academics. Everyone’s invited, no matter your background or experience.',
    support:
      'Knowledge doesn’t belong to institutions. It belongs to the people, so come as you are.',
  },
} as const;

export const edition: Edition = {
  id: '2026-10',
  label: 'October 2026',
  startDate: '2026-10-29',
  endDate: '2026-11-01',
  dateRange: '29 October – 1 November 2026',
  city: 'Granada',
  region: 'Andalucía',
  country: 'Spain',
  nights: 4,
  fullPrice: { amount: 499, currency: 'EUR' },
  earlyPrice: { amount: 399, currency: 'EUR' },
  earlyPriceEndsAt: '2026-09-15T23:59:59+02:00',
  includes: [
    'Daily lectures and talks',
    'Walks',
    'Guided tour visits in Granada City',
    'A private concert',
  ],
  excludes: ['Flights', 'Airport transfer', 'Accommodation', 'Most meals'],
};

export const curriculum: CurriculumEntry[] = [
  {
    id: 'modern-colonialism',
    title: 'The history of modern colonialism',
    body: 'From its beginnings in the conquest of Al-Ándalus to the present-day conflict in Palestine, taught as one continuous history rather than as separate episodes.',
  },
  {
    id: 'decolonizing-knowledge',
    title: 'Decolonizing knowledge and spirituality',
    body: 'The theory of how knowledge itself was colonized, and what it means to think and believe outside the frame that colonization left behind.',
  },
  {
    id: 'gender-and-race',
    title: 'Gender, racial injustice and the origins of whiteness',
    body: 'A decolonial perspective on how race and gender were constructed together, and where the idea of whiteness actually came from.',
  },
  {
    id: 'spiritual-ecology',
    title: 'Islamic spiritual ecology',
    body: 'The modern rift between ourselves and the natural world, read through an Islamic ecological tradition that never accepted the separation.',
  },
  {
    id: 'i-am-if-you-are-not',
    title: 'I Am If You Are Not',
    body: 'The hidden principle of Western civilization. Lectures examining contemporary political and civilizational challenges from a decolonial perspective, focused on community, collective struggle, and alternatives to the Modernity/Coloniality paradigm.',
  },
];

/**
 * The two views of the city itself, shown as a pair. Each carries its own
 * caption naming the place, because a photograph of a street that isn't
 * labelled is decoration — and on this page the place is the argument.
 */
export const granadaPlates = [
  {
    id: 'albaicin',
    src: '/granada/albaicin-geraniums.jpg',
    alt: 'A whitewashed lane in the Albaicín hung with pots of red geraniums, a Moorish-style tower with a tiled inscription band rising behind the rooftops.',
    caption: 'The Albaicín: the old Moorish quarter, on the hill facing the Alhambra.',
  },
  {
    id: 'alhambra-tower',
    src: '/granada/alhambra-columns.jpg',
    alt: 'Intricately carved stucco arches and slender columns in the Alhambra, muqarnas honeycomb vaulting and bands of Arabic calligraphy layered above a horseshoe arch.',
    caption: 'The Alhambra: its walls carved through with a script most visitors can no longer read.',
  },
] as const;

/** What the four days are actually made of, on the ground. */
export const onTheGround: CurriculumEntry[] = [
  {
    id: 'albaicin',
    title: 'The Albaicín, on foot',
    body: 'Field trips through the old Moorish quarter and the city of Granada. The history is taught where it happened, which is the reason the programme is held here and not in a lecture hall.',
  },
  {
    id: 'concert',
    title: 'A private concert by Al Firdaus',
    body: 'Andalusian Morisco music, performed for the group. It sits inside the curriculum rather than beside it.',
  },
  {
    id: 'lectures',
    title: 'Daily lectures and talks',
    body: 'Four days of teaching from faculty who have spent decades on this material, with time built in for the conversations that follow.',
  },
];

export const faculty: FacultyMember[] = [
  {
    id: 'chaimaa-boukharsa',
    name: 'Chaimaa Boukharsa',
    role: 'Philologist, islamologist and decolonial activist',
    bio: 'Specialized in antiracism, cultural diversity and islamophobia. Co-founder of Afrocolectiva.',
    portrait: '/faculty/chaimaa-boukharsa.jpg',
    portraitIsPlaceholder: true,
  },
  {
    id: 'ramon-grosfoguel',
    name: 'Ramón Grosfoguel',
    role: 'Sociologist and Professor, Department of Ethnic Studies, UC Berkeley',
    bio: 'Internationally recognized for over three decades of work on the decolonization of knowledge and power.',
    portrait: '/faculty/ramon-grosfoguel.jpg',
    portraitIsPlaceholder: true,
  },
  {
    id: 'medina-whiteman',
    name: 'Medina Whiteman',
    role: 'Writer, poet and singer based in the Alpujarras of Granada',
    bio: 'Author of The Invisible Muslim: Journeys Through Whiteness and Islam, among other titles. SOAS graduate in African Language & Culture.',
    portrait: '/faculty/medina-whiteman.jpg',
    portraitIsPlaceholder: true,
  },
  {
    id: 'katya-colmenares',
    name: 'Katya Colmenares',
    role: 'Philosopher and theologian of liberation',
    bio: 'Decolonial thinker and Director of the Enrique Dussel Library Series with Editorial Akal. Author of many books and articles on the Unknown Marx and indigenous cosmologies.',
    portrait: '/faculty/katya-colmenares.jpg',
    portraitIsPlaceholder: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-2026-04',
    quote:
      'Each lecture was eye-opening in its own way. Ramón Grosfoguel’s analysis of the fall of Al-Andalus helped me understand its historical significance and its continuing impact on the modern world. Chaimaa Boukharsa’s work on white feminism was particularly powerful, offering a clear and compelling critique that challenged many of my assumptions. Together, the programme provided an intellectually rigorous and deeply transformative learning experience.',
    // The April 2026 cohort. The month is load-bearing: without it this reads
    // as a review of the October 2026 edition, which has not happened yet.
    attribution: 'Participant, Decolonial Dialogues, April 2026',
  },
  {
    id: 't-2025-a',
    quote:
      'What began as a journey to Granada became much more than an educational experience. It was a profound encounter with histories of colonialism, resistance, memory, and healing. Through the lectures, conversations, and collective reflections, I came to understand more deeply how contemporary struggles against racism, Islamophobia, and other forms of oppression are connected to longer histories of colonial violence and erasure.',
    attribution: 'Participant, Decolonial Dialogues 2025',
  },
  {
    id: 't-2025-b',
    quote:
      'The programme challenged me intellectually, politically, and personally. I left with a deeper understanding of the significance of Al-Andalus, the colonial foundations of modernity, and the importance of decolonising knowledge. More importantly, I left with a renewed sense of responsibility and hope, inspired by the people, stories, and communities I encountered throughout the experience.',
    attribution: 'Participant, Decolonial Dialogues 2025',
  },
  {
    id: 't-2024',
    quote:
      'I now understand more deeply that the fight against racism, Islamophobia and colonial violence are inseparably connected.',
    attribution: 'Participant, Decolonial Dialogues 2024',
  },
];

/**
 * CC BY and CC BY-SA both require visible attribution, so these render in the
 * footer. Do not add an image here without its licence and source.
 */
export const imageCredits: ImageCredit[] = [
  {
    src: '/granada/alhambra-sierra-nevada.jpg',
    title: 'View from Mirador de San Nicolás',
    author: 'Diego Delso',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Granada_-_View_from_Mirador_de_San_Nicol%C3%A1s_-_02.jpg',
    source: 'Wikimedia Commons',
  },
  {
    src: '/granada/albaicin-geraniums.jpg',
    title: 'A street in the Albaicín',
    author: 'Daniele Buso',
    licence: 'Unsplash License',
    licenceUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/vHDCxL9cy70',
    source: 'Unsplash',
    cropped: true,
  },
  {
    src: '/granada/alhambra-columns.jpg',
    title: 'Muqarnas-carved arches, the Alhambra',
    author: 'Izuddin Helmi Adnan',
    licence: 'Unsplash License',
    licenceUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/a-large-ornate-building-with-columns-Avj33IMYv2g',
    source: 'Unsplash',
    cropped: true,
  },
  {
    src: '/granada/zellij-tile-course.jpg',
    title: 'Glazed zellij tilework, the Alhambra',
    author: 'Izuddin Helmi Adnan',
    licence: 'Unsplash License',
    licenceUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/seIHWcNL_EQ',
    source: 'Unsplash',
    cropped: true,
  },
  {
    src: '/granada/alhambra-arch-frame.jpg',
    title: 'The Alhambra through a carved Nasrid arch',
    author: 'Jorge Fernández Salas',
    licence: 'Unsplash License',
    licenceUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/yteO5bs_QCA',
    source: 'Unsplash',
    cropped: true,
  },
  {
    src: '/granada/alhambra-arabesque-band.jpg',
    title: 'Carved plaster inscription, the Alhambra',
    author: 'Izuddin Helmi Adnan',
    licence: 'Unsplash License',
    licenceUrl: 'https://unsplash.com/license',
    sourceUrl: 'https://unsplash.com/photos/seIHWcNL_EQ',
    source: 'Unsplash',
    cropped: true,
  },
  {
    src: '/granada/puerta-de-la-justicia.jpg',
    title: 'Puerta de la Justicia, the Alhambra',
    author: 'Palickap',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Granada,_Alhambra,_Puerta_de_la_Justicia.jpg',
    source: 'Wikimedia Commons',
  },
];

export function formatMoney({ amount, currency }: Money): string {
  return currency === 'EUR' ? `€${amount}` : `${amount} ${currency}`;
}

/** True while the early rate is still on sale. Evaluated at render time. */
export function isEarlyRateOpen(now: Date = new Date()): boolean {
  return now.getTime() <= new Date(edition.earlyPriceEndsAt).getTime();
}

/** The price a visitor pays today, plus the rate that is no longer available. */
export function currentPricing(now: Date = new Date()) {
  const early = isEarlyRateOpen(now);
  return {
    early,
    payable: early ? edition.earlyPrice : edition.fullPrice,
    wasPrice: early ? edition.fullPrice : null,
    endsAt: new Date(edition.earlyPriceEndsAt),
  };
}

export function formatDeadline(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    timeZone: 'Europe/Madrid',
  }).format(date);
}

/** Subject line does real work here: bookings arrive in a human inbox. */
export function bookingMailto(): string {
  const subject = `Booking enquiry · ${programme.name}, ${edition.label}`;
  const body = [
    `I'd like to reserve a place on ${programme.name}, ${edition.dateRange}, in ${edition.city}.`,
    '',
    'Name:',
    'Number of places:',
    'Anything you would like us to know:',
    '',
  ].join('\n');
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
