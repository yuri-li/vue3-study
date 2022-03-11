<template>
    <div class="content">
        <div class="left">
            <div class="first">
                <Cell :readonly="false" :value="data.x" />
                <Cell :readonly="true" :value="data.y" />
            </div>
            <div class="second">
                <Cell :readonly="false" :value="result.x.valueOf()" />
                <Cell :readonly="true" :value="result.y.valueOf()" />
            </div>
        </div>
        <div class="right">
            <Cell :readonly="true" :value="result.total.valueOf()" />
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