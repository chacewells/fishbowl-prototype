import './App.css';
import {Link} from "react-router-dom";

function App() {
  const fishbowls = [
    {
      id: "f1",
      name: "Fishbowl 1"
    },
    {
      id: "f2",
      name: "Fishbowl 2"
    },
    {
      id: "f3",
      name: "Fishbowl 3"
    }
  ];

  return (
    <>
      <h1>Fishbowls</h1>
      <ul>
        {fishbowls.map((f) => (
          <li key={f.id}>
            <Link to={`/fishbowl/${f.id}`}>{f.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
