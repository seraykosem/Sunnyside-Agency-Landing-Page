"use strict";

const mobileNav = document.querySelector(".mobile-link");
const mobileLinks = document.querySelector(".mobile-nav-links");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const allLinks = document.querySelectorAll(`a`);

// Mobile Nav

let counter = 0;

const openNav = function () {
  mobileLinks.style.display = "flex";
  mobileLinks.style.transition = "all 0.5s ease-in";
  mobileLinks.style.visibility = "visible";
  mobileNav.style.filter = "brightness(0%)";
  mobileLinks.style.transform = "translateX(0%)";
  counter = 1;
};

const closeNav = function () {
  mobileNav.style.filter = "";
  mobileLinks.style.transform = "translateX(100%)";
  mobileLinks.style.visibility = "hidden";
  counter = 0;
};

// Nav Button Event Listener
mobileNav.addEventListener(`click`, function (e) {
  if (counter === 1) {
    return closeNav();
  }

  if (counter === 0) {
    return openNav();
  }
});

// Mobile Nav Links event Listener
mobileNavLinks.forEach((link) =>
  link.addEventListener(`click`, function (e) {
    closeNav();
  })
);

// All Links Event Listener & Scrolling
allLinks.forEach((link) =>
  link.addEventListener(`click`, function (e) {
    e.preventDefault();

    const href = link.getAttribute(`href`);

    // Scroll back to Top
    if (href === `#`) window.scrollTo({ top: 0, behavior: "smooth" });

    // Scroll to other links
    if (href !== `#` && href.startsWith(`#`)) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  })
);