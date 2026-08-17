import type { Metadata, Viewport } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import "./globals.css";
import { RevealProvider } from "./_components/reveal-provider";
import { contact, edition, programme } from "@/data/edition";

/*
  Alegreya is a literature face by Juan Pablo del Peral — calligraphic, warm,
  built for long passages of argument. Its sans is the same superfamily, so
  labels and running text share one skeleton rather than being two unrelated
  fonts bolted together.
*/
const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const description = `A four-day course in ${edition.city}, ${edition.dateRange}. The history of modern colonialism, from the conquest of Al-Ándalus to Palestine today. No academic background required.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://decolonialdialogues.org"),
  title: {
    default: `${programme.name} — ${edition.city}, ${edition.label}`,
    template: `%s — ${programme.name}`,
  },
  description,
  openGraph: {
    title: `${programme.name} — ${edition.city}, ${edition.label}`,
    description,
    type: "website",
    locale: "en_GB",
    siteName: programme.name,
    images: [
      {
        url: "/granada/alhambra-sierra-nevada.jpg",
        width: 2400,
        height: 1349,
        alt: "The Alhambra on its hill above Granada, with the snow-covered Sierra Nevada behind it.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

/* The clay ground runs into the phone's own browser chrome. */
export const viewport: Viewport = {
  themeColor: "#6b2e22",
};

/*
  The direction contract. It ships in the built markup on purpose: it is the
  record of what this surface committed to, auditable after the build.
*/
const DIRECTION_CONTRACT = `<!--
THESIS: A course page that answers "would I be out of place here?" before it answers anything else. It refuses the anonymous retreat template by letting Granada and four real teachers carry the sell.
OWN-WORLD: The Alhambra's own clay as the ground — al-qal'a al-hamra, and Granada means pomegranate, so the ground is the fruit. Alegreya superfamily. Saffron, teal and azure lifted from Nasrid zellij; gold is what reads on red, which is what the Alhambra's own inscriptions do. Full-bleed Andalusi photography and real tilework, hairline rules, no cards.
STORY: A curious non-academic learns the door is open to them, sees who teaches and what it truly costs, and emails to reserve a place.
FIRST VIEWPORT: Full-bleed Alhambra against the snow-lit Sierra Nevada; name and dates lower-left over a scrim; "Reserve a place" beside the live early rate.
FORM: The category standard — the standing exit, taken by the client over the roll's assignment (grounded #5, field notebook). Seed key 270c6ae5.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${alegreya.variable} ${alegreyaSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-clay text-paper">
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        <a
          href="#main"
          className="ui sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-paper focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-clay-sunk"
        >
          Skip to content
        </a>
        <RevealProvider />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: programme.name,
              description,
              inLanguage: "en",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "onsite",
                startDate: edition.startDate,
                endDate: edition.endDate,
                location: {
                  "@type": "Place",
                  name: `${edition.city}, ${edition.region}`,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: edition.city,
                    addressRegion: edition.region,
                    addressCountry: "ES",
                  },
                },
              },
              provider: {
                "@type": "Organization",
                name: programme.name,
                email: contact.email,
                url: "https://decolonialdialogues.org",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
