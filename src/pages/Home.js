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

          title="Lizard"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          image={require("assets/images/bg-coworking.jpeg")}
          theme={currentTheme}
        />
        <CardObject
          title="Another Title"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          image={require("assets/images/bg-about-us.jpg")}
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
