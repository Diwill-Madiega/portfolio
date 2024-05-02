import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Navbar = ({ changeLanguage }) => {
  const [scroll400, setScroll400] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    const theme = newDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
    // Store dark mode preference in session storage
    sessionStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  // Effect to handle scroll and set scroll state
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScroll400(currentScroll > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to retrieve and apply stored language and theme preferences on component mount
  useEffect(() => {
    // Retrieve stored dark mode preference
    const storedDarkMode = sessionStorage.getItem("darkMode");
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
      const theme = JSON.parse(storedDarkMode) ? "dark" : "light";
      document.documentElement.setAttribute("data-bs-theme", theme);
    }

    // Retrieve stored language preference
    const storedLanguage = sessionStorage.getItem("language");
    if (storedLanguage) {
      changeLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, [changeLanguage, i18n]);

  return (
    <>
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? (scroll400 ? "bg-navbar-end-dark" : "bg-navbar-start-dark") : (scroll400 ? "bg-navbar-end-light" : "bg-navbar-start-light")
      } fixed-top`}
      style={{ boxShadow: "0 0px 16px rgba(0.5, 0.5, 0.5, 0.5)" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h1>Portfolio</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {t("HomeNav")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {t("AboutNav")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">
                {t("EducationNav")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                {t("ProjectsNav")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                {t("ContactNav")}
              </Link>
            </li>

          </ul>
          <div className="navbar-text d-flex align-items-center">
            <button
              className="btn btn-secondary me-2"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </button>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="languageDropdown">
                {t("Language")}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("fr")}>
                  Français
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("en")}>
                  English
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;