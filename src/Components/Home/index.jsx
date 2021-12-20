// import style from "./style.module.css";
import NavBar from "../NavBar";
import Categories from "../Store/Categories";
import AllProducts from "../Store/AllProducts";
import Search from "../Search";
import { useState } from "react";
import style from "./style.module.css";
import Item from "../Store/Item";
import bakeryItems from "../../Products/bakeryItems";
import dairyItems from "../../Products/dairyItems";
import freezerItems from "../../Products/freezerItems";
import meatItems from "../../Products/meatItems";
import pantryItems from "../../Products/pantryItems";
import beverageItems from "../../Products/beverageItems";

function Home() {
  //number of item added to cart
  const [badgeCount, setBadgeCount] = useState(0);
  //the last clicked item
  const [item, setItem] = useState({
    id: "",
    imgUrl: "",
    name: "",
    price: "",
  });
  //toggled when a search occurs.
  const [searchInAction, setSearchInAction] = useState(false);
  //pass the function to Item inorder to update state when item added
  const itemsCounter = (op = "increase", leap = 0) => {
    if (op === "decrease") {
      if (leap) {
        setBadgeCount(badgeCount - leap);
      } else {
        setBadgeCount(badgeCount - 1);
      }
    } else {
      setBadgeCount(badgeCount + 1);
    }
  };
  //pass the function to Item inorder to update state when item added
  const updateItem = (itemObj) => {
    setItem({ ...itemObj });
  };
  //pass the function to Search inorder to update state when item searched
  const toggleSearchState = () => {
    setSearchInAction(!searchInAction);
  };
  return (
    <div className="home">
      <div className={style.header}>
        <NavBar
          buttonValue="Logout"
          count={badgeCount}
          addItemToCart={item}
          clickOnPlusMinus={itemsCounter}
        />
        <Categories />
        <Search updateItem={updateItem} doSearch={toggleSearchState} />
      </div>
      {!searchInAction ? (
        <div className={style.products}>
          <AllProducts
            clickAdd={itemsCounter}
            updateItem={updateItem}
            data={dairyItems}
            title="Dairy"
            id="dairy"
          />
          <AllProducts
            clickAdd={itemsCounter}
            updateItem={updateItem}
            data={bakeryItems}
            title="Bakery"
            id="bakery"
          />
          <AllProducts
            clickAdd={itemsCounter}
            updateItem={updateItem}
            data={meatItems}
            title="Meat Products"
            id="meat"
          />
          <AllProducts
            clickAdd={itemsCounter}
            updateItem={updateItem}
            data={pantryItems}
            title="Pantry"
            id="pantry"
          />
          <AllProducts
            clickAdd={itemsCounter}
            updateItem={updateItem}
            data={freezerItems}
            title="Freezer"
            id="freezer"
          />
          <AllProducts
            clickAdd={itemsCounter}
            updateItem={updateItem}
            data={beverageItems}
            title="Beverages"
            id="beverage"
          />
        </div>
      ) : (
        <Item
          id={item.id}
          imgUrl={item.imgUrl}
          name={item.name}
          price={item.price}
          clickAdd={itemsCounter}
          // updateItem mostly isn't needed becuase Search do the jop.
          updateItem={updateItem}
        />
      )}
    </div>
  );
}

export default Home;
