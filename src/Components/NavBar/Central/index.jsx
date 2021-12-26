import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
function Central(props) {
  const goTo = useNavigate();
  return (
    <div className={style.central}>
      <img
        src="/Logo.png"
        alt="App Icon"
        onClick={() => goTo(props.linkMe)}
      ></img>
      <div className={style.description}>{props.description}</div>
    </div>
  );
}

export default Central;
