import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Education from "./pages/LandingPages/AboutUs";
import Blog from "./pages/Blog";
import { ThemeProvider } from "@mui/material/styles";

// Material Kit 2 React themes
import theme from "assets/theme";

import "./App.css";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="container mt-4 pt-5" >

      <Navbar changeLanguage={changeLanguage} />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/education" element={<Education />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </div>
    </ThemeProvider>
  );
}

export default App;