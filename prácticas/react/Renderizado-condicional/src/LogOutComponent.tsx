import { ReactEventHandler } from "react";

export const LogOutComponent = ({ click }: { click: ReactEventHandler }) => {
  return (
    <>
      <h1>Inicia sesión para ver contenido privado</h1>
      <button onClick={click}>Iniciar sesión</button>
    </>
  );
};
