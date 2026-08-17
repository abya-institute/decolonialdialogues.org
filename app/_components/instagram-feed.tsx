"use client";

import { useEffect, useRef } from "react";
import { contact } from "@/data/edition";
import { ArrowRight, Instagram } from "./icons";

/*
  Vendor: Behold (behold.so). Chosen over LightWidget and EmbedSocial because
  it ships a single ES module with no jQuery, and it holds the Instagram token
  on its side so nothing here has to be refreshed.

  To switch the feed on: create a feed at behold.so, then set
  NEXT_PUBLIC_BEHOLD_FEED_ID in the environment. Until that exists this
  section degrades to a follow panel — never to invented posts, which would
  put fabricated content on a page whose whole claim is that it doesn't.

  The widget script is fetched only when the section approaches the viewport,
  so a third-party bundle can never delay first paint.
*/
const FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID;
const WIDGET_SRC = "https://w.behold.so/widget.js";

export function InstagramFeed() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!FEED_ID) return;
    const host = hostRef.current;
    if (!host) return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return;
      const script = document.createElement("script");
      script.src = WIDGET_SRC;
      script.type = "module";
      script.async = true;
      document.body.appendChild(script);
    };

    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(host);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={hostRef}>
      {FEED_ID && <div data-behold-id={FEED_ID} className="mb-12" />}

      {/*
        Always rendered, so it doubles as the standing fallback: if the widget
        script is blocked or fails, this section is still a complete thought
        rather than a heading above an empty div.
      */}
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
