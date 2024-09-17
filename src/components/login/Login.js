function Login() {
  return (
    <div className="flex items-center justify-center py-14 bg-[#F9F9F9]">
      <div className="flex flex-col items-center justify-center bg-white">
        <h1 className="font-bold text-[#1A428A] text-3xl mt-5">تسجيل الدخول</h1>
        <p className="py-3">
          أدخل رقم الهاتف أو البريد الإلكتروني الذي قمت بالتسجيل به، وابدأ
          تجربتك
        </p>
        <div className="flex gap-3 border border-gray rounded-xl">
          <button className="bg-[#1A428A] text-white m-2 p-2 rounded-xl">
            من خلال رقم الهاتف
          </button>
          <button className="bg-[#1A428A] text-white m-2 p-2 rounded-xl">
            من خلال البريد الإلكتروني
          </button>
        </div>
        <div className="p-4">
          <h2>رقم الهاتف</h2>
          <div className="flex items-center gap-3">
            <input type="email" className="border-gray"></input>
            <select>
              <option>+962</option>
              <option>+970</option>
            </select>
          </div>
        </div>
        <button className="bg-[#1A428A] text-white m-2 px-32 py-2 rounded-xl">
          أرسل
        </button>
      </div>
    </div>
  );
}
export default Login;
