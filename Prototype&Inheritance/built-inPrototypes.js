// 💡 Что такое встроенные прототипы?
/**
 * JavaScript содержит встроенные объекты: Array, Object, Function, String, Number, Boolean, Date, RegExp и т.д.
 *
 * Каждый из них имеет свой прототип, и все созданные через эти классы объекты наследуют методы из этих прототипов.
 */

// 🧵 Пример со строкой
// const str = "Привет";
// console.log(str.toUpperCase()); // "ПРИВЕТ

/**
 * Как это работает?
 *
 * str — примитив (тип string)
 * В момент вызова str.toUpperCase(), JavaScript временно оборачивает строку в объект: new String(str)
 * Метод toUpperCase() берётся из String.prototype
 * То же самое работает с числами, массивами, функциями и другими типами.
 */

// 📐 Цепочка наследования
// const arr = [1, 2, 3];
// console.log(arr.join("-")); // "1-2-3"

/**
 * Что происходит внутри?
 * arr — это объект типа Array
 *
 * Он наследует методы от Array.prototype
 *
 * А Array.prototype наследует от Object.prototype
 */

// console.log(arr.__proto__ === Array.prototype);        // true
// console.log(Array.prototype.__proto__ === Object.prototype); // true

// 🔧 Добавление своих методов
// String.prototype.sayHi = function() {
//     console.log("Привет, " + this);
// };
//
// "Мир".sayHi(); // Привет, Мир

// 🛑 Не добавляй в Object.prototype
// Object.prototype.test = 123;
//
// const obj = {};
// console.log(obj.test); // 123 — хотя ты это не ожидал

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Добавить функциям метод "f.defer(ms)"

// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms)
// }
//
// function f() {
//     console.log("Hello!");
// }
//
// function f2() {
//     console.log("Hello!2124124");
// }
//
// f.defer(1000); // выведет "Hello!" через 1 секунду
// f2.defer(1000); // выведет "Hello!" через 1 секунду

//====================================================================================================================//
// Добавьте функциям декорирующий метод "defer()"

// Function.prototype.defer = function (ms) {
//     const func = this
//
//     return function(...args) {
//         setTimeout(() => {
//             return func.apply(this, args)
//         }, ms)
//     }
// };
//
// function f(a, b) {
//     console.log(a + b);
// }
//
// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// f.defer(500)(3, 4) // 7 через 500мс

/**
 * Solved with hints
 */
