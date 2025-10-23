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











// where comments is being fetched

var arrayOfComments = [];

var testimonialName = document.querySelector(".testimonial-name");
var testimonialImg = document.querySelector(".testimonial-img");
var testimonialText = document.querySelector(".testimonial-content");
var testimonialButtonLeft = document.querySelector(".testimonial-button-left");
var testimonialButtonRight = document.querySelector(
  ".testimonial-button-right"
);
var testimonialsWrapper = document.querySelector(".testimonials-wrapper");
let currentIndex = 0;
const visibleCount = 2;

fetch("https://dummyjson.com/comments")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    arrayOfComments = data.comments;

    
      //   const visibleComments = arrayOfComments.slice(currentIndex, currentIndex + visibleCount);
      renderTestimonials();

    // visibleComments.map((comment) => {
    //   // Create the testimonial card
    //   const card = document.createElement("div");
    //   card.classList.add("testimonial-card");

    //   const randomDate = new Date(
    //     2025,
    //     Math.floor(Math.random() * 12),
    //     Math.floor(Math.random() * 28) + 1
    //   );

    //   // Build the card’s HTML
    //   card.innerHTML = `
    //         <div class="testimonial-upper">
    //           <div class="testimonial-upper-left">
    //             <p class="testimonial-name">${comment.user.fullName}</p>
    //             <p>${randomDate.toLocaleDateString()}</p>
    //           </div>
    //           <div class="testimonial-upper-right">
    //             <img src="https://img.icons8.com/?size=100&id=7819&format=png&color=007bff" alt="${
    //               comment.user.username
    //             }" class="testimonial-user-img" />
    //           </div>
    //         </div>
    //         <p class="testimonial-content">${comment.body}</p>
    //       `;

    //   testimonialsWrapper.appendChild(card);
    // });
    console.log(arrayOfComments);
  })
  .catch((err) => console.error("Error:", err));

// testimonialButtonLeft.addEventListener("click", function () {
//   alert("clicked");
// });


function renderTestimonials() {
      testimonialsWrapper.innerHTML = ""; // clear old content

      const visibleComments = arrayOfComments.slice(currentIndex, currentIndex + visibleCount);

    // const visibleComments = arrayOfComments.slice(1, 3); 0, 1, 2 1, 2

      visibleComments.forEach(comment => {
        const card = document.createElement("div");
        card.classList.add("testimonial-card");

        const randomDate = new Date(
          2025,
          Math.floor(Math.random() * 12),
          Math.floor(Math.random() * 28) + 1
        );

        const name = comment.user.fullName || comment.user.username;

        card.innerHTML = `
          <div class="testimonial-upper">
            <div class="testimonial-upper-left">
              <p class="testimonial-name">${name}</p>
              <p>${randomDate.toLocaleDateString()}</p>
            </div>
            <div class="testimonial-upper-right">
              <img src="${comment.user.image || 'https://img.icons8.com/?size=100&id=7819&format=png&color=007bff'}" 
                   alt="${comment.user.username}" 
                   class="testimonial-user-img" />
            </div>
          </div>
          <p class="testimonial-content">${comment.body}</p>
        `;

        testimonialsWrapper.appendChild(card);
      });

      // disable/enable buttons
      testimonialButtonLeft.disabled = currentIndex <= 0;
      testimonialButtonRight.disabled = currentIndex + visibleCount >= arrayOfComments.length;
    }


 testimonialButtonRight.addEventListener("click", () => {
      if (currentIndex + visibleCount < arrayOfComments.length) {
        currentIndex += visibleCount; 
        renderTestimonials();
      }
    });

    testimonialButtonLeft.addEventListener("click", () => {
      if (currentIndex - visibleCount >= 0) {
        currentIndex -= visibleCount;
      } else {
        currentIndex = 0;
      }
      renderTestimonials();
    });






