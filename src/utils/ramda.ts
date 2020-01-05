import { assoc, assocPath, prop, path, insert, set, view, lens, defaultTo } from 'ramda';

let person = {
  name: 'Roman',
  socialMedia: {
    github: 'R0mzes',
    vk: 'R0mzes',
  },
};

person = { ...person, socialMedia: { ...person.socialMedia, github: 'asd' } };

console.log(person);

console.log(prop('socialMedia', person)); // достает ключ

person = assoc('name1', 'name1', person); // добавляет ключ/значение, перезаписывая объект

console.log(person);

person = assocPath(['socialMedia', 'insta'], '@r0mzes', person); // добавляет ключ/значение по путу, перезаписывая объект

console.log(person);

// console.log(path())

function sum(a?: number, b?: number) {
  return defaultTo(0, a) + defaultTo(0, b);
}

console.log(sum());

// каррирование - это когда у нас есть функция от одного аргумента, которая возвращает функцию от другого аргумента

function sum2(a?: number) {
  return (b?: number) => defaultTo(0, a) + defaultTo(0, b);
}

console.log(sum2()(1));

// автокаррирование имеется в ramda -

const defaultToZero = defaultTo(0);

function sum3(a?: number) {
  return (b?: number) => defaultToZero(a) + defaultToZero(b);
}

console.log(sum3()(1));

// lens (линзирование) - набор getters и setters для конкретного поля. Это бывает нужно в redux для обновления конкретного поля

const githubLens = lens(path(['socialMedia', 'github']), assocPath(['socialMedia', 'github']));

set(githubLens, 'githubName', person);

console.log(person);

console.log(view(githubLens, 'githubName'));

// insert работает с массивами
console.log(insert(0, 10, [11, 12, 13, 14]));
