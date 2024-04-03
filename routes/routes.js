import config from "../config";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  {
    path: config.routes.login,
    component: Login,
  },
  {
    path: config.routes.register,
    component: Register,
  },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
