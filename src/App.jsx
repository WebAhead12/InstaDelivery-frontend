import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Dairy from "./Components/Store/Dairy";
// import Item from "./Components/Item";
import LoginPage from "./Components/Login";
import RegisterPage from "./Components/Lobby/Register";
import { useLocation } from "react-router-dom";
// import Lobby from ".Components/Lobby";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <div className="lobby">
        <Routes>
          <Route exact path="register" element={<RegisterPage />} />
          <Route exact path="login" element={<LoginPage />} />
        </Routes>
      </div>
      <Dairy />

      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <NavBar buttonValue="Logout" text="Welcome, Nur!" count="5" />
      )}
      <h1>Categories</h1>
      <Routes>
        {/* <Route path="lobby" element={<Lobby />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
