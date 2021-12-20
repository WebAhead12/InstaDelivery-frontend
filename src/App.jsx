import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { useLocation } from "react-router-dom";
import Lobby from "./Components/Lobby";
import Checkout from "./Components/Checkout";

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
        </Routes>
      </div>
    );
  }
}
export default App;
