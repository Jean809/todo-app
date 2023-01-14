import React, { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import AddCard from "./components/Addcard";
import EmptyContainer from "./components/EmptyContainer";

function App() {
  const [addTaskClicked, setAddTaskClicked] = useState(false);

  function handleAddTask() {
    setAddTaskClicked(true);
  }

  const subject = "Complete Main UI Components";
  const description =
    "Would be good if we include every component in designing system";

  return (
    <div>
      <Container />
      <div>
        <Card subject={subject} description={description} />
      </div>
      <div>
        <AddCard />
      </div>
      <div>
        <EmptyContainer />
      </div>
    </div>
  );
}

export default App;
