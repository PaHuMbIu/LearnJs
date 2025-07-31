// 📦 Что такое дескрипторы свойств?
/**
 * В JavaScript каждое свойство объекта — это не просто значение.
 * У него есть настройки, называются дескрипторы (property descriptors).
 */

// 🔍 У свойства есть 3 скрытых флага:
/**
 * writable – можно ли менять значение?
 * enumerable – показывается ли в for...in или Object.keys?
 * configurable – можно ли удалить или изменить саму настройку?
 */

// 🔧 Как их посмотреть?

// const user = {
//     name: "Вася"
// };
//
// const descriptor = Object.getOwnPropertyDescriptor(user, "name");
// console.log(descriptor);
// 📦 Вывод:
/**
 * {
 *   value: "Вася",
 *   writable: true,
 *   enumerable: true,
 *   configurable: true
 * }
 *
 * Это значит:
 * value — само значение.
 * writable: true — можно делать user.name = "Петя".
 * enumerable: true — увидим в for...in.
 * configurable: true — можно удалить или перенастроить.
 */

// 🛠 Как создать или изменить свойство с дескрипторами?
/**
 * ❗ Пример: делаем user.name неизменяемым
 */

// const user = {};

// Object.defineProperty(user, "name", {
//     value: "Аня",
//     writable: false,
//     enumerable: true,
//     configurable: false
// });
//
// console.log(user.name); // => Аня
//
// user.name = "Оля"; // Не сработает
// console.log(user.name); // => Аня

// 📚 Object.defineProperties — сразу много свойств

// Object.defineProperties(user, {
//     name: {
//         value: "Ира",
//         writable: false
//     },
//     age: {
//         value: 30,
//         writable: true
//     }
// });

// 📌 Object.getOwnPropertyDescriptors — получаем все дескрипторы сразу
// console.log(Object.getOwnPropertyDescriptors(user));

// 🧠 Зачем вообще всё это?
/**
 * Скрытые свойства (enumerable: false)
 * Защита от перезаписи (writable: false)
 * Создание "констант" в объектах
 * Подготовка к геттерам/сеттерам и Object.defineProperty
 */

