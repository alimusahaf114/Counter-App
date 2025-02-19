import { useState } from "react";
import style from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  function Counting(event) {
    if (event.target.innerText == "Positive Count") {
      const newCount = count + 1;
      setCount(newCount);
    } else {
      const newCount = count - 1;
      setCount(newCount);
    }
  }
  return (
    <div>
      <div className={style.box}>
        <h1>Count: {count}</h1>
      </div>
      <button onClick={Counting} className={style.button}>
        {" "}
        Positive Count{" "}
      </button>
      <button onClick={Counting} className={style.button}>
        {" "}
        Negative Count{" "}
      </button>
    </div>
  );
}
