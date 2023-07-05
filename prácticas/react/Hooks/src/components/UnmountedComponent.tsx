import { useState } from 'react';

export const UnmountedComponent = () => {
  const [state, setstate] = useState(true);

  const changeState = () => {
    setstate(false);
    console.log('Desmontado!');
  };
  return (
    <>
      {state ? (
        <>
          <h1>Component mounted</h1>
          <button onClick={changeState}>Disassemble</button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
