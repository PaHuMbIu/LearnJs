// 🔧 Почему __proto__ — это плохо?

// const animal = {
//     eats: true
// };
//
// const rabbit = {
//     jumps: true
// };
//
// rabbit.__proto__ = animal; // работает, но это старый и нестандартный способ

/**
 * 🔴 __proto__ — работает, но считается устаревшим.
 * Лучше использовать специальные методы, которые читаются лучше и безопаснее.
 */

// ✅ Современные способы работы с прототипами
/**
 * 1. Object.create(proto) — создать объект с прототипом
 */
// const animal = {
//     eats: true
// };
//
// const rabbit = Object.create(animal); // создаёт объект, наследующий от animal
//
// console.log(rabbit) // Это пустой объект с прототипом animal
//
// console.log(rabbit.eats); // true (наследуется от animal)

/**
 * 2. Object.getPrototypeOf(obj) — получить прототип объекта
 */

// const proto = Object.getPrototypeOf(rabbit);
// console.log(proto) // Здесь лежит объект animal, так как он является прототипом объекта rabbit
// console.log(proto === animal); // true

/**
 * 3. Object.setPrototypeOf(obj, proto) — изменить прототип
 */

// const newProto = {
//     sleeps: true
// };
//
// Object.setPrototypeOf(rabbit, newProto);
//
// console.log(rabbit.sleeps); // true

// 🧼 Объект без __proto__
// const dictionary = Object.create(null); // никакого прототипа
//
// dictionary.apple = "яблоко";
// dictionary.__proto__ = "плохой ключ"; // просто строка, а не ловушка
//
// console.log(dictionary.apple); // "яблоко"
// console.log(dictionary.__proto__); // "плохой ключ"

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