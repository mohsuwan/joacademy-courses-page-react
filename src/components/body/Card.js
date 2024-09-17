import profile from "../../images/profile.jpg";
function Card({ image, teacher, name, duration, price}) {
  // console.log(category.name);
  return (
    <div className="flex flex-col justify-between bg-white rounded drop-shadow-md h-[500px] w-[300px]">
      <div className=" relative ">
        <img className="rounded h-[170px]" src={image} alt="img" width="100%" />
        <div className="flex gap-2 absolute top-2 left-2 text-[#1a428a]">
          <i className="ri-shopping-cart-2-line rounded-full px-1 bg-white cursor-pointer"></i>
          <i className="ri-heart-3-line rounded-full px-1 bg-white cursor-pointer"></i>
        </div>
      </div>
      <div className="flex items-center pt-2">
        <img
          className="rounded-full px-2 h-12 w-16"
          src={profile}
          alt="profile"
        />
        <p>{teacher}</p>
      </div>
      <p className="font-bold text-lg mt-4 px-4">{name}</p>
      <p className="flex gap-1 mt-4 px-4">
        <b>مدة الدورة:</b>
        <time>{duration}</time>
        ساعة
      </p>
      <data className="font-bold text-[#F2A057] text-2xl gap-1 mt-4 px-4">
        {price} دينار
      </data>

      <div className="flex justify-around py-6">
        <button className="border-2 border-[#1a428a] rounded-md px-5 py-1 text-[#1a428a] hover:bg-[#1a428a] hover:text-white">
          تفاصيل الدورة
        </button>
        <button className="border-2 border-[#1a428a] rounded-md px-5 py-1 text-white bg-[#1a428a] hover:text-[#1a428a] hover:bg-white">
          تفعيل بالبطاقة
        </button>
      </div>
    </div>
  );
}
export default Card;
