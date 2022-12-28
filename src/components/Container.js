import ContainerCSS from "./Container.module.css";

function Container() {
  return (
    <header>
      <h2 className={ContainerCSS.notif}>Notifications</h2>
      <h2 className={ContainerCSS.todo}>Todo</h2>
    </header>
  );
}

export default Container;
