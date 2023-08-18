import {useParams} from "react-router-dom";

export default function EditEntry() {
  let {fishbowlId, entryId} = useParams();
  return (
    <>
      <h1>Fishbowl {fishbowlId} Entry Form: {entryId ? entryId : "New Entry"}</h1>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/>
      </p>
      <p>
        <label htmlFor="company">Company</label>
        <input type="text" name="company"/>
      </p>
      <button>Submit</button>
    </>
  );
}