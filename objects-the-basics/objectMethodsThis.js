/**
 * this — это ключевое слово, которое ссылается на объект, в контексте которого была вызвана функция
 */
// Example:
const obj = {
    a: 10,
    b: 20,

    calculateSum() {
        return this.a + this.b // this здесь это, иными словами, сам obj, то бишь obj.a + obj.b
    }
}
console.log(obj.calculateSum()); // 30

/**
 * Можно написать obj.a + obj.b, но в таком случае если объект будет перезаписан в другую переменную возникнет ошибка
 */
// Example:
let obj1 = {
    a: 10,
    b: 20,

    calculateSum() {
        return obj1.a + obj1.b // obj1 теперь пустой объект
    }
}
const newObj = obj1;
obj1 = {};
console.log(newObj.calculateSum()) // NaN
console.log(obj1.calculateSum()); // Uncaught TypeError: obj1.calculateSum is not a function

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Создайте калькулятор
// const calculator = {
//     read() {
//         this.a = +prompt("a?", 0);
//         this.b = +prompt("b?", 0);
//     },
//
//     sum() {
//         return this.a + this.b;
//     },
//
//     mul() {
//         return this.a * this.b
//     },
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//====================================================================================================================//
// Цепь вызовов
/**
 * У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
 *
 * let ladder = {
 *   step: 0,
 *   up() {
 *     this.step++;
 *   },
 *   down() {
 *     this.step--;
 *   },
 *   showStep: function() { // показывает текущую ступеньку
 *     alert( this.step );
 *   }
 * };
 * Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
 *
 * ladder.up();
 * ladder.up();
 * ladder.down();
 * ladder.showStep(); // 1
 * ladder.down();
 * ladder.showStep(); // 0
 * Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
 *
 * ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
 */

// const ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//         return this;
//     },
// };
// ladder.up().up().down().showStep().down().showStep(); // 1 0
