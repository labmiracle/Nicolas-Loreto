import { ReactNode } from 'react';
import './App.css';
import React from 'react';

interface AppState {
  url: string;
}

// HOC

const withPetition = (Component: React.ComponentType<{ state: AppState }>) => {
  return (url: { url: string }) =>
    class extends React.Component {
      state: AppState = { url: url.url };
      render(): ReactNode {
        return <Component state={this.state} />;
      }
    };
};

function App(props: { state: AppState }) {
  const showJson = async () => {
    try {
      const petition = await fetch(props.state.url + '/1');
      const data = await petition.json();
      document.getElementById('json')?.append(JSON.stringify(data));
    } catch {
      throw Error('Falló la petición');
    }
  };

  return (
    <>
      <div className="container">
        <h1>HOC</h1>
        <button onClick={showJson}>Petition</button>
        <code id="json"></code>
      </div>
    </>
  );
}

export default withPetition(App)({
  url: 'https://jsonplaceholder.typicode.com/posts',
});
