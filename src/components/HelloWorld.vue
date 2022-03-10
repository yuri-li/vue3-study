<template>
    <span class="title">{{ msg }}</span>
    <div id="div-btn">
        <button @click="count += 1">点击</button>
    </div>
    <span>点击次数:{{ count }}</span>
</template>
<script lang="ts" setup>
import { ref } from "vue"

withDefaults(defineProps<{ msg: string }>(), {
    msg: "hello world"
})

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