<template>
    <div :style="{ backgroundImage: 'url(' + imgUrl + ')', backgroundRepeat: 'no-repeat', height: '300px' }">abc</div>
</template>
<script lang="ts" setup>
import imgUrl from "@/assets/img/f1.png"
// console.log(`image url: ${imgUrl}`)
// const imgUrl = "src/assets/img/f1.png"
</script>