import { useState, useEffect } from "react";
import { getProducts } from "../../utils/api";
import Item from "./Item";
import style from "./style.module.css";

//must have the same order of categories array(imported from Categories component).

function Store(props) {
  //store is array of objects, each object contain: category name(as string), products(array of products).
  const [store, setStore] = useState([]);

  useEffect(() => {
    //fetch all the products according to the categories and set it in the store
    getProducts()
      .then((res) => setStore(res.store))
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={style.store}>
      {store.map((section, idx) => {
        return (
          <div key={idx} className={style.category}>
            <p id={section.category.toLowerCase()}>
              <span className={style.lineThrough}>{section.category}</span>
            </p>
            <div className={style.items}>
              {section.products.map((item, idx) => {
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
