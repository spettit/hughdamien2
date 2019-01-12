const titleDiv = document.querySelector("#title-div");
const hugh = document.querySelector("#hugh");
const damien = document.querySelector("#damien");
const subtitle = document.querySelector("#subtitle");
const mercs = document.querySelector("#mercs");
const scrollArrows = document.querySelector("#scroll-arrows");
const subTitleBar = document.querySelector("#subtitle-bar");
const contentWrapper = document.querySelector("#content-wrapper");
const menuDiv = document.querySelector("#menu-div");
const menuIcon = document.querySelector("#menu-icon");
const sectionSixTours = document.querySelector('#section-six-tours')

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

let isMenuOpen= false

menuIcon.addEventListener('transitionend', () => {
  console.log('transition end')
  if(!isMenuOpen) {
    menuDiv.classList.remove("is-open")
    menuDiv.classList.add("is-closed")
  }
})

function showMenu() {
  sendTitleToTop()
  menuIcon.classList.toggle("rotate-icon");
  if(!isMenuOpen) {
    contentWrapper.classList.add("slide-away");
    menuDiv.classList.add("is-open")
    menuDiv.classList.remove("is-closed")
    isMenuOpen = true;
  }else{
    contentWrapper.classList.remove("slide-away");
    
    isMenuOpen = false;
  }
  

  
}

window.onscroll = function() {
  sendTitleToTop()
};

function sendTitleToTop () {
  if (titleDiv.classList.contains("position-one")) {
    titleDiv.classList.remove("title-slow");
    titleDiv.classList.add("title-fast");
    titleDiv.classList.add("position-final");
    titleDiv.classList.remove("position-one");
    scrollArrows.style.visibility = "hidden";
  }
}

// $(window).on("beforeunload", function() {
//   $(window).scrollTop(0);
// });

window.onload = function() {
  runAnimation();
};

function scrollToTours() {
  window.scrollTo(0, 0)
  sectionSixTours.scrollIntoView({ 
    // behavior: 'smooth',
    inline: "end"
  });
  window.scrollTo(0, window.scrollY)
}
// window.onscroll = function () {
//   // console.log(window.scrollY)
//   window.scrollTo(0, window.scrollY)
// }

