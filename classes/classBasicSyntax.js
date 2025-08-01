// 📌 1. Что такое class
/**
 * Класс — это шаблон для создания объектов, задаёт начальные свойства через constructor и методы внутри тела класса
 */

class User1 {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

const user = new User1("Иван");
user.sayHi(); // Иван

/**
 * Под капотом это обычная функция-конструктор:
 *
 * typeof User === "function"
 *
 * Методы хранятся в User.prototype
 */

// 🧱 Класс = синтаксический сахар? Да и нет.
/**
 * Класс — это более удобный способ описания конструктора и методов:
 */

function User(name) {
    this.name = name;
}
User.prototype.sayHi = function() {
    console.log(this.name);
};

/**
 * Обе конструкции создают похожую структуру, но class:
 * Работает строго (use strict).
 * Гарантирует, что нельзя вызывать без new.
 */


//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Переписать на класс

// class Clock {
//
//     constructor({template}) {
//         this.template = template;
//     }
//
//     render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
//
//         console.log(output);
//     }
//
//     stop() {
//         clearInterval(this.timer);
//     };
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     };
// }
//
// let clock = new Clock({template: 'h:m:s'});
// console.log(clock)
// clock.start();
