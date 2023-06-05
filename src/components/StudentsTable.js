const StudentsTable = ({ studentsData, schoolsData, legalguardiansData }) => {
  return (
    <div style={{ display: "flex" }}>
      <ul style={{ flexBasis: "33%", listStyleType: "decimal" }}>
        {studentsData.map((e) => (
          <li key={e.id}>{`${e.id}----${e.school}----${e.legalGuardian}`}</li>
        ))}
      </ul>
      <ul style={{ flexBasis: "33%", listStyleType: "decimal" }}>
        {schoolsData.map((e) => (
          <li key={e.id}>{e.id}</li>
        ))}
      </ul>
      <ul style={{ flexBasis: "33%", listStyleType: "decimal" }}>
        {legalguardiansData.map((e) => (
          <li key={e.id}>{e.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsTable;
