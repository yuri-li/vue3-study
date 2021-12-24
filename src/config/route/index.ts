import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: "/",
        redirect: {
            name: "Addition",
        },
    },
    {
        path: "/hello",
        name: "HelloWorld",
        component: () => import("@/components/HelloWorld.vue"),
        props: () => ({ msg: "Hello Vue 3 + TypeScript + Vite" })
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
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router