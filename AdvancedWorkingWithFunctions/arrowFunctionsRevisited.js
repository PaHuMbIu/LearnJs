/**
 * ⚠️ Главное отличие — стрелочная функция не имеет своего this
 * Это значит: она не создаёт новый this, а берёт его из внешнего контекста
 */

// const user = {
//     name: "Лена",
//     sayHi() {
//         const arrow = () => console.log(this.name);
//         arrow();
//     }
// };
// user.sayHi(); // => Лена

// Почему работает? Потому что arrow берёт this из sayHi, а там this — это user.

// 😵 А если обычную функцию?
// const user = {
//     name: "Лена",
//     sayHi() {
//         function regular() {
//             console.log(this.name); // undefined
//         }
//         regular();
//     }
// };
// user.sayHi();

// this внутри обычной function — не user, а undefined (в строгом режиме).

// ❌ У стрелочной функции нет:
/**
 * своего this
 * arguments
 * super
 * нельзя использовать как конструктор (new)
 */

// 📌 Выводы
/**
 * Особенность	                    Стрелочные функции
 * Короткий синтаксис	            ✅
 * Нет своего this	                ✅ Наследует this извне
 * Нет arguments	                ✅
 * Нельзя использовать с new	    ✅
 * Удобны в коротких функциях	    ✅ map, filter, setTimeout и т.д.
 */
