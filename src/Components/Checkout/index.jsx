import React from "react";
import NavBar from "../NavBar";
import { useState, useEffect } from "react";
import style from "./style.module.css";
import { Radio, Form, Button } from "antd";
import CreditCard from "./CreditCard";
import { useNavigate } from "react-router-dom";
import {
  onlyLetters,
  emailValidationRegex,
  addressValidationRegex,
  zipcodeValidationRegex,
  phoneValidationRegex,
  totalPrice,
} from "../../utils/functions";
import { setUserOrder, getCartItems } from "../../utils/api";

function Checkout() {
  const goTo = useNavigate();
  const [orderSummary, setOrderSummary] = useState([]);

  const [howToPay, setHowToPay] = useState(false);
  const [fullNameValidation, setFullNameValidation] = useState(false);
  const [addressValidation, setAddressValidation] = useState(false);
  const [cityValidation, setCityValidation] = useState(false);
  const [zipcodeValidation, setZipcodeValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState(false);

  const [checkoutData, setCheckoutData] = useState({
    fullName: "",
    address: "",
    city: "",
    zipcode: "",
    email: "",
    phoneNumber: "",
    paymentMethod: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      getCartItems(token)
        .then((res) => {
          let orderedItems = [];
          res.items.map((item) => {
            return orderedItems.push({
              id: item.item_id,
              name: item.name,
              quantity: item.quantity,
              price: item.price,
            });
          });

          setOrderSummary(orderedItems);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange =
    (stateKey) =>
    ({ target }) => {
      setCheckoutData({ ...checkoutData, [stateKey]: target.value });
    };
  const onSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("access_token");
    if (token) {
      if (!onlyLetters(checkoutData.fullName)) {
        setFullNameValidation(!fullNameValidation);
        setTimeout(() => {
          setFullNameValidation(false);
        }, 3000);
        return;
      }
      if (!addressValidationRegex(checkoutData.address)) {
        setAddressValidation(!addressValidation);
        setTimeout(() => {
          setFullNameValidation(false);
        }, 3000);
        return;
      }
      if (!onlyLetters(checkoutData.city)) {
        setCityValidation(!cityValidation);
        setTimeout(() => {
          setFullNameValidation(false);
        }, 3000);
        return;
      }
      if (!zipcodeValidationRegex(checkoutData.zipcode)) {
        setZipcodeValidation(!zipcodeValidation);
        setTimeout(() => {
          setFullNameValidation(false);
        }, 3000);
        return;
      }
      if (!emailValidationRegex(checkoutData.email)) {
        setEmailValidation(!emailValidation);
        setTimeout(() => {
          setFullNameValidation(false);
        }, 3000);
        return;
      }
      if (!phoneValidationRegex(checkoutData.phoneNumber)) {
        setPhoneValidation(!phoneValidation);
        setTimeout(() => {
          setFullNameValidation(false);
        }, 3000);
        return;
      }

      setUserOrder(token, checkoutData)
        .then((res) => {
          goTo("/confirmation");
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("access_token");
          alert("Timeout, Please sign in again.. | " + err.message);
          goTo("/lobby");
        });
      return;
    } else {
      alert("Login Please..");
      goTo("/lobby");
    }
  };

  return (
    <div className={style.checkout}>
      <NavBar buttonValue="Home" />
      <div className={style.tableTotal}>
        <p className="orderSummaryTitle">
          <u>Order Summary</u>
        </p>
        <table className={style.itemList}>
          <thead>
            <tr>
              <th>Prod. ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orderSummary.map((product, idx) => {
              return (
                <tr className={style.item} key={idx}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price * product.quantity} ₪</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={style.totalPrice}>
          Total: {totalPrice(orderSummary)} ₪
        </div>
      </div>
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
              value={checkoutData.fullName}
              placeholder=" e.g. John Snow"
              className={style.fullNameInput}
              onChange={onChange("fullName")}
              required
            />
            <div className={style.error}>
              {fullNameValidation
                ? "Enter letters from A-Z only e.g. John Snow"
                : null}
            </div>
          </div>
          <br />
          <div className={style.address}>
            <label htmlFor="address" className={style.addressLabel}>
              Address (House number and street name)
            </label>
            <input
              id="address"
              type="text"
              value={checkoutData.address}
              placeholder=" e.g. 3372 Winterfell Castle"
              className={style.addressInput}
              onChange={onChange("address")}
              required
            />
            <div className={style.error}>
              {addressValidation ? "Enter address example" : null}
            </div>
          </div>
          <br />
          <div className={style.city}>
            <label htmlFor="city" className={style.cityLabel}>
              City
            </label>

            <input
              id="city"
              type="text"
              value={checkoutData.city}
              placeholder=" e.g. Akko"
              className={style.cityInput}
              onChange={onChange("city")}
              required
            />
            <div className={style.error}>
              {cityValidation ? "Enter letters from A-Z only e.g. Akko" : null}
            </div>
          </div>
          <br />
          <div className={style.zipCode}>
            <label htmlFor="name" className={style.zipCodeLabel}>
              Zip Code
            </label>

            <input
              id="zipCode"
              type="text"
              value={checkoutData.zipcode}
              placeholder=" e.g. 3958200"
              className={style.zipCodeInput}
              onChange={onChange("zipcode")}
              required
            />
            <div className={style.error}>
              {zipcodeValidation ? "Enter numbers only e.g. 3081100" : null}
            </div>
          </div>
          <br />
          <div className={style.email}>
            <label htmlFor="email" className={style.emailLabel}>
              Email
            </label>

            <input
              id="email"
              type="text"
              value={checkoutData.email}
              placeholder=" johnSnow1@gmail.com"
              className={style.emailInput}
              onChange={onChange("email")}
              required
            />
            <div className={style.error}>
              {emailValidation
                ? "Please enter a valid email e.g. johnsnow.1@gmail.com"
                : null}
            </div>
          </div>
          <br />
          <div className={style.phoneNumber}>
            <label htmlFor="phoneNumber" className={style.phoneNumberLabel}>
              Phone Number
            </label>

            <input
              id="phoneNumber"
              type="tel"
              value={checkoutData.phoneNumber}
              placeholder=" e.g. +972 05X-XXX-XXXX"
              className={style.phoneNumberInput}
              onChange={onChange("phoneNumber")}
              required
            />
            <div className={style.error}>
              {phoneValidation
                ? "Please enter a valid phone number e.g. 0544778069"
                : null}
            </div>
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
              onChange={(e) => {
                setHowToPay(!howToPay);
                setCheckoutData({
                  ...checkoutData,
                  paymentMethod: e.target.value,
                });
              }}
            >
              <div className="paymentMethods">
                <Radio className={style.cash} value={"Cash"}>
                  Cash
                </Radio>
                <Radio className={style.credit} value={"Credit Card"}>
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
