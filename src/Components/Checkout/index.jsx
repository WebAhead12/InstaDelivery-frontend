import React from "react";
import NavBar from "../NavBar";
import { useState } from "react";
import style from "./style.module.css";
import { Radio, Form, Button } from "antd";
import CreditCard from "./CreditCard";
import { useNavigate } from "react-router-dom";
import { capitalizeFirst, onlyLetters } from "../../utils/functions";
import regexNot from "regex-not";

function Checkout(props) {
  const goTo = useNavigate();
  const [howToPay, setHowToPay] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("unknown error");

  const [checkoutData, setCheckoutData] = useState({
    fullName: "",
    address: "",
    city: "",
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

    if (!onlyLetters(checkoutData.fullName)) {
      setShowError(!showError);
      setErrorMessage("Only characters from A-Z are allowed");
    }
    console.log(checkoutData);
  };

  const handleKeyPress = (e) => {
    const key = e.key;

    if (!onlyLetters(key)) {
      e.preventDefault();
    } else {
      console.log("you clicked on a number");
    }
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
              pattern="/^[a-zA-Z\s]+$/"
              onKeyPress={(e) => handleKeyPress(e)}
              value={checkoutData.fullName}
              placeholder=" e.g. John Snow"
              className={style.fullNameInput}
              onChange={(e) =>
                setCheckoutData({
                  ...checkoutData,
                  fullName: capitalizeFirst(e.target.value),
                })
              }
              required
            />
          </div>
          <br />
          <div className={style.address}>
            <label htmlFor="name" className={style.addressLabel}>
              Address (House number and street name)
            </label>
            <input
              id="address"
              type="text"
              placeholder=" e.g. 3372 Winterfell Castle"
              className={style.addressInput}
              onChange={onChange("address")}
              required
            />
          </div>
          <br />
          <div className={style.city}>
            <label htmlFor="city" className={style.cityLabel}>
              City
            </label>

            <input
              id="city"
              type="text"
              placeholder=" e.g. Akko"
              className={style.cityInput}
              onChange={onChange("city")}
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
              placeholder=" e.g. 3958200"
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
              placeholder=" johnSnow1@gmail.com"
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
              placeholder=" e.g. +972 05X-XXX-XXXX"
              className={style.phoneNumberInput}
              onChange={onChange("phoneNumber")}
              required
            />
          </div>
          <br />

          <div className={style.error}>{showError ? errorMessage : null}</div>

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

        <Button className={style.placeOrder} onClick={onSubmit}>
          Place Order
        </Button>
      </Form>
    </div>
  );
}

export default Checkout;
