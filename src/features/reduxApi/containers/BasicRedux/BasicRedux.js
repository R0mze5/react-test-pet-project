import React from 'react';

export const BasicRedux = ({ counter, increase }) => {
  // console.log({ counter, increase });
  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={() => increase()} type={'button'}>
        +
      </button>
      <button onClick={() => increase(2)} type={'button'}>
        +2
      </button>
    </div>
  );
};

export default BasicRedux;
