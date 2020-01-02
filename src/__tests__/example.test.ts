function apply(fn, x: number, y: number | string) {
  return fn(x, y);
}

describe('Apply fn', () => {
  it('1', () => {
    const fn = jest.fn();

    apply(fn, 1, 2);

    expect(fn).lastCalledWith(1, 2);
  });
  // it('2', ()=> {
  //   const fn = jest.fn((x,y) => x * y)

  //   expect(apply(fn,2,3)).toBe(6)
  //   expect(fn).toBeCalledWith(1,2)
  // })
});
