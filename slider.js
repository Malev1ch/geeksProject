// Geeks teachers gallery slider
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

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
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider();
// Geeks teachers gallery slider

// Geeks studio gallery slider
const sliderGeeks = document.querySelector('.slider-geeks-studio');
  const prevButtonGeeks = document.querySelector('.geeks-prev-button');
  const nextButtonGeeks = document.querySelector('.geeks-next-button');
  const slidesGeeks = Array.from(sliderGeeks.querySelectorAll('img'));
  const slideCountGeeks = slidesGeeks.length;
  let slideIndexGeeks = 0;

  prevButtonGeeks.addEventListener('click', showPreviousSlideGeeks);
  nextButtonGeeks.addEventListener('click', showNextSlideGeeks);

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
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
updateSliderGeeks();
  
// Geeks studio gallery slider