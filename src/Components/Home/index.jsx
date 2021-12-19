// import style from "./style.module.css";
import NavBar from "../NavBar";
import Categories from "../Store/Categories";
import Dairy from "../Store/Dairy";
import Bakery from "../Store/Bakery";
import Search from "../Search";
import { useState } from "react";
import style from "./style.module.css";
import Meat from "../Store/Meat";
import Pantry from "../Store/Pantry";
import Freezer from "../Store/Freezer";
import Beverage from "../Store/Beverage";

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
        <Search />
      </div>
      <div className={style.products}>
        <Dairy clickAdd={itemsCounter} updateItem={updateItem} />
        <Bakery clickAdd={itemsCounter} updateItem={updateItem} />
        <Meat clickAdd={itemsCounter} updateItem={updateItem} />
        <Pantry clickAdd={itemsCounter} updateItem={updateItem} />
        <Freezer clickAdd={itemsCounter} updateItem={updateItem} />
        <Beverage clickAdd={itemsCounter} updateItem={updateItem} />
      </div>
    </div>
  );
}

export default Home;
