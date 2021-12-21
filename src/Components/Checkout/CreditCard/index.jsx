import style from "./style.module.css";

function CreditCard(props) {
  return (
    <div className={style.creditCard}>
      <div className={style.cardNumber}>
        <label htmlFor="cardNumber" className={style.cardNumberLabel}>
          Card Number
        </label>

        <input
          id="cardNumber"
          type="number"
          placeholder=" Enter credit card number here..."
          className={style.cardNumberInput}
          onChange={props.onChange("cardNumber")}
          required
        />
      </div>
      <br />

      <div className="smallInput">
        <div className={style.expiration}>
          <label htmlFor="expiration" className={style.expirationLabel}>
            Expiration
          </label>

          <input
            id="expiration"
            type="number"
            placeholder=" MM/YY"
            className={style.expirationInput}
            onChange={props.onChange("expiration")}
            required
          />
        </div>

        <br />
        <div className={style.securityCode}>
          <label htmlFor="securityCode" className={style.securityCodeLabel}>
            Security Code
          </label>

          <input
            id="securityCode"
            type="number"
            placeholder="  ***"
            className={style.securityCodeInput}
            onChange={props.onChange("securityCode")}
            required
          />
        </div>
      </div>
      <br />
    </div>
  );
}

export default CreditCard;
