// # 2. 创建路由 @/config/route/index.ts
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/tabs", component: () => import("@/components/tabs/Index.vue") },
    { path: "/func", component: () => import("@/components/func/Index.vue") },
    { path: "/", component: () => import("@/views/Login.vue") },
    {
        path: "/home", name: "home",
        redirect: { name: "customer" },
        component: () => import("@/components/home/index.vue"),
        children: [
            { path: "customer", name: "customer", component: () => import("@/components/home/customer/index.vue") },
        ],
        meta:{"First":"客户管理","second":"客户列表"}
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export { router }