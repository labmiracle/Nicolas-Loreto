import { useState } from "react";
import "./App.css";
import { LoginComponent } from "./LoginComponent";
import { LogOutComponent } from "./LogOutComponent";

function RenderizadoCondicionalComponent() {
  const [login, setLogin] = useState(true);

  const changeState = () => {
    setLogin((resp) => !resp);
  };

  return (
    <>
      {login ? (
        <>
          <LoginComponent click={changeState} />
        </>
      ) : (
        <>
          <LogOutComponent click={changeState} />
        </>
      )}
    </>
  );
}

export default RenderizadoCondicionalComponent;
