import React, { useState, useEffect } from 'react';

// import { TodosItem } from './TodosItem';

import { Context } from './context';

interface IHooksProps {}

// const TodosItem = React.lazy(() => import('./TodosItem'));
const TodosItem = React.lazy(
  () =>
    new Promise((resolve: any) => {
      setTimeout(() => {
        resolve(import('./TodosItem'));
      }, 3000);
    }),
);

export const Hooks: React.FunctionComponent<IHooksProps> = props => {
  type TId = string | number;

  interface ITodo {
    id: TId;
    title: string;
    completed: boolean;
  }

  type TTodo = Array<ITodo>;

  const [todos, setTodos] = useState<TTodo>([]);

  const [todoTitle, setTodoTitle] = useState<string>('');

  useEffect(() => {
    // console.log('init');
    const lsTodos: any = localStorage.getItem('todos');
    setTodos(JSON.parse(lsTodos) || []);
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
      setTodos([...todos, { id: Date.now(), title: todoTitle, completed: false }]);
      setTodoTitle('');
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

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  };

  return (
    <Context.Provider value={{ removeTodoItem, toggleTodo }}>
      <div>
        <input
          type="text"
          name="hooks"
          value={todoTitle}
          onChange={changeHandler}
          onKeyPress={addTodo}
        />
        <div>
          <React.Suspense fallback={<p>loading</p>}>
            {todos.map(el => (
              <TodosItem key={el.id} {...el}></TodosItem>
            ))}
          </React.Suspense>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Hooks;
