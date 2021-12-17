import Item from "../Item";
import dairyItems from "../../../Products/dairyItems";
import style from "./style.module.css";

function Dairy() {
  return (
    <div className={style.dairy}>
      <div className={style.titleDairy}>
        <p id="dairy">Dairy</p>
      </div>

      <div className={style.items}>
        {dairyItems.map((item, idx) => {
          return (
            <Item
              key={idx}
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dairy;
