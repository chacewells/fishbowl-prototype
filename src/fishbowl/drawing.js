import {useParams} from "react-router-dom";

export default function Drawing() {
  const prizeAndWinners = [
    {
      prizeLabel: "Prize 1",
      prizeWinner: "Sundar Pichai"
    },
    {
      prizeLabel: "Prize 2",
      prizeWinner: "Elon Musk"
    }
  ];

  let {fishbowlId} = useParams();
  return (
    <>
      <h1>Fishbowl {fishbowlId} Drawing</h1>
      {prizeAndWinners.map((prize) => (
        <div className="card" style={{marginBottom: "0.5em"}}>
          <div className="card-header">
            <div className="card-title">
              {prize.prizeLabel}
              <button className="btn btn-primary float-end">Draw</button>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Winner</h5>
            <p className="card-text">{prize.prizeWinner}</p>
          </div>
        </div>
      ))}
    </>
  )
}