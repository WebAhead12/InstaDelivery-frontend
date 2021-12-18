import style from "./style.module.css";
import React, { useEffect, useState } from "react";
import { Drawer, Button, Badge } from "antd";
import Item from "./CartItem";
import { findIdx } from "../../../utils/functions";

function Cart(props) {
  const [visible, setVisible] = useState(false);

  //array of items being added to cart.
  const [items, setItems] = useState([]);

  //update quantity for a given item.
  const updateItemQuantity = (item) => {
    const index = findIdx(items, item);
    console.log(item.quantity);
    items[index].quantity = item.quantity;
    setItems([...items]);
  };

  useEffect(() => {
    //check if an item is already clicked and exits in items.
    const index = findIdx(items, props.item);

    //check that items is not empty(caused by first loading of the page)
    if (props.item.id) {
      //insert to items only if it's not added before.
      if (index === -1) {
        setItems([...items, props.item]);
      } else {
        //if it is added update the quantity.
        items[index].quantity++;
        setItems([...items]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.item]);

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
      <div className={style.drawerContainer}>
        <Drawer
          bodyStyle={{ background: "#ffea9f" }}
          headerStyle={{ background: "#ffea9f" }}
          footerStyle={{ background: "#C4C4C4" }}
          className={style.drawer}
          title="User's Cart"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          {/* unfinished */}
          {items &&
            items.map((item, idx) => {
              return (
                <Item
                  key={idx}
                  id={item.id}
                  imgUrl={item.imgUrl}
                  name={item.name}
                  price={item.price}
                  item={item}
                  updateQuantity={updateItemQuantity}
                />
              );
            })}
          <div className={style.checkOut}>
            <Button type="primary">Check-out</Button>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Cart;
