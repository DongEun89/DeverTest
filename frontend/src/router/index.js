import { createWebHistory, createRouter } from "vue-router";
import Read from "@/pages/Read";
import Create from "@/pages/Create";
import Detail from "@/pages/Detail";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Home from "@/pages/Home";
import Mypage from "@/pages/Mypage";
import GameList from "@/pages/GameList";
import Gugudan from "@/pages/gugudan";
import LastWord from "@/pages/lastword";
import NumberBaseball from "@/pages/NumberBaseball";

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
    {
        path: "/mypage",
        name: "Mypage",
        component: Mypage,
    },
    {
        path: "/gamelist",
        name: "GameList",
        component: GameList,
    },
    {
        path: "/gugudan",
        name: "Gugudan",
        component: Gugudan,
    },
    {
        path: "/lastword",
        name: "LastWord",
        component: LastWord,
    },
    {
        path: "/numberbaseball",
        name: "NumberBaseball",
        component: NumberBaseball,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
