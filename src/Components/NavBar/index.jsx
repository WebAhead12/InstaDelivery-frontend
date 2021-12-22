import style from "./style.module.css";
import Cart from "../Store/Cart";
import Central from "./Central";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

//NavBar
function NavBar(props) {
  console.log(2, props.addItemToCart);
  const toGo = useNavigate();
  if (props.buttonValue === "Logout" || props.buttonValue === "Login") {
    return (
      <div className={style.navBar}>
        <div className={style.button}>
          <Button
            type="primary"
            style={{
              background: "black",
              borderColor: "#ccc",
              color: "white",
              height: "56px",
            }}
            onClick={() => {
              localStorage.clear();
              toGo("/lobby");
            }}
          >
            {props.buttonValue}
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
        <div className={style.button}>
          <Button
            type="primary"
            style={{ background: "black", borderColor: "#ccc", color: "white" }}
            onClick={() => {
              localStorage.clear();
              toGo("/lobby");
            }}
          >
            Logout
          </Button>
        </div>
        <div className={style.checkoutLogo}>
          <Central />
        </div>
        <div className={style.button}>
          <Button
            type="primary"
            style={{ background: "black", borderColor: "#ccc", color: "white" }}
            onClick={() => toGo("/")}
          >
            Home
          </Button>
        </div>
      </div>
    );
  }
}

export default NavBar;
