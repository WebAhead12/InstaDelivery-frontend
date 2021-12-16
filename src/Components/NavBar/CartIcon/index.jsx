import style from "./style.module.css";

import React, { useState } from "react";

import { Drawer, Button, Badge } from "antd";

function CartIcon(prop) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={style.cartIcon}>
      <Badge size="small" count={prop.count}>
        <img
          src="/icons/shopping-cart.png"
          alt="shopping cart"
          onClick={showDrawer}
        />
      </Badge>
      <Drawer
        title="User's Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <button>Check-out</button>
      </Drawer>
    </div>
  );
}

export default CartIcon;
