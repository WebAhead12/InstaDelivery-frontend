import Item from "../Item";
import dairyItems from "../../../Products/dairyItems";
import style from "./style.module.css";

function Dairy(props) {
  return (
    <div className={style.dairy}>
      <div className={style.titleDairy}>
        <div className={style.dairyTarget}>
          <span className="anchorDairy" id="scrollDairy"></span>
        </div>
        <p id="dairy">Dairy</p>
      </div>

      <div className={style.items}>
        {dairyItems.map((item, idx) => {
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

export default Dairy;
