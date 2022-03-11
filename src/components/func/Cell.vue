<template>
    <input :readonly="readonly" :value="value" />
</template>
<script lang="ts" setup>

withDefaults(defineProps<{
    readonly: boolean,
    value: number,
}>(), {
    readonly: true,
    value: 0,
})
</script>
<style lang="scss" scoped>
input {
    width: 100px;
    height: 100px;
    border: none;
    border-radius: 15px;
    background-color: rgb(96, 145, 91);
    color: orange;
    font-size: 24px;
    text-align: center;
}
</style>