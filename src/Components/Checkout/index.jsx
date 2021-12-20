import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router";
import style from "./style.module.css";
import { Radio } from "antd";

function Checkout(props) {
  const goTo = useNavigate();
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    address: "",
    region: "",
    zipCode: "",
    phoneNumber: "",
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
    <form onSubmit={onSubmit} className={style.checkout}>
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
            onChange={checkoutData.fullName}
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
            onChange={checkoutData.address}
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
            onChange={checkoutData.region}
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
            onChange={checkoutData.zipCode}
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
            onChange={checkoutData.email}
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
            onChange={checkoutData.phoneNumber}
            required
          />
        </div>
        <br />

        <div className={style.radioBtn}></div>
      </div>
    </form>
  );
}

export default Checkout;
