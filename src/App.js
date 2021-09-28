import "./App.css";
import { Foo } from "./components/foo";

const animals = {
  "a1" : "fox",
  "a2" : "dog"
}
function App() {
  return (
    <div className="App">
      <Foo animals={animals}/>
    </div>
  );
}

export default App;
