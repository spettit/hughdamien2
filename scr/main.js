const titleDiv = document.getElementById("title-div");
const hugh = document.getElementById("hugh");
const damien = document.getElementById("damien");
const subtitle = document.getElementById("subtitle");
const mercs = document.getElementById("mercs");
const scrollArrows = document.getElementById("scroll-arrows");
const subTitleBar = document.getElementById("subtitle-bar");
const contentWrapper = document.getElementById("content-wrapper");

function runAnimation() {
  titleDiv.classList.add("position-one");
  titleDiv.classList.remove("expanded");
  hugh.classList.remove("behidden");
  damien.classList.remove("behidden");
  subtitle.classList.remove("behidden");
  mercs.classList.remove("behidden");
  scrollArrows.classList.remove("behidden");
  subTitleBar.classList.remove("behidden");
}

function showMenu() {
  contentWrapper.classList.toggle("slide-away");
  document.getElementById("menu-icon").classList.toggle("rotate-icon");
}

window.onscroll = function() {
  if (titleDiv.classList.contains("position-one")) {
    titleDiv.classList.remove("title-slow");
    titleDiv.classList.add("title-fast");
    titleDiv.classList.add("position-final");
    titleDiv.classList.remove("position-one");
    scrollArrows.style.visibility = "hidden";
  }
};

// $(window).on("beforeunload", function() {
//   $(window).scrollTop(0);
// });

window.onload = function() {
  runAnimation();
};
