import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
