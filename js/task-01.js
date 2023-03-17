// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.


const catLength = document.getElementById('categories')



console.log("Number of categories:", catLength.children.length)


// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const items = document.querySelectorAll('.item')


items.forEach((item) => {
    console.log( "Category:", item.children[0].textContent);
    console.log("Elements:", item.children[1].children.length)
})
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5