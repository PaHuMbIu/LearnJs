// Зачем нужны пользовательские ошибки?
/**
 * Когда ваша программа выполняет какую-то задачу, могут произойти разные ошибки. Например:
 * Ошибка при работе с сетью — HttpError
 * Ошибка базы данных — DbError
 * Объект не найден — NotFoundError
 *
 * Обычные ошибки (например, SyntaxError) недостаточно описательные.
 * Иногда хочется, чтобы ошибка несла информацию о том, что именно не так,
 * например ключ statusCode = 404 или имя пропущенного поля.
 * Такие ошибки — удобнее создавать самостоятельно.
 */

// Как устроены такие ошибки?
/**
 * Пользовательские ошибки можно сделать через наследование от встроенного класса Error. Это важно, чтобы:
 * Можно было проверять ошибку с помощью instanceof
 * Ошибка имела стандартные свойства: message, name и stack
 */

// Простой пример
class ValidationError extends Error {
  constructor(message) {
    super(message);           // обязательно — вызываем конструктор Error
    this.errorName = "ValidationError"; // даём понятное имя
  }
}

console.log(Error.prototype)

function readUser(json) {
  const user = JSON.parse(json); // может бросить SyntaxError
  if (!user.errorName || !user.age) {
    throw new ValidationError("Отсутствует name или age");
  }
  return user;
}

try {
  readUser('{"name":"Ivan"}');
} catch (err) {
  console.log(err.errorName);    // ValidationError
  console.log(err.message); // Отсутствует name или age
  console.log(err.stack);   // трассировка стека
  console.log(err instanceof ValidationError); // true
}

// А что если я хочу добавить свои свойства?
class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "HttpError";
    this.statusCode = statusCode;
  }
}

function fetchData(url) {
  throw new HttpError("Не удалось загрузить", 404);
}

try {
  fetchData("/invalid");
} catch (err) {
  console.log(err.name);       // HttpError
  console.log(err.message);    // Не удалось загрузить
  console.log(err.statusCode); // 404
}
