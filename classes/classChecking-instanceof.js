// Что такое instanceof?
/**
 * Оператор instanceof проверяет,
 * принадлежит ли объект определённому классу или функции-конструктору — учитывая наследование.
 */
// obj instanceof Class
/**
 * Возвращает true, если Class.prototype встречается в цепочке прототипов объекта obj.
 */

class Rabbit {}
const rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit); // true

function RabbitFunc() {}
console.log(new RabbitFunc() instanceof RabbitFunc); // true

const arr = [1, 2, 3];
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true, т.к. Array наследует от Object

// Как это работает «под капотом»?
/**
 * instanceof проверяет, есть ли в цепочке прототипов объекта нужный prototype.
 * То есть фактически проверяется следующее:
 */
// object.__proto__ === Class.prototype ||
// object.__proto__.__proto__ === Class.prototype || ...

// Пример "странного" поведения:
function A() {}
function B() {}

A.prototype = B.prototype = {};
const a = new A();

console.log(a instanceof B); // true

// Где это чаще всего применяется
try {
  // ...
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Ошибка валидации:", err.message);
  } else if (err instanceof SyntaxError) {
    console.log("Синтаксическая ошибка:", err.message);
  } else {
    throw err;
  }
}

