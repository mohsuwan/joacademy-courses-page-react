import { useEffect, useState } from "react";
import axios from "axios";

function Filter({ teasherName }) {
  const [teacherdata, setTeacherdata] = useState();
  useEffect(() => {
    axios
      .get(
        "https://admin.joacademy.net/api/v2/programs/category/sub-category/grade/subject/teacher?category_id=1"
      )
      .then((teacherdata) => {
        setTeacherdata(teacherdata.data.data);
      });
  }, []);

  return (
    <div>
      <select onChange={(e) => teasherName(e.target.value)}>
        <option>اختر المعلم</option>
        {teacherdata?.map(({ name, id }) => {
          return <option value={id}>{name}</option>;
        })}
      </select>
    </div>
  );
}

export default Filter;
