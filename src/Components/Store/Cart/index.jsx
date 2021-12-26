import style from "./style.module.css";
import React, { useEffect, useState } from "react";
import { Drawer, Button, Badge } from "antd";
import Item from "./CartItem";
import { useNavigate } from "react-router-dom";
import { findIdx } from "../../../utils/functions";
import { addItemsToCart } from "../../../utils/api";

function Cart(props) {
  const [visible, setVisible] = useState(false);
  const goTo = useNavigate();
  //array of items being added to cart.
  const [items, setItems] = useState([]);

  //update quantity for a given item.
  const updateItemQuantity = (item) => {
    const index = findIdx(items, item);
    items[index].quantity = item.quantity;
    setItems([...items]);
    localStorage.setItem("cartItems", JSON.stringify([...items]));
  };

  //remove item from cart, for a given item remove it from the array of items.
  const removeItemFromCart = (item) => {
    const index = findIdx(items, item);
    const newStateOfItems = items
      .slice(0, index)
      .concat(items.slice(index + 1, items.length));
    setItems([...newStateOfItems]);
    if (!newStateOfItems.length) {
      localStorage.removeItem("cartItems");
    } else {
      localStorage.setItem("cartItems", JSON.stringify([...newStateOfItems]));
    }
  };

  //calculate total price
  const totalPrice = () => {
    let sum = 0;
    for (let item of items) {
      sum += item.price * item.quantity;
    }
    return sum.toFixed(2);
  };

  useEffect(() => {
    const retrievedCartItems = localStorage.getItem("cartItems");
    if (retrievedCartItems) {
      const cartItems = JSON.parse(retrievedCartItems);

      let badgeCount = 0;
      for (let item of cartItems) {
        badgeCount += item.quantity;
      }

      props.updateItemsCounter("increase", badgeCount);
      setItems(cartItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //if the item is coming due to a search process, kill this process and don't update anything in cart.
    if (props.item.isSearched) {
      return;
    }
    //check if an item is already clicked and exits in items.
    const index = findIdx(items, props.item);

    //check that items is not empty(caused by first loading of the page)
    if (props.item.id) {
      //insert to items only if it's not added before.
      if (index === -1) {
        //make a new property for item object(props.item) when item pushed to items for the first time.
        props.item.quantity = 1;
        setItems([...items, props.item]);
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...items, props.item])
        );
      } else {
        //if it is added update the quantity.
        items[index].quantity++;
        setItems([...items]);
        localStorage.setItem("cartItems", JSON.stringify([...items]));
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
        <Badge size="small" count={props.count} style={{ marginTop: "3px" }}>
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
          title="Shopping cart"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          {items &&
            items.map((item, idx) => {
              return (
                <div className={style.itemsMap} key={idx}>
                  <Item
                    id={item.id}
                    imgurl={item.imgurl}
                    name={item.name}
                    price={item.price}
                    item={item}
                    updateQuantity={updateItemQuantity}
                    updateBadge={props.updateItemsCounter}
                    removeItem={removeItemFromCart}
                  />
                  <hr />
                </div>
              );
            })}
          <div className={style.checkOut}>
            <span className={style.totalPrice}>Total: {totalPrice()} ₪</span>
            <Button
              type="primary"
              onClick={() => {
                const token = localStorage.getItem("access_token");
                if (!items.length) {
                  alert("Cart is empty ☹");
                  setVisible(false);
                } else if (token) {
                  addItemsToCart(token, items)
                    .then(() => {
                      goTo("/checkout");
                    })
                    .catch((err) => {
                      localStorage.removeItem("access_token");
                      alert("Timeout, Please sign in again.. | " + err.message);
                      goTo("/lobby");
                    });
                } else {
                  alert("Login Please..");
                  goTo("/lobby");
                }
              }}
            >
              Check-out
            </Button>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Cart;
