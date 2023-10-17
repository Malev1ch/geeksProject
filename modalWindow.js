var btn = document.querySelector(".call-me-btn");

// Находим модальное окно
var modal = document.getElementById("myModal");

// Находим элемент с классом "close", который будет закрывать модальное окно
var closeBtn = document.getElementsByClassName("close")[0];

// Функция для открытия модального окна
function openModal() {
  modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
}

// Назначаем обработчик события на кнопку "Связаться"
btn.addEventListener("click", openModal);

// Назначаем обработчик события на элемент "close"
closeBtn.addEventListener("click", closeModal);

// Закрываем модальное окно, если пользователь кликает за его пределами
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});