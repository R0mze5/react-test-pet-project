/**
 *
 * декораторы - паттерн проективования, используемый в ts в качестве синтаксического сахара - метаданные для класса
 *
 * есть 4 вида декораторов: для класса, для различных свойств, для методов, для getters/setters
 * декораторы - функции
 */

function Log(constructor: Function) {
  // console.log(constructor) // выведет сам класс
}

function Log2(target: any, propName: string | Symbol) {
  // console.log(target) // выведет сам класс
  // console.log(propName) // выведет само св-во name
}

function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
  // console.log(target) // выведет сам класс
  // console.log(propName) // выведет само св-во name
  // console.log(descriptor) // выведет объект со св-вами данного метода, в котором есть value с данным методом. для getter/getters быдет соответствующее поле
}

@Log
class MyComponent {
  @Log2
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Log3
  logName(): void {
    console.log(`Component Name ${this.name}`);
  }

  @Log3
  get componentName() {
    // get обозначает getter
    return this.name;
  }
}

console.log('MyComponent', MyComponent);

// ---------------------------

interface IComponentDecorator {
  selector: string;
  template: string;
}

function ComponentDecorator(config: IComponentDecorator) {
  return function<T extends { new (...args: any[]): object }>(Constructor: T) {
    // когда создается instanse класса CardComponent, у нас добавлялся шаблон компонента
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args);

        const card = document.createElement('div');
        card.id = 'card';
        document.body.appendChild(card);

        const cardButton = document.createElement('button');
        cardButton.id = 'card_button';
        cardButton.innerText = 'card button';
        document.body.appendChild(cardButton);

        const el = document.querySelector(config.selector)!;
        el.innerHTML = config.template;
      }
    };
  };
}

function Bind(
  _target: any,
  _propName: string | Symbol,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  // я хочу получить обратно PropertyDescriptor

  const original = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      // используем не стрелочную функцию, чтобы контекст this сохранился, к тому же this всегда будет указывать на instanse класса, с которым мы работаем
      return original.bind(this);
    },
  };
}

@ComponentDecorator({
  selector: '#card',
  template: `
    <div class="card">My card</div>
  `,
})
class CardComponent {
  constructor(public name: string) {}

  @Bind
  logName(): void {
    console.log(`Component Name '${this.name}'`);
  }
}

// при создании instanse, добавляет его html в DOM дерево
const myCard = new CardComponent('card component');
console.log('myCard', myCard);

const cardButton = document.querySelector('#card_button');
// cardButton?.addEventListener('click', myCard.logName.bind(myCard)); // пришлось бы биндить, если бы не было декоратора bind
cardButton?.addEventListener('click', myCard.logName);

//-------------------------------------------

type TValidatorType = 'required' | 'email';

interface IValidatorConfig {
  [prop: string]: {
    [validateProps: string]: TValidatorType;
  };
}

const validators: IValidatorConfig = {};

function required(target: any, propName: string) {
  validators[target.constructor.name] = {
    ...validators[target.constructor.name], // чтоб развернуть прочие поля в классе
    [propName]: 'required',
  };
}

function validate(obj: any): boolean {
  // console.log(obj.constructor.name);
  const objConfig = validators[obj.constructor.name];

  if (!objConfig) {
    return true;
  }

  let isValid = true;

  Object.keys(objConfig).forEach(key => {
    console.log(objConfig);
    if (objConfig[key] === 'required') {
      isValid = isValid && !!obj[key];
    }
  });

  return isValid;
}

class Form {
  @required
  public email: string | void;
  constructor(email?: string) {
    this.email = email;
  }
}

const form = new Form();

if (validate(form)) {
  console.log('valid', form);
} else {
  console.log('invalid', form);
}
