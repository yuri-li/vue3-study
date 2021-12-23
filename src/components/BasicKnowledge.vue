<template>
    <p :class="data.selfAttribute">string: {{ data.msg }}</p>
    <p>boolean: {{ data.flag }}</p>
    <p>number: {{ data.age }}</p>
    <p v-html="data.rawHtml"></p>
    <button disabled @click="updateAge">修改age</button>
</template>
<script lang="ts" setup>
import { reactive } from "vue"

enum MyColor {
    red = "p-class-red",
    yellow = "p-class-yellow",
}

const data = reactive({
    msg: "hello",
    flag: true,
    age: 18,
    rawHtml: "<span style='color:red'>world</span>",
    selfAttribute: MyColor.yellow
})
function updateAge() {
    data.age = 20
}
</script>
<style lang="scss" scoped>
.p-class-red {
    color: red;
    font-weight: bold;
}
.p-class-yellow {
    color: yellow;
    font-weight: bold;
}
</style>
