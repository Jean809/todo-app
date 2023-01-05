import React, { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import AddCard from "./components/Addcard";
import EmptyContainer from "./components/EmptyContainer";

function App() {
  return (
    <div>
      <Container />
      <div>
        <Card />
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
