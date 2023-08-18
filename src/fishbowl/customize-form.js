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
    <select value={value}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
}

export default function CustomizeForm() {
  return (
    <>
      <table>
        <thead>
        <tr>
          <th>Field Name</th>
          <th>Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><input type="text" value="Full Name"/></td>
          <td>
            <DataTypeSelect value="text"/>
          </td>
        </tr>
        <tr>
          <td><input type="text" value="Company"/></td>
          <td>
            <DataTypeSelect value="text"/>
          </td>
        </tr>
        <tr>
          <td><input type="text" value="Years With Company"/></td>
          <td>
            <DataTypeSelect value="number"/>
          </td>
        </tr>
        <tr>
          <td><input type="text" value="Date of Birth"/></td>
          <td>
            <DataTypeSelect value="date"/>
          </td>
        </tr>
        </tbody>
      </table>
    </>
  );
}