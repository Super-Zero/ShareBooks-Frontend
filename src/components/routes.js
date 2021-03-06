//import Index from "views/Index.jsx";
import Profile from "./ProfilePage";
//import Maps from "views/examples/Maps.jsx";
import Register from "./SignUpForm"
import Login from "./LoginForm";
//import Tables from "views/examples/Tables.jsx";
//import Icons from "views/examples/Icons.jsx";

var routes = [
  
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    // layout: "/admin"
  },
  
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    //layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    //layout: "/auth"
  }
];
export default routes;
