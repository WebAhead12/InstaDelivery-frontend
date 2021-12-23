import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { category } from "../../../utils/api";

//add catch
function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    category()
      .then((res) => {
        setCategories(res.categories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className={style.categoryWrapper}>
      <div className={style.categoryBar}>
        {categories.map((storeCategory, idx) => {
          return (
            <a key={idx} href={"#" + storeCategory.name.toLowerCase()}>
              {storeCategory.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
