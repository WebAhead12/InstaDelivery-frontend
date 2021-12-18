import style from "./style.module.css";
import Cart from "../Store/Cart";
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
        <Central />
        <Cart
          count={props.count}
          item={props.addItemToCart}
          updateItemsCounter={props.clickOnPlusMinus}
        />
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
        <Central />
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
