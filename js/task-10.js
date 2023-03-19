// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inp = document.querySelector("input")
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
const boxes = document.getElementById("boxes")



createEl.addEventListener("click", () => {
for (let i = 0; i < inp.value; i += 1 ) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = getRandomHexColor();
newDiv.style.width = boxes.children.length > 0 ? `${Number.parseInt(boxes.lastChild.style.width)+10}px` : `${30+10*i}px`
newDiv.style.height = newDiv.style.width
  boxes.append(newDiv) 
}
});

destroyEl.addEventListener("click", () =>{
  boxes.innerHTML = ""
})
// Number.parseInt(boxes.lastChild.style.width)
// `${30+10*i}px`