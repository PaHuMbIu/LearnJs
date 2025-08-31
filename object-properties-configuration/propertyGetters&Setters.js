// 🧠 Что такое аксессоры
/**
 * Есть два типа свойств объекта:
 * Data property – обычное свойство с хранением значения.
 * Accessor property – виртуальное свойство, которое при чтении вызывает функцию (геттер), при записи – сеттер
 */

const obj = {
  get propName() {
    // код при чтении obj.propName
  },
  set propName(value) {
    // код при записи obj.propName = value
  }
};

/**
 * Геттер сработает при obj.propName, сеттер – при присваивании obj.propName = ....
 */

// Пример: виртуальное свойство fullName
user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return this.name + " " + this.surname;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

console.log(user.fullName);    // "John Smith"
user.fullName = "Alice Cooper";
console.log(user.name);        // "Alice"
console.log(user.surname);     // "Cooper"

// Почему это полезно
/**
 * Вычисляемые свойства: автоматически считаются из других — например, площадь или возраст
 * Валидация данных: проверка при присваивании — например, длина строки
 * Инкапсуляция и удобный код: скрываем внутренние детали (_name, #balance) и предоставляем чистый интерфейс
 */

// Пример: защита установки слишком короткого имени
user = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log("Имя слишком короткое, минимум 4 символа");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
console.log(user.name);   // "Pete"
user.name = "";
// "Имя слишком короткое, минимум 4 символа"

// Создание аксессоров через defineProperty
user = {name: "John", surname: "Smith"};

Object.defineProperty(user, 'fullName', {
  get() {
    return this.name + " " + this.surname;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
  enumerable: true,         // свойство будет видно в циклах
  configurable: true        // можно переопределить или удалить
});

console.log(user.fullName);  // "John Smith"


// Использование аксессоров в классах
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    console.log("Площадь нельзя установить напрямую");
  }
}

rect = new Rectangle(10, 5);
console.log(rect.area);   // 50
rect.area = 60;           // Вывод: "Площадь нельзя установить напрямую"

/**
 * Геттеры (get) позволяют сделать свойство читаемым по запросу, как функция.
 * Сеттеры (set) — контролируют ассоциацию и позволяют добавлять валидацию.
 * Аксессоры пригодны для вычисляемых, виртуальных и защищённых свойств.
 * Они создаются внутри объектов, классов или через Object.defineProperty.
 */
