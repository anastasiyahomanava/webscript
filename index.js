//index.js for index.html project
/*********************************** Header *******************************************/
let lineX, lineY, divs, elem, arrayBlock = [];

function element() {
  lineY = document.documentElement.clientHeight / 100 * 15; // округлить до целого числа
  lineX = document.documentElement.clientWidth / 2;
  return elem = document.elementFromPoint(lineX, lineY);
}


let downHeader = document.getElementsByClassName("header-hide");
let block = document.getElementById("block");
window.onload = function getArrayPoint() {
  [].forEach.call(block.children, (elem) => {
    divs = elem.getBoundingClientRect()
    arrayBlock.push({
      name: elem,
      top: Math.round((divs.top) / 100) * 100
    });
  })
};

document.addEventListener("scroll", () => {
  element();
  let pointScroll = Math.round((pageYOffset + lineY) / 100) * 100;
  switch (pointScroll) {
    case 200:
      console.log(downHeader[0].className, pointScroll)
      return downHeader[0].classList.add("header_active")

    case 100:
      console.log(pointScroll + "-")
      return downHeader[0].classList.remove("header_active")

  }
})

// **********************************************move to links for sites*************************************************
var linkNav = document.querySelectorAll('[href^="#"]');
V = 0.5;  // скорость
for (var i = 0; i < linkNav.length; i++) {
  if (i <= 4) { linkNav[i].addEventListener("click", () => document.getElementsByClassName("sail_menu_active")[0].classList.remove("sail_menu_active")) }
  linkNav[i].onclick = function () {
    document.body.classList.remove("overflow_hidden");
    var w = window.pageYOffset,
      hash = this.href.replace(/[^#]*(.*)/, '$1');
    t = document.querySelector(hash).getBoundingClientRect().top,
      start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) { requestAnimationFrame(step) } else { location.hash = hash }
    }
    return false;
  }
}

//***********************************************************************************************/
/// chenge a variables for clienWidth <= 375 ///
if (document.body.clientWidth <= 375) {

  let more_info = document.getElementsByClassName("more_info")[0];

  [].forEach.call(document.getElementsByClassName("advantages__card"), (item, i) => { if (i > 2) item.classList.add("hidden") });

  more_info.addEventListener("click", function () {

    [].forEach.call(document.getElementsByClassName("advantages__card"), (item, i) => {
      item.classList.remove("hidden");
    });

    more_info.style = "display: none";

  });

} else {
  document.getElementsByClassName("more_info")[0].style.display = "none"
}