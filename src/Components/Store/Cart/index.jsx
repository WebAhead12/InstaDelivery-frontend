import style from "./style.module.css";
import React, { useState } from "react";
import { Drawer, Button, Badge } from "antd";
import Item from "../Item";

function Cart(props) {
  console.log();

  const [visible, setVisible] = useState(false);

  //array of items being added to cart.
  const [items, setItems] = useState([]);

  //when an item is clicked and not chosen before.
  if (props.item.id && !items.includes(props.item)) {
    setItems([...items, props.item]);
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={style.cart}>
      <div className={style.cartIcon}>
        <Badge size="small" count={props.count}>
          <img
            src="/icons/shopping-cart.png"
            alt="shopping cart"
            onClick={showDrawer}
          />
        </Badge>
      </div>
      <div className={style.drawer}>
        <Drawer
          title="User's Cart"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          {/* unfinished */}
          {items.map((item, idx) => {
            return (
              <Item
                key={idx}
                id={item.id}
                imgUrl={item.imgUrl}
                name={item.name}
                price={item.price}
                clickAdd={props.clickAdd}
                updateItem={props.updateItem}
              />
            );
          })}
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <Button type="primary">Check-out</Button>
        </Drawer>
      </div>
    </div>
  );
}

export default Cart;
