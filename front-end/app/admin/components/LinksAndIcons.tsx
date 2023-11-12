import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

type IconsType = {
  [key: string]: JSX.Element;
};

export let links = {
  داشبورد: "/admin/dashboard",
  سفارشات: "/admin/orders",
  محصولات: "/admin/products",
  " مشتری ها": "/admin/customers",
};

export let icons: IconsType = {
  داشبورد: <DashboardIcon fontSize="small" />,
  سفارشات: <ShoppingCartIcon fontSize="small" />,
  محصولات: <CategoryIcon fontSize="small" />,
  " مشتری ها": <PeopleAltIcon fontSize="small" />,
};
