var titleDiv = document.querySelector("#title-div");
var hugh = document.querySelector("#hugh");
var damien = document.querySelector("#damien");
var subtitle = document.querySelector("#subtitle");
var mercs = document.querySelector("#mercs");
var scrollArrows = document.querySelector("#scroll-arrows");
var subTitleBar = document.querySelector("#subtitle-bar");
var contentWrapper = document.querySelector("#content-wrapper");
var menuDiv = document.querySelector("#menu-div");
var menuIcon = document.querySelector("#menu-icon");
var fleet = document.querySelector("#section-three-fleet");
var airport = document.querySelector("#section-four-airport");
var tours = document.querySelector("#section-six-tours");
var contact = document.querySelector("#section-eight-contact");

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


var isMenuOpen = false;

// menuIcon.addEventListener("transitionend", () => {
//   console.log("transition end");
//   if (!isMenuOpen) {
//     menuDiv.classList.remove("is-open");
//     menuDiv.classList.add("is-closed");
//   }
// });



function sendTitleToTop() {
  if (titleDiv.classList.contains("position-one")) {
    titleDiv.classList.remove("title-slow");
    titleDiv.classList.add("title-fast");
    titleDiv.classList.add("position-final");
    titleDiv.classList.remove("position-one");
    scrollArrows.style.visibility = "hidden";
  }
}

function showMenu() {
  sendTitleToTop();
  menuIcon.classList.toggle("rotate-icon");
  if (!isMenuOpen) {
    contentWrapper.classList.add("slide-away");
    menuDiv.classList.add("is-open");
    menuDiv.classList.remove("is-closed");
    isMenuOpen = true;
  } else {
    contentWrapper.classList.remove("slide-away");
    isMenuOpen = false;
  }
}

function scrollToFleet() {
  window.scrollTo(0, 0);
  fleet.scrollIntoView({
  });
  window.scrollTo(0, window.scrollY);
}
function scrollToAirport() {
  window.scrollTo(0, 0);
  airport.scrollIntoView({
  });
  window.scrollTo(0, window.scrollY);
}
function scrollToTours() {
  window.scrollTo(0, 0);
  tours.scrollIntoView({

  });
  window.scrollTo(0, window.scrollY);
}
function scrollToContact() {
  window.scrollTo(0, 0);
  contact.scrollIntoView({

  });
  window.scrollTo(0, window.scrollY);
}

window.onscroll = function() {
  sendTitleToTop();
  // window.scrollTo(0, window.scrollY);
};

window.onload = function() {
  runAnimation();
};
