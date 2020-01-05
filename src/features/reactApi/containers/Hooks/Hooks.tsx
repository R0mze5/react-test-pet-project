import React, { useState, useEffect } from 'react';

import { TodosItem } from './TodosItem';

import { Context } from './context';

interface IHooksProps {}

export const Hooks: React.FunctionComponent<IHooksProps> = props => {
  type TId = string | number;

  interface IKeyPressEvent {
    key?: string;
  }

  interface ITodo {
    id: TId;
    title: string;
    completed: boolean;
  }

  const [todos, setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    // console.log('init');
    const lsTodos: any = localStorage.getItem('todos');
    setTodos(JSON.parse(lsTodos) || []);
  }, []);
  // когда [], то получается эмуляция cdm

  // useEffect(() => {
  //   console.log(todoTitle);
  // }, [todoTitle]);

  const handleClick = (event: IKeyPressEvent): void => {
    console.log(event);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    localStorage.setItem('todos', JSON.stringify(todos));

    return () => document.removeEventListener('click', handleClick); // чтоб события не дублировались
  }, [todos]);

  const addTodo = (event: IKeyPressEvent): void => {
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

  return (
    <Context.Provider value={{ removeTodoItem, toggleTodo }}>
      <div>
        <input
          type="text"
          name="hooks"
          value={todoTitle}
          onChange={e => setTodoTitle(e.target.value)}
          onKeyPress={addTodo}
        />
        <div>
          {todos.map(el => (
            <TodosItem key={el.id} {...el}></TodosItem>
          ))}
        </div>
      </div>
    </Context.Provider>
  );
};

export default Hooks;
