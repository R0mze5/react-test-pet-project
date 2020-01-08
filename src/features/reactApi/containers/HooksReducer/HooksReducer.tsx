import React, { useState, useEffect, useReducer } from 'react';

import axios from 'axios';

import { TodosItem } from './TodosItem';

import { Context } from './context';

import reducer from './reducer';
import { hooksActions } from './actions';

interface IHooksProps {}

const url = process.env.REACT_APP_DB_URL;

// console.log(url);

export const HooksReducer: React.FunctionComponent<IHooksProps> = props => {
  type TId = string | number;

  interface IKeyPressEvent {
    key?: string;
  }

  // interface ITodo {
  //   id: TId;
  //   title: string;
  //   completed: boolean;
  // }

  const [todoTitle, setTodoTitle] = useState('');

  const [state, dispatch] = useReducer(
    reducer,
    (() => {
      const lsTodos: any = localStorage.getItem('todosReducer');
      return { notes: JSON.parse(lsTodos) || [] };
    })(),
  );

  const addTodo = async (event: IKeyPressEvent) => {
    if (event.key === 'Enter') {
      const note = { data: new Date().toJSON(), title: todoTitle };

      try {
        const res = await axios.post(`${url}/notes.json`, note);
        const payload = {
          ...note,
          id: res.data.name,
        };

        dispatch({
          type: hooksActions.add,
          payload,
        });

        setTodoTitle('');
      } catch (e) {
        console.log(e);
      }
    }
  };

  const removeNote = async (id: TId) => {
    try {
      await axios.delete(`${url}/notes/${id}.json`);

      dispatch({ type: hooksActions.delete, payload: id });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchNotes = async () => {
    try {
      const res = await axios.get(`${url}/notes.json`);

      const payload = Object.keys(res.data).map(key => {
        return {
          ...res.data[key],
          id: key,
        };
      });

      dispatch({ type: hooksActions.fetch, payload });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // const inputValue = (): object => {
  //   return {
  //     type: 'text',
  //     name: 'hooks',
  //     value: todoTitle,
  //     onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value),
  //     onKeyPress: addTodo,
  //   };
  // };

  // const input = inputValue();

  return (
    <Context.Provider
      value={{
        removeNote,
      }}
    >
      <div>
        <input
          type="text"
          name="hooksReducer"
          value={todoTitle}
          onChange={e => setTodoTitle(e.target.value)}
          onKeyPress={addTodo}
          // {...input}
        />
      </div>
      <div>
        {state.notes.map(el => (
          <TodosItem key={el.id} {...el}></TodosItem>
        ))}
      </div>
    </Context.Provider>
  );
};

export default HooksReducer;
