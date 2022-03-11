<template>
    <div class="tab">
        <div class="tab-title">
            <button v-for="element in TabName.values()" :key="element.name" :class="{ selected: selectedComponent == element }" @click="selectedComponent = element">{{ element.name }}</button>
        </div>
        <div class="tab-content">
            <Home v-if="selectedComponent == TabName.Home" />
            <Posts v-else-if="selectedComponent == TabName.Posts" />
            <Archive v-else />
        </div>
    </div>
</template>
<script setup lang="ts">
import Home from "@/components/tabs/Home.vue"
import Posts from "@/components/tabs/Posts.vue"
import Archive from "@/components/tabs/Archive.vue"
import { ref } from "vue"
import { TabName } from "@/components/tabs/model"

const selectedComponent = ref(TabName.Home)

</script>
<style lang="scss" scoped>
.selected {
    background-color: brown;
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
        background-color: darkkhaki;
    }
}
</style>