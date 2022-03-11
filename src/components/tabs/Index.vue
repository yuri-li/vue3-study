<template>
    <div class="tab">
        <div class="tab-title">
            <button v-for="element in TabName.values()" :key="element.name" :class="['tab-button', { active: selectedTab.name == element.name }]" @click="selectedTab = element">{{ element.name }}</button>
        </div>
        <div class="tab-content">
            <component :is="selectedTab.component()" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, } from "vue"
import { TabName } from "@/components/tabs/model"

const selectedTab = ref(TabName.Home)
</script>
<style lang="scss" scoped>
.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
    &:hover {
        background: #86ae85;
    }
    &.active {
        background: #986161;
    }
}
.tab {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .tab-title {
        display: flex;
        justify-content: space-around;
        width: 200px;
    }
    .tab-content {
        width: 100%;
    }
}
</style>