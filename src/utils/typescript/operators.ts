interface IPerson {
  name: string;
  age: number;
}

type PersonKeys = keyof IPerson; // name || age

const myName: PersonKeys = 'name';

// тип из типа с исключением

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>;
// то же самое
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;

const user1: UserKeysNoMeta1 = 'name';
