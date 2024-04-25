import React, { createContext, useState, useContext } from 'react';

import en from './languages/en.json';
import fr from './languages/fr.json';

const languages = {
  en,
  fr,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translate = (key) => {
    return languages[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ translate, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslate = () => {
  const { translate } = useContext(LanguageContext);
  return translate;
};

export const useSetLanguage = () => {
  const { setLanguage } = useContext(LanguageContext);
  return setLanguage;
};
