import React, { useEffect} from "react";

import style from "./style.module.css";
import { category } from "../../../utils/api";

export const categories = [
  "Dairy",
  "Bakery",
  "Pantry",
  "Meat",
  "Freezer",
  "Beverages",
  // "Household",
];

function Category() {
  useEffect(()=> {
    category()
    .then(res=> {
      console.log(res)
    }) 
  }, [])
  return (
    <div className={style.categoryWrapper}>
      <div className={style.categoryBar}>
        {categories.map((category, idx) => {
          return (
            <a key={idx} href={"#" + category.toLowerCase()}>
              {category}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
