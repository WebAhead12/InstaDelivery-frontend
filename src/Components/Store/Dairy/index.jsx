import Item from "../Item";
import dairyItems from "../../../Products/dairyItems";
import style from "./style.module.css";

function Dairy() {
  return (
    <div className={style.dairy}>
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
  );
}

export default Dairy;
