// import style from "./style.module.css";
import style from "./style.css";
import { Button } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { AutoComplete } from "antd";
const options = [
  {
    id: "101",
    label: "1% Milk",
    price: "10.90",
  },
  {
    id: "102",
    label: "3% Milk",
    price: "10.90",
  },
  {
    id: "103",
    label: "Large Yogurt",
    price: "25.90",
  },
  {
    id: "104",
    label: "Eggs",
    price: "29.90",
  },

  {
    id: "105",
    label: "Oat Milk",
    price: "11.90",
  },
  {
    id: "106",
    label: "Almond Milk",
    price: "11.90",
  },
  {
    id: "107",
    label: "Hazelnut Milk",
    price: "11.90",
  },
  {
    id: "108",
    label: "Cashew Milk",
    price: "11.90",
  },
  {
    id: "109",
    label: "Soy Milk",
    price: "11.90",
  },
  {
    id: "1010",
    label: "Coconut Milk",
    price: "11.90",
  },
  {
    id: "1011",
    label: "Choc. Soy Milk",
    price: "11.90",
  },
  {
    id: "1012",
    label: "Van. Soy Milk",
    price: "11.90",
  },
  {
    id: "1013",
    label: "Yellow Cheese",
    price: ".90",
  },
  {
    id: "1014",
    label: "Mozzerella",
    price: "19.90",
  },
  {
    id: "1015",
    label: "Cheddar",
    price: "23.90",
  },

  {
    id: "201",
    label: "Bagels 1c.",
    price: "1.90",
  },
  {
    id: "202",
    label: "Baguettes 2c.",
    price: "2.90",
  },
  {
    id: "203",
    label: "Gluten-free loaf",
    price: "12.90",
  },
  {
    id: "204",
    label: "Half-baguette 7c.",
    price: "4.90",
  },
  {
    id: "205",
    label: "Burger Buns 4c.",
    price: "9.90",
  },
  {
    id: "206",
    label: "Wheat Loaf",
    price: "10.90",
  },
  {
    id: "207",
    label: "White Loaf",
    price: "10.90",
  },
  {
    id: "208",
    label: "Croissant 1c.",
    price: "1.90",
  },
  {
    id: "209",
    label: "Choc. Croissant",
    price: "1.90",
  },
];

function Search() {
  return (
    <div className="search">
      <AutoComplete
        className="searchInput"
        options={options}
        placeholder="Search product here..."
        filterOption={(inputValue, options) =>
          options.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />

      <Button
        style={{
          background: "#b1dda9",
          color: "black",
          borderColor: "black",
          borderRadius: "8px",
        }}
      >
        Search
      </Button>
    </div>
  );
}

export default Search;
