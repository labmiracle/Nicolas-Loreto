import { useState } from 'react';
import './App.css';
import { FetchComponent } from './FetchComponent';
import { InputComponent } from './InputComponent';

function App ()
{

  const [ inputValue, setInputValue ] = useState( '' );

  return (
    <>
      <FetchComponent />
      <InputComponent value={ inputValue } onChange={ setInputValue } />
    </>
  );
}

export default App;
