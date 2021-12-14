import { Button } from "antd";
import { LogoutOutlined, HomeOutlined } from "@ant-design/icons";

function NavBarButton(props) {
  return (
    <Button
      type="primary"
      shape="round"
      style={{ background: "black", borderColor: "#ffdc60", color: "#ffdc60" }}
    >
      {props.value === "Logout" ? <LogoutOutlined /> : <HomeOutlined />}
      {props.value}
    </Button>
  );
}

export default NavBarButton;
