<template>
    <Child>
        <span style="color:red;">parent to child: hello</span>
    </Child>
</template>
<script lang="ts" setup>
import Child from "@/components/pass/slot/Child.vue"
</script>