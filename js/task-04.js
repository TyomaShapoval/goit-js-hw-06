// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
let counterValue = 0
const value = document.getElementById("value")
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
const btnD = document.querySelector('[data-action="decrement"]')

const btnI = document.querySelector('[data-action="increment"]')

btnD.addEventListener("click", () =>{  counterValue -= 1;
return value.textContent = counterValue});

btnI.addEventListener("click", () =>{  counterValue += 1;
return value.textContent = counterValue});


// Оновлюй інтерфейс новим значенням змінної counterValue.