import { ReactEventHandler } from "react";

export const LoginComponent = ({ click }: { click: ReactEventHandler }) => {
  return (
    <>
      <h1>Esta página solo puedo verla por que estoy logueado</h1>
      <button onClick={click}>Cerrar sesión</button>
    </>
  );
};
