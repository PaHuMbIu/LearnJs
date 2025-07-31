/**
 * Map — это коллекция, которая хранит данные в виде пар: ключ → значение. В отличие от обычных объектов (Object),
 * в Map можно использовать ключи любого типа: строки, числа, объекты и даже функции.
 */

// let map = new Map();
//
// map.set('1', 'строка');    // ключ — строка
// map.set(1, 'число');       // ключ — число
// map.set(true, 'булево');   // ключ — булевое значение
//
// console.log(map.get(1));       // 'число'
// console.log(map.get('1'));     // 'строка'
// console.log(map.size);         // 3

// Основные методы Map:
/**
 * map.set(key, value) — добавляет пару ключ–значение.
 *
 * map.get(key) — возвращает значение по ключу.
 *
 * map.has(key) — проверяет наличие ключа.
 *
 * map.delete(key) — удаляет элемент по ключу.
 *
 * map.clear() — очищает всю коллекцию.
 *
 * map.size — возвращает количество элементов.
 */

// Использование объектов в качестве ключей:
// let user = { name: "Вася" };
// let visitsCountMap = new Map();
//
// visitsCountMap.set(user, 123);
// console.log(visitsCountMap.get(user)); // 123

// ✅ Set — коллекция уникальных значений

/**
 * Set — это коллекция, которая хранит только уникальные значения.
 * То есть, одно и то же значение не может присутствовать в Set более одного раза.
 */

// let set = new Set();
//
// set.add(1);
// set.add(2);
// set.add(2); // не добавится, так как 2 уже есть в Set
//
// console.log(set.size); // 2
//
// console.log(set.has(1)); // true
// set.delete(1);
// console.log(set.has(1)); // false

// Основные методы Set:
/**
 * set.add(value) — добавляет значение.
 *
 * set.has(value) — проверяет наличие значения.
 *
 * set.delete(value) — удаляет значение.
 *
 * set.clear() — очищает коллекцию.
 *
 * set.size — возвращает количество элементов.
 */

// Когда использовать Map и Set?
/**
 * Используйте Map, когда вам нужно хранить пары ключ–значение, особенно если ключи могут быть не только строками.
 *
 * Используйте Set, когда вам нужно хранить уникальные значения и быстро проверять их наличие.
 */

// 🔁 Object.entries(obj)

/**
 * Преобразует обычный объект в массив пар [ключ, значение].
 */

// let obj = {
//     name: "Анна",
//     age: 25
// };
//
// let entries = Object.entries(obj);
// console.log(entries);
// [["name", "Анна"], ["age", 25]]

// Этот массив пар можно напрямую передать в Map:
// let map = new Map(Object.entries(obj));
// console.log(map)
// console.log(map.get("name")); // "Анна"

// 🔄 Object.fromEntries(pairs)

/**
 * Преобразует массив пар [ключ, значение] в объект.
 *
 * Обычно используется, чтобы превратить Map в обычный объект.
 */

// let map = new Map([
//     ["fruit", "apple"],
//     ["color", "red"]
// ]);
//
// let obj = Object.fromEntries(map);
// console.log(obj);
// { fruit: "apple", color: "red" }


//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Фильтрация уникальных элементов массива

/**
 * Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
 */

// const values = [ "Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
//
// const unique = arr => {
//     return Array.from(new Set(arr));
// };
// console.log(unique(values)); // [ Hare, Krishna, :-O ]
//====================================================================================================================//
// Отфильтруйте анаграммы

// const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// const anagramClean = arr => {
//     const map = new Map();
//
//     for (const word of arr) {
//         const sorted = word.toLowerCase().split("").sort().join("");
//         map.set(sorted, word);
//     }
//
//     return Array.from(map.values());
// };
// console.log(anagramClean(arr)); // "nap, teachers, ear" или "PAN, cheaters, era"

/**
 * Nor solved
 */
//====================================================================================================================//
// Перебираемые ключи

/**
 * let map = new Map();
 *
 * map.set("name", "John");
 *
 * let keys = map.keys();
 *
 * // Error: keys.push is not a function
 * // Ошибка: keys.push -- это не функция
 * keys.push("more");
 */

// const map = new Map();
// map.set("name", "John");
//
// const keys = Array.from(map.keys());
// keys.push("more");
//
// console.log(keys); // [ name, more ]

