import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { Button, Badge } from "antd";
import { ShoppingCartOutlined, LogoutOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <Button
          type="primary"
          style={{ background: "black", borderColor: "#ccc" }}
        >
          <LogoutOutlined />
          Logout
        </Button>
        <div className="greetUser">Welcome User</div>
        <div className="cartIcon">
          <Badge size="small" count={1}>
            <div className="cart">
              {/* <ShoppingCartOutlined style={{ fontSize: "24px" }} /> */}
              <img
                src="/icons/shopping-cart.png"
                width="24px"
                height="24px"
                alt="shopping cart"
              />
            </div>
          </Badge>
        </div>
      </div>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
