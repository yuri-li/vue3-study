import { shallowMount } from "@vue/test-utils"
import HelloWorld from "@/components/HelloWorld.vue"

describe("测试HelloWorld component", () => {
    test.skip("给props.msg赋空字符串", () => {
        const wrapper = shallowMount(HelloWorld)
        expect(wrapper.find("h1").text()).toBe("hello world")
        // expect(wrapper.find("h1").exists()).toBeFalsy()
    })
    test.skip("测试props.msg", () => {
        const wrapper = shallowMount(HelloWorld, {
            props: { msg: "hello world" }
        })
        console.log(wrapper.html())
        expect(wrapper.text()).toContain("hello world")
    })
    test("点击button，count自增", async () => {
        const wrapper = shallowMount(HelloWorld)
        expect(wrapper.vm.count).toBe(0)

        expect(wrapper.emitted().click).toBeFalsy()
        await wrapper.find("button").trigger("click")
        expect(wrapper.emitted().click).toBeTruthy()
        expect(wrapper.vm.count).toBe(1)

        await wrapper.find("button").trigger("click")
        console.log(wrapper.emitted())
        expect(wrapper.vm.count).toBe(2)
    })
})