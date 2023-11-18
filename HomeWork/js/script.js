// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// const value = prompt("Input value, please");

// if (value > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const test = prompt("Insert 'test', 'qwerty' of 'true'");

// switch (test) {
//   case 'test':
//     console.log(true);
//     break;

//   case 'qwerty':
//     console.log(false);
//     break;
  
//   case 'true':
//     console.log(false);

//   default:
//     alert('Insert the right variant');
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// const value = prompt('Insert number');

// if (Number(value) > 10) {
//   console.log(Number(value) - 5);
// } else {
//   console.log(Number(value) + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const number = prompt("Input the number of month");

// switch (number) {
//   case '1':
//     console.log('January');
//     break;

//   case '2':
//     console.log('February');
//     break;

//   case '3':
//     console.log('March');
//     break;

//   case '4':
//     console.log('April');
//     break;

//   case '5':
//     console.log('May');
//     break;

//   case '6':
//     console.log('June');
//     break;

//   case '7':
//     console.log('July');
//     break;

//   case '8':
//     console.log('August');
//     break;

//   case '9':
//     console.log('Semtemper');
//     break;

//   case '10':
//     console.log('October');
//     break;
  
//   case '11':
//     console.log('November');
//     break;

//   case '12':
//     console.log('December');
//     break;

//   default:
//     alert('The month does not exist');
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number = prompt('Input your number');

// const makeSum = (a) => {
//   const arr = a.split("");

//   return arr.reduce((acc, digit) => acc + Number(digit), 0);
// } 

// console.log(makeSum(number));
