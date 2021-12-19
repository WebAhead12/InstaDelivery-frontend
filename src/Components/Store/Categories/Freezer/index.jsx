import Item from "../../Item";
import freezerItems from "../../../../Products/freezerItems";
import style from "./style.module.css";

function Freezer(props) {
  return (
    <div className={style.freezer}>
      <div className={style.titlefreezer}>
        <p id="freezer">freezer Products</p>
      </div>

      <div className={style.items}>
        {freezerItems.map((item, idx) => {
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

export default Freezer;
