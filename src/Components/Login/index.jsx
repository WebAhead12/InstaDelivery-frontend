import { useNavigate } from "react-router-dom";
import "./login.css";

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

    loginData(loginData)
      .then((data) => {
        if (!data.error.length) {
          window.localStorage.setItem("access_token", data.access_token);
          history("/");
        } else {
          alert("Email/password incorrect");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="loginPage">
      <div className="logo">
        <img src="" alt="" />
      </div>

      <button className="loginBtn" type="log-in">
        Log in
      </button>

      <button className="registerBtn" type="register">
        Register
      </button>

      <div className="username"></div>

      <div className="password"></div>
    </div>
  );
}

export default LoginPage;
