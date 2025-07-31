// 🛠 Что такое Function.prototype?
/**
 * Когда ты создаёшь функцию-конструктор, например:
 */

// function Animal(name) {
//     this.name = name;
//     this.canMove = true;
// }

/**
 * JavaScript автоматически добавляет к этой функции свойство
 * .prototype, и это объект, у которого есть одно важное свойство:
 */

// console.log(Animal.prototype);
// По умолчанию: { constructor: Animal }

// Зачем нужен .prototype?
/**
 * Все объекты, созданные с помощью new Animal(...), наследуют от Animal.prototype.
 */

// 🐾 Пример с new
// function Animal(name) {
//     this.name = name;
// }
//
// Animal.prototype.sayHi = function() {
//     console.log("Привет, я " + this.name);
// };
//
// const rabbit = new Animal("Кролик");
//
// rabbit.sayHi(); // Привет, я Кролик

// Что происходит под капотом?
// Вызов:
// new Animal("Кролик")

// Делает примерно следующее:
// const rabbit = {}; // 1. создаёт новый пустой объект
// rabbit.__proto__ = Animal.prototype; // 2. устанавливает прототип
// Animal.call(rabbit, "Кролик"); // 3. вызывает функцию с this = rabbit

// 🧬 Прототип → у экземпляров
// function Animal(name) {
//     this.name = name;
// }
//
// console.log(Animal.prototype.constructor === Animal); // true
//
// const a = new Animal("Тигр");
//
// console.log(a.__proto__ === Animal.prototype); // true

/**
 * Объекты, созданные через new, автоматически получают __proto__, указывающий на Функция.prototype
 */

// 🔁 Добавление методов через .prototype
// function Animal(name) {
//     this.name = name;
//     // Плохо: метод будет копироваться в каждый объект
//     // this.sayHi = function() { ... };
// }
//
// Animal.prototype.sayHi = function() {
//     console.log("Привет, я " + this.name);
// };
//
// const cat = new Animal("Кот");
// const dog = new Animal("Пёс");
//
// cat.sayHi(); // Привет, я Кот
// dog.sayHi(); // Привет, я Пёс
//
// console.log(cat.sayHi === dog.sayHi); // true (метод один и тот же)
//
//
// // 🧱 Свойства и методы в .prototype
// function User(name) {
//     this.name = name;
// }
//
// User.prototype.sayHi = function() {
//     console.log("Привет, " + this.name);
// };
//
// const user = new User("Вася");
//
// user.sayHi(); // Привет, Вася


// 📦 Кратко: отличие между .prototype и __proto__
/**
 * | Что это?        | Кому принадлежит | Что делает                                                               |
 * | --------------- | ---------------- | ------------------------------------------------------------------------ |
 * | `f.prototype`   | У функции        | Объект, от которого будут наследовать объекты, созданные через `new f()` |
 * | `obj.__proto__` | У объекта        | Указывает на прототип (родителя) объекта                                 |
 */

// function Person(name) {
//     this.name = name;
// }
//
// Person.prototype.sayHi = function() {
//     console.log("Привет, " + this.name);
// };
//
// const p = new Person("Аня");
//
// console.log(p.__proto__ === Person.prototype); // true

// 🧠 А если мы перезапишем .prototype?
// function Animal() {}
//
// Animal.prototype = {
//     sayHi() {
//         console.log("Привет!");
//     }
// };
//
// const rabbit = new Animal();
// rabbit.sayHi(); // Привет!

/**
 * ⚠️ Но теперь constructor указывает не на Animal, а на Object (потому что мы перезаписали весь объект):
 */
// console.log(rabbit.constructor === Animal); // false
// console.log(rabbit.constructor === Object); // true
//
// // Решение
// Animal.prototype = {
//     constructor: Animal, // Явно указываем правильный constructor
//     sayHi() {
//         console.log("Привет!");
//     }
// };
