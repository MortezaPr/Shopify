import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from "@mui/icons-material/Paid";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Box from "./Box";

const AdminHome = () => {
  const earning = 120000000;
  const customers = 345000;
  const sales = 42339;

  return (
    <div className="h-screen grid grid-cols-2 md:grid-cols-3 place-items-center">
      <div className="h-52 w-52 rounded-xl bg-white shadow-md">
        <p className="text-slate-500 text-xl font-bold pt-4 pr-5">درآمد</p>
        <p
          className="w-full font-extrabold text-3xl mt-2 truncate pl-5"
          dir="ltr"
        >
          {earning.toLocaleString("fa")}
        </p>
        <p className="pr-20 pt-1 font-semibold text-xl">تومان</p>
        <div className="pr-20 pt-5">
          <PaidIcon
            style={{
              color: "#865dff",
              fontSize: "50",
            }}
          />
        </div>
      </div>

      <Box
        title={"مشتری ها"}
        icon={PeopleIcon}
        color="bg-cyan-50"
        accent="#03c9d7"
        data={customers}
      />
      <Box
        title={"فروش"}
        icon={AssignmentOutlinedIcon}
        color="bg-orange-100"
        accent="#e46a76"
        data={sales}
      />
    </div>
  );
};

export default AdminHome;
