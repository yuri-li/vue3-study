<template>
    <span class="title">hello world</span>
    <button @click="count += 1">点击</button>
    <span>点击次数:{{ count }}</span>
</template>
<script lang="ts" setup>
import { ref } from "vue"

const count = ref(0)
</script>
<style lang="scss" scoped>
.title {
    font-size: 42px;
}
span {
    display: block;
}
</style>