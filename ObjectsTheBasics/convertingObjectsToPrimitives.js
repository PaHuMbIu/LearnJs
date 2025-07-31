/**
 * Преобразование объекта в примитив (ToPrimitive)
 *
 * В JavaScript объекты могут автоматически преобразовываться в примитивные значения —
 * строки, числа и т.д. — в зависимости от контекста.
 *
 * Существует три "подсказки" (hint):
 * - "string" → при конкатенации, alert и т.п.
 * - "number" → при арифметике, сравнении
 * - "default" → при неявных операциях, вроде obj + obj
 *
 * Объект может управлять этим поведением через:
 * 1. Symbol.toPrimitive
 * 2. valueOf()
 * 3. toString()
 */

// 💡 Пример с Symbol.toPrimitive (самый современный способ):
// const user1 = {
//     name: "Alice",
//     age: 25,
//
//     [Symbol.toPrimitive](hint) {
//         if (hint === "string") return `User: ${ this.name }`;
//         if (hint === "number") return this.age;
//         return this.name + " (" + this.age + ")";
//     }
// };
//
// console.log(String(user1));   // → "User: Alice"
// console.log(+user1);          // → 25
// console.log(user1 + "!");     // → "Alice (25)!"
//
// // 🔧 Пример с valueOf и toString (устаревший, но работает):
//
// const user2 = {
//     name: "Bob",
//     age: 30,
//
//     toString() {
//         return this.name;
//     },
//
//     valueOf() {
//         return this.age;
//     }
// };
//
// console.log(String(user2));   // → "Bob"
// console.log(+user2);          // → 30
// console.log(user2 + " Smith"); // → "30 Smith"

/**📌 ИТОГО:
 * - Symbol.toPrimitive — приоритетный и гибкий способ
 * - valueOf и toString — старые, но ещё используются
 * - Контекст важен: hint определяет, какой метод будет вызван
 */