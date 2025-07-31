/**
 * С помощью new можно получать экземпляр функции конструктора или класса,
 * чтобы использовать находящиеся внутри них методы
 */

// Функция конструктор
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//     /**
//      *  Здесь создаётся объект, по сути это:
//      *  variableName = {
//      *      name: name,
//      *      isAdmin: false,
//      *  };
//      */
// }
// const user = new User("Jack");
//
// console.log(user) // obj { name: "Jack", isAdmin: false }
// console.log(user.name); // Jack
// console.log(user.isAdmin); // false
//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Создайте калькулятор при помощи конструктора, new Calculator
// function Calculator() {
//     this.read = function () {
//         this.a = +prompt("a?", 0);
//         this.b = +prompt("b?", 0);
//     }
//
//     this.sum = function () {
//         return this.a + this.b;
//     }
//
//     this.mul = function () {
//         return this.a * this.b;
//     }
// }
// const calculator = new Calculator();
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//====================================================================================================================//
// Создайте new Accumulator

/**
 * Объект, который она создаёт, должен уметь следующее:
 *
 * Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
 * Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
 * Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
 *
 * Ниже вы можете посмотреть работу кода:
 *
 * let accumulator = new Accumulator(1); // начальное значение 1
 *
 * accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
 * accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
 *
 * alert(accumulator.value); // выведет сумму этих значений
 */

// function Accumulator(startingValue) {
//     this.value = startingValue;
//
//     this.read = function () {
//         this.value += +prompt("Сколько нужно добавить?", 0);
//     };
// }
// const accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);
