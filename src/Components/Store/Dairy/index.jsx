import Item from "../Item";
import dairyItems from "../../../Products/dairyItems";
import style from "./style.module.css";

function Dairy(props) {
  return (
    <div className={style.dairy}>
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
  );
}

export default Dairy;
