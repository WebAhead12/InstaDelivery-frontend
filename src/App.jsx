import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar buttonValue="Logout" text="Welcome User" count="1" />

      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
