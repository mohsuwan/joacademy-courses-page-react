import { useEffect, useState } from "react";
import axios from "axios";

function Category({ typeofCategory }) {
  const [selectCategory, setSelectCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.joacademy.net/api/v2/programs/category?id=1")
      .then((selectCategory) => {
        setSelectCategory(selectCategory.data.data);
      });
  }, []);

  return (
    <div>
      <select onChange={(elemant) => typeofCategory(elemant.target.value)}>
        <option>تختر نوع البرنامج</option>
        {selectCategory?.map(({ name, id }) => {
          return <option value={id}>{name}</option>;
        })}
      </select>
    </div>
  );
}
export default Category;
