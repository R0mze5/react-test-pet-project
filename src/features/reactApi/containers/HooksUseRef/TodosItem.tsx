import React, { useContext } from 'react';

import { Context } from './context';

interface ITodosItemProps {
  title: string;
  id: string | number;
  completed: boolean;
  // если бы функции передавались бы через props
  // removeTodoItem?(id: number) :void;
  // toggleTodo?(id: number) :void;
}

export const TodosItem: React.FunctionComponent<ITodosItemProps> = ({ id, title, completed }) => {
  const { removeTodoItem, toggleTodo } = useContext(Context);

  return (
    <div>
      <label>
        <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
        <span>{title}</span>
      </label>
      <span onClick={removeTodoItem.bind(null, id)}>delete</span>
    </div>
  );
};

export default TodosItem;
