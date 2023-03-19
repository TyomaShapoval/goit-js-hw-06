// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.




const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // відміна дії за замовчуванням

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // перевірка на заповненість полів
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Будь ласка, заповніть усі поля');
    return;
  }

  // створення об'єкту з даними форми
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData); // виведення даних в консоль

  loginForm.reset(); // очищення форми
});

// Не міг розібратися з доступом до елементів форми і попросив чатГПТ допомогти (( 
    // p.s. але тепер більш менш зрозуміло, чат все пояснив)