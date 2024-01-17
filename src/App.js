import { Outlet } from "react-router-dom";
import "./App.css";
import { Container, HomePage } from "./components/Exports/exports";

function App() {
  return (
    <Container className="App">
      {/* <Outlet /> */}
      <HomePage />
    </Container>
  );
}

export default App;
