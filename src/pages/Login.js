import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Login = ({ onLogin }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          onLogin(data.token);
        } else {
          setError(t("InvalidCredentials"));
        }
      })
      .catch(() => {
        setError("An error occurred");
      });
  };

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>{t("LoginTitle")}</h2><br/>
      <div>
        <label>{t("Username")}</label>
        <br />
        <input
          className="form-group"
          type="text"
          style={{margin: "0px 0px 10px 0px" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>{t("Password")}</label>
        <br />
        <input
          className="form-group"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div><br />
      <button className="btn btn-primary" onClick={handleLogin}> <FontAwesomeIcon icon={faRightToBracket} /> {t("LoginButton")}</button>
      <br/>
      {error && <p className="alert alert-danger">{error}</p>}
    </div>
    </>
  );
};

export default Login;
