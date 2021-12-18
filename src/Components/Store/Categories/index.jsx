import React from "react";
import style from "./style.module.css";

function Categories() {
  return (
    <div className={style.categoryWrapper}>
      <div className={style.categoryBar}>
        <a href="#dairy">Dairy</a>
        <a href="#bakery">Bakery</a>
        <a href="#pantry">Pantry</a>
        <a href="#meat">Meat</a>
        <a href="#frozenFoods">Freezer</a>
        <a href="#beverages">Beverages</a>
        <a href="#household">Household</a>
      </div>
    </div>
  );
}

export default Categories;
