export const schools = Array.from({ length: 10 }).map((e, i) => ({
  id: "School" + (i + 1),
}));
export const legalGuardians = Array.from({ length: 10 }).map((e, i) => ({
  id: "Legal" + (i + 1),
}));
export const students = Array.from({ length: 20 }).map((e, i) => ({
  id: "Student" + (i + 1),
  school: schools[Math.floor(Math.random() * 10)].id,
  legalGuardian: legalGuardians[Math.floor(Math.random() * 10)].id,
}));

export const fetchStudentData = async (id) => {
  return Promise.resolve(students.find((e) => e.id === id));
};

export const fetchSchoolData = async (id) => {
  return Promise.resolve(schools.find((e) => e.id === id));
};

export const fetchLegalguardianData = async (id) => {
  return Promise.resolve(legalGuardians.find((e) => e.id === id));
};
