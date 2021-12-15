import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Dairy from "./Components/Store/Dairy";
// import Item from "./Components/Item";

function App() {
  return (
    <div className="App">
      <NavBar buttonValue="Logout" text="Welcome, Nur!" count="5" />
      <Dairy />
      {/* <Item imgUrl="/store/dairy/milk.jpg" name="Milk" price="10" /> */}
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
