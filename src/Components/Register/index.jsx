import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { useState } from "react";

function RegisterPage() {
  const history = useNavigate();
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
      //       alert(`Welcome to InstaCart, ${account.userName}.`);
      //       history ("/login")
      //     } else {
      //       alert (res.error);
      //     }
      //   })
      //   .catch((error) => console.error(error))
      // }
      //   }
    }
  };

  return (
    <div className={style.register}>
      <form onSubmit={onSubmit}>
        <div className={style.name}>
          <label htmlFor="name" className={style.nameLabel}>
            Name
          </label>
          <input
            type="text"
            className={style.name}
            placeholder="John Snow"
            onChange={onChange("name")}
            value={account.name}
            required
          />
        </div>
        <div className={style.email}>
          <label htmlFor="email" className={style.emailLabel}>
            Email
          </label>
          <input
            type="text"
            className={style.emailLabel}
            placeholder="johnSnow1@gmail.com"
            onChange={onChange("email")}
            value={account.email}
            required
          />
        </div>
        <div className="password"></div>
        <label htmlFor="password" className={style.passwordLabel}>
          Password
        </label>
        <input
          type="password"
          className={style.passwordLabel}
          placeholder="e.g. Enter password here"
          onChange={onChange("password")}
          value={account.password}
          required
        />
        <div className="confirmPassword"></div>
        <label htmlFor="password" className={style.confirmPasswordLabel}>
          Confirm Password
        </label>
        <input
          type="confirmPassword"
          className={style.confirmPasswordLabel}
          placeholder="e.g. Enter password again"
          onChange={onChange("confirmPassword")}
          value={account.confirmPassword}
          required
        />
        <br />
        <br />
        <button className={style.submit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
