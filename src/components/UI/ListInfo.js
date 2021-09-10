import { Fragment } from "react";
import classes from "./ListInfo.module.css";

const Input = (props) => {
  return (
    <Fragment>
      <input
        className={classes.Option}
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.id}
        defaultChecked={props.checked}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </Fragment>
  );
};
const ListInfo = (props) => {
  return (
    <div className={classes.List_Info_Wrapper}>
      <div className={classes.items}>{props.count} items left</div>
      <div className={classes.Options} onChange={(e) => props.onClick(e)}>
        <Input
          id="all"
          type="radio"
          name="option"
          label="All"
          checked={props.checked === "all"}
        />
        <Input
          id="active"
          type="radio"
          name="option"
          label="Active"
          checked={props.checked === "active"}
        />
        <Input
          id="completed"
          type="radio"
          name="option"
          label="Completed"
          checked={props.checked === "completed"}
        />
      </div>
      <button className={classes.Button} onClick={props.onRemove}>
        Clear Completed
      </button>
    </div>
  );
};

export default ListInfo;
