/**
 * ✅ OPTIONAL CHAINING (?.)
 *
 * ?. — это оператор, который безопасно обращается к свойствам, методам или элементам массива.
 * Если часть цепочки слева от ?. равна null или undefined — результатом будет undefined, без ошибки.
 *
 * Это особенно полезно при доступе к глубоко вложенным данным, которые могут отсутствовать.
 */

// // Проблема, которую он решает
let user = {};
console.log(user.address.street); // ❌ Ошибка! address — undefined (Ложится сервер)

// С optional chaining
let user2 = {};
console.log(user2.address?.street); // ✅ undefined, ошибки нет

// 📘 Пример с методом
let user3 = {
  sayHi() { console.log("Привет!"); }
};

user3.sayHi?.(); // ✅ Привет!
user3.nonExistent?.(); // ✅ Ничего не происходит, ошибки нет

// 📘 Пример с массивом
let users = null;
console.log(users?.[0]);   // ✅ undefined, без ошибки

// ⚠️ Нельзя использовать для присваивания
// user2.address?.street = "Мира 5"; // ❌ SyntaxError

/**
 * 💡 Мнемоника: "?. — если существует — тогда продолжай, иначе undefined"
 */