function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector(".change-color")
const colorSpan = document.querySelector(".color")
console.log(colorSpan.textContent)

btn.addEventListener("click", () =>{
document.body.style.backgroundColor = getRandomHexColor();
colorSpan.textContent = `- ${document.body.style.backgroundColor}`
})
