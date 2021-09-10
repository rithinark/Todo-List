import ListItem from "../UI/ListItem";
import ListInfo from "../UI/ListInfo";
import { useState } from "react";

const Card = {
  margin: "1.5rem 0",
  padding: ".2rem",
  background: "var(--card-bg)",
  borderRadius: ".3rem",
  boxShadow: "0px 20px 80px -10px var(--shadow)",
};

const List = (props) => {
  const [check, setCheck] = useState("all");
  const listOptionHandler = (e) => {
    setCheck(e.target.value);
  };
  const todoLists = props.todos.filter((list) => {
    if (check === "active") return !list.checked;
    else if (check === "completed") return list.checked;
    return true;
  });

  return (
    <div className="Card" style={Card}>
      {todoLists.map((TODO) => (
        <ListItem
          key={TODO.id}
          id={TODO.id}
          todo={TODO.todo}
          checked={TODO.checked}
          onClick={() => props.onCheck(TODO.id)}
          onRemove={props.onRemove}
        />
      ))}
      <ListInfo
        count={props.count}
        onClick={listOptionHandler}
        onRemove={props.onRemoveCompleted}
        checked={check}
      />
    </div>
  );
};
export default List;
