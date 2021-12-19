import Item from "../Item";
import pantryItems from "../../../Products/pantryItems";
import style from "./style.module.css";

function Pantry(props) {
  return (
    <div className={style.pantry}>
      <div className={style.titlepantry}>
        <p id="pantry">Pantry</p>
      </div>

      <div className={style.items}>
        {pantryItems.map((item, idx) => {
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

export default Pantry;
