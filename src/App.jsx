import { Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="lobby" element={<Lobby />} />
        </Routes>
      </div>
    );
  }
}
export default App;
