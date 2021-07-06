import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Notifications from "views/Notifications.js";
import Payments from "views/Payments.js";
import Members from "views/Members.js";
import Trainers from "views/Trainers.js";
import Shop from "views/Shop.js";
import Settings from "views/Settings.js";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-chart-line",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/members",
    name: "Manage Members",
    icon: "fas fa-users",
    component: Members,
    layout: "/admin",
  },
  {
    path: "/trainers",
    name: "Manage Trainers",
    icon: "fas fa-id-card-alt",
    component: Trainers,
    layout: "/admin",
  },
  {
    path: "/shop",
    name: "Manage Shop",
    icon: "fas fa-store",
    component: Shop,
    layout: "/admin",
  },
  {
    path: "/payments",
    name: "Payments",
    icon: "fas fa-credit-card",
    component: Payments,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "fas fa-user",
    component: UserProfile,
    layout: "/admin",
  },
  {
    settings: true,
    path: "/settings",
    name: "Settings",
    icon: "fas fa-cog",
    component: Settings,
    layout: "/admin",
  },
];

export default dashboardRoutes;
