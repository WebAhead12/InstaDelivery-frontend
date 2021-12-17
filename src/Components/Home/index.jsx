// import style from "./style.module.css";
import NavBar from "../NavBar";
import Categories from "../Store/Categories";
import Dairy from "../Store/Dairy";

function Home(props) {
  return (
    <div className="home">
      <NavBar buttonValue="Logout" text="Welcome, Nur!" count="5" />
      <Categories />

      <Dairy />
    </div>
  );
}

export default Home;
