import React from 'react';
import { useTranslation } from "react-i18next";
import '../App.css';

function Blog() {
  const { t } = useTranslation();

  return (
    <div style={{minHeight:"1000px"}}>
    <h1 class="text-center">{t("EducationTitle")}</h1><br /><br />

    <h3 class="text-left text-justify text-decoration-underline">{t("EducationName1")}</h3>
    <h5 class="text-left text-justify">{t("EducationBody1")}</h5><br />

    <h3 class="text-left text-justify text-decoration-underline">{t("EducationName2")}</h3>
    <h5 class="text-left text-justify">{t("EducationBody2")}</h5><br />

    <h3 class="text-left text-justify text-decoration-underline">{t("EducationName3")}</h3>
    <h5 class="text-left text-justify">{t("EducationBody3")}</h5><br />

    <h3 class="text-left text-justify text-decoration-underline">{t("EducationName4")}</h3>
    <h5 class="text-left text-justify">{t("EducationBody4")}</h5><br />
    </div>
  );
}

export default Blog;
