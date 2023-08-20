function DataTypeSelect({value}) {
  const options = [
    {
      value: "text",
      label: "Text"
    },
    {
      value: "number",
      label: "Number"
    },
    {
      value: "date",
      label: "Date"
    }
  ];

  return (
    <select className="form-control" value={value}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
}

function CustomizationItem({seq, fieldName, dataType}) {
  return (
    <div className="row" style={{
      marginBottom: "0.5em"
    }}>
      <div className="card-body">
        <div className="card-title input-group">
          <span className="input-group-text">Label</span>
          <input id={`item-label-${seq}`} className="form-control" type="text" value={fieldName}/>
        </div>
        <div className="card-text input-group">
          <span className="input-group-text">Type</span>
          <DataTypeSelect value={dataType}/>
        </div>
      </div>
    </div>
  );
}

export default function CustomizeForm() {
  const customFields = [
    {
      fieldName: "Full Name",
      dataType: "text",
    },
    {
      fieldName: "Company",
      dataType: "text",
    },
    {
      fieldName: "Years With Company",
      dataType: "number",
    },
    {
      fieldName: "Date of Birth",
      dataType: "date",
    },
  ];

  return (
    <div style={{
      padding: "1em",
      paddingLeft: "2em"
    }}>
      <h1>Custom Fields</h1>
      {customFields.map(({fieldName, dataType}, idx) => (
        <CustomizationItem key={idx} seq={idx} fieldName={fieldName} dataType={dataType}/>
      ))}
      <button className="btn btn-success">+ Add</button>
    </div>
  );
}