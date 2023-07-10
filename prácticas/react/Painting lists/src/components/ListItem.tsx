import { Task } from '../interfaces/Task.interface';
import '../App.css';
export const ListItem = ({ task }: any) => {
  return (
    <>
      <ul className='ul'>
        {task.map((task: Task) => (
          <li key={task.idTask}>
            <div className='id'>
              <strong>Id Task:</strong> {task.idTask}
            </div>

            <div className='id'>
              <strong>Id Developer:</strong> {task.idDeveloper}
            </div>

            <div className='task'>
              <strong>Task:</strong> {task.title}
            </div>

            <div className='description'>
              <strong>Description:</strong> {task.description}
            </div>

            <div className='priority'>
              <strong>Priority:</strong> {task.priority}
            </div>

            <div className='completed'>
              <strong>State: {task.completed ? 'DONE' : 'TODO'}</strong>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
