import React, { useState } from "react";
import ContainerCSS from "./Container.module.css";

function Container() {
  const [todoIsActive, setTodoIsActive] = useState(true);

  function setStateToFalse() {
    setTodoIsActive(false);
  }

  function setStateToTrue() {
    setTodoIsActive(true);
  }

  return (
    <div>
      <header>
        <h2
          onClick={setStateToFalse}
          className={`${ContainerCSS.notif} ${
            todoIsActive ? ContainerCSS.inactiveBar : ContainerCSS.activeBar
          }`}
        >
          Notifications
        </h2>
        <h2
          onClick={setStateToTrue}
          className={`${ContainerCSS.todo} ${
            todoIsActive ? ContainerCSS.activeBar : ContainerCSS.inactiveBar
          }`}
        >
          Todo
        </h2>
      </header>
      <div className={`${ContainerCSS.emptyContainer}`}>
        <h2>Add a task to display here</h2>
      </div>
    </div>
  );
}

export default Container;
