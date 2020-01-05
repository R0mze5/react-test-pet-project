import { hooksActions } from './actions';

type TNotes = any;

interface IAction {
  type: string;
  payload?: any;
}

interface IState {
  notes?: TNotes;
}

// interface IReducer {
//   state: any,
//   action: IAction
// }

// export default function(state: IState, action: IAction): IState {
//   switch (action.type) {
//     case 'TODO->ADD': {
//       return [...state, { ...action.payload, completed: false }];
//     }
//     case 'TODO->DELETE': {
//       return [...state.filter((todo: any) => todo.id !== action.payload)];
//     }
//     case 'TODO->COMPLETE': {
//       return [
//         ...state.map((todo: any) => {
//           if (todo.id === action.payload) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       ];
//     }
//     default:
//       return state;
//   }
// }

const handlers = {
  [hooksActions.fetch]: (state: IState, action: IAction) => ({
    ...state,
    notes: [...action.payload],
  }),
  [hooksActions.add]: (state: IState, action: IAction) => ({
    ...state,
    notes: [...state.notes, { ...action.payload, completed: false }],
  }),
  [hooksActions.delete]: (state: IState, action: IAction) => {
    return { ...state, notes: [...state.notes.filter((todo: any) => todo.id !== action.payload)] };
  },
  [hooksActions.complete]: (state: IState, action: IAction) => ({
    ...state,
    notes: [
      ...state.notes.map((todo: any) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    ],
  }),
  DEFAULT: (state: IState) => state,
};

export const reducer = (state: IState, action: IAction): IState => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};

export default reducer;
