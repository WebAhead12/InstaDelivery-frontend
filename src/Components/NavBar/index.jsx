import style from "./style.module.css";
import NavBarButton from "./NavBarButton";
import CartIcon from "./CartIcon";
import Central from "./Central";

function NavBar(props) {
  if (props.buttonValue === "Logout") {
    return (
      <div className={style.navBar}>
        <NavBarButton value={props.buttonValue} />
        <Central text={props.text} />
        <CartIcon count={props.count} />
      </div>
    );
  } else {
    return (
      <div className={style.navBar}>
        <NavBarButton value="Logout" />
        <Central text={props.text} />
        <NavBarButton value={props.buttonValue} />
      </div>
    );
  }
}

export default NavBar;
