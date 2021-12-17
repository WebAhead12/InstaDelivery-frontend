import style from "./style.module.css";
import { Button } from "antd";
function Search() {
  return (
    <div className={style.search}>
      <input
        className={style.searchInput}
        placeholder="Search for a product..."
      ></input>
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
