import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Dairy from "./Components/Store/Dairy";
import { useLocation } from "react-router-dom";
import Lobby from "./Components/Lobby";

function App() {
  const location = useLocation();
  if (location.pathname === "/lobby") {
    return <Lobby />;
  } else {
    return (
      <div className="App">
        <NavBar buttonValue="Logout" text="Welcome, Nur!" count="5" />
        <h1>Welcome to React App</h1>

        <Dairy />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="lobby" element={<Lobby />} />
        </Routes>
      </div>
    );
  }
}
export default App;
