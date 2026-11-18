import { produce } from 'immer';
import './App.css';

const baseState = [
  {
    title: "learn typescript",
    done: true,
  },
  {
    title: "try immer",
    done: false,
  }
];

const nextState = produce(baseState, (draftState) => {
  draftState.push({ title: "Tweet about it", done: false });
  draftState[1].done = true;
});

console.log("base state", baseState);
console.log("next state", nextState);
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;