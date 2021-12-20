import React from "react";
import style from "./style.module.css";
function Confirmation() {
  return (
    <div className={style.confirmation}>
      <h4>Your order has been placed successfully!</h4>
      <h3>Thank you for shopping with InstaDelivery</h3>
      <p className={style.pTag}>
        You will receive an email shortly with a summary of your order. See you
        in a bit!
      </p>
    </div>
  );
}
export default Confirmation;
