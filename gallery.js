document.addEventListener("DOMContentLoaded", function () {
    const modalGalleryCool = document.querySelector(".modalGalleryCool");
    const galleryBtnCool = document.querySelector(".gallery-btn-geeks");
    const closeModalGalleryCool = document.querySelector(".close-modalGalleryCool");
    const modalBackground = document.querySelector(".modal-backgroundGalleryCool");

    galleryBtnCool.addEventListener("click", function () {
        modalGalleryCool.style.display = "block";
        modalBackground.style.display = "block";
    });

    closeModalGalleryCool.addEventListener("click", function () {
        modalGalleryCool.style.display = "none";
        modalBackground.style.display = "none";
    });

  const galleryListCool = document.querySelector(".gallery-listGallery ul");
  const gallerySliderCool = document.querySelector(".gallery-sliderGallery img");
  const prevButtonCool = document.querySelector(".prev-buttonGalleryCool");
  const nextButtonCool = document.querySelector(".next-buttonGalleryCool");
  const galleryImagesCool = galleryListCool.querySelectorAll("li img");

  let currentIndexCool = 0;

  galleryImagesCool.forEach((image, index) => {
    image.addEventListener("click", function () {
      updateGallerySlider(index);
    });
  });

  function updateGallerySlider(index) {
    currentIndexCool = index;
    gallerySliderCool.src = galleryImagesCool[index].src;
  }

  prevButtonCool.addEventListener("click", function () {
    currentIndexCool = (currentIndexCool - 1 + galleryImagesCool.length) % galleryImagesCool.length;
    updateGallerySlider(currentIndexCool);
  });

  nextButtonCool.addEventListener("click", function () {
    currentIndexCool = (currentIndexCool + 1) % galleryImagesCool.length;
    updateGallerySlider(currentIndexCool);
  });
});

if (window.matchMedia('(max-width: 480px)').matches) {
  const images = document.querySelectorAll('.geeks-work-company-cards img');

  images.forEach((image) => {
    image.addEventListener('click', () => {
      if (image.classList.contains('active')) {
        image.classList.remove('active');
      } else {
        images.forEach((img) => {
          img.classList.remove('active');
        });

        image.classList.add('active');
      }
    });
  });
}
