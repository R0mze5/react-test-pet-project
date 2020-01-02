import { INCREASE_COUNTER } from './types';

const initialState = {
  classicCounter: 0,
};

export const classicReduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        classicCounter: (action.payload ? action.payload : 1) + state.classicCounter,
      };

    default:
      return state;
  }
};
