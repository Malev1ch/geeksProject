// Geeks teachers gallery slider
const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = Array.from(slider.querySelectorAll("img"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index >= slideIndex && index < slideIndex + 3) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}
updateSlider();
// Geeks teachers gallery slider

// Geeks youtube shorts slider

const sliderShorts = document.querySelector(".yshorts-slider");
const prevButtonShorts = document.querySelector(".yshorts-btn-prev");
const nextButtonShorts = document.querySelector(".yshorts-btn-next");
const slidesShorts = Array.from(sliderShorts.querySelectorAll("img"));
const slideCountShorts = slidesShorts.length;
let slideIndexShorts = 0;

prevButtonShorts.addEventListener("click", showPreviousSlideShorts);
nextButtonShorts.addEventListener("click", showNextSlideShorts);

function showPreviousSlideShorts() {
  slideIndexShorts = (slideIndexShorts - 1 + slideCountShorts) % slideCountShorts;
  updateSliderShorts();
}

function showNextSlideShorts() {
  slideIndexShorts = (slideIndexShorts + 1) % slideCountShorts;
  updateSliderShorts();
}

function updateSliderShorts() {
  slidesShorts.forEach((slideShorts, index) => {
    if (index >= slideIndexShorts && index < slideIndexShorts + 3) {
      slideShorts.style.display = "block";
    } else {
      slideShorts.style.display = "none";
    }
  });
}
updateSliderShorts();

// Geeks youtube shorts slider

// Geeks studio gallery slider
const sliderGeeks = document.querySelector(".slider-geeks-studio");
const prevButtonGeeks = document.querySelector(".geeks-prev-button");
const nextButtonGeeks = document.querySelector(".geeks-next-button");
const slidesGeeks = Array.from(sliderGeeks.querySelectorAll("img"));
const slideCountGeeks = slidesGeeks.length;
let slideIndexGeeks = 0;

prevButtonGeeks.addEventListener("click", showPreviousSlideGeeks);
nextButtonGeeks.addEventListener("click", showNextSlideGeeks);

function showPreviousSlideGeeks() {
  slideIndexGeeks = (slideIndexGeeks - 1 + slideCountGeeks) % slideCountGeeks;
  updateSliderGeeks();
}

function showNextSlideGeeks() {
  slideIndexGeeks = (slideIndexGeeks + 1) % slideCountGeeks;
  updateSliderGeeks();
}

function updateSliderGeeks() {
  slidesGeeks.forEach((slide, index) => {
    if (index === slideIndexGeeks) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}
updateSliderGeeks();

// Geeks studio gallery slider

// Gallery slider images
// const galleryItem = document.getElementsByClassName("gallery-item");
// const lightBoxContainer = document.createElement("div");
// const lightBoxContent = document.createElement("div");
// const lightBoxImg = document.createElement("img");
// const lightBoxPrev = document.querySelector(".gallery-geeks-prev-button");
// const lightBoxNext = document.querySelector(".gallery-geeks-next-button");

// lightBoxContainer.classList.add("lightbox");
// lightBoxContent.classList.add("lightbox-content");

// lightBoxContainer.appendChild(lightBoxContent);
// lightBoxContent.appendChild(lightBoxImg);
// lightBoxContent.appendChild(lightBoxPrev);
// lightBoxContent.appendChild(lightBoxNext);

// document.body.appendChild(lightBoxContainer);

// let index = 1;

// function showLightBox(n) {
//   if (n > galleryItem.length) {
//     index = 1;
//   } else if (n < 1) {
//     index = galleryItem.length;
//   }
//   let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
//   lightBoxImg.setAttribute("src", imageLocation);
// }

// function currentImage() {
//   lightBoxContainer.style.display = "block";

//   let imageIndex = parseInt(this.getAttribute("data-index"));
//   showLightBox((index = imageIndex));
// }
// for (let i = 0; i < galleryItem.length; i++) {
//   galleryItem[i].addEventListener("click", currentImage);
// }

// function slideImage(n) {
//   showLightBox((index += n));
// }
// function prevImage() {
//   slideImage(-1);
// }
// function nextImage() {
//   slideImage(1);
// }
// lightBoxPrev.addEventListener("click", prevImage);
// lightBoxNext.addEventListener("click", nextImage);

// function closeLightBox() {
//   if (this === event.target) {
//     lightBoxContainer.style.display = "none";
//   }
// }
// lightBoxContainer.addEventListener("click", closeLightBox);

// Gallery slider images
