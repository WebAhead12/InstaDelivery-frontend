import { useState } from "react";
import style from "./style.module.css";
import Login from "./Login";
import Register from "./Register";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Lobby() {
  const goTo = useNavigate();
  const [toggle, setToggle] = useState(false); //used to switch login/register components

  return (
    <div className="lobby">
      <div className="registrationInfo">
        <div className={style.logo}>
          <img src="/Logo.png" alt="" onClick={() => goTo("/")} />
        </div>
        <div className={style.selectActive}>
          <Button
            type="primary"
            className={style.btn}
            style={{
              background: !toggle ? "#867DF5" : "#BCB7FA",
              borderColor: "#ccc",
              color: "black",
            }}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Login
          </Button>
          <Button
            type="primary"
            className={style.btn}
            style={{
              background: !toggle ? "#BCB7FA" : "#867DF5",
              borderColor: "#ccc",
              color: "black",
            }}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Register
          </Button>
        </div>
      </div>
      {!toggle ? <Login /> : <Register />}
    </div>
  );
}
export default Lobby;
