import {useParams} from "react-router-dom";

export default function PrizesPage() {
  let {fishbowlId} = useParams();
  return (
    <>
      <h1>Fishbowl {fishbowlId} Prizes</h1>
    </>
  )
}