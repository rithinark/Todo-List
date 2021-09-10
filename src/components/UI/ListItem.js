import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <div
      className={`${classes.ListItem_Wrapper} ${
        props.checked ? classes.completed : ""
      }`}
    >
      <label
        className={`${classes.Input_Check} ${
          props.checked ? classes.active : ""
        }`}
      >
        <input type="checkbox" onClick={props.onClick}></input>
      </label>
      <button
        className={classes.cross}
        onClick={(e) => props.onRemove(props.id)}
      ></button>
      {props.todo}
    </div>
  );
};

export default ListItem;
