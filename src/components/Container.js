import React, { useState } from "react";
import ContainerCSS from "./Container.module.css";

function Container() {
  const [containerIsEmpty, setContainerIsEmpty] = useState(true);

  return (
    <div>
      <header>
        <h2 className={`${ContainerCSS.notif}`}>Notifications</h2>
        <h2 className={`${ContainerCSS.todo}`}>Todo</h2>
      </header>
      <div className={`${ContainerCSS.emptyContainer}`}>
        <h2 className={`${containerIsEmpty}`}>Add a task to display here</h2>
      </div>
    </div>
  );
}

export default Container;
