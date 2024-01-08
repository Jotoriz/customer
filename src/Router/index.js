import Home from "../Home/Home";
import Product from "../Product/Product";
import ProductDetail from "../ProductDetail/ProductDetail";
import Profile from "../Profile/Profile";
import Login from "../Login/login";
import Register from "../Login/register";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/Profile", component: Profile },
  { path: "/Product", component: Product },
  { path: "/ProductDetail/:slug", component: ProductDetail },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  ,
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
