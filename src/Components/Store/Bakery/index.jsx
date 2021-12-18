import Item from "../Item";
import bakeryItems from "../../../Products/bakeryItems";
import style from "./style.module.css";

function Bakery(props) {
  return (
    <div className={style.bakery}>
      <div className={style.titlebakery}>
        <p id="bakery">Bakery</p>
      </div>

      <div className={style.items}>
        {bakeryItems.map((item, idx) => {
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

export default Bakery;
