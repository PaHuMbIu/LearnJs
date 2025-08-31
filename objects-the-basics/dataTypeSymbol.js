/**
 * ✅ SYMBOL — Примитивный тип для создания уникальных идентификаторов.
 *
 * Symbol — это тип данных, предназначенный для создания уникальных ключей в объектах.
 * Он не конфликтует с другими свойствами и не отображается при переборе.
 */

// 🔧 Создание символов-----------------------------------------------------------------------------------------------//
const id = Symbol(); // Уникальный символ без описания
const userId = Symbol("user_id"); // Описание только для отладки
console.log(userId);

const a = Symbol("test");
const b = Symbol("test");
console.log(a === b); // false — каждый Symbol уникален

// 🧠 Использование в качестве ключа объекта--------------------------------------------------------------------------//
const user = {
  name: "Алиса"
};

const uid = Symbol("id");
user[uid] = 123;

console.log(user);             // { name: "Алиса", [Symbol(id)]: 123 }
console.log(user.uid);         // undefined — обычный доступ по строке не работает
console.log(user[uid]);        // 123 — доступ по символу работает

// 🕵️ Символы не участвуют в обычном переборе-------------------------------------------------------------------------//
const user2 = {
  name: "Алиса",
};
const uid2 = Symbol("id");
user2[uid2] = 123;

for (let key in user2) {
  console.log(key); // Покажет только "name"
}

console.log(Object.keys(user2)); // ["name"]
console.log(Object.getOwnPropertyNames(user2)); // ["name"]
console.log(Object.getOwnPropertySymbols(user2)); // [ Symbol(id) ]

// 🌐 Глобальные символы (Symbol.for / Symbol.keyFor)-----------------------------------------------------------------//
/**
 * Иногда нужно использовать один и тот же Symbol в разных частях приложения. Для этого есть глобальный реестр:
 */
const globalId1 = Symbol.for("app.id");
const globalId2 = Symbol.for("app.id");

console.log(globalId1 === globalId2); // true — берётся из одного глобального реестра
console.log(Symbol.keyFor(globalId1)); // "app.id" — получить ключ глобального символа

const local = Symbol("app.id"); // отсутствует for
console.log(Symbol.keyFor(local)); // undefined — не глобальный символ

// ⚙️ Встроенные символы — специальные возможности--------------------------------------------------------------------//

// 1. Symbol.iterator — делает объект итерируемым
const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return {done: false, value: this.current++};
        } else {
          return {done: true};
        }
      }
    };
  }
};

for (let num of range) {
  console.log(num); // 1, 2, 3
}

// 2. Symbol.toPrimitive — управление преобразованием в примитив
const money = {
  amount: 1500,
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? "\uD83D\uDCB01500\u20BD" : 1500;
  }
};

console.log(`${money}`); // 💰1500₽
console.log(money + 500); // 2000

// 3. Symbol.toStringTag — кастомизация Object.prototype.toString
const person = {
  [Symbol.toStringTag]: "SuperUser"
};

console.log(Object.prototype.toString.call(person)); // [object SuperUser]

// ❗ Особенности и ограничения----------------------------------------------------------------------------------------//
console.log(typeof Symbol()); // "symbol"
console.log(Symbol("test").toString()); // "Symbol(test)"

try {
  console.log("ID: " + Symbol("id")); // ❌ TypeError
} catch (e) {
  console.log("Нельзя преобразовать Symbol в строку напрямую.");
}

// 💡 КОГДА ИСПОЛЬЗОВАТЬ SYMBOL:
// - Нужно уникальное и безопасное имя свойства;
// - Хочешь скрыть свойство от перебора;
// - Для настройки поведения объектов через встроенные символы (Symbol.iterator, Symbol.toPrimitive и др.);
// - Для создания глобального, разделяемого символа между модулями (Symbol.for).

/**
 * 🧠 ИТОГО:
 *
 * Symbol — мощный инструмент для создания уникальных, "невидимых" и безопасных ключей.
 * Особенно полезен при разработке библиотек, фреймворков и API.
 */