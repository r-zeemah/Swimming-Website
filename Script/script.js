//alert("connected");

var smallScreenMenuIcons = document.querySelector(".small-screen-menu-icons");
var smallScreenMenuIcons2 = document.querySelector(".small-screen-menu-icons2");
var navDisplayToggle = false;
var smallScreenMenu = document.querySelector(".small-screen-menu");
var hamburgerIcon = document.querySelector(".hamburger-icon");
var smallScreenLinks = document.querySelector(".small-screen-links")
var closeIcon = document.querySelector(".close-icon");
var watchVideo = document.querySelector(".watch-video");
var swimVideo = document.querySelector(".swim-video");
var tenKPeople = document.querySelector(".tenk-people");
var image = document.querySelector(".subhero-img-2");
var closeIconSwimVideo = document.querySelector(".closeicon-swimvideo");
var popupOne = document.querySelector(".popup-1");
var closeIconOne = document.querySelector(".close-icon-1");
var swimmingVideos = document.querySelector(".swimming-videos");
var youtubeVideos = document.querySelector(".youtube-videos");
var popupTwo = document.querySelector(".popup-2");
var popupThree = document.querySelector(".popup-3");


closeIcon.style.display = "none";
smallScreenMenu.style.display = "none";
smallScreenLinks.addEventListener('click', function () {
    smallScreenMenu.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
})

smallScreenMenuIcons.addEventListener("click", function () {
  navDisplayToggle = !navDisplayToggle;

  if (navDisplayToggle === true) {
    smallScreenMenu.style.display = "flex";
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
  } else {
    smallScreenMenu.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  }
});
smallScreenMenuIcons2.addEventListener("click", function () {
  navDisplayToggle = !navDisplayToggle;

  if (navDisplayToggle === true) {
    smallScreenMenu.style.display = "flex";
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
  } else {
    smallScreenMenu.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  }
});
watchVideo.addEventListener("click", function(){
    swimVideo.style.display = "flex";
    tenKPeople.style.display = "none";
    image.style.display = "none";
   
    })
closeIconSwimVideo.addEventListener("click", function (){
    swimVideo.style.display= "none";
})

popupOne.addEventListener("click", function(){
    swimmingVideos.style.display = "flex";
    youtubeVideos.title = "Swimming Tutorials"
})
closeIconOne.addEventListener("click", function(){
  swimmingVideos.style.display = "none";
})
popupTwo.addEventListener("click", function(){
  swimmingVideos.style.display = "flex";
  youtubeVideos.src= "https://www.youtube.com/embed/aXWFqBG-02w?si=aDUL8600x2eii9X2";
})
popupThree.addEventListener("click", function(){
  swimmingVideos.style.display = "flex";
  youtubeVideos.src = "https://www.youtube.com/embed/4O5zvObDj7k?si=PuJvckqoXLfLYVLf";
})










