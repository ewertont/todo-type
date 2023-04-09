import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type Props = {
  item: Item;
  changeTask: (taskIndex: number, done: boolean) => void;
  deleteTask: (taskIndex: number) => void;
};

export const ListItem = ({ item, changeTask, deleteTask }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input type="checkbox" checked={isChecked} onChange={(e) => (setIsChecked(e.target.checked), changeTask(item.id, e.target.checked))} />
      <label htmlFor="">{item.name}</label>
      <FontAwesomeIcon icon={faTrash} size="lg" onClick={(e) => deleteTask(item.id)} />
    </C.Container>
  );
};
