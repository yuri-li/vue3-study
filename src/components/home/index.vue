<template>
<div class="common-layout">
    <el-container>
      <el-aside width="max-content"> <slide /></el-aside>
      <el-container>
        <el-header>  <Headere /></el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
    <!-- <div class="total">
        <div class="left">
            <div class="slide">
               
            </div>
        </div>

        <div class="right">
            <div class="top">
              
            </div>
            <div class="main">
                
            </div>
        </div>
    </div> -->
</template>


<script lang="ts" setup>
import Slide from "@/components/home/slide.vue"
import Headere from "@/components/home/header.vue"
</script>

<style lang="scss" scoped>
</style>