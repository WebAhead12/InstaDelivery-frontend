import style from "./style.module.css";
import CartIcon from "./CartIcon";
import Central from "./Central";
import ButtonShop from "../ShopButton";

function NavBar(props) {
  if (props.buttonValue === "Logout") {
    return (
      <div className={style.navBar}>
        <ButtonShop
          type="primary"
          shape="round"
          background="black"
          borderColor="#ffdc60"
          color="#ffdc60"
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
          shape="rodund"
          background="black"
          borderColor="#ffdc60"
          color="#ffdc60"
          value="Logout"
        />
        <Central text={props.text} />
        <ButtonShop
          type="primary"
          shape="round"
          background="black"
          borderColor="#ffdc60"
          color="#ffdc60"
          value={props.buttonValue}
        />
      </div>
    );
  }
}

export default NavBar;
