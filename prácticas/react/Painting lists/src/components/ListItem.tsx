import { Task } from '../interfaces/Task.interface';
import '../App.css';
import { useState } from 'react';
export const ListItem = ({ task }: { task: Task[] }) => {
  const [edit, setEdit] = useState('');

  const [input, setinput] = useState(false);
  const handleEdit = (event: React.FormEvent<HTMLElement>) => {
    setinput(true);
    event.preventDefault();
    const edit = (event.target as any).elements.edit.value;
    setEdit(edit);
    setinput(false);
  };

  return (
    <>
      <ul className='ul'>
        {task.map((task: Task) => (
          <li key={task.idTask}>
            <div className='task'>
              <strong>Id Task:</strong> {task.idTask}
            </div>

            <div className='task'>
              <strong>Id Developer:</strong> {task.idDeveloper}
            </div>

            <div className='task'>
              <strong>Task:</strong> {edit || task.title}
            </div>

            <div className='task'>
              <strong>Description:</strong> {task.description}
            </div>

            <div className='task'>
              <strong>Priority:</strong> {task.priority}
            </div>

            <div className='task'>
              <strong>State: {task.completed ? 'DONE' : 'TODO'}</strong>
            </div>
            <form onSubmit={(event) => handleEdit(event)}>
              {input && (
                <div className='edit'>
                  <label>Edit Title</label>
                  <input type='text' name='edit' />
                </div>
              )}

              <button type='submit'>Edit</button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
};
