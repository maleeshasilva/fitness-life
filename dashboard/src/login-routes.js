import Login from "views/Login.js";


const loginRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: "fas fa-user",
    component: Login,
    layout: "/misc",
  },
];

export default loginRoutes;
