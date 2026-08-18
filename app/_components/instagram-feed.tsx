import { contact } from "@/data/edition";
import { ArrowRight, Instagram, Play } from "./icons";
import { Photo } from "./photo";

/*
  Vendor: Behold (behold.so). Chosen over LightWidget and EmbedSocial because
  it ships a single ES module with no jQuery, and it holds the Instagram token
  on its side so nothing here has to be refreshed.

  To switch the feed on: create a feed at behold.so, then set
  NEXT_PUBLIC_BEHOLD_FEED_ID in the environment. Until that exists this
  section shows a hand-picked set of reels as local thumbnails — see REELS
  below — each linking out to the real post. The thumbnails are downloaded
  once (not fetched live) because a live embed depends on Instagram's script
  reaching the visitor's browser at render time, which is exactly the kind of
  third-party fragility this fallback exists to avoid.
*/
const FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID;

/*
  Hand-picked while no live feed is configured. Once NEXT_PUBLIC_BEHOLD_FEED_ID
  is set this list stops rendering — see the fallback below — so it never
  needs to be removed by hand, only left to go stale under a real feed.

  Thumbnails are saved locally at public/instagram/ (see data/image-meta.ts).
  To refresh one: open the reel, save its cover image over the matching file,
  then run `node scripts/optimize-images.mjs`.
*/
const REELS = [
  {
    url: "https://www.instagram.com/decolonialdialogues/reel/DZ2USPPorj-/",
    thumb: "/instagram/reel-1.jpg",
  },
  {
    url: "https://www.instagram.com/decolonialdialogues/reel/Da5l71bIcri/",
    thumb: "/instagram/reel-2.jpg",
  },
  {
    url: "https://www.instagram.com/decolonialdialogues/reel/DUyNVa8CGK-/",
    thumb: "/instagram/reel-3.jpg",
  },
] as const;

export function InstagramFeed() {
  return (
    <div>
      {FEED_ID && <div data-behold-id={FEED_ID} className="mb-12" />}

      {!FEED_ID && (
        <ol className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {REELS.map((reel, i) => (
            <li key={reel.url}>
              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch reel ${i + 1} on Instagram`}
                className="group relative block"
              >
                <Photo
                  src={reel.thumb}
                  alt=""
                  className="relative aspect-[9/16] rounded-lg"
                  sizes="(min-width: 640px) 33vw, 50vw"
                  imgClassName="transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-clay-sunk/0 transition-colors duration-500 group-hover:bg-clay-sunk/25">
                  <Play className="h-9 w-9 text-paper opacity-0 drop-shadow transition-opacity duration-500 group-hover:opacity-100" />
                </span>
              </a>
            </li>
          ))}
        </ol>
      )}

      <a
        href={contact.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-start gap-5 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <span className="flex items-center gap-4">
          <Instagram className="h-7 w-7 shrink-0 text-azure" />
          <span>
            <span className="ui block text-lg font-medium text-paper">
              {contact.instagramHandle}
            </span>
            <span className="ui block text-sm text-muted">
              Lectures, walks and the city, as the group finds it.
            </span>
          </span>
        </span>
        <span className="ui inline-flex items-center gap-2 text-sm font-medium text-saffron">
          Follow on Instagram
          <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
        </span>
      </a>
    </div>
  );
}
