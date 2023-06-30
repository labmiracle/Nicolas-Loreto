import React, { useState } from 'react';
import './App.css';
import { ButtonComponent } from './ButtonComponent';
import { LanguageComponent } from './LanguageComponent';

export const languageContext = React.createContext('');

function MainTextComponent() {
  const [language, setLanguage] = useState('spanish');

  const changeLanguage = () => {
    if (language === 'spanish') {
      setLanguage('english');
    } else {
      setLanguage('spanish');
    }
  };
  return (
    <>
      <h1>Context</h1>

      <languageContext.Provider value={language}>
        <LanguageComponent />
      </languageContext.Provider>

      <ButtonComponent click={changeLanguage} />
    </>
  );
}

export default MainTextComponent;
