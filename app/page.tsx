import type { Metadata } from "next";
import { Photo } from "./_components/photo";
import { SiteHeader } from "./_components/site-header";
import { InstagramFeed } from "./_components/instagram-feed";
import {
  ArrowRight,
  Check,
  Chevron,
  Mail,
  Minus,
  Pomegranate,
} from "./_components/icons";
import {
  bookingMailto,
  contact,
  curriculum,
  currentPricing,
  edition,
  faculty,
  formatDeadline,
  formatMoney,
  granadaPlates,
  imageCredits,
  onTheGround,
  programme,
  testimonials,
  travelOptions,
} from "@/data/edition";
import type { ImagePath } from "@/data/image-meta";

/*
  Re-rendered hourly so the early rate closes on its own. The €399 rate ends
  15 September; nobody should have to remember to deploy that day.
*/
export const revalidate = 3600;

export const metadata: Metadata = {
  title: `${edition.city}, ${edition.label}`,
};

const CONTAINER = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export default function Home() {
  const pricing = currentPricing();

  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Manifesto />
        <Curriculum />
        <OnTheGround />
        <Faculty />
        <Voices />
        <Cost />
        <GettingThere />
        <Lately />
        <Close />
      </main>
      <SiteFooter />
    </>
  );

  function Hero() {
    return (
      <section
        id="top"
        className="relative isolate flex min-h-[100svh] flex-col justify-end"
      >
        <Photo
          src="/granada/alhambra-sierra-nevada.jpg"
          alt="The Alhambra on its wooded hill above Granada, with the snow-covered peaks of the Sierra Nevada rising behind it in late afternoon light."
          className="absolute inset-0 -z-10"
          imgClassName="hero-settle object-[52%_42%]"
          /*
            This box is min-h-[100svh], so on a narrow phone object-cover
            scales to the *height*, not 100vw — plain "100vw" told the
            browser to fetch a much smaller bucket than it actually needed
            and the upscaled result went soft. 178vh matches the photo's own
            aspect ratio, so the requested width always covers whichever
            dimension object-cover is scaling to.
          */
          sizes="max(100vw, 178vh)"
          priority
        />
        {/*
          Clay only where the text sits, clearing fast: solid behind the copy,
          then a very light reach all the way up the frame so the Alhambra and
          the Sierra Nevada still read as a photograph, not a wash. An earlier
          version tinted the whole frame down to 40% at the very top and read
          as the clay flooding the page.
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--color-clay)_0%,var(--color-clay)_6%,color-mix(in_srgb,var(--color-clay)_35%,transparent)_60%,color-mix(in_srgb,var(--color-clay)_12%,transparent)_80%,transparent_100%)]"
        />

        <div className={`${CONTAINER} pt-32 pb-16 sm:pb-20`}>
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.9rem,9vw,6rem)]">{programme.name}</h1>
            <p className="mt-5 font-display text-[clamp(1.35rem,3.4vw,2rem)] leading-[1.28] text-paper/90 italic">
              {programme.tagline}
            </p>
            {/* Names the category outright: a visitor off Instagram must know
                this is a course, not a tour, inside the first viewport. */}
            <p className="ui mt-7 text-base text-muted sm:text-lg">
              <span className="block sm:inline">
                A four-day course in {edition.city}, {edition.region}
              </span>
              <span aria-hidden="true" className="mx-2.5 hidden text-faint sm:inline">
                ·
              </span>
              {/* Kept whole: the date must never break between day and month. */}
              <span className="mt-1 block sm:mt-0 sm:inline">
                {edition.dateRange}
              </span>
            </p>
          </div>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <a
              href={bookingMailto()}
              className="ui group inline-flex items-center gap-3 rounded-full bg-saffron px-7 py-3.5 text-base font-medium text-clay-sunk transition-colors hover:bg-saffron-lit"
            >
              Reserve a place
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
            </a>
            <p className="ui text-sm leading-relaxed text-muted">
              {pricing.early ? (
                <>
                  <span className="font-medium text-paper">
                    {formatMoney(pricing.payable)}
                  </span>{" "}
                  until {formatDeadline(pricing.endsAt)}, then{" "}
                  {formatMoney(edition.fullPrice)}
                </>
              ) : (
                <>
                  <span className="font-medium text-paper">
                    {formatMoney(pricing.payable)}
                  </span>{" "}
                  · places are booked by email
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    );
  }

  /*
    The promise the rest of the page has to keep. It opens on a course of real
    alicatado: in the Nasrid palaces the tiled dado runs along the base of every
    plastered wall, so a band of tile is the Alhambra's own way of marking a
    change of surface. It replaces the drawn ornament that used to sit here.
  */
  function Manifesto() {
    return (
      <section className="border-b border-rule bg-clay-raised">
        <Photo
          src="/granada/zellij-tile-course.jpg"
          alt="A course of hand-cut Nasrid zellij in the Alhambra: a diamond lattice of glazed tile in turquoise, deep green and gold, each cell bordered in white."
          className="relative aspect-[5/1] w-full sm:aspect-[9/1] lg:aspect-[12/1]"
          sizes="100vw"
        />
        <div
          className={`${CONTAINER} flex flex-col items-center py-28 text-center sm:py-36 lg:py-44`}
        >
          <p className="max-w-4xl font-display text-[clamp(1.85rem,4.6vw,3.1rem)] leading-[1.22] text-balance">
            {programme.manifesto.lead}
          </p>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted">
            {programme.manifesto.support}
          </p>
        </div>
      </section>
    );
  }

  function Curriculum() {
    return (
      <section id="programme" className="py-28 sm:py-36 lg:py-44">
        <div
          className={`${CONTAINER} grid gap-16 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-24`}
        >
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-[clamp(2rem,4.4vw,3.1rem)]">
              What you&rsquo;ll study
            </h2>
            <p className="measure mt-7 text-muted">
              Five threads, taught across four days. They are meant to be
              followed in order, because each one explains the next.
            </p>
          </div>

          <ol className="grid gap-0">
            {curriculum.map((entry, i) => (
              <li
                key={entry.id}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                className="border-t border-rule py-9 first:border-t-0 first:pt-0 last:pb-0"
              >
                <h3 className="text-[clamp(1.3rem,2.1vw,1.7rem)]">
                  {entry.title}
                </h3>
                <p className="measure mt-4 text-muted">{entry.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  /*
    Two layers of content that used to be tangled together: the plates are the
    city, each captioned with the place it shows, and the three programme
    entries are a level ruled row underneath. The old version staggered the
    columns and hung a photograph above whichever entry happened to be next to
    it, which read as a caption it was never writing.
  */
  function OnTheGround() {
    return (
      <section className="border-y border-rule bg-clay-raised">
        <Photo
          src="/granada/alhambra-arch-frame.jpg"
          alt="The city of Granada seen through a carved Nasrid horseshoe arch, the Alhambra's own towers rising among cypress trees below."
          className="relative aspect-[4/3] w-full sm:aspect-[16/9]"
          sizes="100vw"
        />

        <div className={`${CONTAINER} py-28 sm:py-36 lg:py-44`}>
          <div className="max-w-3xl">
            <h2 className="text-[clamp(2rem,4.4vw,3.1rem)]">
              Granada is not the backdrop
            </h2>
            <p className="measure mt-7 text-lg leading-relaxed text-muted">
              The conquest of Al-Ándalus began here, and the programme is held
              here for that reason. You read the history in the morning and
              stand in it during the afternoon.
            </p>
          </div>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-24 lg:gap-14">
            {granadaPlates.map((plate) => (
              <figure key={plate.id}>
                <Photo
                  src={plate.src as ImagePath}
                  alt={plate.alt}
                  className="relative aspect-[4/5] w-full"
                  sizes="(min-width: 640px) 46vw, 92vw"
                />
                <figcaption className="ui mt-5 text-sm leading-relaxed text-muted">
                  {plate.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* One rule across all three, so the row reads as a single course. */}
          <ul className="mt-20 grid gap-y-10 lg:mt-24 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-0">
            {onTheGround.map((item) => (
              <li key={item.id} className="border-t border-rule pt-8">
                <h3 className="text-[clamp(1.3rem,2.1vw,1.7rem)]">
                  {item.title}
                </h3>
                <p className="measure mt-4 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  function Faculty() {
    return (
      <section id="faculty" className="py-28 sm:py-36 lg:py-44">
        <div className={CONTAINER}>
          <div className="max-w-3xl">
            <h2 className="text-[clamp(2rem,4.4vw,3.1rem)]">Who teaches</h2>
            <p className="measure mt-7 text-lg leading-relaxed text-muted">
              Four teachers, each of whom has spent a career on this material.
              You do not need to have read any of them to come.
            </p>
          </div>

          <ul className="mt-20 grid gap-x-16 gap-y-16 sm:grid-cols-2 lg:mt-24 lg:gap-y-20">
            {faculty.map((person) => (
              <li
                key={person.id}
                className="flex flex-col gap-5 lg:flex-row lg:gap-6"
              >
                <Photo
                  src={person.portrait as ImagePath}
                  alt={`Portrait of ${person.name}.`}
                  className="relative h-24 w-24 shrink-0 rounded-full sm:h-28 sm:w-28"
                  sizes="112px"
                />
                <div className="min-w-0">
                  <h3 className="text-[clamp(1.3rem,2.1vw,1.7rem)] leading-tight">
                    {person.name}
                  </h3>
                  <p className="mt-2 leading-snug text-paper/75 italic">
                    {person.role}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  function Voices() {
    const [feature, ...rest] = testimonials;
    return (
      <section id="voices" className="border-y border-rule bg-clay-raised">
        <Photo
          src="/granada/alhambra-arabesque-band.jpg"
          alt="A carved plaster frieze in the Alhambra: a band of Arabic inscription in deep relief, framed by roundels and a run of finer interlaced ornament."
          className="relative aspect-[5/1] w-full sm:aspect-[7/1] lg:aspect-[9/1]"
          sizes="100vw"
        />
        <div className={`${CONTAINER} py-28 sm:py-36 lg:py-44`}>
          <h2 className="text-[clamp(2rem,4.4vw,3.1rem)]">
            What people leave with
          </h2>

          <figure className="mt-16 max-w-4xl lg:mt-20">
            <blockquote className="font-display text-[clamp(1.45rem,3vw,2.15rem)] leading-[1.32] text-balance">
              &ldquo;{feature.quote}&rdquo;
            </blockquote>
            <figcaption className="ui mt-8 text-sm text-muted">
              {feature.attribution}
            </figcaption>
          </figure>

          <ul className="mt-20 grid gap-x-16 gap-y-14 lg:mt-24 lg:grid-cols-3">
            {rest.map((t) => (
              <li
                key={t.id}
              >
                <figure className="border-t border-rule pt-8">
                  <blockquote className="text-[1.05rem] leading-relaxed text-paper/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="ui mt-6 text-sm text-muted">
                    {t.attribution}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  function Cost() {
    return (
      <section id="cost" className="py-28 sm:py-36 lg:py-44">
        <div className={CONTAINER}>
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-24">
            <div>
              <h2 className="text-[clamp(2rem,4.4vw,3.1rem)]">What it costs</h2>

              <p className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="font-display text-[clamp(3.25rem,8vw,5rem)] leading-none">
                  {formatMoney(pricing.payable)}
                </span>
                {pricing.wasPrice && (
                  <span className="ui text-2xl text-muted line-through decoration-1">
                    {formatMoney(pricing.wasPrice)}
                  </span>
                )}
              </p>

              {pricing.early && (
                <p className="ui mt-5 text-base text-saffron">
                  Early rate, 20% off, until {formatDeadline(pricing.endsAt)}.
                </p>
              )}

              <dl className="mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-8 border-t border-rule pt-10">
                <div>
                  <dt className="label">Dates</dt>
                  <dd className="mt-2">{edition.dateRange}</dd>
                </div>
                <div>
                  <dt className="label">Where</dt>
                  <dd className="mt-2">
                    {edition.city}, {edition.region}
                  </dd>
                </div>
                <div>
                  <dt className="label">Length</dt>
                  <dd className="mt-2">Four days</dd>
                </div>
                <div>
                  <dt className="label">To book</dt>
                  <dd className="mt-2">
                    <a
                      href={bookingMailto()}
                      className="underline decoration-faint underline-offset-4 transition-colors hover:decoration-saffron"
                    >
                      Email us
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <h3 className="label">Included</h3>
                <ul className="mt-6 space-y-3.5">
                  {edition.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3.5">
                      <Check className="mt-1 h-[18px] w-[18px] shrink-0 text-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="label">You arrange yourself</h3>
                <ul className="mt-6 space-y-3.5">
                  {edition.excludes.map((item) => (
                    <li key={item} className="flex items-start gap-3.5">
                      <Minus className="mt-1 h-[18px] w-[18px] shrink-0 text-faint" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /*
    Arrival routes are confirmed by the organizers. Accommodation guidance
    (neighbourhoods to stay in, rough nightly costs) is still pending, so
    that half of the section states only what is confirmed and routes the
    question to a human. Do not invent lodging recommendations.
  */
  function GettingThere() {
    return (
      <section className="border-y border-rule bg-clay-raised py-24 sm:py-32">
        <div
          className={`${CONTAINER} grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-24`}
        >
          <h2 className="text-[clamp(1.75rem,3.6vw,2.5rem)]">
            Getting there and staying
          </h2>
          <div>
            <p className="measure text-lg leading-relaxed">
              Flights, airport transfer, accommodation and most meals are not
              included, so you book your own travel and somewhere to sleep.
            </p>

            <ul className="mt-10 grid gap-y-8 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0">
              {travelOptions.map((option) => (
                <li key={option.id} className="border-t border-rule pt-6">
                  <h3 className="ui text-base font-medium">{option.title}</h3>
                  <p className="mt-2 text-muted">{option.body}</p>
                </li>
              ))}
            </ul>

            <p className="measure mt-10 text-muted">
              We are still putting together guidance on where to stay in
              Granada. In the meantime, write to us and we will help you plan
              it. This is the question we are asked most, and we would rather
              answer it properly than leave you guessing.
            </p>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(
                `Travel and accommodation · ${programme.name}, ${edition.label}`,
              )}`}
              className="ui mt-9 inline-flex items-center gap-3 border border-rule px-6 py-3 text-sm font-medium transition-colors hover:border-faint"
            >
              <Mail className="h-[18px] w-[18px] text-azure" />
              Ask us about travel
            </a>
          </div>
        </div>
      </section>
    );
  }

  function Lately() {
    return (
      <section className="py-24 sm:py-32">
        <div className={CONTAINER}>
          <h2 className="text-[clamp(1.75rem,3.6vw,2.5rem)]">From Granada</h2>
          <p className="measure mt-6 text-muted">
            Photographs and notes from each edition, posted as they happen.
          </p>
          <div className="mt-12">
            <InstagramFeed />
          </div>
        </div>
      </section>
    );
  }

  function Close() {
    return (
      <section className="relative isolate">
        <Photo
          src="/granada/puerta-de-la-justicia.jpg"
          alt="The Puerta de la Justicia, the great horseshoe-arched gate into the Alhambra, with a small group of visitors walking through it."
          className="absolute inset-0 -z-10"
          sizes="100vw"
        />
        {/*
          60% is the most clay this can take and still clear 4.5:1 for paper
          over the brightest cells of the vault — any heavier and the vault
          stops being visible, which was the whole reason for putting it here.
          A short clay fade at each seam so it arrives out of the page rather
          than sitting on top of it.
        */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-clay/60" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-clay)_0%,transparent_16%,transparent_84%,var(--color-clay)_100%)]"
        />
        <div
          className={`${CONTAINER} flex flex-col items-center py-32 text-center sm:py-40`}
        >
          <Pomegranate className="h-10 w-10 text-saffron" />
          <h2 className="mt-10 max-w-3xl text-[clamp(2.1rem,5.2vw,3.6rem)]">
            Come as you are
          </h2>
          <p className="ui mt-7 text-lg text-paper">
            {edition.city}, {edition.region}
            <span className="mx-2.5 text-muted">·</span>
            {edition.dateRange}
          </p>
          <a
            href={bookingMailto()}
            className="ui group mt-11 inline-flex items-center gap-3 rounded-full bg-saffron px-8 py-4 text-base font-medium text-clay-sunk transition-colors hover:bg-saffron-lit"
          >
            Reserve a place
            <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
          </a>
          <p className="ui mt-7 text-sm text-paper">
            Or write to{" "}
            <a
              href={`mailto:${contact.email}`}
              className="underline underline-offset-4 transition-colors hover:text-saffron"
            >
              {contact.email}
            </a>
          </p>
        </div>
      </section>
    );
  }

  function SiteFooter() {
    return (
      <footer className="border-t border-rule py-16 sm:py-20">
        <div className={CONTAINER}>
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-2.5">
              <Pomegranate className="h-5 w-5 text-saffron" />
              <span className="ui text-base font-medium">{programme.name}</span>
            </div>
            <ul className="ui flex flex-col gap-3 text-sm text-muted sm:items-end">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-paper"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  {contact.instagramHandle}
                </a>
              </li>
              <li>
                {edition.city}, {edition.region}, {edition.country}
              </li>
            </ul>
          </div>

          <details className="group mt-14 border-t border-rule pt-8">
            <summary className="ui flex cursor-pointer list-none items-center gap-2.5 text-sm text-muted transition-colors hover:text-paper [&::-webkit-details-marker]:hidden">
              <Chevron className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-open:rotate-90" />
              Photography credits
            </summary>
            <ul className="ui mt-6 grid gap-3 text-sm text-muted sm:grid-cols-2">
              {imageCredits.map((credit) => (
                <li key={credit.src}>
                  <a
                    href={credit.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-muted"
                  >
                    {credit.title}
                  </a>
                  {credit.cropped && ", cropped,"} by {credit.author},{" "}
                  <a
                    href={credit.licenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-muted"
                  >
                    {credit.licence}
                  </a>
                  , via {credit.source}
                </li>
              ))}
            </ul>
          </details>

          <p className="ui mt-10 text-sm text-muted">
            {programme.name} is organised by Diálogo Global.
          </p>
        </div>
      </footer>
    );
  }
}
