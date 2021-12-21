<template>
    <input v-model="data.x" type="number" /> +
    <input v-model="data.y" type="number" /> =
    <input v-model="data.z" type="number" disabled />
</template>
<script lang="ts" setup>
import { computed, reactive } from "vue"
import { AdditionDataType } from "@/components/addition/types"

const data: AdditionDataType = reactive({
    x: 0,
    y: 0,
    z: computed(() => data.x + data.y)
})
</script>