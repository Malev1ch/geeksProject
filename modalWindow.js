var btn = document.querySelector(".call-me-btn");

var modal = document.getElementById("myModal");

var closeBtn = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

btn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});