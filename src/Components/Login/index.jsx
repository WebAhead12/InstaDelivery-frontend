import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { useState } from "react";

function LoginPage(props) {
  const history = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const onChange =
    (stateKey) =>
    ({ target }) =>
      setLoginData({ ...loginData, [stateKey]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();
  };

  //   loginData(loginData)
  //     .then((data) => {
  //       if (!data.error.length) {
  //         window.localStorage.setItem("access_token", data.access_token);
  //         history("/");
  //       } else {
  //         alert("Email/password incorrect");
  //       }
  //     })
  //     .catch((error) => console.error(error));
  //

  return (
    <div className={style.login}>
      <div className={style.logo}>
        <img src="" alt="" />
      </div>

      <div className={style.email}>
        <form onSubmit={onSubmit}>
          <div className="email">
            <label htmlFor="email" className={style.emailLabel}>
              Email
            </label>
            <input
              type="text"
              className={style.emailInput}
              placeholder="e.g. johnSnow1@gmail.com"
              onChange={onChange("email")}
              value={loginData.email}
              required
            />
          </div>
          <div className={style.password}></div>
          <label htmlFor="password" className={style.password}>
            Password
          </label>
          <input
            type="password"
            className={style.passwordInput}
            placeholder="e.g. Enter password here"
            onChange={onChange("password")}
            value={loginData.password}
            required
          />
          <br />
          <br />
          <button className={style.submit} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
