import React from "react";

interface BoxProps {
  title: string;
  icon: React.ElementType;
  color: string;
  accent: string;
  data: number;
}

const Box: React.FC<BoxProps> = ({
  title,
  icon: Icon,
  color,
  accent,
  data,
}) => {
  return (
    <div className="h-52 w-52 rounded-xl bg-white shadow-md pt-7 pr-4">
      <div
        className={`flex justify-center items-center h-14 w-14 ${color} rounded-full outline-none`}
      >
        <Icon
          style={{
            color: `${accent}`,
          }}
          fontSize="large"
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
