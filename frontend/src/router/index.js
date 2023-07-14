import { createWebHistory, createRouter } from "vue-router";
import Read from "@/pages/Read";
import Create from "@/pages/Create";
import Detail from "@/pages/Detail";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Home from "@/pages/Home";
// import Mypage from "@/pages/Mypage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/read",
    name: "Read",
    component: Read,
  },
  {
    path: "/create/:contentId?",
    name: "Create",
    component: Create,
  },
  {
    path: "/detail/:contentId",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  // {
  //   path: "/mypage",
  //   name: "Mypage",
  //   component: Mypage,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
