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
        //Navbar
        HomeNav :"Home",
        AboutNav : "About",
        ContactNav : "Contact",
        EducationNav : "Education",
        ProjectsNav : "Projects",
        Language : "Language",
        Logout : "Logout",

        //Home
        HomeTitle : "Home Page",
        HomeWelcome: "Welcome to my portfolio website!",

        //About
        AboutTitle: "About me",

        //Education
        EducationTitle : "My education",
        EducationName1 : "Master Expert Application developer 2023 - 2025",
        EducationBody1 : " Currently ongoing, my academic journey culminates with a Master's degree in Expert Application Development. This comprehensive program equips me with essential skills to excel in the field of software development and cutting-edge technologies.",
        
        EducationName2 : "Bachelor Concepteur Développeur d'Applications 2022 - 2023",
        EducationBody2 : "Following my DUT, I continued my studies with a Bachelor's degree in Application Design and Development. This stage allowed me to deepen my knowledge in development and specialize in the design and implementation of innovative applications.",

        EducationName3 : "Génie Électrique & Informatique Industrielle 2020 - 2022",
        EducationBody3 : "My academic journey began with obtaining a Diploma in Electrical Engineering & Industrial Computing. This versatile program provided me with a solid foundation in electrical engineering and computer science, enabling me to grasp the fundamentals of these fields and develop my technical skills.",

        EducationName4 : "Baccalauréat S option Sciences de l'Ingénieur 2019 - 2020",
        EducationBody4 : "My educational journey commenced with the attainment of a Science Baccalaureate with an option in Engineering Sciences. This program provided me with a strong foundation in science and mathematics, laying the groundwork for my future career in engineering and computer science.",

        //Projects
        ProjectsTitle: "Personal and professional projects",

        //Login
        LoginTitle : "Login",
        Username : "Username",
        Password : "Password",
        LoginButton : "Log in",

        //Blog
        BlogTitle  : "My Blog",
        BlogButton : "View more",
        PostDelete : "Post deleted",
        PostAdd : "Create Post",

        //Add Post
        CreatePostTitle : "Create a new Post",
        PostTitle : "Title",
        PostContent : "Content",
        UserID : "User ID",
        CreatePostButton : "Create Post",
        PostCreated : "Post created !",

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

        },
      },
      fr: {
        translation: {
        //Navbar
        HomeNav :"Accueil",
        AboutNav : "A propos",
        EducationNav : "Education",
        ProjectsNav : "Projects",
        ContactNav : "Contact",
        Language : "Langue",
        Logout : "Déconnexion",

        //Home
        HomeTitle : "Page d'accueil",
        HomeWelcome: "Bienvenue sur mon site portfolio!",

        //About
        AboutTitle: "A propos de moi",

        //Education
        EducationTitle: "Mon éducation",

        EducationName1 : "Master Expert Développeur d'Applications 2023 - 2025",
        EducationBody1 : " Actuellement en cours, mon parcours académique culmine avec un Master en Expertise Développeur d'Applications. Cette formation approfondie me permet d'acquérir les compétences essentielles pour exceller dans le domaine du développement logiciel et des technologies de pointe.",
        
        EducationName2 : "Bachelor Concepteur Développeur d'Applications 2022 - 2023",
        EducationBody2 : "À la suite de mon DUT, j'ai poursuivi mes études avec un Bachelor en Concepteur Développeur d'Applications. Cette étape m'a permis d'approfondir mes connaissances en développement et de me spécialiser dans la conception et la réalisation d'applications innovantes. DUT Génie Électrique & Informatique Industrielle.",

        EducationName3 : "Génie Électrique & Informatique Industrielle 2020 - 2022",
        EducationBody3 : "Mon parcours académique a débuté avec l'obtention d'un DUT en Génie Électrique & Informatique Industrielle. Cette formation polyvalente m'a offert une solide base en génie électrique et en informatique, me permettant de comprendre les fondamentaux de ces domaines et de développer mes compétences techniques.",

        EducationName4 : "Baccalauréat S option Sciences de l'Ingénieur 2019 - 2020",
        EducationBody4 : " Mon parcours éducatif a débuté avec l'obtention d'un Baccalauréat Scientifique avec option Sciences de l'Ingénieur. Cette formation m'a fourni une base solide en sciences et en mathématiques, posant ainsi les fondations de ma future carrière dans le domaine de l'ingénierie et de l'informatique.",

        //Projects
        ProjectsTitle: "Projets personnels et professionnels",

        //Login
        LoginTitle : "Connexion",
        Username : "Nom d'utilisateur",
        Password : "Mot de passe",
        LoginButton : "Se connecter",

        //Blog
        BlogTitle  : "Mon Blog",
        BlogButton : "Voir plus",
        PostDelete : "Post supprimé",
        PostAdd : "Créer un Post",

        //Add Post
        CreatePostTitle : "Créer un nouveau Post",
        PostTitle : "Titre",
        PostContent : "Contenu",
        UserID : "ID Utilisateur",
        CreatePostButton : "Créer le post",
        PostCreated : "Post créé !",

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
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;