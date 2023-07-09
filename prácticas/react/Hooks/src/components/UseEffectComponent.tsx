import { useApi } from '../hooks/useApi';

export const UseEffectComponent = () => {
  const { todo } = useApi();

  return (
    <>
      <h1>Use Effect</h1>
      <h2>TODOS</h2>
      <ul>
        {todo.map((item: any) => (
          <li key={item.id}>
            <p>ID User: {item.userId}</p>
            <p> TODO: {item.title}</p>
            <p> Status: {item.completed ? 'done' : 'to do'}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
