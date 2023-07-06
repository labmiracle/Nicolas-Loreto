import './App.css';
import { ChangeLetterComponent } from './components/ChangeLetterComponent';
import { ReceiveComponent } from './components/ReceiveComponent';
import { UnmountedComponent } from './components/UnmountedComponent';

function App() {
  return (
    <>
      <ChangeLetterComponent />
      <UnmountedComponent />
      <ReceiveComponent url='/users' />
    </>
  );
}

export default App;
