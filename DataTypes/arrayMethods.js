/**
 * Эта тема посвящена различным встроенным методам массивов,
 * которые позволяют удобно обрабатывать, фильтровать, изменять и искать данные в массивах.
 * Методы массивов не меняют исходный массив (за исключением некоторых: sort, reverse, splice и т.д.),
 * а возвращают новые значения или новые массивы.
 */

// 🔹 arr.forEach(callback)
/**
 * Перебирает массив, вызывает функцию для каждого элемента.
 * Ничего не возвращает (undefined).
 */
// let users = ["Иван", "Оля", "Петя"];
// users.forEach(function(user, index, array) {
//     console.log(`${index}: ${user}`); // Выводит индекс и имя
// });

// 🔹 arr.map(callback)
/**
 * Применяет функцию к каждому элементу и возвращает новый массив с результатами.
 */
// let lengths = users.map(user => user.length);
// console.log(lengths); // [4, 3, 4]

// 🔹 arr.filter(callback)
/**
 * Возвращает новый массив только с теми элементами, для которых функция вернула true.
 */
// let longNames = users.filter(user => user.length > 3);
// console.log(longNames); // ["Иван", "Петя"]

// 🔹 arr.find(callback)
/**
 * Ищет первый элемент, удовлетворяющий условию, и возвращает его. Если не найдено — undefined.
 */
// let found = users.find(user => user.startsWith("П"));
// console.log(found); // "Петя"

// 🔹 arr.findIndex(callback)
/**
 * Как find, но возвращает индекс элемента, а не сам элемент. Если не найдено — -1.
 */
// let foundIndex = users.findIndex(user => user === "Оля");
// console.log(foundIndex); // 1

// 🔹 arr.indexOf(item), arr.lastIndexOf(item)
/**
 * Ищут элемент по значению. indexOf — с начала, lastIndexOf — с конца.
 * Возвращают индекс элемента или -1, если не найден.
 */
// let fruits = ["яблоко", "банан", "груша", "яблоко"];
// console.log(fruits.indexOf("яблоко")); // 0
// console.log(fruits.lastIndexOf("яблоко")); // 3

// 🔹 arr.includes(item)
/**
 * Проверяет, содержит ли массив элемент (сравнение по ===).
 */
// console.log(fruits.includes("банан")); // true

// 🔹 arr.sort([compareFunction])
/**
 * Сортирует элементы на месте (меняет исходный массив).
 * По умолчанию сортирует как строки.
 */
// let numbers = [10, 5, 40, 25];
// numbers.sort(); // [10, 25, 40, 5] — неправильно для чисел

// Для правильной сортировки чисел:
// numbers.sort((a, b) => a - b); // [5, 10, 25, 40]

// 🔹 arr.reverse()
/**
 * Переворачивает порядок элементов в массиве (меняет массив).
 */
// numbers.reverse(); // [40, 25, 10, 5]

// 🔹 arr.split(separator), str.join(separator)
/**
 * split — превращает строку в массив по разделителю
 * join — объединяет массив в строку через разделитель
 */
// let namesStr = "Иван,Оля,Петя";
// let namesArr = namesStr.split(","); // ["Иван", "Оля", "Петя"]
// let newStr = namesArr.join("; ");    // "Иван; Оля; Петя"

// 🔹 arr.reduce(callback, initialValue)
/**
 * Применяет функцию к аккумулятору и каждому элементу массива,
 * сводя всё к одному значению (например, сумма).
 */
// let sum = [1, 2, 3, 4].reduce((acc, val) => acc + val, 0);
// console.log(sum); // 10

// 🔹 arr.reduceRight(callback, initialValue)
/**
 * То же, что и reduce, но проходит массив справа налево.
 */
// let reversedConcat = ["а", "б", "в"].reduceRight((acc, val) => acc + val);
// console.log(reversedConcat); // "вба"

// 🔹 arr.some(callback), arr.every(callback)
/**
 * some — возвращает true, если хотя бы один элемент удовлетворяет условию.
 * every — возвращает true, если все элементы удовлетворяют.
 */
// let hasLongName = users.some(user => user.length > 4); // false
// let allAreStrings = users.every(user => typeof user === "string"); // true

// 🔹 arr.fill(value, start, end)
/**
 * Заполняет массив значением с позиции start до end (не включая end).
 */
// let filled = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// 🔹 arr.copyWithin(target, start, end)
/**
 * Копирует часть массива на другую позицию в этом же массиве.
 */
// let copyArr = [1, 2, 3, 4, 5];
// copyArr.copyWithin(0, 3); // [4, 5, 3, 4, 5]

// 🔹 Array.isArray(obj)
/**
 * Проверяет, является ли объект массивом.
 */
// console.log(Array.isArray(users)); // true

// ✅ Итог
/**
 * - forEach — перебор без возврата
 * - map — преобразование каждого элемента
 * - filter — фильтрация элементов
 * - find / findIndex — поиск по условию
 * - indexOf / includes — поиск по значению
 * - sort / reverse — изменение порядка
 * - split / join — преобразование строк и массивов
 * - reduce / reduceRight — свертка массива в одно значение
 * - some / every — проверка условий
 * - fill / copyWithin — работа с содержимым
 * - Array.isArray — проверка типа
 */

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Переведите текст вида border-left-width в borderLeftWidth

/**
 * Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
 *
 * То есть дефисы удаляются, а все слова после них получают заглавную букву.
 */

// const camelize = string => {
//     const letters = string.split('');
//     const result = [];
//
//     for (let i = 0; i < letters.length; i++) {
//         if (letters[i] === "-") {
//             result.push(letters[++i].toUpperCase());
//             continue;
//         }
//         result.push(letters[i]);
//     }
//     return result.join('');
// };
//
// console.log(camelize("background-color")); // 'backgroundColor'
// console.log(camelize("list-style-image")); // 'listStyleImage'
// console.log(camelize("-webkit-transition")); // 'WebkitTransition'

//====================================================================================================================//
// Фильтрация по диапазону

/**
 * Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
 * ищет элементы со значениями больше или равными <a> и меньше или равными <b> и возвращает результат в виде массива.
 *
 * Функция должна возвращать новый массив и не изменять исходный.
 */

// const filterRange = (array, a, b) => array.filter(el => el >= a && b >= el);
// console.log(filterRange([ 5, 3, 8, 1 ], 1, 4)); // [3, 1]
//====================================================================================================================//
// Фильтрация по диапазону "на месте"

/**
 * Напишите функцию filterRangeInPlace(arr, a, b),
 * которая принимает массив arr и удаляет из него все значения кроме тех,
 * которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
 *
 * Функция должна изменять принимаемый массив и ничего не возвращать.
 */

// const arr = [ 5, 3, 8, 1 ];
// const filterRangeInPlace = (array, a, b) => {
//     for (let i = 0; i < array.length; i++) {
//         let val = array[i];
//
//         if (val < a || val > b) {
//             array.splice(i, 1);
//             i--;
//         }
//     }
// };
// filterRangeInPlace(arr, 1, 4);
// console.log(arr); // [3, 1]

/**
 * Not solved
 */
//====================================================================================================================//
// Сортировать в порядке по убыванию

// const sortDesc = array => {
//     return array.sort((a, b) => b - a);
// };
// console.log(sortDesc([ 5, 2, 1, -10, 8 ])); // 8, 5, 2, 1, -10
//====================================================================================================================//
// Создать расширяемый калькулятор

// function Calculator() {
//
//     this.methods = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//     };
//
//     this.calculate = str => {
//         const
//             split = str.split(" "),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];
//
//         if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
//
//         return this.methods[op](a, b);
//     };
//
//     this.addMethod = (name, func) => {
//         this.methods[name] = func;
//     };
// }
//
// const calc = new Calculator();
//
// calc.addMethod("*", (a, b) => a * b);
// calc.addMethod("/", (a, b) => a / b);
// calc.addMethod("**", (a, b) => a ** b);
//
// console.log(calc);
//
// console.log(calc.calculate("2 * 3"));
// console.log(calc.calculate("3 + 7"));

/**
 * Nor solved
 */

//====================================================================================================================//
// Трансформировать в массив имён

// const vasya = { name: "Вася", age: 25 };
// const petya = { name: "Петя", age: 30 };
// const masha = { name: "Маша", age: 28 };
//
// const users = [ vasya, petya, masha ];
//
// const names = users.map(user => user.name);
//
// console.log(names); // Вася, Петя, Маша
//====================================================================================================================//
// Трансформировать в объекты

// const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// const petya = { name: "Петя", surname: "Иванов", id: 2 };
// const masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// const users = [ vasya, petya, masha ];
//
// const usersMapped = users.map(user => {
//     return { fullName: `${ user.name } ${ user.surname }`, id: user.id }
// });
//
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
//
// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // Вася Пупкин
//====================================================================================================================//
// Отсортировать пользователей по возрасту

// const vasya = { name: "Вася", age: 25 };
// const petya = { name: "Петя", age: 30 };
// const masha = { name: "Маша", age: 28 };
//
// const users = [ vasya, petya, masha ];
//
// const sortByAge = users => users.sort((a, b) => a.age - b.age);
// sortByAge(users);
//
// // теперь: [vasya, masha, petya]
// console.log(users[0].name); // Вася
// console.log(users[1].name); // Маша
// console.log(users[2].name); // Петя

/**
 * Not solved
 */
//====================================================================================================================//
// Перемешайте массив

// const arr = [ 1, 2, 3 ];
//
// const shuffle = array => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [ array[i], array[j] ] = [ array[j], array[i] ];
//     }
//     return array;
// }
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

/**
 * Not solved
 */
//====================================================================================================================//
// Оставить уникальные элементы массива

// const strings = [ "кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O" ];
//
// const unique = arr => {
//     const filteredArr = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (!filteredArr.includes(arr[i])) filteredArr.push(arr[i]);
//     }
//
//     return filteredArr;
// };
// console.log(unique(strings)); // [ "кришна", "харе", ":-O" ]
//====================================================================================================================//
// Создайте объект с ключами из массива

// const users = [
//     { id: 'john', name: "John Smith", age: 20 },
//     { id: 'ann', name: "Ann Smith", age: 24 },
//     { id: 'pete', name: "Pete Peterson", age: 31 },
// ];
//
// const groupById = users => {
//     return users.reduce((obj, user) => {
//         obj[user.id] = user;
//         // "john" = { id: 'john', name: "John Smith", age: 20 }
//         return obj
//     }, {});
// };
// console.log(groupById(users));
/*
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

/**
 * Not solved
 */
