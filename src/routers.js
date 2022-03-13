import Home from './components/Home.vue';
import SignupForm from "./components/SignupForm.vue";
import SignIn from "./components/SignIn.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: "home",
        component: Home,
        path: "/"
    },
    {
        name: "signup",
        component: SignupForm,
        path: "/sign-up"
    },
    {
        name: "signin",
        component: SignIn,
        path: "/sign-in"
    },
    {
        name: "add",
        component: Add,
        path: "/add"
    },
    {
        name: "update",
        component: Update,
        path: "/update/:id"
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
        linkExactActiveClass: "active"
    }
)

export default router