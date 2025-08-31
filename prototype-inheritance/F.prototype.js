// 🛠 Что такое Function.prototype?
/**
 * Когда создаёшь функцию-конструктор, например:
 */

function CreatureType(name) {
  this.nameTag = name;
  this.isMovable = true;
}

/**
 * JavaScript автоматически добавляет к этой функции свойство
 * .prototype, и это объект с одним важным свойством:
 */

console.log(CreatureType.prototype);
// По умолчанию: { constructor: CreatureType }

// Зачем нужен .prototype?
/**
 * Все объекты, созданные с помощью new Creature(...), наследуют от CreatureType.prototype.
 */

// 🐾 Пример с new
function Creature(name) {
  this.nameTag = name;
}

Creature.prototype.greet = function () {
  console.log("Привет, я " + this.nameTag);
};

const bunny = new Creature("Кролик");

bunny.greet(); // Привет, я Кролик

// Что происходит под капотом?
// Вызов:
new Creature("Кролик")

// Делает примерно следующее:
const tempBunny = {}; // 1. создаёт новый пустой объект
tempBunny.__proto__ = Creature.prototype; // 2. устанавливает прототип
Creature.call(tempBunny, "Кролик"); // 3. вызывает функцию с this = tempBunny

// 🧬 Прототип → у экземпляров
function Beast(name) {
  this.nameTag = name;
}

console.log(Beast.prototype.constructor === Beast); // true

const tiger = new Beast("Тигр");

console.log(tiger.__proto__ === Beast.prototype); // true

/**
 * Объекты, созданные через new, автоматически получают __proto__, указывающий на Функция.prototype
 */

// 🔁 Добавление методов через .prototype
function CreatureWithMethods(name) {
  this.nameTag = name;
  // Плохо: метод будет копироваться в каждый объект
  // this.greet = function() { ... };
}

Creature.prototype.greet = function () {
  console.log("Привет, я " + this.nameTag);
};

const kitty = new Creature("Кот");
const doggy = new Creature("Пёс");

kitty.greet(); // Привет, я Кот
doggy.greet(); // Привет, я Пёс

console.log(kitty.greet === doggy.greet); // true (метод один и тот же)


// 🧱 Свойства и методы в .prototype
function Account(name) {
  this.nameTag = name;
}

Account.prototype.sayHi = function () {
  console.log("Привет, " + this.nameTag);
};

const user1 = new Account("Вася");

user1.sayHi(); // Привет, Вася

// 📦 Кратко: отличие между .prototype и __proto__
/**
 * | Что это?        | Кому принадлежит | Что делает                                                               |
 * | --------------- | ---------------- | ------------------------------------------------------------------------ |
 * | `f.prototype`   | У функции        | Объект, от которого будут наследовать объекты, созданные через `new f()` |
 * | `obj.__proto__` | У объекта        | Указывает на прототип (родителя) объекта                                 |
 */

function Human(name) {
  this.nameTag = name;
}

Human.prototype.sayHi = function () {
  console.log("Привет, " + this.nameTag);
};

const anna = new Human("Аня");

console.log(anna.__proto__ === Human.prototype); // true

// 🧠 А если мы перезапишем .prototype?
function Wildlife() {
}

Wildlife.prototype = {
  greet() {
    console.log("Привет!");
  }
};

const hare = new Wildlife();
hare.greet(); // Привет!

/**
 * ⚠️ Но теперь constructor указывает не на Wildlife, а на Object
 */
console.log(hare.constructor === Wildlife); // false
console.log(hare.constructor === Object); // true

// Решение
Wildlife.prototype = {
  constructor: Wildlife, // Явно указываем правильный constructor
  greet() {
    console.log("Привет!");
  }
};
