import { createApp } from "vue"
import App from "@/App.vue"
import ElementPlus from "element-plus"
import locale from "element-plus/es/locale/lang/zh-cn"
import "element-plus/dist/index.css"
import * as ElIcons from "@element-plus/icons-vue"
import { router } from "@/config/route/index"


const app = createApp(App)
for (const name in ElIcons) {
    app.component(name, (ElIcons as any)[name])
}
app.use(ElementPlus, { locale })
    .use(router)
    .mount("#app")
