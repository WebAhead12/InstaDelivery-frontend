import style from "./style.module.css";
import CartIcon from "./CartIcon";
import Central from "./Central";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

//NavBar
function NavBar(props) {
  const toGo = useNavigate();
  if (props.buttonValue === "Logout") {
    return (
      <div className={style.navBar}>
        <div className={style.button}>
          <Button
            type="primary"
            style={{ background: "black", borderColor: "#ccc", color: "white" }}
            onClick={() => toGo("/lobby")}
          >
            Logout
          </Button>
        </div>
        <Central text={props.text} />
        <CartIcon count={props.count} />
      </div>
    );
  } else {
    return (
      <div className={style.navBar}>
        <Button
          type="primary"
          style={{ background: "black", borderColor: "#ccc", color: "white" }}
          onClick={() => toGo("/lobby")}
        >
          Logout
        </Button>
        <Central text={props.text} />
        <Button
          type="primary"
          style={{ background: "black", borderColor: "#ccc", color: "white" }}
          onClick={() => toGo("/home")}
        >
          Home
        </Button>
      </div>
    );
  }
}

export default NavBar;
