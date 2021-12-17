import style from "./style.module.css";

function Search() {
  return (
    <div className={style.search}>
      <br />
      <input
        className={style.searchInput}
        placeholder="Search for a product..."
      ></input>
      <button className={style.searchBtn}>Search</button>
    </div>
  );
}

export default Search;
