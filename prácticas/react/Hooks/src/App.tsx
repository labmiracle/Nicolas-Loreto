import './App.css';
import { ChangeLetterComponent } from './components/ChangeLetterComponent';
import { ReceiveComponent } from './components/ReceiveComponent';
import { UnmountedComponent } from './components/UnmountedComponent';
import { UseEffectComponent } from './/components/UseEffectComponent';

function App() {
  return (
    <>
      <ChangeLetterComponent />
      <UnmountedComponent />
      <ReceiveComponent url='/users' />
      <UseEffectComponent />
    </>
  );
}

export default App;
