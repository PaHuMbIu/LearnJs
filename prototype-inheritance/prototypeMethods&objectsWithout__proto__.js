// 🔧 Почему __proto__ — это плохо?

const creatureBase = {
  canEat: true
};

const hopper = {
  canJump: true
};

hopper.__proto__ = creatureBase; // работает, но это старый и нестандартный способ

/**
 * 🔴 __proto__ — работает, но считается устаревшим.
 * Лучше использовать современные методы, которые читаются лучше и безопаснее.
 */

// ✅ Современные способы работы с прототипами
/**
 * 1. Object.create(proto) — создать объект с прототипом
 */
const animalProto = {
  canEat: true
};

const jumper = Object.create(animalProto); // создаёт объект, наследующий от animalProto

console.log(jumper); // Это пустой объект с прототипом animalProto
console.log(jumper.canEat); // true (наследуется от animalProto)

/**
 * 2. Object.getPrototypeOf(obj) — получить прототип объекта
 */
const prototypeOfJumper = Object.getPrototypeOf(jumper);
console.log(prototypeOfJumper); // Здесь лежит объект animalProto
console.log(prototypeOfJumper === animalProto); // true

/**
 * 3. Object.setPrototypeOf(obj, proto) — изменить прототип
 */
const newProto = {
  canSleep: true
};

Object.setPrototypeOf(jumper, newProto);

console.log(jumper.canSleep); // true

// 🧼 Объект без __proto__
const cleanDictionary = Object.create(null); // никакого прототипа

cleanDictionary.apple = "яблоко";
cleanDictionary.__proto__ = "плохой ключ"; // просто строка, безопасно, не ломает прототип

console.log(cleanDictionary.apple); // "яблоко"
console.log(cleanDictionary.__proto__); // "плохой ключ"

// ✅ Итог

/**
 * __proto__ — устаревший и ненадёжный способ работы с прототипами
 *
 * Object.create(proto) — создать объект
 *
 * Object.getPrototypeOf(obj) — получить прототип
 *
 * Object.setPrototypeOf(obj, proto) — установить прототип
 *
 * Object.create(null) — создаёт чистый объект, без всяких "магических" свойств
 */

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
