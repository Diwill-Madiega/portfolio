import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          PageAccueil : "Home Page",
          About: "About me",
          Contact: "Contact form",
          Bienvenue: "Welcome to my portfolio website!",

          HomeNav :"Home",
          AboutNav : "About",
          ContactNav : "Contact",
          EducationNav : "Education",
          ProjectsNav : "Projects",
          Language : "Language",
        },
      },
      fr: {
        translation: {
          PageAccueil : "Page d'accueil",
          About: "A propos de moi",
          Contact: "Formulaire de contact",
          Bienvenue: "Bienvenue sur mon site portfolio !",

          HomeNav :"Accueil",
          AboutNav : "A propos",
          ContactNav : "Contact",
          EducationNav : "Education",
          ProjectsNav : "Projets",
          Language : "Langue",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;