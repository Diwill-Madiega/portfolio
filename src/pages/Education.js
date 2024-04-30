import React from 'react';
import { useTranslation } from "react-i18next";
import '../App.css';

function Blog() {
  const { t } = useTranslation(); // Destructure 't' from the useTranslation hook

  return (
    <div style={{minHeight:"1000px"}}>
    <h1 class="text-center">{t("EducationTitle")}</h1>
    </div>
  );
}

export default Blog;
