import Item from "../Item";
import beverageItems from "../../../Products/beverageItems";
import style from "./style.module.css";

function Beverage(props) {
  return (
    <div className={style.beverage}>
      <div className={style.titlebeverage}>
        <p id="beverage">Beverage Products</p>
      </div>

      <div className={style.items}>
        {beverageItems.map((item, idx) => {
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

export default Beverage;
