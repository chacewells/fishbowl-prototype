import {useParams} from "react-router-dom";

export default function Drawing() {
  let {fishbowlId} = useParams();
  return (
    <>
      <h1>Fishbowl {fishbowlId} Drawing</h1>
      <ul>
        <li>
          Prize 1: <button>Draw</button> - Winner: Sundar Pichai
        </li>
        <li>
          Prize 2: <button>Draw</button> - Winner: Elon Musk
        </li>
      </ul>
    </>
  )
}