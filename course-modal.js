document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".geeks-course-btn-go");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var modalId = button.getAttribute("data-modal-content");
      var modalContent = document.getElementById(modalId);
      modalContent.style.display = "block";
    });
  });

  var closeBtns = document.querySelectorAll(".my-close-btn");

  closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      var modal = closeBtn.parentNode.parentNode;
      modal.style.display = "none";
    });
  });

  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("my-modal")) {
      event.target.style.display = "none";
    }
  });
});
