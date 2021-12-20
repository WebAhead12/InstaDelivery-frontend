import style from "./style.module.css";

function CreditCard(props) {
  return (
    <div className={style.creditCard}>
      <br />
      <div className={style.cardNumber}>
        <label htmlFor="cardNumber" className={style.cardNumber}>
          Card Number
        </label>

        <input
          id="cardNumber"
          type="number"
          className={style.cardNumberInput}
          onChange={props.onChange("cardNumber")}
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
          onChange={props.onChange("expiration")}
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
          onChange={props.onChange("securityCode")}
          required
        />
      </div>
      <br />
    </div>
  );
}

export default CreditCard;
