import React from "react";

interface BoxProps {
  title: string;
  icon: React.ElementType;
  accent: string;
  data: number;
}

const Box: React.FC<BoxProps> = ({ title, icon: Icon, accent, data }) => {
  return (
    <div className="h-40 w-[27rem] md:w-[14rem] lg:w-[20rem] xl:w-[16rem] 2xl:w-[20rem] rounded-lg bg-white dark:bg-dark-bg dark:text-white shadow-md pt-7 pr-4">
      <div className="pr-3">
        <Icon
          style={{
            color: `${accent}`,
          }}
          size={30}
        />
      </div>

      <p
        className="w-full font-extrabold text-2xl mt-2 truncate pl-5"
        dir="ltr"
      >
        {data.toLocaleString("fa")}
      </p>
      <p className="text-slate-500 text-lg font-bold pt-4 pr-5">{title}</p>
    </div>
  );
};

export default Box;
