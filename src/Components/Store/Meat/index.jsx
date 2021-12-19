import Item from "../Item";
import meatItems from "../../../Products/meatItems";
import style from "./style.module.css";

function Meat(props) {
  return (
    <div className={style.meat}>
      <div className={style.titlemeat}>
        <p id="meat">Meat Products</p>
      </div>

      <div className={style.items}>
        {meatItems.map((item, idx) => {
          return (
            <Item
              key={idx}
              id={item.id}
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
              clickAdd={props.clickAdd}
              updateItem={props.updateItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Meat;
