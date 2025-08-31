// 🔁 Итерируемые объекты

// Пример с массивом
let arr = ['a', 'b', 'c'];
for (let char of arr) {
  console.log(char); // 'a', 'b', 'c'
}

// Пример с итератором вручную
let str = "Hi";
let iterator = str[Symbol.iterator]();
console.log(iterator.next()); // { value: 'H', done: false }
console.log(iterator.next()); // { value: 'i', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Пользовательский итерируемый объект
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return {done: false, value: this.current++};
        } else {
          return {done: true};
        }
      }
    };
  }
};

for (let num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}

// ❌ Обычный объект не итерируемый
let obj = {a: 1, b: 2};
for (let key in obj) {
  console.log(key); // 'a', 'b'
}
for (let val of obj) {
} // Ошибка: obj не итерируемый

// 🔄 Array.from

// Пример со строкой (итерируемый объект)
let fromStr = Array.from("Hello");
console.log(fromStr); // ['H', 'e', 'l', 'l', 'o']

// Пример с псевдомассивом
let pseudoArray = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};
let fromPseudo = Array.from(pseudoArray);
console.log(fromPseudo); // ['a', 'b', 'c']

// Array.from с функцией
let doubled = Array.from([1, 2, 3], x => x * 2);
console.log(doubled); // [2, 4, 6]

