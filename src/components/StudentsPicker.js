import { students } from "../services";
import { getRandom } from "../utils";

const StudentsDataComponent = ({ onPickHandler }) => {
  const randomPickStudents = () => {
    let length = Math.floor(Math.random() * 20) + 1;
    const studentIds = getRandom(students, length);
    onPickHandler(studentIds.map((e) => e.id));
  };

  return (
    <div>
      <button onClick={randomPickStudents}>Random pick 1-20 students</button>
    </div>
  );
};

export default StudentsDataComponent;
