import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import '../App.css';
import CardObject from 'components/Card';

function Home() {

  const { t } = useTranslation(); // Destructure 't' from the useTranslation hook
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");
  useEffect(() => {
    // Get the theme from document element


  }, []); 

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>{t("HomeTitle")}</h1>
        <h2>{t("HomeWelcome")}</h2>
      </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '40px', padding: '40px' }}>

        <CardObject

          title="Création de sites"
          description="Utilisation de JavaScript, HTML, CSS pour la conception et développement de sites web de A à Z. Ce site à été créé avec React!"
          image={require("assets/images/html-css-js.png")}
          theme={currentTheme}
        />
        <CardObject
          title="Développement de Jeux vidéo"
          description="Développement de jeux vidéos sous les moteurs de jeu Godot et Unity, en langage gdscript et C# respectivement"
          image={require("assets/images/godot.jpg")}
          theme={currentTheme}
        />
        <CardObject
          title="Yet Another Title"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          image={require("assets/images/bg-coworking.jpeg")}
          theme={currentTheme}
        />
      </div>
    </div>
    </div>
  );
}

export default Home;
