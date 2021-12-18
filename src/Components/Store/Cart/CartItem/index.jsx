import style from "./style.module.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

function CartItem(props) {
  const [quantity, setQuantity] = useState(props.item.quantity);

  return (
    <div className={style.item}>
      <div className={style.close}>
        <CloseOutlined />
      </div>
      <div className={style.image}>
        <img src={props.imgUrl} alt={props.name}></img>
      </div>
      <div className={style.name}>{props.name}</div>
      <div className={style.quantityContainer}>
        <MinusOutlined
          onClick={() => {
            if (!quantity) return;
            setQuantity(quantity - 1);
            props.item.quantity = quantity - 1;
            props.updateQuantity(props.item);
          }}
        />
        <div className={style.quantity}>{quantity}</div>
        <PlusOutlined
          onClick={() => {
            setQuantity(quantity + 1);
            props.item.quantity = quantity + 1;
            props.updateQuantity(props.item);
          }}
        />
      </div>
      <div className={style.price}>{(props.price * quantity).toFixed(2)}₪</div>
    </div>
  );
}

export default CartItem;
