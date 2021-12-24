<template>
    parent component:
    <button @click="handleClick">点击，展示child暴漏的属性和方法</button>
    <hr />child component:
    <Child ref="child" :dto="dto" @update-age="updateAge" />
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue"
import { Member, ChildExpose } from "@/components/pass/props/types"
import Child from "@/components/pass/props/Child.vue"

const dto: Member = reactive({
    id: "10001",
    age: 18,
    gender: false,
})
function updateAge(_age: number) {
    dto.age = _age
}
const child = ref<ChildExpose>()
function handleClick() {
    alert(`parent call child's property: ${child.value?.address}`)
    alert(`parent call child's property: ${child.value?.username}`)
    alert(`parent call child's method: ${child.value?.sayHello()}`)
}
</script>