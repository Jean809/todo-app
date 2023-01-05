import EmptyContainerCSS from "./EmptyContainer.module.css";

function EmptyContainer() {
  return (
    <div className={`${EmptyContainerCSS.emptyContainer}`}>
      <h2>Add a task to display here</h2>
    </div>
  );
}

export default EmptyContainer;
