import Item from "../Item";
import dairyItems from "../../../Products/dairyItems";
import style from "./style.module.css";

function Dairy() {
  return (
    <div className={style.dairy}>
      {dairyItems.map((item, idx) => {
        return (
          <div className="productDetails">
            <Item
              key={idx}
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Dairy;
