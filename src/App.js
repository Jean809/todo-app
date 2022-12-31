import Card from "./components/Card";
import Container from "./components/Container";
import AddCard from "./components/Addcard";

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
    </div>
  );
}

export default App;
