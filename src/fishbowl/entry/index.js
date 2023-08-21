function EntryItem({entry}) {
  return (
    <div className="card" style={{
      marginBottom: "0.5em"
    }}>
      {entry.map((field) => (
        <div className="card-body">
          <h5 className="card-title">{field.key}</h5>
          <div className="card-text">{field.value}</div>
        </div>
      ))}
    </div>
  );
}

export default function EntriesPage() {
  const entries = [
    [
      {key: "Full Name", value: "Richard Bronson"},
      {key: "Company", value: "Virgin Airways"}
    ],
    [
      {key: "Full Name", value: "Elon Musk"},
      {key: "Company", value: "Tesla"}
    ],
    [
      {key: "Full Name", value: "Sundar Pichai"},
      {key: "Company", value: "Alphabet"}
    ],
    [
      {key: "Full Name", value: "Zuck"},
      {key: "Company", value: "Meta"}
    ],
  ];

  return (
    <div className="container container-fluid">
      <h1>All Entries</h1>
      {entries.map((entry, idx) => (
        <EntryItem key={idx} entry={entry}/>
      ))}
      <button className="btn btn-primary">Export</button>
    </div>
  )
}