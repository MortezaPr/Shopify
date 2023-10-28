import Button from "@mui/material/Button";

const Login = () => {
  const buttonStyle = {
    backgroundColor: "#865DFF",
    fontFamily: "VazirFont",
    width: "320px",
    padding: "8px",
  };
  return (
    <div className="h-screen flex justify-center items-center bg">
      <div className="bg-white shadow-lg rounded-2xl h-full w-full md:h-[450px] md:w-96 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="pt-20 font-bold text-3xl">وارد شدن</p>
          <p className="text-slate-500 pt-2">اطلاعات خود را وارد کنید</p>
        </div>
        <div className="flex flex-col items-center gap-5 pt-10">
          <input
            type="text"
            placeholder="   نام کاربری"
            className="p-2 rounded-md border-2 border-slate-400 w-80"
          />
          <input
            type="text"
            placeholder="   کلمه عبور"
            className="p-2 rounded-md border-2 border-slate-400 w-80"
          />
        </div>
        <div className="pt-9">
          <Button variant="contained" style={buttonStyle}>
            وارد شدن
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
