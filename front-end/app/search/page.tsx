import { BsSortUpAlt } from "react-icons/bs";

const page = () => {
  return (
    <div className="h-screen w-screen pt-28 lg:pt-36 pr-8">
      <div className="flex gap-4 pb-4 pr-[17rem]">
        <div>
          <BsSortUpAlt size={23} />
        </div>
        <button className="text-sm text-my-purple">جدیدترین</button>
        <button className="text-sm text-gray-500">پرفروش ترین</button>
        <button className="text-sm text-gray-500">گران ترین</button>
        <button className="text-sm text-gray-500">ارزان ترین</button>
      </div>
      <div className="flex gap-7 ">
        <div className="lg:block h-80 w-60 bg-white border-[1px] border-gray-300 rounded">
          <h3 className="text-lg font-bold pr-6 pt-5">فیلترها</h3>
          <div className="h-[1.5px] w-52 rounded-xl bg-gray-300 mr-4 mt-2"></div>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="lg:block h-80 w-60 lg:w-[14.5rem] xl:w-64 bg-white border-[1px] border-gray-300 rounded"></div>
          <div className="lg:block h-80 w-60 lg:w-[14.5rem] xl:w-64 bg-white border-[1px] border-gray-300 rounded"></div>
          <div className="lg:block h-80 w-60 lg:w-[14.5rem] xl:w-64 bg-white border-[1px] border-gray-300 rounded"></div>
          <div className="lg:block h-80 w-60 lg:w-[14.5rem] xl:w-64 bg-white border-[1px] border-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};
export default page;
