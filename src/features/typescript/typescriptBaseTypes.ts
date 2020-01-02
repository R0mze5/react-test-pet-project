const a: number = 1;
const b: string = '2';
const d: boolean = false;
const e: number[] = [1, 2, 3, 4, 5];
const numberArray: Array<number> = [1, 2, 3, 4, 5]; // generic тип

// Tuple
const contact: [string, number] = ['Name', 1234567];

// Any
let variable: any = 42;
variable = '42';

// Type

type Login = string;
const login: Login = 'admin';

type Id = string | number;

type sometype = string | null | undefined;

// interface

interface MyObject {
  a: number;
  b: string;
}

const f: MyObject = {
  a: 1,
  b: 'st',
};

interface IformValuesType {
  user: object;
  readonly id: string; // неизменяемый
  color?: string; // необязательный
}

const someObj = {} as IformValuesType;
const someObj1 = <IformValuesType>{}; // старая запись

interface IupdatedFormValuesType {
  values: IformValuesType;
  value: string;
  getArea: () => number;
  time: Date;
}

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: '1px solid black',
  fontSize: '13px',
};
