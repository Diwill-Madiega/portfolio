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
        MainTitle : "Portfolio website",

        //Navbar
        HomeNav :"Home",
        AboutNav : "About",
        ContactNav : "Contact",
        EducationNav : "Education",
        ProjectsNav : "Projects",
        Language : "Language",

        //Home
        HomeTitle : "Home Page",
        HomeWelcome: "Welcome to my portfolio website!",

        //About
        AboutTitle: "About me",

        //Education
        EducationTitle: "My education",

        //Projects
        ProjectsTitle: "Personal and professional projects",

        //Login
        LoginTitle : "Login",
        Username : "Username",
        Password : "Password",
        LoginButton : " Log in",

        //Blog
        BlogTitle  : "My Blog",
        BlogButton : "View more",

        //Blog Details
        EditTitle : "Edit title",
        EditContent : "Edit content",
        SaveChangesButton : "Save changes",
        DeletePostButton : "Delete Post",
        PostPreview : "Post preview",
        BlogComments : "Comments",
        NoComments : "No comments for this post.",

        //Contact
        ContactTitle: "Contact form",
        ContactName : "Name",
        ContactEmail : "E-mail",
        ContactMessage : "Message",
        ContactSend : "Send",

        InvalidCredentials : "Invalid credentials",

        },
      },
      fr: {
        translation: {
        MainTitle : "Site Portfolio",


        //Navbar
        HomeNav :"Accueil",
        AboutNav : "A propos",
        EducationNav : "Education",
        ProjectsNav : "Projects",
        ContactNav : "Contact",
        Language : "Langue",

        //Home
        HomeTitle : "Page d'accueil",
        HomeWelcome: "Bienvenue sur mon site portfolio!",

        //About
        AboutTitle: "A propos de moi",

        //Education
        EducationTitle: "Mon éducation",

        //Projects
        ProjectsTitle: "Projets personnels et professionnels",

        //Login
        LoginTitle : "Connexion",
        Username : "Nom d'utilisateur",
        Password : "Mot de passe",
        LoginButton : " Se connecter",

        //Blog
        BlogTitle  : "Mon Blog",
        BlogButton : "Voir plus",

        //Blog Details
        EditTitle : "Modifier le titre",
        EditContent : "Modifier le contenu",
        SaveChangesButton : "Enregistrer les modifications",
        DeletePostButton : "Supprimer le post",
        PostPreview : "Aperçu du post",
        BlogComments : "Commentaires",
        NoComments : "Pas de commentaires sur ce post.",

        //Contact
        ContactTitle: "Formulaire de contact",
        ContactName : "Nom",
        ContactEmail : "E-mail",
        ContactMessage : "Message",
        ContactSend : "Envoyer",

        InvalidCredentials : "Identifiants invalides",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;