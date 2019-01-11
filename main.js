

function runAnimation() {
  const titleDiv = document.getElementById('title-div')
  const hugh = document.getElementById('hugh')
  const damien = document.getElementById('damien')
  const subtitle = document.getElementById('subtitle')
  const mercs = document.getElementById('mercs')
  const scrollArrows = document.getElementById('scroll-arrows')

  titleDiv.classList.add('position-one')
  titleDiv.classList.remove('expanded')
  hugh.classList.remove('behidden')
  damien.classList.remove('behidden')
  subtitle.classList.remove('behidden')
  mercs.classList.remove('behidden')
  scrollArrows.classList.remove('behidden')
}


function showMenu() {
  const contentWrapper = document.getElementById('content-wrapper')
  contentWrapper.classList.toggle('slide-away')
  document.getElementById('menu-icon').classList.toggle('rotate-icon');
}

// window.addEventListener('scroll')
window.onscroll = function() {
    var titleDiv = document.getElementById('title-div')
    if(titleDiv.classList.contains("position-one")){
      titleDiv.classList.remove("title-slow")
      titleDiv.classList.add('title-fast')
      titleDiv.classList.add('position-final')
      titleDiv.classList.remove("position-one")
    }
}


window.onload = function() {
  runAnimation()
}


