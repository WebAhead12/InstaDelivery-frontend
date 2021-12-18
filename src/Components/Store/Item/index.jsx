import style from "./style.module.css";
import { Button } from "antd";
import React, { useState } from "react";

function Item(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={style.item}>
      <div className={style.itemImg}>
        <img src={props.imgUrl} alt={props.name}></img>
      </div>
      <div className={style.name}> {props.name}</div>
      <div className={style.price}>{props.price}₪</div>
      <div className={style.addBtn}>
        <Button
          type="primary"
          size="small"
          value={{
            imgUrl: props.imgUrl,
            name: props.name,
            price: props.price,
          }}
          onClick={(e) => {
            setQuantity(quantity + 1);
            props.clickAdd();
            props.updateItem({
              id: props.id,
              imgUrl: props.imgUrl,
              name: props.name,
              price: props.price,
              quantity: quantity,
            });
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
export default Item;
