/**
 *
 */

const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayOfStrings: Array<string> = ['1', '2', '3', '4', '5'];

function reverse<T>(array: T[]): T[] {
  // работает с типом T, принимает массив типа T
  return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
