const navMenu = document.querySelector(".nav-mobile");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const mainContainer = document.querySelector(".main-container");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".nav-mobile.close");
const navLinkMobile = document.querySelector(".nav-links");
navMenu.addEventListener("click", () => {
  if (navMenu.classList.contains("nav-mobile")) {
    navMenu.classList.toggle("nav-close");
    main.style.display = "none";
    footer.style.display = "none";
    navLinks.style.display = "block";
    navLinkMobile.style.width = "100%";
  }
});

// Animation
let slideScene;
let findContainerScene;
let controller;
const introText = document.querySelector(".intro-text");
const introImg = document.querySelector(".intro-img");
const gsapTimeline = gsap.timeline({
  defaults: { duration: 1, ease: "power2.inOut" },
});

gsapTimeline.fromTo(introText, { x: "-50%" }, { x: "0%" });
gsapTimeline.fromTo(introText, { opacity: 0 }, { opacity: 1 }, "-=1");
gsapTimeline.fromTo(introImg, { y: "100%" }, { y: "0%" }, "-=1");
gsapTimeline.fromTo(introImg, { opacity: 0 }, { opacity: 1 }, "-=1");

//Initialize controller
controller = new ScrollMagic.Controller();
const sliders = document.querySelectorAll(".slide");
sliders.forEach((slide) => {
  const slideTimeline = gsap.timeline({
    defaults: { duration: 1, ease: "power2.inOut" },
  });

  const headerText = slide.querySelector(".header-text hr");
  slideTimeline.fromTo(headerText, { x: "100%" }, { x: "0%" });
  slideTimeline.fromTo(
    headerText,
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1 }
  );
  slideTimeline.fromTo(
    ".header-text h1",
    { x: "100%", opacity: 0, scale: 0 },
    { x: "0%", opacity: 1, scale: 1 },
    "-=0.8"
  );

  slideTimeline.fromTo(".snappy-process", { scale: 0 }, { scale: 1 });
  slideTimeline.fromTo(
    ".affordable-process",
    { scale: 0 },
    { scale: 1 },
    "-=1"
  );
  slideTimeline.fromTo(".people-first", { scale: 0 }, { scale: 1 }, "-=1");

  const findOutContainer = slide.querySelector(".findout-container");
  const findOutText = slide.querySelector(".findout-text");
  const findoutBtn = slide.querySelector(".findout-btn");
  slideTimeline.fromTo(findOutContainer, { opacity: 0 }, { opacity: 1 });
  slideTimeline.fromTo(findOutText, { scale: 0 }, { scale: 1 }, "-=1");
  slideTimeline.fromTo(findoutBtn, { scale: 0 }, { scale: 1 }, "-=1");

  //Create Scene
  slideScene = new ScrollMagic.Scene({
    triggerElement: slide,
    triggerHook: 0.25,
    reverse: false,
  }).addTo(controller);
});
