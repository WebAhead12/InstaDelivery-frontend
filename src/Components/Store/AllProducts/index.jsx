import Item from "../Item";
import style from "./style.module.css";

function AllProducts(props) {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <p id={props.id}>{props.title}</p>
      </div>

      <div className={style.items}>
        {props.data.map((item, idx) => {
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

export default AllProducts;
