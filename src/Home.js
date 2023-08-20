import {Link} from "react-router-dom";

function Home() {
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
      <div className="container container-fluid">
        <h1>Fishbowls</h1>
        <div className="list-group list-group-flush">
          {fishbowls.map((f) => (
            <Link className="list-group-item list-group-item-action" key={f.id} to={`/fishbowl/${f.id}`}>{f.name}</Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
