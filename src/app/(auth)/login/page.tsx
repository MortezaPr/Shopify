import { Poppins } from "next/font/google";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="h-screen xs:h-128 w-112 rounded-xl bg-white dark:bg-secondary-dark border-[0.5px] border-gray-200 dark:border-secondary-dark shadow-sm">
        <h2
          className={`${poppins.className} text-primary flex justify-center pt-40 xs:pt-12`}
        >
          Shopify
        </h2>
        <div className="flex flex-col mx-10 pt-10">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            variant="contained"
            sx={{
              marginTop: "2rem",
              height: "2.5rem",
              fontSize: "16px",
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
