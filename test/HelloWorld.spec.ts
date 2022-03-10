import HelloWorld from "@/components/HelloWorld.vue"
import App from "@/App.vue"
import { shallowMount, mount } from "@vue/test-utils"
describe("组件HelloWorld", () => {
    test("是否包含button", () => {
        const wrapper = shallowMount(HelloWorld)
        const element = wrapper.find("#div-btn > button")
        expect(element.exists()).toBeTruthy()
    })
    test("获取count的默认值", () => {
        const wrapper = shallowMount(HelloWorld)
        expect(wrapper.vm.count).toBe(0)
    })
    test("触发button 点击事件，观察点击前后count的值", async () => {
        const wrapper = shallowMount(HelloWorld)
        expect(wrapper.vm.count).toBe(0)

        const element = wrapper.find("#div-btn > button")
        await element.trigger("click")
        expect(wrapper.vm.count).toBe(1)
    })

    test("msg props", () => {
        const wrapper = mount(App)
        const element = wrapper.find("span.title")
        expect(element.exists()).toBeTruthy()

        /* 
         msg="helloworld + vue3 + vite"
        expect(element.text()).toBe("helloworld + vue3 + vite") */
        expect(element.text()).toBe("hello world")
    })
})