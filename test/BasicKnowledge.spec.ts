import { shallowMount } from "@vue/test-utils"
import BasicKnowledge from "@/components/BasicKnowledge.vue"

describe("测试vue3的基础知识", () => {
    test("显示基本类型的数据", () => {
        const wrapper = shallowMount(BasicKnowledge)
        const text = wrapper.text()

        expect(text).toContain("hello")
        expect(text).toContain("true")
        expect(text).toContain("18")
        expect(text).not.toContain("<span style='color:red'>world</span>")
        expect(text).toContain("world")
    })
    test.skip("双向绑定", async () => {
        const wrapper = shallowMount(BasicKnowledge)
        await wrapper.find("button").trigger("click")
        expect(wrapper.vm.data.age).toBe(20)

        const text = wrapper.text()
        expect(text).toContain("20")
    })
})