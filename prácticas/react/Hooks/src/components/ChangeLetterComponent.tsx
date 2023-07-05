import { useState } from 'react';

export const ChangeLetterComponent = () => {
  const [letter, setletter]: any = useState('');

  const hanldeLetter = (e: any) => {
    if (e === 'a') {
      setletter('b');
    }
    if (e === 'b') {
      setletter('a');
    } else {
      setletter(e);
    }

    console.log(letter);
  };

  return (
    <>
      <h1>Formulario controlado</h1>

      <form action=''>
        <input type='text' value={letter} onChange={(e) => hanldeLetter(e.target.value)} />
        {letter}
      </form>
    </>
  );
};
