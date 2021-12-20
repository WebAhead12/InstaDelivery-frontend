import React from "react";
import style from "./style.module.css";

export const categories = [
  "Dairy",
  "Bakery",
  "Pantry",
  "Meat",
  "Freezer",
  "Beverages",
  // "Household",
];

function Categories() {
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

export default Categories;
