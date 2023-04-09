import { useState } from 'react';
import './App.css';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { CreateItem } from './components/CreateItem';

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Task 1', done: false },
    { id: 2, name: 'Task 2', done: true },
  ]);

  const handleAddNewtask = (taskName: string) => {
    let newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  };

  const handleTaskChange = (taskIndex: number, done: boolean) => {
    var foundTask = list.findIndex((task) => task.id == taskIndex);
    list[foundTask].done = done;
  };

  const handleDeleteTask = (taskIndex: number) => {
    const filtered = list.filter((task) => task.id !== taskIndex);
    setList(filtered);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>To Do List</C.Header>
        <CreateItem onEnter={handleAddNewtask} />

        {list?.map((item, index) => (
          <ListItem key={index} item={item} changeTask={handleTaskChange} deleteTask={handleDeleteTask} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
