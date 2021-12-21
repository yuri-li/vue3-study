<template>
    <button v-for="tab in Object.keys(TabName)" :key="tab" :class="['tab-button', { active: data.selectedTabName.valueOf() == tab }]" @click="data.selectedTabName = (tab as TabName)">{{ tab }}</button>
    <br />
    <component :is="data.selectedTab" />
</template>
<script setup lang="ts">
import { computed, reactive } from "vue"
import Home from "@/components/tabs/TabHome.vue"
import Posts from "@/components/tabs/TabPosts.vue"
import Archive from "@/components/tabs/TabArchive.vue"
import { TabName } from "@/components/tabs/types"


const data = reactive({
    selectedTabName: TabName.Home,
    selectedTab: computed(() => {
        if (data.selectedTabName == TabName.Home) {
            return Home
        } else if (data.selectedTabName == TabName.Posts) {
            return Posts
        } else {
            return Archive
        }
    })
})
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
</style>