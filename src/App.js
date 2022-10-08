import "./App.css";
import AssignmentMark from "./components/AssignmentMark/AssignmentMark";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <AssignmentMark></AssignmentMark>
    </div>
  );
}

export default App;
