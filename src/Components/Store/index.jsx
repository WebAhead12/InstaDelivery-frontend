import { categories } from "./Categories";
import Item from "./Item";
import style from "./style.module.css";
import bakery from "../../Products/bakery";
import dairy from "../../Products/dairy";
import freezer from "../../Products/freezer";
import meat from "../../Products/meat";
import pantry from "../../Products/pantry";
import beverage from "../../Products/beverages";

//must have the same order of categories array(imported from Categories component).
const allProducts = [dairy, bakery, pantry, meat, freezer, beverage];

function Store(props) {
  return (
    <div className={style.store}>
      {categories.map((category, idx) => {
        return (
          <div key={idx} className={style.category}>
            <p id={category.toLowerCase()}>{category}</p>

            <div className={style.items}>
              {allProducts[idx].map((item, idx) => {
                return (
                  <Item
                    key={idx}
                    id={item.id}
                    imgurl={item.imgurl}
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
      })}
    </div>
  );
}

export default Store;
