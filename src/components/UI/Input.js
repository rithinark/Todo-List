import classes from "./Input.module.css";
import { useRef, useState } from "react";

const Input = (props) => {
  const todo = useRef("");
  const [checked, setChecked] = useState(false);
  const valueHandler = (e) => {
    e.preventDefault();
    if (todo.current.value.trim().length !== 0) {
      const item = {
        id: todo.current.value[0] + (Math.random() * 5).toFixed(3),
        todo: todo.current.value,
        checked: checked,
      };
      props.onEnter(item);
    }
  };
  const handleChecked = (e) => setChecked(e.target.checked);

  return (
    <form className={classes.Input_Wrapper} onSubmit={valueHandler}>
      <label
        className={` ${classes.Input_Check} ${checked ? classes.active : ""}`}
      >
        <input type="checkbox" onClick={handleChecked}></input>
      </label>
      <input ref={todo} type="text" />
    </form>
  );
};
export default Input;
