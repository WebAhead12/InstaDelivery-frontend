// import style from "./style.module.css";
import "./style.css";
import { Button } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { AutoComplete } from "antd";
import products from "../../Products/allProducts";

//find obj by name and return it;
const findProduct = (name) => {
  const result = products.filter((item) => item.name === name);
  if (result.length) {
    return result[0];
  } else {
    return -1;
  }
};

const allItems = [
  ...products.map((item) => {
    return { value: item.name };
  }),
];

const options = allItems;

const Complete = (props) => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
    onChange={(selected) => {
      props.toggleTheSearchState();
      const item = { ...findProduct(selected), isSearched: true };
      props.updateItem(item);
    }}
  />
);

function Search(props) {
  return (
    <div className="search">
      <Complete
        updateItem={props.updateItem}
        toggleTheSearchState={props.doSearch}
      ></Complete>

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
