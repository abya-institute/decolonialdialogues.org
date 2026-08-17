/*
  Runs synchronously during parse rather than after hydration, so the page
  never paints its content and then hides it again. Everything is visible in
  the served HTML; this script opts in to the animation only when the browser
  can honour it, and a watchdog reveals anything still hidden after 1.5s so a
  failed observer can never leave the page blank.
*/
const SCRIPT = `(function(){
  try {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var d = document;
    d.documentElement.classList.add('reveal-ready');
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('is-in');
          io.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.01 });
    var start = function () {
      var els = d.querySelectorAll('[data-reveal]');
      for (var i = 0; i < els.length; i++) io.observe(els[i]);
    };
    if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', start);
    else start();
    setTimeout(function () {
      var els = d.querySelectorAll('[data-reveal]:not(.is-in)');
      for (var i = 0; i < els.length; i++) {
        if (els[i].getBoundingClientRect().top < window.innerHeight) {
          els[i].classList.add('is-in');
        }
      }
    }, 1500);
  } catch (e) {
    document.documentElement.classList.remove('reveal-ready');
  }
})();`;

export function RevealProvider() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
