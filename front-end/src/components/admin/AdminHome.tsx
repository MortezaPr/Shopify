import React from "react";
import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";

const AdminHome = () => {
  const earning = 120000000;
  const customers = 345000;

  return (
    <div className="h-screen flex gap-6 justify-center items-center">
      <div className="h-52 w-52 rounded-xl bg-white shadow-md">
        <p className="text-slate-500 text-xl font-bold pt-4 pr-5">درآمد</p>
        <p
          className="w-full font-extrabold text-3xl mt-2 truncate pl-5"
          dir="ltr"
        >
          {earning.toLocaleString("fa")}
        </p>
        <p className="pr-20 pt-1 font-semibold text-xl">تومان</p>
        <div className="pr-16 pt-5">
          <Button
            variant="outlined"
            style={{
              color: "#865dff",
              border: "2px solid #865dff",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            مشاهده
          </Button>
        </div>
      </div>
      <div className="h-52 w-52 rounded-xl bg-white shadow-md pt-7 pr-4">
        <div className="flex justify-center items-center h-14 w-14 bg-my-blue rounded-full outline-none">
          <PeopleIcon
            style={{
              color: "#03c9d7",
            }}
            fontSize="large"
          />
        </div>
        <p
          className="w-full font-extrabold text-2xl mt-2 truncate pl-5"
          dir="ltr"
        >
          {customers.toLocaleString("fa")}
        </p>
        <p className="text-slate-500 text-lg font-bold pt-4 pr-5">مشتری ها</p>
      </div>
    </div>
  );
};

export default AdminHome;
