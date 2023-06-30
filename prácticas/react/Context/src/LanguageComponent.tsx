import { useContext } from 'react';
import { languageContext } from './MainTextComponent';

export const LanguageComponent = () => {
  const language = useContext(languageContext);
  return (
    <>
      {language === 'english' ? (
        <p>
          React is a JavaScript library used for building interactive and
          reusable user interfaces. Developed by Facebook, React has become
          extremely popular in the web development community due to its focus on
          creating reusable components and its efficient handling of the
          Document Object Model (DOM).
        </p>
      ) : (
        <p>
          React es una biblioteca de JavaScript utilizada para construir
          interfaces de usuario interactivas y reutilizables. Desarrollada por
          Facebook, React se ha vuelto extremadamente popular en la comunidad de
          desarrollo web debido a su enfoque en la creación de componentes
          reutilizables y su eficiente manejo del DOM (Modelo de Objetos del
          Documento).
        </p>
      )}
    </>
  );
};
