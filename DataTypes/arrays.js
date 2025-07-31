// 📦 Что такое массив

/**
 * Массив — это упорядоченная коллекция данных.
 * Может содержать любые типы данных.
 */
// let fruits = ["Яблоко", "Банан", "Апельсин"];
// console.log(fruits[0]); // "Яблоко"
//
// // 🔹 Создание массива
//
// // Через литерал:
// let arr1 = [1, 2, 3];
//
// // Через конструктор:
// let arr2 = new Array(3); // Массив с 3 пустыми ячейками
//
// // 🔹 Длина массива
//
// let fruits2 = ["Яблоко", "Банан"];
// console.log(fruits2.length); // 2
//
// fruits2.length = 1;
// console.log(fruits2); // ["Яблоко"]
//
// // 🔹 Доступ к элементам массива
//
// let numbers = [10, 20, 30];
// console.log(numbers[1]); // 20
//
// // 🔹 Методы добавления и удаления
//
// let items = ["Яблоко"];
// items.push("Банан");    // Добавить в конец
// items.pop();            // Удалить из конца
// items.unshift("Персик"); // Добавить в начало
// items.shift();          // Удалить из начала
//
// // 🔁 Перебор массива
//
// let letters = ["a", "b", "c"];
//
// // Старый способ
// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i]);
// }
//
// // Современный способ
// for (let item of letters) {
//     console.log(item);
// }
//
// // 🧠 Особенности массивов
//
// let mixed = [1, "строка", {name: "John"}, [5, 6]];
// console.log(mixed[2].name); // John
// console.log(mixed[3][1]);   // 6
//
// // 🔢 Многомерные массивы
//
// let matrix = [
//     [1, 2],
//     [3, 4]
// ];
//
// console.log(matrix[1][0]); // 3

// ✅ Резюме методов массивов
/**
 * push, pop       — добавление/удаление с конца
 * unshift, shift  — добавление/удаление с начала
 * forEach, for...of — перебор
 * find, filter, indexOf — поиск
 * map, reduce, sort — трансформация
 */

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Подмассив наибольшей суммы

/**
 * На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
 *
 * Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
 *
 * Функция getMaxSubSum(arr) должна возвращать эту сумму.
 *
 * Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»
 */

// const getMaxSubSum = array => {
//     let maxSum = 0;
//
//     for (let i = 0; i < array.length; i++) {
//         let sumFixedStart = 0;
//
//         for (let j = i; j < array.length; j++) {
//             sumFixedStart += array[j];
//             maxSum = Math.max(maxSum, sumFixedStart);
//         }
//     }
//
//     return maxSum;
// };
//
// console.log(getMaxSubSum([ -1, 2, 3, -9 ])); // 5
// console.log(getMaxSubSum([ 2, -1, 2, 3, -9 ])); // 6
// console.log(getMaxSubSum([ -1, 2, 3, -9, 11 ])); // 11
// console.log(getMaxSubSum([ -2, -1, 1, 2 ])); // 3
// console.log(getMaxSubSum([ 100, -9, 2, -3, 5 ])); // 100
// console.log(getMaxSubSum([ 1, 2, 3 ])); // 6

/**
 * Not solved
 */
