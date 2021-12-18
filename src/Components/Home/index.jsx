// import style from "./style.module.css";
import NavBar from "../NavBar";
import Categories from "../Store/Categories";
import Dairy from "../Store/Dairy";
import Bakery from "../Store/Bakery";
import Search from "../Search";
import { useState } from "react";

function Home() {
  //number of item added to cart
  const [badgeCount, setBadgeCount] = useState(0);
  //the last clicked item
  const [item, setItem] = useState({
    id: "",
    imgUrl: "",
    name: "",
    price: "",
    quantity: 0,
  });
  //pass the function to Item inorder to update state when item added
  const clickAdd = () => {
    setBadgeCount(badgeCount + 1);
  };

  const updateItem = (itemObj) => {
    setItem({ ...itemObj });
  };
  return (
    <div className="home">
      <NavBar buttonValue="Logout" count={badgeCount} addItemToCart={item} />
      <Categories />
      <Search />

      <Dairy clickAdd={clickAdd} updateItem={updateItem} />
      <Bakery />
    </div>
  );
}

export default Home;
