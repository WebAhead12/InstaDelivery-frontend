import React from "react";
import style from "./style.module.css";
import NavBar from "../NavBar";
function Confirmation() {
  localStorage.removeItem("cartItems");
  return (
    <div className={style.confirmation}>
      <NavBar buttonValue="Home" />
      <div className={style.confirmationText}>
        <h4>Thank you for shopping with InstaDelivery</h4>
        <h3> Your order has been placed successfully!</h3>
        <h4>
          You will receive an email shortly with a summary of your order. See
          you in a bit!
        </h4>
      </div>
    </div>
  );
}
export default Confirmation;
