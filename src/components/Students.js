import { useEffect, useState } from "react";
import {
  students,
  schools,
  legalGuardians,
  fetchStudentData,
  fetchSchoolData,
  fetchLegalguardianData,
} from "../services";
import StudentsPicker from "./StudentsPicker";
import StudentsTable from "./StudentsTable";

const StudentsDataComponent = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [schoolsData, setSchoolsData] = useState([]);
  const [legalguardiansData, setLegalguardiansData] = useState([]);

  useEffect(() => {
    setStudentsData(students);
    setSchoolsData(schools);
    setLegalguardiansData(legalGuardians);
  }, []);

  const onStudentsPick = async (studentIds) => {
    const getStudents = await Promise.all(
      studentIds.map((e) => fetchStudentData(e))
    );
    setStudentsData(getStudents);

    const uniqSchool = [...new Set(getStudents.map((e) => e.school))];
    const getSchools = await Promise.all(
      uniqSchool.map((e) => fetchSchoolData(e))
    );
    setSchoolsData(getSchools);

    const uniqLegal = [...new Set(getStudents.map((e) => e.legalGuardian))];
    const getLegalGuardian = await Promise.all(
      uniqLegal.map((e) => fetchLegalguardianData(e))
    );
    setLegalguardiansData(getLegalGuardian);
  };

  return (
    <>
      <StudentsPicker onPickHandler={onStudentsPick} />
      <StudentsTable
        studentsData={studentsData}
        schoolsData={schoolsData}
        legalguardiansData={legalguardiansData}
      />
    </>
  );
};

export default StudentsDataComponent;
