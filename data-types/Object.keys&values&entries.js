// 🧩 Метод Object.keys(obj) возвращает массив всех ключей объекта obj
const user = {
    name: "Анна",
    age: 25,
    city: "Страсбург"
};
console.log(Object.keys(user)); // ["name", "age", "city"]

// 🎯 Метод Object.values(obj) возвращает массив всех значений объекта obj
const user1 = {
    name: "Анна",
    age: 25,
    city: "Страсбург"
};
console.log(Object.values(user1)); // ["Анна", 25, "Страсбург"]

// 🔁 Метод Object.entries(obj) возвращает массив пар [ключ, значение] объекта obj
const user2 = {
    name: "Анна",
    age: 25,
    city: "Страсбург"
};
console.log(Object.entries(user2));
// [["name", "Анна"], ["age", 25], ["city", "Страсбург"]]

// 🔄 Применение в цикле
const user3 = {
    name: "Анна",
    age: 25,
    city: "Страсбург"
};

for (const [key, value] of Object.entries(user3)) {
    console.log(`${key}: ${value}`);
}
// Вывод:
// name: Анна
// age: 25
// city: Страсбург

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Сумма свойств объекта

// const salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// const sumSalaries = salaries => {
//     return Object.values(salaries).reduce((sum, value) => sum + value, 0);
// };
// console.log(sumSalaries(salaries)); // 650

//====================================================================================================================//
// Подсчёт количества свойств объекта

// const user = {
//     name: 'John',
//     age: 30
// };
//
// const count = obj => {
//     return Object.keys(obj).length;
// };
// console.log(count(user)); // 2
