import { useState } from "react";
import style from "./style.module.css";
import ShopButton from "../ShopButton";
import Login from "./Login";
// import Register from "./Register";

function Lobby() {
  const [toggle, setToggle] = useState(false); //used to switch login/register components

  return (
    <div className="lobby">
      <div className={style.logo}>
        <img src="/Logo.png" alt="" />
      </div>
      <div className={style.selectActive}>
        <ShopButton
          value="Login"
          type="primary"
          shape="default"
          background="#867DF5"
          borderColor="#ccc"
          color="black"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <ShopButton
          value="Register"
          type="primary"
          shape="default"
          background="#BCB7FA"
          borderColor="#ccc"
          color="black"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>

      <Login />
    </div>
  );
}
export default Lobby;
