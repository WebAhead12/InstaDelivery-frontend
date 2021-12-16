import style from "./style.module.css";
import CartIcon from "./CartIcon";
import Central from "./Central";
import ButtonShop from "../ShopButton";
import { useNavigate } from "react-router-dom";

//NavBar
function NavBar(props) {
  const toGo = useNavigate();
  if (props.buttonValue === "Logout") {
    return (
      <div className={style.navBar}>
        <ButtonShop
          onClick={() => toGo("/lobby")}
          type="primary"
          value={props.buttonValue}
        />
        <Central text={props.text} />
        <CartIcon count={props.count} />
      </div>
    );
  } else {
    return (
      <div className={style.navBar}>
        <ButtonShop
          type="primary"
          onClick={() => toGo("/lobby")}
          value="Logout"
        />
        <Central text={props.text} />
        <ButtonShop
          type="primary"
          onClick={() => toGo("/home")}
          value={props.buttonValue}
        />
      </div>
    );
  }
}

export default NavBar;
