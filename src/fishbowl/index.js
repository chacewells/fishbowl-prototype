import {Link, useParams} from "react-router-dom";

export default function FishbowlHome() {
  let {fishbowlId} = useParams();
  return (
    <>
      <h1>Fishbowl {fishbowlId} Home</h1>
      <ul>
        <li><Link to="./customize">Customize Entry Form</Link></li>
        <li><Link to='./entry'>All Entries</Link></li>
        <li><Link to='./entry/new'>Entry Form</Link></li>
        <li><Link to="./drawing">Drawing</Link></li>
        <li><Link to='./prizes'>Prizes</Link></li>
      </ul>
    </>
  );
}