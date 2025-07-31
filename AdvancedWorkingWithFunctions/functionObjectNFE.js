/**
 * Функции в JavaScript — это объекты первого класса. Это означает, что они могут:
 * Храниться в переменных
 * Передаваться в качестве аргументов другим функциям
 * Возвращаться из других функций
 * Обладать собственными свойствами и методами
 */

// 🔍 Свойство name

/**
 * Свойство name содержит имя функции.
 * Даже если функция анонимна, JavaScript пытается определить её имя из контекста:
 */

// function sayHi() {
//     console.log("Hi");
// }
// console.log(sayHi.name); // "sayHi"

// const greet = function() {};
// console.log(greet.name); // "greet"

// 🔢 Свойство length
// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {}

// console.log(f1.length); // 1
// console.log(f2.length); // 2
// console.log(many.length); // 2

// 🧬 Функции как объекты
// function counter() {
//     counter.count++;
// }
// counter.count = 0;

// counter();
// counter();

// console.log(counter.count); // 2

// 🔁 Именованные функциональные выражения (NFE)

/**
 * Именованные функциональные выражения позволяют функции ссылаться на саму себя по имени,
 * что полезно для рекурсии
 */

// const factorial = function f(n) {
//     return n ? n * f(n - 1) : 1;
// };
// console.log(factorial(5)); // 120

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Установка и уменьшение значения счётчика

/**
 * Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
 *
 * counter() должен возвращать следующее значение (как и раньше).
 * counter.set(value) должен устанавливать счётчику значение value.
 * counter.decrease() должен уменьшать значение счётчика на 1.
 */

// function makeCounter() {
//     let count = 0;
//
//     function counter() {
//         return count++;
//     }
//
//     counter.set = value => count = value;
//
//     counter.decrease = () => count--;
//
//     return counter;
// }
//
// const counter = makeCounter();
//
// console.log( counter() ); // 0
// console.log( counter() ); // 1
//
// counter.set(10); // установить новое значение счётчика
//
// console.log( counter() ); // 10
//
// counter.decrease(); // уменьшить значение счётчика на 1
//
// console.log( counter() ); // 10 (вместо 11)

/**
 * Not solved
 */
//====================================================================================================================//


