import { useGetAllTeacherQuery } from "../../features/api/teacherSlice";
import "./teacher.css";

const Teacher = () => {
  const { data, error, isSuccess, isLoading } = useGetAllTeacherQuery();
  console.log(data, error, isSuccess, isLoading);
  return <div>Teacher</div>;
};

export default Teacher;
