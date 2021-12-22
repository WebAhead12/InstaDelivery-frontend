// import style from "./style.module.css";
import NavBar from "../NavBar";
import Categories from "../Store/Categories";
import Search from "../Search";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import Item from "../Store/Item";
import Store from "../Store";

function Home() {
  const [rightButtonNavBar, setRightButtonNavBar] = useState("Login");
  //number of item added to cart
  const [badgeCount, setBadgeCount] = useState(0);
  //toggled when a search occurs.
  const [searchInAction, setSearchInAction] = useState(false);
  //the last clicked item
  const [item, setItem] = useState({
    id: "",
    imgUrl: "",
    name: "",
    price: "",
    isSearched: false,
  });

  //check if user logged in, then set the matching NavBar button.
  useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      setRightButtonNavBar("Logout");
    } else {
      setRightButtonNavBar("Login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  console.log(3, item);
  return (
    <div className="home">
      <div className={style.header}>
        <NavBar
          buttonValue={rightButtonNavBar}
          count={badgeCount} //to Badge
          addItemToCart={item} //to Cart component
          clickOnPlusMinus={itemsCounter} //to CartItem component
        />
        <Categories />
        <Search updateItem={updateItem} doSearch={toggleSearchState} />
      </div>
      {!searchInAction ? (
        <div className={style.products}>
          <Store clickAdd={itemsCounter} updateItem={updateItem} />
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
