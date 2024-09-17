import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Pagination from "../pagination/Pagination";
import Loading from "./Loading";
import Filter from "./Filter";
import Category from "./Category";
import SubCategory from "./SubCategory";

function Body() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchvlaue, setSearchvlaue] = useState("");
  const [selectTesher, setSelectTesher] = useState([]);
  const [selectCategory, setSelectCategory] = useState();
  const [selectsubCategory, setSelectsubCategory] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://admin.joacademy.net/api/v1/courses-filter", {
        params: {
          page: currentPage,
          search: searchvlaue,
          teachers: `[${selectTesher}]`,
          category: `[${selectCategory}]`,
        },
        headers: { program: 1, lang: "ar", api: 1 },
      })

      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [
    currentPage,
    searchvlaue,
    selectTesher,
    selectCategory,
    selectsubCategory,
  ]);

  const onNextClick = (current) => {
    setCurrentPage(current);
  };
  const onPrevClick = (current) => {
    setCurrentPage(current);
  };
  const onPageChange = (current) => {
    setCurrentPage(current);
  };
  const teasherName = (id) => {
    setSelectTesher(id);
  };

  const typeofCategory = (catid) => {
    setSelectCategory(catid);
  };

  const typeofsubCategory = (subid) => {
    setSelectsubCategory(subid);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9F9] px-36">
      <h2 className="font-bold text-3xl mt-5 ">الدورات</h2>
      <p className="font-bold mb-10 mt-5 text-gray-400">
        من هنا تستطيع البحث على جميع الدورات والاشتراك - مواد الثانوية العامة
      </p>
      <div className="flex flex-col justify-center items-center bg-white w-full mx-14 px-3 py-2 border-[1px] border-gray-200 rounded-lg">
        <input
          className="border-[1px] border-gray-200 rounded-lg w-full h-10 px-2"
          placeholder="ابحث هنا"
          onChange={(ele) => setSearchvlaue(ele.target.value)}
        />
        <div className="flex gap-4 py-2 ">
          <div>
            <label> المعلم</label>
            <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-lg h-10 px-2 my-1">
              <Filter teasherName={teasherName} />
            </div>
          </div>
          <div>
            <label>نوع البرنامج</label>
            <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-lg h-10 px-2 my-1">
              <Category typeofCategory={typeofCategory} />
            </div>
          </div>
          <di>
            <label>فرع</label>
            <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-lg h-10 px-2 my-1">
              <SubCategory
                typeofCategory={selectCategory}
                typeofsubCategory={typeofsubCategory}
              />
            </div>
          </di>

          {/* <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-lg h-10 px-0">
            <Filter />
          </div> */}
        </div>
      </div>
      <div className="flex justify-center items-center flex-row flex-wrap	gap-2 py-2">
        {loading ? (
          <Loading />
        ) : (
          data.data?.map(({ image, teacher, name, duration, price }, index) => {
            return (
              <Card
                key={index}
                image={image}
                teacher={teacher.name}
                name={name}
                duration={duration}
                price={price}
              />
            );
          })
        )}
      </div>

      <div className="p-6">
        <Pagination
          currentPage={currentPage}
          total={data.total}
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
          onPageChange={onPageChange}
          showPerPage={7}
        />
      </div>
    </div>
  );
}
export default Body;
