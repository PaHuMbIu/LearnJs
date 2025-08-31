/**
 * Каждая функция в JavaScript имеет методы .call() и .apply().
 * Они позволяют вызвать функцию с конкретным this и аргументами.
 */

// 🔹 call
/**
 * Ты «вызываешь» функцию от имени user
 */
function sayHi() {
  console.log(this.name);
}

const user = {name: "Анна"};

sayHi.call(user); // 'this' внутри sayHi будет указывать на 'user'
// => Анна

// 🔹 apply
/**
 * Похож на call, но аргументы передаются массивом:
 */
function sayHiTo(greeting, ...args) {
  console.log(`${greeting}, ${this.name}`);
}

const user1 = {name: "Анна"};

sayHiTo.apply(user1, [1, 2, 43, 4]);
sayHiTo.apply(user1, ["Привет"]);
// => Привет, Анна

// 🤔 Разница между call и apply?
/**
 * Только в способе передачи аргументов:
 */
// func.call(thisArg, arg1, arg2, ...)
// func.apply(thisArg, [arg1, arg2, ...])


// Декораторы
/**
 * Декоратор — это обёртка над функцией, которая добавляет ей новое поведение, не изменяя оригинальную.
 */

function say(name) {
  console.log(`Привет, ${name}`);
}

// Сделаем декоратор logDecorator, который будет логировать вызовы:

function logDecorator(func) {
  return function (...args) {
    console.log(`Вызов с аргументами: ${args}`);
    return func.apply(this, args); // передаём 'this' и аргументы
  };
}

const wrappedSay = logDecorator(say);

wrappedSay("Анна"); // логирует и вызывает оригинальную функцию
// Вызов с аргументами: Анна
// Привет, Анна

// Декоратор для кэширования (мемоизация)

/**
 * Этот декоратор запоминает результаты вызовов функции, чтобы не вызывать её повторно с теми же аргументами
 */

function slow(x) {
  console.log(`Вычисляем для ${x}...`);
  return x * 2;
}

// Создаём декоратор cachingDecorator:

function cachingDecorator(func) {
  const cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    const result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

const cachedSlow = cachingDecorator(slow);

console.log(cachedSlow(2)); // Вычисляет, выводит 4
console.log(cachedSlow(2)); // Берёт из кеша, выводит 4

/**
 * ✅ Почему используем func.call(this, ...)?
 * Чтобы сохранить this у оригинальной функции, особенно если она используется как метод объекта.
 */

// 🔹 Пример, где важно this
const worker = {
  someMethod() {
    return 5;
  },

  slow(x) {
    console.log("Вычисление с", x);
    return x * this.someMethod();
  }
};

// Если просто завернуть `worker.slow`:
function cachingDecorator1(func) {
  const cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    const result = func.call(this, x); // сохраняем правильный this
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator1(worker.slow);

console.log(worker.slow(2)); // Работает

// 📌 Выводы
/**
 * call и apply позволяют вызывать функцию с определённым this.
 *
 * Декораторы — обёртки над функциями, добавляющие функциональность.
 *
 * Через func.call(this, ...) мы сохраняем контекст (this) при вызове внутри обёртки.
 *
 * Декораторы полезны для:
 *
 * логирования;
 *
 * кэширования;
 *
 * проверки прав;
 *
 * отслеживания времени выполнения и т.д.
 */

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Декоратор-шпион

/**
 * Создайте декоратор spy(func), который должен возвращать обёртку,
 * которая сохраняет все вызовы функции в своём свойстве calls.
 *
 * Каждый вызов должен сохраняться как массив аргументов.
 */

// function work(a, b) {
//     console.log(a + b); // произвольная функция или метод
// }
//
// const spy = func => {
//     function wrapper(...args) {
//         func.apply(this, args);
//         wrapper.calls.push(args);
//     }
//     wrapper.calls = [];
//
//     return wrapper;
// };
//
// work = spy(work);
//
// work(1, 2); // 3
// work(4, 5); // 9
//
// for (let args of work.calls) {
//     console.log('call:' + args.join()); // "call:1,2", "call:4,5"
// }

//====================================================================================================================//
// Задерживающий декоратор

/**
 * Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
 */

// const f = x => console.log(x);
//
// const delay = (func, ms) => {
//     return function() {
//         console.log(arguments);
//         setTimeout(() => func.apply(this, arguments), ms);
//     };
// };
//
// // создаём обёртки
// const f1000 = delay(f, 1000);
// const f1500 = delay(f, 1500);
//
// f1000("test", 214); // показывает "test" после 1000 мс
// f1500("test", 333); // показывает "test" после 1500 мс

//====================================================================================================================//
// Декоратор debounce

// const request = data => {
//     console.log("request:", data);
// };
//
// const debounce = (func, ms) => {
//     let timeoutId;
//
//     return function(...args) {
//         clearTimeout(timeoutId);
//
//         timeoutId = setTimeout(() => {
//             func.apply(this, args);
//         }, ms);
//     };
// };
//
// const debouncedRequest = debounce(request, 1000);
//
// debouncedRequest("a");
// setTimeout(() => debouncedRequest("b"), 200);
// setTimeout(() => debouncedRequest("c"), 500);
// Через 1000 мс после последнего вызова (в 1500мс) выведется:
// request: c

//====================================================================================================================//
// Тормозящий (throttling) декоратор

// function f(a) {
//     console.log(a)
// }
//
// function throttle(func, ms) {
//
//     let isThrottled = false,
//         savedArgs,
//         savedThis;
//
//     return function wrapper() {
//
//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
//
//         func.apply(this, arguments); // (1)
//
//         isThrottled = true;
//
//         setTimeout(function() {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
// }
//
// // f1000 передаёт вызовы f максимум раз в 1000 мс
// const f1000 = throttle(f, 1000);
//
// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
