// 🔗 Что такое наследование классов?
/**
 * Наследование — это способ создать новый класс на основе уже существующего.
 * Новый класс расширяет функциональность старого, добавляя свои свойства и методы.
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издаёт звук.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} лает.`);
    }
}

const dog = new Dog("Шарик");
dog.speak(); // Шарик издаёт звук.
dog.bark();  // Шарик лает.

// 🧠 Что делает super?
/**
 * super — это способ обратиться к родительскому классу:
 */

class Animal1 {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal1 {
    constructor(name, color) {
        super(name); // вызывает родительский constructor
        this.color = color;
    }
}

class A {
    constructor() {
        this.sayHi = function() {
            console.log('Привет от A');
        };
    }
}



const rabbit = new Rabbit("Кролик", "белый");
console.log(rabbit.name);  // Кролик
console.log(rabbit.color); // белый

/**
 * В конструкторе обязательно вызывать super(...), если класс расширяет другой.
 * Нельзя использовать this, пока не вызван super(...).
 */

class Animal2 {
    constructor(name) {
        this.name = name;
    };

    speak() {
        console.log(`${this.name} молчит...`);
    }
}

class Cat extends Animal2 {
    speak() {
        super.speak(); // вызов метода родителя
        console.log(`${this.name} мяукает.`);
        // Поведение, словно в здесь 2 console.log, молчит и мяукает
    }
}

const cat = new Cat("Мурка");
cat.speak();
// Мурка молчит...
// Мурка мяукает.

/**
 * super.method() позволяет расширять поведение родителя, а не полностью заменять.
 */

// ⚠️ Важные детали. Что происходит при new:
/**
 *  new Child(...) → вызывает constructor родителя → потом constructor потомка
 */

class A {
    method() {
        console.log("A");
    }
}

class B extends A {
    method() {
        super.method(); // вызывает метод из A
        console.log("B");
    }
}

new B().method();
// A
// B

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Ошибка создания экземпляра класса

// class Animal {
//
//     constructor(name) {
//         this.name = name;
//     }
//
// }
//
// class Rabbit extends Animal {
//     constructor(name) {
//         super(name)
//         this.created = Date.now();
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);

//====================================================================================================================//
// Улучшенные часы

/**
 * Создайте новый класс ExtendedClock,
 * который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками».
 * Установите значение в 1000 (1 секунда) по умолчанию.
 */

// class Clock {
//     constructor({ template }) {
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
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     stop() {
//         clearInterval(this.timer);
//     }
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
//
// class ExtendedClock extends Clock {
//
//     constructor(options) {
//         super(options);
//         let { precision = 1000 } = options;
//         this.precision = precision;
//     }
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), this.precision);
//     }
//
// }
//
// const clock = new ExtendedClock({ template: 'h:m:s', precision: 1000 });
// console.log(clock)
// clock.start();
