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

    setNextId(1+nextId);
  }

  return (
    <>
      <h1>Fishbowl {fishbowlId} Prizes</h1>
      <ul>
        {prizes.map((p) => <li key={p.id}>{p.name}</li>)}
      </ul>
      <input type="text" ref={prizeInputRef}/> <button onClick={handleAdd}>+ Add</button>
    </>
  )
}