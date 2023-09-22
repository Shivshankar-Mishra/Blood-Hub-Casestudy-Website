// code for nav scrolling
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top").style.top = "0";
  } else {
    document.getElementById("top").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};

// code for image zoom in and out
const imageContainer = document.querySelector(".image-container");
const zoomableImages = document.querySelectorAll(".zoomable-image");
console.log(zoomableImages);
let isZoomed = false;

zoomableImages.forEach((image) => {
  image.addEventListener("click", () => {
    if (isZoomed) {
      image.classList.remove("zoomed-in");
      imageContainer.style.cursor = "zoom-in";
    } else {
      image.classList.add("zoomed-in");
      imageContainer.style.cursor = "zoom-out";
    }

    isZoomed = !isZoomed;
  });
});

// code for switch
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

btn1.addEventListener("click", () => {
  content1.classList.add("active");
  content2.classList.remove("active");
  btn1.classList.add("active-button");
  btn2.classList.remove("active-button");
});

btn2.addEventListener("click", () => {
  content2.classList.add("active");
  content1.classList.remove("active");
  btn2.classList.add("active-button");
  btn1.classList.remove("active-button");
});

// Initial state: Show Content 1
content1.classList.add("active");
btn1.classList.add("active-button");
