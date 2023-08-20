import {Link, useParams} from "react-router-dom";

export default function FishbowlHome() {
  let {fishbowlId} = useParams();
  return (
    <>
      <h1>Fishbowl {fishbowlId} Home</h1>
      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action" to="./customize">Customize Entry Form</Link>
        <Link className="list-group-item list-group-item-action" to='./entry'>All Entries</Link>
        <Link className="list-group-item list-group-item-action" to='./entry/new'>Entry Form</Link>
        <Link className="list-group-item list-group-item-action" to="./drawing">Drawing</Link>
        <Link className="list-group-item list-group-item-action" to='./prizes'>Prizes</Link>
      </div>
    </>
  );
}