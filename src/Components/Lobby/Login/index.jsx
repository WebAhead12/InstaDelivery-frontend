import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { useState } from "react";
import { Button } from "antd";
import { login } from "../../../utils/api";

function Login(props) {
  const goTo = useNavigate();
  const [msgError, setMsgError] = useState("An unexpexted error");
  const [showError, setShowError] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    error: null,
  });

  const onChange =
    (stateKey) =>
    ({ target }) =>
      setLoginData({ ...loginData, [stateKey]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    login(loginData)
      .then((data) => {
        if (!data.error.length) {
          window.localStorage.setItem("access_token", data.access_token);
          goTo("/");
        } else {
          setMsgError(data.error);
          setShowError(!showError);
          setTimeout(() => {
            setShowError(false);
          }, 3000);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={onSubmit} className={style.login}>
      <div className="loginInfo">
        <div className={style.email}>
          <label htmlFor="email" className={style.emailLabel}>
            Email:
          </label>
          <input
            id="email"
            type="text"
            className={style.emailInput}
            placeholder="e.g. johnSnow1@gmail.com"
            onChange={onChange("email")}
            value={loginData.email}
            required
          />
        </div>
        <br></br>

        <div className={style.password}>
          <label htmlFor="password" className={style.passwordLabel}>
            Password:
          </label>
          <input
            id="password"
            type="password"
            className={style.passwordInput}
            placeholder="e.g. Enter password here"
            onChange={onChange("password")}
            value={loginData.password}
            required
          />
        </div>
      </div>
      <br />
      {showError ? (
        <div className={style.errorMsg}>
          <span>{msgError} </span>
        </div>
      ) : null}

      <br />
      <div className={style.button}>
        <Button
          type="primary"
          style={{ background: "black", borderColor: "#ccc", color: "white" }}
          onClick={onSubmit}
        >
          Login
        </Button>
      </div>
    </form>
  );
}

export default Login;
