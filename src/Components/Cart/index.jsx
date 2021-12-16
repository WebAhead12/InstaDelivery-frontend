import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./style.module.css";
import { Drawer, Button } from "antd";

function ViewCart() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
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
    </>
  );
}

// ReactDOM.render(<App />, document.getElementById("container"));
export default ViewCart;
