// Что такое примеси (Mixins)?
/**
 *  В JavaScript нет множественного наследования —
 *  класс может наследоваться только от одного родителя (прототипа).
 *  Но иногда хочется "подмешать" поведение из разных источников, например:
 *  нужен класс User, который умеет и быть пользователем, и генерировать события (EventEmitter).
 *  или класс StreetSweeper, который при этом ещё и велосипед (Bicycle).
 *  Решение — использовать миксины (примеси). Это объекты с методами,
 *  которые можно «встроить» в другие классы без наследования.
 */

// 1. Создаём примесь — объект с методами:
let sayHiMixin = {
  sayHi() {
    console.log(`Привет, ${this.name}`);
  },
  sayBye() {
    console.log(`Пока, ${this.name}`);
  }
};

// 2. Применяем её — добавляем методы в prototype класса
class User {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(User.prototype, sayHiMixin);
new User("Вася").sayHi(); // Привет, Вася!

// Примеси могут наследоваться друг от друга
/**
 * Примесь может ссылаться на другую примесь через __proto__ или Object.setPrototypeOf.
 * Это позволяет строить иерархию примесей:
 */

let sayMixin = {
  say(phrase) {
    console.log(phrase);
  }
};

let sayHiMixin1 = {
  __proto__: sayMixin,

  sayHi() {
    super.say(`Привет, ${this.name}`);
  },
  sayBye() {
    super.say(`Пока, ${this.name}`);
  }
};

Object.assign(User.prototype, sayHiMixin1);
new User("Вася").sayBye(); // Пока, Вася

/**
 * Здесь super.say(...) применяется не к классу,
 * а к прототипу примеси sayMixin — так работает цепочка вызовов.
 */

let eventMixin = {
  on(name, handler) {
    if (!this._handlers) this._handlers = {};
    this._handlers[name] = this._handlers[name] || [];
    this._handlers[name].push(handler);
  },
  off(name, handler) {
    if (!this._handlers?.[name]) return;
    this._handlers[name] = this._handlers[name].filter(h => h !== handler);
  },
  trigger(name, ...args) {
    if (!this._handlers?.[name]) return;
    this._handlers[name].forEach(h => h.apply(this, args));
  }
};

class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
menu.on("select", v => console.log(`Вы выбрали ${v}`));
menu.choose("123"); // Вы выбрали 123
/**
 * Здесь класс Menu получает функциональность событийной системы без наследования.
 */
