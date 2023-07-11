import { useState } from 'react';
import { Task } from '../interfaces/Task.interface';
import { InputText, ListItem } from '.';

export const List = () => {
  const [task, setTask] = useState<Task[]>([]);

  const handleAdd = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const idTask = Math.random() * 100;
    const idDeveloper = (event.target as any).elements.idDeveloper.value;
    const title = (event.target as any).elements.title.value;
    const description = (event.target as any).elements.description.value;
    const priority = (event.target as any).elements.priority.value;

    setTask([...task, { idDeveloper, idTask, title, description, priority, completed: false }]);
  };

  const handleRemove = () => {
    setTask([...task].slice(1));
  };

  return (
    <>
      <ListItem task={task} />
      <InputText handleAdd={handleAdd} handleRemove={handleRemove} />
    </>
  );
};
