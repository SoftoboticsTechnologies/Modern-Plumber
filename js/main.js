/* Shared page interactions: scroll reveal and FAQ accordions. */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduceMotion) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Accordions ---------- */
  document.querySelectorAll("[data-accordion]").forEach(function (accordion) {
    var items = accordion.querySelectorAll(".accordion__item");

    function setItem(item, open) {
      var trigger = item.querySelector(".accordion__trigger");
      var panel = item.querySelector(".accordion__panel");
      item.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", String(open));
      if (open) panel.removeAttribute("inert");
      else panel.setAttribute("inert", "");
    }

    items.forEach(function (item) {
      setItem(item, item.classList.contains("is-open"));
      item.querySelector(".accordion__trigger").addEventListener("click", function () {
        var willOpen = !item.classList.contains("is-open");
        // One item open at a time, matching the original accordion widget.
        items.forEach(function (other) { if (other !== item) setItem(other, false); });
        setItem(item, willOpen);
      });
    });
  });

  /* ---------- Hosted videos: honour the original 14s clip end with looping ---------- */
  document.querySelectorAll("video[data-end]").forEach(function (video) {
    var end = parseFloat(video.getAttribute("data-end"));
    video.addEventListener("timeupdate", function () {
      if (video.currentTime >= end) {
        video.currentTime = 0;
        if (video.loop) video.play();
        else video.pause();
      }
    });
  });
})();
