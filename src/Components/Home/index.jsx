// import style from "./style.module.css";
import NavBar from "../NavBar";
import Categories from "../Store/Categories";
import Dairy from "../Store/Dairy";
import Search from "../Search";
import { useState } from "react";

function Home() {
  //number of item added to cart
  const [badgeCount, setBadeCount] = useState(0);
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
        setBadeCount(badgeCount - leap);
      } else {
        setBadeCount(badgeCount - 1);
      }
    } else {
      setBadeCount(badgeCount + 1);
    }
  };

  const updateItem = (itemObj) => {
    setItem({ ...itemObj });
  };
  return (
    <div className="home">
      <NavBar
        buttonValue="Logout"
        count={badgeCount}
        addItemToCart={item}
        clickOnPlusMinus={itemsCounter}
      />
      <Categories />
      <Search />

      <Dairy clickAdd={itemsCounter} updateItem={updateItem} />
    </div>
  );
}

export default Home;
