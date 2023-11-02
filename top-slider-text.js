const spanRefs = document.querySelectorAll(".span-ref");
const texts = ["Сертификат", "Стажировка", "Коворкинг"];
const styles = [
    { color: "#9ABE3D", fontSize: "42px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal"},
    { color: "#FE3A83", fontSize: "42px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal"},
    { color: "#AD8AC4", fontSize: "42px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal"}
];
let currentIndex = 0;

function changeText() {
    const currentSpanRef = spanRefs[0];
    currentSpanRef.textContent = texts[currentIndex];
    currentSpanRef.style.color = styles[currentIndex].color;
    currentSpanRef.style.fontSize = styles[currentIndex].fontSize;

    currentIndex = (currentIndex + 1) % texts.length;
}

spanRefs[0].textContent = texts[currentIndex];
spanRefs[0].style.color = styles[currentIndex].color;
spanRefs[0].style.fontSize = styles[currentIndex].fontSize;

setTimeout(function () {
    currentIndex = 1; 
    setInterval(changeText, 1200);
}, 1200);