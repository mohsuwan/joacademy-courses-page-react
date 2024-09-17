import { useEffect, useState } from "react";
import axios from "axios";

function SubCategory({ typeofCategory, typeofsubCategory }) {
  const [selectSubCata, setSelectSubCata] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://admin.joacademy.net/api/v2/programs/category/sub-category?id=${typeofCategory}`
      )
      .then((selectSubCata) => {
        setSelectSubCata(selectSubCata.data.data);
        console.log(selectSubCata.data.data);
      });
  }, [typeofCategory]);
  return (
    <div>
      <select onChange={(ee) => typeofsubCategory(ee.target.value)}>
        <option> اختر الفرع</option>
        {selectSubCata?.map(({ name, id }) => {
          return <option value={id}>{name}</option>;
        })}
      </select>
    </div>
  );
}
export default SubCategory;
