var windowWidth = window.innerWidth;

var horLength = document.querySelector(".element-wrapper").scrollWidth;
var horLength2 = document.querySelector(".element-wrapper2").scrollWidth;

var distFromTop = document.querySelector(".horizontal-section").offsetTop;
var distFromTop2 = document.querySelector(".horizontal-section2").offsetTop;

var scrollDistance = distFromTop + horLength - windowWidth;
var scrollDistance2 = distFromTop2 + horLength2 - windowWidth;

document.querySelector(".horizontal-section").style.height = horLength + "px";

document.querySelector(".horizontal-section2").style.height = horLength2 + "px";

window.onscroll = function(){
  var scrollTop = window.pageYOffset;
  
  if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
    document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
  }
  
  if (scrollTop >= distFromTop2 && scrollTop <= scrollDistance2) {
    document.querySelector(".element-wrapper2").style.transform = "translateX(-"+(scrollTop - distFromTop2)+"px)";
  }
}

// Lav streg

let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
  // What % down is it?
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollHeight) / (document.documentElement.scrollWidth - document.documentElement.clientHeight);

  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
  
})