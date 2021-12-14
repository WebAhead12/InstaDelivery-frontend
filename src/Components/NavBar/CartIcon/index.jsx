import { Badge } from "antd";
import style from "./style.module.css";

function CartIcon(prop) {
  return (
    <div className={style.cartIcon}>
      <Badge size="small" count={prop.count}>
        <img src="/icons/shopping-cart.png" alt="shopping cart" />
      </Badge>
    </div>
  );
}

export default CartIcon;
