import style from "./style.module.css";

function Central(props) {
  return <div className={style.greetUser}> {props.text} </div>;
}

export default Central;
