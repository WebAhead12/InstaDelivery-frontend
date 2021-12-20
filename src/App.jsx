import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { useLocation } from "react-router-dom";
import Lobby from "./Components/Lobby";
import Checkout from "./Components/Checkout";
import Confirmation from "./Components/Confirmation";
function App() {
  const location = useLocation();
  if (location.pathname === "/lobby") {
    return <Lobby />;
  } else {
    return (
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="lobby" element={<Lobby />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    );
  }
}
export default App;
