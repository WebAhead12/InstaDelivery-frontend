// import style from "./style.module.css";
import NavBar from "../NavBar";
import Dairy from "../Store/Dairy";

function Home(props) {
  return (
    <div className="home">
      <NavBar buttonValue="Logout" text="Welcome, Nur!" count="5" />

      <h1>Mario was here</h1>

      <Dairy />
    </div>
  );
}

export default Home;
