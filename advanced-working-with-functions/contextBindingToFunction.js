/**
 * Метод .bind() создаёт новую функцию, у которой жёстко привязан this.
 */

function greet() {
  console.log(this.name);
}

const user = {name: "Катя"};

const boundGreet = greet.bind(user);
boundGreet(); // => Катя

/**
 * greet.bind(user) возвращает новую функцию, где this всегда будет равен user.
 */

// 🔁 Отличие от call и apply
/**
 * call и apply вызывают функцию сразу с заданным this.
 * bind — возвращает новую функцию, которую ты можешь вызвать позже.
 */

greet.call(user); // сразу вызывает
const fn = greet.bind(user); // возвращает функцию
fn(); // вызывает позже

// ✅ bind нужен, когда теряется контекст this

const user1 = {
  name: "Ира",
  sayHi() {
    console.log(this.name);
  }
};
setTimeout(user1.sayHi, 1000); // ❌ ошибка: this === undefined
const f = user1.sayHi;
f()

/**
 * 🚫 Почему ошибка: при присваивании метода в другую переменную контекст теряется
 */

// Потеря this в колбэках
const user2 = {
  name: "Оля",
  sayHi() {
    console.log(`Привет, ${this.name}`);
  }
};

function executeCallback(callback) {
  callback(); // просто вызывает функцию
}

executeCallback(user2.sayHi); // ❌ this теряется
executeCallback(user2.sayHi.bind(user)) // => Привет, Оля

// ✅ Частичное применение аргументов (Partial Application)
/**
 * .bind() может не только привязать this, но и часть аргументов заранее.
 */

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // a = 2 уже передано

console.log(double(5)); // => 10 (2 * 5)

/**
 * double — это новая функция с «зашитым» первым аргументом.
 */

/**
 * ⚠️ this в bind(null, ...)
 * Если this не нужен (например, функция без this), можно передавать null.
 */

// 🛠 Практика: собственный bind
function customBind(func, context, ...boundArgs) {
  return function (...args) {
    console.log([...boundArgs, ...args])
    return func.apply(context, [...boundArgs, ...args]);
  };
}

function say(greeting, name) {
  console.log(`${greeting}, ${name}`);
}

const sayHelloTo = customBind(say, null, "Привет");

sayHelloTo("Маша"); // => Привет, Маша

// 🧩 Итого:
/**
 * Метод	        Что делает	                          Когда использовать
 * call	            Вызывает с this и аргументами	      Когда надо вызвать сразу
 * apply	        То же, но аргументы массивом	      Когда аргументы уже в массиве
 * bind	            Возвращает функцию с this	          Когда нужно вызвать позже, с фикс. this
 */

// 💡 Где полезен bind?
/**
 * В обработчиках событий (addEventListener)
 * В setTimeout/setInterval
 * В колбэках (map, forEach, filter)
 * Для частичного применения аргументо
 */
//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Исправьте функцию, теряющую "this"

/**
 * Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.
 * loginOk/loginFail в зависимости от ответа.
 *
 * Однако, его вызов приводит к ошибке. Почему?
 */

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password === "rockstar") ok();
//     else fail();
// }
//
// const user = {
//     name: 'Вася',
//
//     loginOk() {
//         console.log(`${this.name} logged in`);
//     },
//
//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     },
//
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//====================================================================================================================//
// Использование частично применённой функции для логина

/**
 * Объект user был изменён.
 * Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
 *
 * Что нужно передать в вызов функции askPassword в коде ниже,
 * чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
 */

// function askPassword(ok, fail) {
//     const password = prompt("Password?", '');
//     if (password === "rockstar") ok();
//     else fail();
// }
//
// const user = {
//     name: 'John',
//
//     login(result) {
//         console.log( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };
//
// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?