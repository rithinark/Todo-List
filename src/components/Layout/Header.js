import classes from "./Header.module.css";

import Input from "../UI/Input";
import React, { useState } from "react";
import List from "./List";

const Header = (props) => {
  const TODOS = [];

  const [todos, setTodos] = useState(TODOS);

  const checkHandler = (id) => {
    const newList = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });
    setTodos(newList);
  };

  const addTodoHandler = (todo) => {
    setTodos((prevList) => [...prevList, todo]);
  };

  const removeTodoHandler = (id) => {
    setTodos((prevList) => prevList.filter((list) => list.id !== id));
  };
  const removeCompletedHandler = () =>
    setTodos((prevList) => prevList.filter((list) => !list.checked));

  return (
    <div className={classes.Header} style={{ backgroundImage: "var(--BG)" }}>
      <div className={classes.Card}>
        <div className={classes.Header_title}>
          <div>TODO</div>
          <button
            className={classes.icon}
            value={props.value}
            onClick={props.modeHandler}
          ></button>
        </div>
        <Input onEnter={addTodoHandler} />
        <List
          todos={todos}
          onCheck={checkHandler}
          count={todos.filter((todo) => !todo.checked).length}
          onRemove={removeTodoHandler}
          onRemoveCompleted={removeCompletedHandler}
        />
      </div>
    </div>
  );
};

export default Header;
