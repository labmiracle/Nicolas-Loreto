import { useEffect, useState } from 'react';

export const useApi = () => {
  {
    /*5. Extrar la lógica de la llamada a la API a un hook personalizado y usarlo */
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await data.json();
      setTodo(todos);
    } catch (error) {
      console.log('Hubo un error en la petición', error);
    }
  };

  const [todo, setTodo] = useState([]);

  return {
    todo,
  };
};
