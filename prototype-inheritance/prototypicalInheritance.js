// 🧠 Что такое прототип и зачем он нужен?
/**
 * В JavaScript каждый объект может иметь прототип — это другой объект,
 * откуда он может наследовать свойства и методы.
 *
 * Это похоже на наследование в реальной жизни: если у тебя нет чего-то,
 * ты можешь попросить это у родителей (прототипа).
 */

// 📦 Простой пример

let animal = {
  eats: true,
  walk() {
    console.log("Животное идёт");
  }
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // Устанавливаем animal как прототип для rabbit

console.log(rabbit.eats); // true (наследовано от animal)
rabbit.walk();            // "Животное идёт" (взято из animal)
console.log(rabbit.jumps); // true (своё свойство)
// 🔧 rabbit.__proto__ = animal — так мы говорим: "rabbit наследует от animal"

// 🔁 Как это работает?
/**
 * Когда ты обращаешься к rabbit.eats, JavaScript смотрит:
 *
 * Есть ли eats у объекта rabbit? — ❌ Нет.
 *
 * Смотрим в rabbit.__proto__ (это animal) — ✅ Есть! Берём оттуда.
 *
 * Если бы не нашлось и там — вернёт undefined.
 */

// ⚠️ Важно: цепочка прототипов
let animal1 = {
  eats: true
};

let rabbit1 = {
  jumps: true,
  __proto__: animal1
};

let longEar = {
  earLength: 10,
  __proto__: rabbit1
};

console.log(longEar.eats); // true (нашлось через rabbit → animal)
console.log(longEar.jumps); // true (нашлось у rabbit)
console.log(longEar.earLength); // 10 (своё)

// 🔄 Перезапись метода
let animal2 = {
  walk() {
    console.log("Животное идёт");
  }
};

let rabbit2 = {
  __proto__: animal2,
  walk() {
    console.log("Кролик скачет");
  }
};

rabbit2.walk(); // "Кролик скачет"

// 🧰 Использование Object.create
/**
 * Вместо __proto__, лучше использовать Object.create, так как это современный и безопасный способ:
 */

let animal3 = {
  eats: true
};

let rabbit3 = Object.create(animal3);

rabbit3.jumps = true;

console.log(rabbit3.eats);  // true (наследует от animal)
console.log(rabbit3.jumps); // true (своё свойство)

/**
 *  Object.create(animal) — создаёт объект, у которого прототип — это animal.
 */

// 🔍 Проверка свойств
let rabbit4 = Object.create(animal);
rabbit4.jumps = true;

console.log(rabbit4.hasOwnProperty('jumps')); // true
console.log(rabbit4.hasOwnProperty('eats'));  // false (наследовано)

// 🧬 Наследование методов
let user = {
  sayHi() {
    console.log(`Привет, я ${this.name}`);
  }
};

let admin = Object.create(user);
admin.name = "Админ";

admin.sayHi(); // Привет, я Админ

/**
 * this всегда указывает на тот объект, через который вызван метод, даже если сам метод в прототипе.
 */

// ⚠️ Осторожно с __proto__
/**
 * __proto__ — это устаревший способ (работает, но не рекомендуется использовать в современном коде). Вместо него:
 *
 * Object.create(proto) — создать объект с прототипом
 *
 * Object.getPrototypeOf(obj) — получить прототип
 *
 * Object.setPrototypeOf(obj, proto) — установить прототип
 */

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Алгоритм поиска

/**
 * С помощью свойства __proto__ задайте прототипы так,
 * чтобы поиск любого свойства выполнялся по следующему пути:
 * pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table),
 * а bed.glasses – значение 1 (найденное в head).
 */

// const head = {
//     glasses: 1,
// };
//
// const table = {
//     pen: 3,
//     __proto__: head,
// };
//
// const bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table,
// };
//
// const pockets = {
//     money: 2000,
//     __proto__: bed,
// };
// console.log(pockets.pen); // 3
// console.log(bed.glasses); // 1

//====================================================================================================================//
// Почему наедаются оба хомяка?

/**
 * Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
 */

// const hamster = {
//     eat(food) {
//         this.stomach.push(food);
//     },
// };
//
// const speedy = {
//     __proto__: hamster,
//     stomach: [],
// };
//
// const lazy = {
//     __proto__: hamster,
//     stomach: [],
// };
//
// // Этот хомяк нашёл еду
// speedy.eat("apple");
// speedy.eat("orange");
// console.log(speedy.stomach); // apple
//
// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple