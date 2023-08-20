import {useParams} from "react-router-dom";
import {useRef, useState} from "react";

const initialPrizes = [
  {
    id: 1,
    name: "A brand new car!"
  },
  {
    id: 2,
    name: "This leftover pizza"
  },
];

export default function PrizesPage() {
  const {fishbowlId} = useParams();
  const [nextId, setNextId] = useState(3);
  const [prizes, setPrizes] = useState(initialPrizes);
  const prizeInputRef = useRef();

  function handleAdd() {
    const newPrize = {
      id: nextId,
      name: prizeInputRef.current.value,
    };
    prizeInputRef.current.value = "";
    setPrizes([...prizes, newPrize]);

    setNextId(1 + nextId);
  }

  return (
    <>
      <h1>Fishbowl {fishbowlId} Prizes</h1>
      <div className="list-group list-group-flush">
        {prizes.map((p) => <div key={p.id} className="list-group-item">{p.name}</div>)}
        <div className="list-group-item">
          <div className="input-group mb-3">
            <input ref={prizeInputRef} type="text" className="form-control" placeholder="Prize Name"
                   aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <button onClick={handleAdd} className="btn btn-primary input-group-text" id="basic-addon2">+ Add</button>
          </div>
        </div>
      </div>
    </>
)
}