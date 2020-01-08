/**
 * generic указываются в <> и обозначают из чего они состоят
 */

// const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
// const arrayOfStrings: string[] = ['1', '2', '3', '4', '5'];
const arrayOfStrings: Array<string> = ['1', '2', '3', '4', '5'];

function reverse<T>(array: T[]): T[] {
  // работает с типом T, принимает массив типа T
  return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);

// если не укажем generic, то в .then тип data будет unknown
const promise = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('promise resolve');
  }, 3000);
});
// const promise: Promise<string> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('promise resolve');
//   }, 3000);
// });

promise.then(data => console.log(data));

// --------------

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b);
}

const merged = mergeObjects({ name: 'Roman' }, { age: 26 });

console.log(merged.name); // без generic поле name будет недоступно в ts, а generic позволяют явно указать ключи и работать с автокомплитом

// // чтоб можно было работать только с объектами, мы должны явно укахать, что extends object
// const merged2 = mergeObjects('aaa' , 'bbb')
// console.log(merged2)

// --------------

interface ILength {
  length: number;
}
// указываем, что у generic есть ключ length
function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `'smth string with value length' ${value.length}`,
  };
}

console.log(withCount('15'));
console.log(withCount({ length: 20 })); // будет корректно , т.к. имеется ключ length

// --------------

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const obj = { name: 'asd', value: 13 };

console.log(getObjectValue(obj, 'name'));
// console.log(getObjectValue(obj, 'age')); // будет ошибка, т.к. у объекта нет данного ключа

// --------------

class Collection<T extends number | string | boolean> {
  // т.к. у ссылочных типов данных не быдет св-ва remove
  // private _items: T[] = [];

  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter(el => el !== item);
  }

  get(): T[] {
    return this._items;
  }
}

const coll = new Collection<number>([12, 17]); // т.к. ts понимает, что мы работаем с числами, то generic <string> писать не обязательно

coll.add(1);
coll.add(2);

console.log(coll.get());

coll.remove(1);

console.log(coll.get());

// --------------

interface ICar {
  model: string;
  year: number;
}

function createAndValidateCar(model: string, year: number): ICar {
  const car: Partial<ICar> = {}; // если изначально не все поля присутствуют

  if (model.length > 3) {
    car.model = model;
  }

  if (year > 2000) {
    car.year = year;
  }

  return car as ICar;
}

console.log(createAndValidateCar('modelName', 2010));

// --------------

const cars: Readonly<Array<string>> = ['Ford', 'Audi']; //чтоб мы не могли изменять содержимое массива

// cars.shift()
