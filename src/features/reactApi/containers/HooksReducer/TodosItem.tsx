import React, { useContext } from 'react';

import { Context } from './context';

interface ITodosItemProps {
  title: string;
  id: string | number;
  completed: boolean;
}

export const TodosItem: React.FunctionComponent<ITodosItemProps> = ({ id, title }) => {
  const { removeNote } = useContext(Context);

  return (
    <div>
      <span>{title}</span>
      <span onClick={() => removeNote(id)}>delete</span>
    </div>
  );
};

export default TodosItem;
