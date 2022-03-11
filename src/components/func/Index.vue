<template>
    <div class="content">
        <div class="left">
            <div class="item">
                <Cell v-model="data.x" :readonly="false" :value="Number(data.x)" />
                <Cell :readonly="true" :value="result.x" />
            </div>
            <div class="item">
                <Cell v-model="data.y" :readonly="false" :value="Number(data.y)" />
                <Cell :readonly="true" :value="result.y" />
            </div>
        </div>
        <div class="right">
            <Cell :readonly="true" :value="result.total" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import Cell from "@/components/func/Cell.vue"
import { reactive, computed } from "vue"

const data = reactive({
    x: 0,
    y: 0,
})
const result = computed(() => {
    return {
        x: data.x * data.x,
        y: data.y * data.y,
        total: data.x * data.x + data.y * data.y,
    }
})
</script>
<style lang="scss" scoped>
.content {
    display: flex;
    width: 500px;
    height: 230px;
    justify-content: space-between;
    align-items: center;
    .left {
        display: flex;
        width: 300px;
        height: 230px;
        align-content: space-between;
        flex-wrap: wrap;
        .item {
            display: flex;
            width: 300px;
            height: 100px;
            justify-content: space-between;
            align-items: center;
            
        }
    }
    .right {
        display: flex;
        width: 100px;
        height: 100px;
    }
}
</style>