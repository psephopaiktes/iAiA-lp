window.console.log(
  "%c iAiA 🐙 %c\nhttps://github.com/psephopaiktes/iAiA",
  `
    background: #023;
    padding: 20px 40px;
    letter-spacing: .5em;
    color: #0fe;
    font-size: large;
    font-weight: bold;
    font-style: italic;
    text-align: center;
  `,
  `
    padding: 20px 0 40px;
  `
);

// Keyart Fadein
window.addEventListener("load", () => {
  document.getElementById("js-keyart").classList.add("show");
});

// Show CTA when scroll
const heroCta = document.getElementById("js-hero-cta");
const fixCta = document.getElementById("js-fix-cta");
const ctaObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    fixCta.classList.remove("show");
  } else {
    fixCta.classList.add("show");
  }
});
ctaObserver.observe(heroCta);

// Scroll reveal effect
const options = {
  root: null,
  rootMargin: "0px 0px -10%",
  threshold: 0
};
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, options);
document.querySelectorAll(".js-reveal").forEach(elm => {
  revealObserver.observe(elm);
});
