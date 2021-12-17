import style from "./style.module.css";

function Central() {
  return (
    <div className={style.central}>
      <img src="/Logo.png" alt="App Icon"></img>
      <div className={style.intro}>
        Have everything you need within 1-2 hours!
      </div>
    </div>
  );
}

export default Central;
