import AddCardCSS from "./AddCard.module.css";

function AddCard() {
  return (
    <div className={`${AddCardCSS.container}`}>
      <div className={`${AddCardCSS.taskTitle}`}>
        <textarea cols="15" rows="2" placeholder="Task name here..."></textarea>
      </div>
      <div className={`${AddCardCSS.taskDescr}`}>
        <textarea cols="95" rows="4" placeholder="Description"></textarea>
      </div>
      <div className={`${AddCardCSS.date}`}>
        <label>Due Date:</label>
        <input type="date"></input>
      </div>
      <div className={`${AddCardCSS.btn}`}>
        <button className={`${AddCardCSS.cancelTask}`} type="button">
          Cancel
        </button>
        <button className={`${AddCardCSS.addTask}`} type="button">
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddCard;
