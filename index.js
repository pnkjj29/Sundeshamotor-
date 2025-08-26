// ---- Variables ----
const slider = document.querySelector('#slider');
let sliderSections = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSections[sliderSections.length - 1];

const btnLeft = document.querySelector("#btn--left");
const btnRight = document.querySelector("#btn--right");
const navLinks = document.querySelectorAll('.nav__link');

// Insert last section at the beginning
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

let autoSlide = setInterval(next, 5000); // auto slide every 5s

// ---- Events ----
btnRight.addEventListener('click', () => {
  next();
  resetInterval();
});

btnLeft.addEventListener('click', () => {
  prev();
  resetInterval();
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('#menu').checked = false; // close menu
  });
});

// ---- Functions ----
function next() {
  let firstSection = document.querySelectorAll('.slider__section')[0];
  slider.style.marginLeft = "-200vw";
  slider.style.transition = "all 0.3s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', firstSection);
    slider.style.marginLeft = "-100vw";
  }, 300);
}

function prev() {
  let sections = document.querySelectorAll(".slider__section");
  let lastSection = sections[sections.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.3s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', lastSection);
    slider.style.marginLeft = "-100vw";
  }, 300);
}

// Reset auto slide interval after manual navigation
function resetInterval() {
  clearInterval(autoSlide);
  autoSlide = setInterval(next, 5000);
}
