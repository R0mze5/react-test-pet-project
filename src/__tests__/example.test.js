import { sum, immutablePush, intervalPromise } from '../example';

describe('sum testing', () => {
  beforeEach(() => {});
  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});
  test('add 1 + 2 equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  // it == test
  it('add 1 + 2 equal 3', () => {
    expect(sum(1, 2)).not.toBe(4);
  });

  // snaphot'ы делаются при первом вызове, а при следующих проверяется новый результат вызова функции со snapshot
  it('add 1 + 2 equal 3', () => {
    expect(sum(1, 2)).toMatchSnapshot();
  });
});

// toBe - равно
// toEqual - глубокое сравнение
it('mutation in Array', () => {
  const arr = [1, 2, 3];

  expect(immutablePush(arr, 4)).toEqual([...arr, 4]);
});

describe('проверка асихронного кода', () => {
  it('promiseTimeout вернет Promise', () => {
    expect(intervalPromise(() => 'test', 1000)).toBeInstanceOf(Promise);
  });
  it('promiseTimeout вернет Promise, который исполнится по timeout', done => {
    expect(intervalPromise(done, 1000)).toBeInstanceOf(Promise);
  });
  it('вернет верный результат из Promise', () => {
    expect(intervalPromise(() => 'test string', 1000)).resolves.toEqual('test string');
  });
});
