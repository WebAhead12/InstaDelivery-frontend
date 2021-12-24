import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Lobby from "./Components/Lobby";
import Checkout from "./Components/Checkout";
import Confirmation from "./Components/Confirmation";
import Admin from "./Components/Admin";

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
          <Route path="checkout" element={<Checkout />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </div>
    );
  }
}
export default App;
