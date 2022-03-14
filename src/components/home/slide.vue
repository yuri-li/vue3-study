<template>
    <el-col :span="12">
        <!-- <h5 class="mb-2">Custom colors</h5> -->
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="1"
            :collapse="extend"
            text-color="#fff"
        >
            <el-menu-item index="1">
                <el-icon>
                    <user-filled />
                </el-icon>
                <span @click="go">客户管理</span>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>订单管理</span>
                </template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item one</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-col>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { extend } from "./header.vue"
console.log(extend.value)

const route = useRouter()
function go() {
    route.push({ path: "/home/customer" })
}


</script>


<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  height: 100vh;
  min-height: 400px;
}
.el-menu--collapse{
    width: 100px;
    height: 120vh;
}
</style>