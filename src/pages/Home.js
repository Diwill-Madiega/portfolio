import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import '../App.css';
import CardObject from 'components/Card';

function Home() {

  const { t } = useTranslation();
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");
  useEffect(() => {

  }, []); 

  return (
    <>
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>{t("HomeTitle")}</h1>
        <h2>{t("HomeWelcome")}</h2>
      </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '40px', padding: '40px' }}>

        <CardObject

          title="Godot"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          image={require("assets/images/godot.jpg")}
          theme={currentTheme}
        />
        <CardObject
          title="Education"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          image={require("assets/images/unity.png")}
          theme={currentTheme}
        />
        <CardObject
          title="Projets"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          image={require("assets/images/bg-coworking.jpeg")}
          theme={currentTheme}
        />
      </div>
    </div>
    </div>
    </>
  );
}

export default Home;
