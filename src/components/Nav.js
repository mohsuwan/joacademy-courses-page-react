// import react from react
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "../images/logo.svg";
function Nav() {
  return (
    <div className="flex justify-between items-center gap-12 p-4 border-b-0 shadow-md sticky top-0 text-[#1a428a] bg-white z-40">
      <a href="/">
        <img src={logo} alt="logo" height="50" width="200" />
      </a>
      <ul className="flex justify-center items-center gap-4 font-bold	 cursor-pointer">
        <li>مكتبات</li>
        <li>مدرسة جو اكاديمي</li>
        <li>أخبار جوأكاديمي</li>
        <li>الإمتحانات الإلكترونية</li>
        <li>كن مندوبنا</li>
        <li>البرنامج</li>
      </ul>
      <div className="flex justify-center items-center gap-6">
        <div className="flex gap-4 text-2xl">
          <i className="ri-shopping-cart-fill cursor-pointer"></i>
          <i className="ri-question-fill cursor-pointer"></i>
          <i className="ri-english-input cursor-pointer"></i>
        </div>
        <div className="flex gap-4">
          <a href="/login-page" className="border px-4 py-2 rounded-md">
            دخول
          </a>
          <button className="text-white bg-[#1a428a] px-4 py-2 rounded-md">
            تسجيل
          </button>
        </div>
      </div>
    </div>
  );
}
export default Nav;
