<template>
    <input v-model="value" :readonly="readonly" :class="{ readonly: readonly }" />
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
    border-radius: 15px;
    font-size: 24px;
    text-align: center;
    &.readonly {
        border: none;
        background-color: rgb(186, 120, 199);
        color: orange;
    }
}
</style>