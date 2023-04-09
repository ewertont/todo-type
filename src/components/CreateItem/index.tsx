import { KeyboardEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import * as C from './styles';

type Props = {
  onEnter: (taskName: string) => void;
};

export const CreateItem = ({ onEnter }: Props) => {
  const [input, setInput] = useState('');
  const handleKeyUp = (e: KeyboardEvent) => {
    if ((e.code === 'NumpadEnter' || e.code === 'Enter') && input !== '') {
      onEnter(input);
      setInput('');
    }
  };

  return (
    <C.Container>
      <FontAwesomeIcon icon={faPlus} size="lg" />
      <input type="text" placeholder="Add new task" value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={handleKeyUp} />
    </C.Container>
  );
};
