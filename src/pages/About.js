import React from 'react';
import { useTranslation } from "react-i18next";
import '../App.css';

function About() {
  const { t } = useTranslation(); 

  return (
    <>
    <div style={{minHeight:"1000px"}}>
    <h1 class="text-center">{t("AboutTitle")}</h1>
    </div>
    </>
  );
}

export default About;
