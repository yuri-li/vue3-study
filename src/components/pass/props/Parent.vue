<template>
    <Child :dto="dto" @update-age="updateAge" />
</template>
<script lang="ts" setup>
import { reactive } from "vue"
import { Member } from "@/components/pass/props/types"
import Child from "@/components/pass/props/Child.vue"

const dto: Member = reactive({
    id: "10001",
    age: 18,
    gender: false,
})
function updateAge(_age: number) {
    dto.age = _age
}
</script>