import React from "react";
import NavBar from "../NavBar";
import { useState } from "react";
import style from "./style.module.css";
import { Radio, Form, Button } from "antd";
import CreditCard from "./CreditCard";

function Checkout(props) {
  const [howToPay, setHowToPay] = useState(false);
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
  };

  return (
    <div className={style.checkout}>
      <NavBar buttonValue="Home" />
      <Form onSubmit={onSubmit} className={style.checkout}>
        <div className={style.shippingAddress}>
          <div className={style.shippingTitle}>
            <h5>Shipping and Billing Address</h5>
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

          <div className={style.radioBtn}>
            <h5>Payment Method</h5>
          </div>

          <Form.Item
            name="radio-group"
            className="paymentMethodTitle"
            label
            htmlFor="PaymentMethod"
            initialValue={2}
          >
            <Radio.Group
              onChange={() => {
                setHowToPay(!howToPay);
              }}
              value={checkoutData.paymentMethod}
            >
              <div className="paymentMethods">
                <Radio className={style.cash} value={1}>
                  Cash
                </Radio>
                <Radio className={style.credit} value={2}>
                  Credit Card
                </Radio>
              </div>
            </Radio.Group>
          </Form.Item>
        </div>

        {!howToPay ? <CreditCard onChange={onChange} /> : null}

        <Button
          className={style.placeOrder}
          // onClick={() => goTo("/confirmation")}
        >
          Place Order
        </Button>
      </Form>
    </div>
  );
}

export default Checkout;
