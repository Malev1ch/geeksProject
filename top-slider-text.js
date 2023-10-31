const spanRefs = document.querySelectorAll(".span-ref");
const texts = ["Сертификат", "Стажировка", "Коворкинг"];
const styles = [
    { color: "#9ABE3D", fontSize: "42px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal"},
    { color: "#FE3A83", fontSize: "42px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal"},
    { color: "#AD8AC4", fontSize: "42px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal"}
];
let currentIndex = 0;

function changeText() {
    // Устанавливаем текст и стили текущего элемента
    const currentSpanRef = spanRefs[0];
    currentSpanRef.textContent = texts[currentIndex];
    currentSpanRef.style.color = styles[currentIndex].color;
    currentSpanRef.style.fontSize = styles[currentIndex].fontSize;

    // Переходим к следующему тексту
    currentIndex = (currentIndex + 1) % texts.length;
}

// Вызываем функцию для изменения текста и стилей с интервалом времени
setInterval(changeText, 3000);