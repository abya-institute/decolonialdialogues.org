"use client";

import { useEffect, useState } from "react";
import { bookingMailto, programme } from "@/data/edition";
import { Pomegranate } from "./icons";

const NAV = [
  { href: "#programme", label: "Programme" },
  { href: "#faculty", label: "Faculty" },
  { href: "#voices", label: "Voices" },
  { href: "#cost", label: "What it costs" },
];

/**
 * Sits transparent over the hero photograph and takes on a ground once the
 * visitor scrolls past it, so the reserve action is always legible without a
 * permanent bar cutting into the opening image.
 */
export function SiteHeader() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const onScroll = () => setSettled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        settled
          ? "border-b border-rule bg-clay/92 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      {/*
        Over the hero the sky is bright enough to swallow the nav, so an
        unsettled header carries its own scrim rather than a solid ground.
      */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-clay/70 to-transparent transition-opacity duration-500 ${
          settled ? "opacity-0" : "opacity-100"
        }`}
      />
      {/*
        The bar is deliberately tall. It is the only permanent chrome on a page
        whose every other element is generous, and at 64px it read as a strip
        laid over the design rather than part of it.
      */}
      <div className="relative mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-6 px-5 sm:h-20 sm:px-8 lg:h-[5.5rem]">
        <a
          href="#top"
          className="flex items-center gap-3 text-paper transition-opacity hover:opacity-80"
        >
          <Pomegranate className="h-6 w-6 shrink-0 text-saffron sm:h-7 sm:w-7" />
          <span className="ui text-lg font-medium tracking-tight sm:text-xl">
            {programme.name}
          </span>
        </a>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="ui flex items-center gap-10 text-[1.0625rem] font-medium text-muted">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={bookingMailto()}
          className="ui shrink-0 rounded-full bg-saffron px-5 py-2.5 text-sm font-medium text-clay-sunk transition-colors hover:bg-saffron-lit sm:px-6 sm:text-[1.0625rem]"
        >
          Reserve a place
        </a>
      </div>

      {/*
        Below lg the anchors have nowhere to sit in the bar, and this page is
        roughly 12,000px on a phone. They appear as their own scrollable row
        once the visitor leaves the hero, so wayfinding exists everywhere it is
        needed without laying chrome over the opening photograph.
      */}
      <nav
        aria-label="Sections"
        className={`relative overflow-hidden border-t border-rule transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          settled ? "max-h-14 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="ui flex items-center gap-7 overflow-x-auto px-5 py-3 text-sm font-medium text-muted [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden">
          {NAV.map((item) => (
            <li key={item.href} className="shrink-0">
              <a href={item.href} className="transition-colors hover:text-paper">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
