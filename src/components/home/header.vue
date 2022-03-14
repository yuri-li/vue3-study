<template>
    <div>
        <el-row :gutter="12">
            <el-col :span="24">
                <el-card shadow="always">
                    <div class="card-header">
                        <el-icon v-model="extend" style="margin-right: 20px;" class="change" @click="bian">
                            <expand />
                        </el-icon>
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/home' }">{{ route.meta.First }}</el-breadcrumb-item>
                            <el-breadcrumb-item>{{ route.meta.second }}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>


<script lang="ts" setup>
import {extend,bian,}from "@/components/home/model"
import { useRoute } from "vue-router"

const route = useRoute()


</script>


<style lang="scss" scoped>
.card-header{
    display: flex;
    align-items: center;
    .change{
        cursor: pointer;
    }
}
</style>