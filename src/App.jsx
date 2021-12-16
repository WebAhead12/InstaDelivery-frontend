import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { useLocation } from "react-router-dom";
import Lobby from "./Components/Lobby";
import ViewCart from "./Components/Cart";
function App() {
  const location = useLocation();
  if (location.pathname === "/lobby") {
    return <Lobby />;
  } else {
    return (
      <div className="App">
<<<<<<< Updated upstream
=======
        <NavBar buttonValue="Logout" text="Welcome, Nur!" count="5" />
        <ViewCart />
        <h1>Welcome to React App</h1>

        <Dairy />

>>>>>>> Stashed changes
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="lobby" element={<Lobby />} />
        </Routes>
      </div>
    );
  }
}
export default App;
