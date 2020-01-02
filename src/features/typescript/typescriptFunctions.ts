// functions

function sayMyName(name: string): void {
  console.log(name);
}

// Never - когда функция возвращает ошибку либо loop
function throwError(message: string): never {
  throw new Error(message);
}

function fn(a: number, b: number): number {
  return a + b;
}

// перегрузка функции
interface Position {
  x: number | undefined;
  y: number | undefined;
}

interface PositionWithDefault extends Position {
  default: string;
}

function position(): Position;
// function position(a: number): PositionWithDefault;
function position(a: number, b: number): Position;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}

console.log(position(1, 2));
