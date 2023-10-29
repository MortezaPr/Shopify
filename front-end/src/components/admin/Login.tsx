import Button from "@mui/material/Button";
import { useState } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const buttonStyle = {
    backgroundColor: "#068FFF",
    fontFamily: "VazirFont",
    width: "320px",
    padding: "10px",
    fontWeight: "bold",
    fontSize: "1.1rem",
    borderRadius: "10px",
  };
  return (
    <div className="h-screen flex justify-center items-center bg">
      <div className="bg-white shadow-lg rounded-2xl h-full w-full md:h-[450px] md:w-96 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p
            className="pt-10 font-bold text-5xl text-[#068FFF]"
            style={{ fontFamily: "Roboto" }}
          >
            Shopify
          </p>
          <p className="text-slate-500 pt-2">لطفا اطلاعات خود را وارد کنید</p>
        </div>
        <form className="flex flex-col items-center gap-5 pt-10">
          <input
            type="text"
            placeholder="   نام کاربری"
            className="p-2 rounded-md border border-slate-400 focus:outline-blue-500 w-80"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="relative w-80">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="   کلمه عبور"
              className="p-2 rounded-md border border-slate-400 focus:outline-blue-500 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputAdornment position="end" className="absolute top-5 left-0">
              <IconButton
                onClick={togglePasswordVisibility}
                edge="end"
                aria-label="toggle password visibility"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          </div>
        </form>

        <div className="pt-11">
          <Button variant="contained" style={buttonStyle}>
            ورود
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
