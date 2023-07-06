import { useEffect, useState } from 'react';

export const UseEffectComponent = () => {
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await data.json();
    setTodo(todos);
  };

  const [todo, setTodo]: any = useState([]);

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
