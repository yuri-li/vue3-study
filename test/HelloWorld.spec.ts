import HelloWorld from "@/components/HelloWorld.vue"
import { shallowMount } from "@vue/test-utils"
describe("组件HelloWorld", () => {
    test("是否包含button", () => {
        const wrapper = shallowMount(HelloWorld)
        const element = wrapper.find("#div-btn > button")
        expect(element.exists()).toBeTruthy()
    })
})