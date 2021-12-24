<template>
    <p>id: {{ dto.id }}</p>
    <p>age: {{ dto.age }}</p>
    <p>gender: {{ dto.gender }}</p>
    <button @click="() => $emit('updateAge', 20)">点击按钮，修改age</button>
</template>
<script lang="ts" setup>
import { Member } from "@/components/pass/props/types"
defineProps<{ dto: Member }>()
defineEmits<{
    (e: "updateAge", age: number): void
}>()
</script>