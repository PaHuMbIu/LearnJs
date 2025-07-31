// "use strict";
// Запрещает использование необъявленных переменных
// x = 10; // ❌ ReferenceError: x is not defined

// Запрещает дублировать параметры в функции
// function sum(a, a) {} // ❌ SyntaxError

// Запрещает удалять переменные, функции и параметры
// var x = 5;
// delete x; // ❌ SyntaxError

// this в функции (обычной) без объекта — теперь undefined, а не window
// function showThis() {
//     console.log(this); // ❗ undefined
// }
// showThis();

// const showThis1 = () => {
//     console.log(this); // Всё нормально
// }
// showThis1();