import {useParams} from "react-router-dom";

function InputItem({idx, fieldName, dataType}) {
  return (
    <div className="list-group-item">
      <label className="form-label" htmlFor={`form-field-${idx}`}>{fieldName}</label>
      <input className="form-control" type={dataType} name={`form-field-${idx}`}/>
    </div>
  )
}

export default function EditEntry() {
  const inputFields = [
    {
      fieldName: "Full Name",
      dataType: "text",
    },
    {
      fieldName: "Company",
      dataType: "text",
    },
    {
      fieldName: "Years with Company",
      dataType: "number",
    },
    {
      fieldName: "Date of Birth",
      dataType: "date",
    }
  ];

  let {fishbowlId, entryId} = useParams();
  return (
    <>
      <h1>Fishbowl {fishbowlId} Entry Form: {entryId ? entryId : "New Entry"}</h1>
      <div className="list-group list-group-flush">
        {inputFields.map((customField, idx) => (
          <InputItem key={idx} idx={idx} fieldName={customField.fieldName} dataType={customField.dataType} />
        ))}
        <div className="list-group-item">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </>
  );
}