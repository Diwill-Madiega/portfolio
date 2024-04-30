import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
          setError("Invalid credentials");
        }
      })
      .catch((error) => {
        setError("An error occurred");
      });
  };

  return (
    <div>
      <h2>{t("LoginTitle")}</h2><br/>
      <div>
        <label>{t("Username")}</label><br />
        <input
          className="form-group"
          type="text"
          style={{margin: "8px 8px 8px 0px" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>{t("Password")}</label><br />
        <input
          className="form-group"
          type="password"
          style={{margin: "8px 8px 8px 0px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div><br />
      <button className="btn btn-primary" onClick={handleLogin}>{t("LoginButton")}</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
