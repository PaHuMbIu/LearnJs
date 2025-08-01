// 🧊 Что такое статические свойства?
/**
 * Статические свойства — это свойства, которые принадлежат самому классу, а не его экземплярам.
 */

class Article {
    static publisher = "Журнал 'Код'";
}
console.log(Article.publisher); // Журнал 'Код'

/**
 * publisher — статическое свойство.
 * Оно доступно только у класса, не у объектов, созданных через new.
 */

// 🧠 Важно: отличие обычных и статических свойств
class Article1 {
    constructor(title) {
        this.title = title;         // обычное свойство
    }

    static category = "Новости"; // статическое свойство
}

const a = new Article1("Заголовок");

console.log(a.title);           // Заголовок (нормально)
console.log(a.category);        // undefined (не работает)
console.log(Article1.category);  // Новости (работает)

// 📦 Где это может пригодиться?
class Counter {
    static count = 0;

    constructor() {
        Counter.count++;
    }
}

new Counter();
new Counter();

console.log(Counter.count); // 2

// 🔄 Наследование статических свойств
/**
 * Если класс наследуется от другого, то статические свойства тоже наследуются:
 */

class Animal {
    static planet = "Земля";
}

class Dog extends Animal {}

console.log(Dog.planet); // Земля

// ✏️ Как это работает "под капотом"?

class MyClass1 {
    static something = 123;
}

function MyClass() {}

MyClass.something = 123; // свойство вешается прямо на конструктор

//====================================================================================================================//
/**
 * Tasks
 */
//--------------------------------------------------------------------------------------------------------------------//
// Класс расширяет объект?

// class Rabbit extends Object.prototype.constructor {
//     constructor(name) {
//         super()
//         this.name = name;
//     }
// }
//
// let rabbit = new Rabbit("Кроль");
// console.log(rabbit)
// console.log( rabbit.hasOwnProperty('name') ); // Ошибка

