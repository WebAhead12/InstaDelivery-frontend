import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { useState } from "react";
import { Button } from "antd";

function Register() {
  const goTo = useNavigate();
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange =
    (stateKey) =>
    ({ target }) => {
      setAccount({ ...account, [stateKey]: target.value });
    };

  const onSubmit = (event) => {
    event.preventDefault();
    if (account.password !== account.confirmPassword) {
      alert("Passwords do not match, please try again");
      return;

      // } else {
      //   register(account)
      //   .then((res) => {
      //     if(res.response === "Successful") {
      //       alert(`Welcome to InstaCart, ${account.name}.`);
      //       history ("/login")
      //     } else {
      //       alert (res.error);
      //     }
      //   })
      //   .catch((error) => console.error(error))
      // }
      //   }
    } else {
      goTo("/");
    }
  };

  return (
    <form className={style.register} onSubmit={onSubmit}>
      <div className="registrationInfo">
        <div className={style.name}>
          <label htmlFor="name" className={style.nameLabel}>
            Name:
          </label>

          <input
            id="name"
            type="text"
            className={style.nameInput}
            placeholder="John Snow"
            onChange={onChange("name")}
            value={account.name}
            required
          />
          <br />
          <br />
        </div>
        <div className={style.email}>
          <label htmlFor="email" className={style.emailLabel}>
            Email:
          </label>

          <input
            id="email"
            type="text"
            className={style.emailInput}
            placeholder="johnSnow1@gmail.com"
            onChange={onChange("email")}
            value={account.email}
            required
          />
          <br />
          <br />
        </div>
        <div className={style.password}></div>
        <label htmlFor="password" className={style.passwordLabel}>
          Password:
        </label>

        <input
          id="password"
          type="password"
          className={style.passwordInput}
          placeholder="e.g. Enter password here"
          onChange={onChange("password")}
          value={account.password}
          required
        />

        <br />
        <br />
        <div className={style.confirmPassword}></div>
        <label htmlFor="password" className={style.confirmPasswordLabel}>
          Confirm Password:
        </label>

        <input
          id="confirmPassword"
          type="password"
          className={style.confirmPasswordInput}
          placeholder="Enter password again"
          onChange={onChange("confirmPassword")}
          value={account.confirmPassword}
          required
        />
      </div>
      <br />
      <br />
      <div className={style.button}>
        <Button
          type="primary"
          style={{ background: "black", borderColor: "#ccc", color: "white" }}
          onClick={onSubmit}
        >
          Register
        </Button>
      </div>
    </form>
  );
}

export default Register;
