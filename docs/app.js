// Voidrey — static site interactions (no dependencies)
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// scroll reveal
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

if (!reduce) {
  // ambient aura follows the pointer
  const aura = document.querySelector(".aura");
  window.addEventListener("pointermove", (e) => {
    aura?.style.setProperty("--px", `${(e.clientX / window.innerWidth) * 100}%`);
    aura?.style.setProperty("--py", `${(e.clientY / window.innerHeight) * 100}%`);
  });

  // hero portrait parallax
  document.querySelectorAll("[data-parallax]").forEach((frame) => {
    frame.addEventListener("pointermove", (e) => {
      const r = frame.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      frame.style.setProperty("--mx", `${x * 18}px`);
      frame.style.setProperty("--my", `${y * 14}px`);
    });
    frame.addEventListener("pointerleave", () => {
      frame.style.setProperty("--mx", "0px");
      frame.style.setProperty("--my", "0px");
    });
  });
}
