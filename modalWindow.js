var buttons = document.querySelectorAll(".geeks-main-btn, .other-btn");
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

buttons.forEach(function (button) {
  button.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});
