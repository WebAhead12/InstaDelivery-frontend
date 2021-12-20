import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router";
import style from "./style.module.css";
import { Radio, Form } from "antd";

function Checkout(props) {
  const goTo = useNavigate();

  const [checkoutData, setCheckoutData] = useState({
    name: "",
    address: "",
    region: "",
    zipCode: "",
    phoneNumber: "",
    paymentMethod: "",
  });

  const onChange =
    (stateKey) =>
    ({ target }) =>
      setCheckoutData({ ...checkoutData, [stateKey]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    goTo("/checkout");
  };

  return (
    <Form onSubmit={onSubmit} className={style.checkout}>
      <div className={style.shippingAddress}>
        <div className={style.shippingTitle}>
          <p>
            <u>Address</u>
          </p>
        </div>
        <div className={style.fullName}>
          <label htmlFor="fullName" className={style.fullNameLabel}>
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            className={style.fullNameInput}
            onChange={onChange("fullName")}
            required
          />
        </div>
        <br />
        <div className={style.address}>
          <label htmlFor="name" className={style.addressLabel}>
            Address
          </label>
          <input
            id="address"
            type="text"
            className={style.addressInput}
            onChange={onChange("address")}
            required
          />
        </div>
        <br />
        <div className={style.region}>
          <label htmlFor="region" className={style.regionLabel}>
            Region
          </label>

          <input
            id="region"
            type="text"
            className={style.regionInput}
            onChange={onChange("region")}
            required
          />
        </div>
        <br />
        <div className={style.zipCode}>
          <label htmlFor="name" className={style.zipCodeLabel}>
            Zip Code
          </label>

          <input
            id="zipCode"
            type="text"
            className={style.zipCodeInput}
            onChange={onChange("zipCode")}
            required
          />
        </div>
        <br />
        <div className={style.email}>
          <label htmlFor="email" className={style.emailLabel}>
            Email
          </label>

          <input
            id="email"
            type="email"
            className={style.emailInput}
            onChange={onChange("email")}
            required
          />
        </div>
        <br />
        <div className={style.phoneNumber}>
          <label htmlFor="phoneNumber" className={style.phoneNumberLabel}>
            Phone Number
          </label>

          <input
            id="phoneNumber"
            type="tel"
            className={style.phoneNumberInput}
            onChange={onChange("phoneNumber")}
            required
          />
        </div>
        <br />

        <div className={style.radioBtn}></div>
        <Form.Item name="radio-group" label="Payment Method: ">
          <Radio.Group
            onChange={onChange("paymentMethod")}
            value={checkoutData.paymentMethod}
          >
            <Radio value={1}>Cash</Radio>
            <Radio value={2}>Credit Card</Radio>
          </Radio.Group>
        </Form.Item>
      </div>
      <br />
      <div className={style.cardNumber}>
        <label htmlFor="cardNumber" className={style.cardNumber}>
          Card Number
        </label>

        <input
          id="cardNumber"
          type="number"
          className={style.cardNumberInput}
          onChange={onChange("cardNumber")}
          required
        />
      </div>
      <br />
      <div className={style.expiration}>
        <label htmlFor="expiration" className={style.expiration}>
          Expiration
        </label>

        <input
          id="expiration"
          type="number"
          className={style.expirationInput}
          onChange={onChange("expiration")}
          required
        />
      </div>

      <br />
      <div className={style.securityCode}>
        <label htmlFor="securityCode" className={style.securityCode}>
          Security Code
        </label>

        <input
          id="securityCode"
          type="number"
          className={style.securityCodeInput}
          onChange={onChange("securityCode")}
          required
        />
      </div>
      <br />
      <button className="placeOrder">Place Order</button>
    </Form>
  );
}

export default Checkout;
