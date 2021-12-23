import style from "./style.module.css";

function Central(props) {
  return (
    <div className={style.central}>
      <img src="/Logo.png" alt="App Icon"></img>
      <div className={style.description}>{props.description}</div>
    </div>
  );
}

export default Central;
