import style from "./style.module.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";

function CartItem(props) {
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    //when props.item.quantity being affect by adding to cart from store => update state.
    setQuantity(props.item.quantity);

    //if quantity reaches 0 when decreasing in cart, remote the item from cart.
    if (!props.item.quantity) {
      props.removeItem(props.item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.item.quantity]);

  const onClick = (op) => {
    if (op === "increase") {
      //update quantity in component
      setQuantity(quantity + 1);
      //update quantity in props.item object
      props.item.quantity = quantity + 1;
    } else {
      setQuantity(quantity - 1);
      props.item.quantity = quantity - 1;
    }
    //update quantity in parent's component.
    props.updateQuantity(props.item);
    //update the badge count in Home component.
    props.updateBadge(op);
  };

  return (
    <div className={style.item}>
      <div className={style.close}>
        <CloseOutlined
          onClick={() => {
            //update the badge count
            props.updateBadge("decrease", quantity);
            //update
            props.updateQuantity(props.item);

            props.removeItem(props.item);
          }}
        />
      </div>
      <div className={style.image}>
        <img src={props.imgUrl} alt={props.name}></img>
      </div>
      <div className={style.name}>{props.name}</div>
      <div className={style.quantityContainer}>
        <MinusOutlined
          onClick={() => {
            if (!quantity) {
              return;
            }
            onClick("decrease");
          }}
        />
        <div className={style.quantity}>{quantity}</div>
        <PlusOutlined
          onClick={() => {
            onClick("increase");
          }}
        />
      </div>
      <div className={style.price}>{(props.price * quantity).toFixed(2)}₪</div>
    </div>
  );
}

export default CartItem;
