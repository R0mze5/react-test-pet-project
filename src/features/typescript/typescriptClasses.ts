// clases

interface IformValuesType {
  user: object;
  readonly id: string; // неизменяемый
  color?: string; // необязательный
}

interface IupdatedFormValuesType {
  values: IformValuesType;
  value: string;
  getArea: () => number;
  time: Date;
}

class SomeClass implements IupdatedFormValuesType {
  values = {
    user: {},
    id: 'id',
  };
  value = 'asd';
  getArea = () => 1;
  time = new Date();
}

// ------------

class Typescript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}] typescript version is ${this.version}`;
  }
}

// ------------

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4; // можно изменять только в кос=нструкторе

  constructor(theModel: string) {
    this.model = theModel;
  }
}

// краткая запись Car
class Car2 {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {}
}

// ======= модификаторы
/**
 *  protected, public, private
 *
 *  protected доступег для всех наследуемых классов
 *  private доступны только в том классе, в котором они были определены
 *  puvlic доступны для всех instance
 *
 * Если модификатора нет, то по умолчанию public
 * */

class Animal {
  protected voice: string = '';
  public color: string = 'black';

  private go() {
    console.log('go');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat(); // у instance класса мы не можем получить доступ к voice, т.к. он protected

// ======= абстрактные классы

/**
 * абстрактные классы ни во что не компилируются, нужны на этапе разработки, чтобы от них наследоваться
 */

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return 'info';
  }
}
