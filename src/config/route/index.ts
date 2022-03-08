import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: "/",
        redirect: {
            name: "Layout",
        },
    },
    {
        path: "/hello",
        name: "HelloWorld",
        component: () => import("@/components/HelloWorld.vue"),
        props: () => ({ msg: "Hello World" })
    },
    {
        path: "/add",
        name: "Addition",
        component: () => import("@/components/addition/Addition.vue"),
    },
    {
        path: "/form",
        name: "MyForm",
        component: () => import("@/components/form/MyForm.vue"),
    },
    {
        path: "/todo",
        name: "TodoList",
        component: () => import("@/components/todo/TodoIndex.vue"),
    },
    {
        path: "/toggle",
        name: "ToggleImg",
        component: () => import("@/components/ToggleImg.vue"),
    },
    {
        path: "/layout",
        name: "Layout",
        component: () => import("@/components/layout/Layout.vue"),
    },
    {
        path: "/hello1",
        name: "hello1",
        component: () => import("@/components/state/Hello1.vue"),
    },
    {
        path: "/hello2",
        name: "hello2",
        component: () => import("@/components/state/Hello2.vue"),
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router