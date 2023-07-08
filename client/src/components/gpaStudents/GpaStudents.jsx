import { useGetGpaStudentQuery } from "../../features/api/gpaStudentSlice";
import "./GpaStudents.css";

const GpaStudents = () => {
  const { data, isLoading, isSuccess, isError } = useGetGpaStudentQuery();
  console.log(data);
  return (
    <div>
      <div className="gpa-text">
        <h1>
          G.P.A <span>5.00</span> students
        </h1>
        <p>
          Students who obtained Golden A+ and G.P.A 5.00 in previous year SSC
          and HSC examination
        </p>
      </div>
      <div className="gpa-img"></div>
    </div>
  );
};

export default GpaStudents;
