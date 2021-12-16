import { Button } from "antd";
import {
  LogoutOutlined,
  HomeOutlined,
  LoginOutlined,
  FormOutlined,
  ExclamationOutlined,
} from "@ant-design/icons";

//icon will be imbed as a button value.
const icon = (value) => {
  switch (value) {
    case "Home":
      return <HomeOutlined />;
    case "Login":
      return <LoginOutlined />;
    case "Register":
      return <FormOutlined />;
    default:
      return "";
  }
};

function ShopButton(props) {
  return (
    <Button
      onClick={props.onClick}
      type={props.type}
      shape={props.shape}
      style={{
        background: props.background,
        borderColor: props.borderColor,
        color: props.color,
      }}
    >
      {icon(props.value)}
      {props.value}
    </Button>
  );
}

export default ShopButton;
