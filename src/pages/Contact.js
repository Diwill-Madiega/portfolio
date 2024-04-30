import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import '../App.css';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <div style={{minHeight:"1000px"}}>
      <h1 className="text-center">{t("ContactTitle")}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t("ContactName")}:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div><br />
        <div className="form-group">
          <label htmlFor="email">{t("ContactEmail")}:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div><br />
        <div className="form-group">
          <label htmlFor="message">{t("ContactMessage")}:</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div><br />
        <button type="submit" className="btn btn-primary">{t("ContactSend")}</button>
      </form>
    </div>
    </>
  );
}

export default Contact;
