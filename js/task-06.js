// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const symbols = document.getElementById("validation-input")

const symL = Number(symbols.dataset.length)


symbols.addEventListener("blur", (event)=> {event.currentTarget.value.length === symL
? symbols.classList.add("valid") || symbols.classList.remove("invalid")
: symbols.classList.add("invalid") || symbols.classList.remove("valid");
console.log(event.currentTarget.value.length)
})