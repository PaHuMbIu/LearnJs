// Что такое расширение встроенных классов?
/**
 * В JavaScript вы можете наследовать встроенные классы, такие как Array, Map, Date и другие.
 * Это означает, что можно создавать свои "специализированные" версии стандартных объектов и
 * добавлять в них новые методы.
 */

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

/**
 * Создаём класс PowerArray, который наследует все возможности обычного массива и
 * добавляет метод isEmpty() — проверка, пуст ли массив.
 * Теперь можно делать:
 */

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty());         // false
let filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr.isEmpty()); // false

/**
 * Замечательно, что методы вроде filter возвращают массив того же типа — PowerArray,
 * а не обычный Array, поэтому isEmpty() и дальше продолжает работать.
 * Это происходит потому, что внутри JavaScript использует arr.constructor
 * для создания нового массива
 */

// Как контролировать возвращаемый тип: Symbol.species
/**
 * Если вы не хотите, чтобы методы вроде map, filter возвращали ваш расширенный класс,
 * можно это изменить с помощью Symbol.species. Например:
 */

class PowerArray1 extends Array {
  isEmpty() {
    return this.length === 0;
  }

  static get [Symbol.species]() {
    return Array;
  }
}

let arr1 = new PowerArray(1, 2, 5);
let filtered = arr1.filter(x => x > 1);
console.log(filtered instanceof PowerArray); // false
console.log(filtered instanceof Array);      // true

// Какие ещё классы поддерживают это?
/**
 * Такая логика работает не только с массивами —
 * но и с другими встроенными типами, например, Map, Set, и прочими.
 * У них тоже можно наследовать и настраивать Symbol.species,
 * чтобы управлять тем, какой тип создаётся методами вроде map, filter, slice и т.д
 */




