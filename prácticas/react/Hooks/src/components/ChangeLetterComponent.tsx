import { ChangeEvent, useState } from 'react';

export const ChangeLetterComponent = () => {
  const [input, setinput] = useState('');

  const [letter, setletter] = useState(input);

  const hanldeLetter = (e: ChangeEvent<HTMLInputElement>) => {
    setinput(e.target.value);
    const letterReplaced = e.target.value.replace('a', 'b');
    setletter(letterReplaced);
  };

  return (
    <>
      <h1>Controlled form</h1>

      <form action=''>
        <input type='text' value={letter} onChange={(e) => hanldeLetter(e)} />
      </form>
    </>
  );
};
