import style from "./style.module.css";
import { Button } from "antd";

function Item(props) {
  return (
    <div className={style.item}>
      <div className={style.itemImg}>
        <img src={props.imgUrl} alt={props.name}></img>
      </div>
      <div className={style.name}> {props.name}</div>
      <div className={style.price}>{props.price}₪</div>
      <div className={style.addBtn}>
        <Button
          type="primary"
          size="small"
          onClick={(e) => {
            props.clickAdd("increase");
            props.updateItem({
              id: props.id,
              imgUrl: props.imgUrl,
              name: props.name,
              price: props.price,
              isSearched: false,
            });
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
export default Item;
