import React, { useState, useEffect, useRef } from 'react';

import { TodosItem } from './TodosItem';

import { Context } from './context';

// interface IHooksProps {
//   onAdd(title?: string): void
//   todos: any [] // any массив
// }

// declare const handleClick: (event: React.MouseEvent<HTMLLIElement>) => void

export const HooksUseRef: React.FC<{ onAdd(title?: string): void }> = () => {
  // может принимать в себя функцию, у которой необязательное поле title
  type TId = string | number;

  interface ITodo {
    id: TId;
    title: string;
    completed: boolean;
  }

  // type TTodo = Array<ITodo>;

  const ref = useRef<HTMLInputElement>(null);

  const [todos, setTodos] = useState<ITodo[]>([]);
  // const [todos, setTodos] = useState<TTodo>([]);
  // const [todos, setTodos] = useState<Array<ITodo>>([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]);
  }, []);
  // когда [], то получается эмуляция cdm

  // useEffect(() => {
  //   console.log(todoTitle);
  // }, [todoTitle]);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>): void => {
    console.log(event);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    localStorage.setItem('todos', JSON.stringify(todos));

    return () => document.removeEventListener('click', handleClick); // чтоб события не дублировались
  }, [todos]);

  const addTodo = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      const todo: ITodo = { id: Date.now(), title: ref.current!.value, completed: false };

      setTodos([...todos, todo]);
      ref.current!.value = '';

      // ref.current!.clear()

      // восклицательный знак указывает, что у нас будет всё хорошо
    }
  };

  // console.log(todos);
  const removeTodoItem = (id: TId): void => {
    setTodos(todos.filter((todo: any) => todo.id !== id));
  };

  const toggleTodo = (id: TId): void => {
    setTodos(
      todos.filter((todo: any) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  return (
    <Context.Provider value={{ removeTodoItem, toggleTodo }}>
      <div>
        <input type="text" name="hooks" ref={ref} onKeyPress={addTodo} />
        <div>
          {todos.map(el => (
            <TodosItem key={el.id} {...el}></TodosItem>
          ))}
        </div>
      </div>
    </Context.Provider>
  );
};

export default HooksUseRef;
