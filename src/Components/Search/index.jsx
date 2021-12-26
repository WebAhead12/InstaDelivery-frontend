import "./style.css";
import Complete from "./Complete";

function Search(props) {
  return (
    <div className="search">
      <Complete
        updateItem={props.updateItem}
        toggleTheSearchState={props.doSearch}
        products={props.allProducts}
      ></Complete>
    </div>
  );
}

export default Search;
