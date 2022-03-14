<template>
    <div class="custormer-card">
        <el-row :gutter="12">
            <el-col :span="24">
                <el-card shadow="always">
                    <el-button type="primary">新建</el-button>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="12">
            <el-col :span="24">
                <el-card shadow="always">
                    <div class="card">
                        <span class="ml-3 w-35 text-gray-600 inline-flex items-center">监护人姓名</span>
                        <el-input
                            v-model="parentname"
                            type="text"
                            maxlength="30"
                            class="w-50"
                            show-word-limit
                            clearable
                            placeholder="请输入客户姓名"
                        />

                        <span class="ml-3 w-35 text-gray-600 inline-flex items-center">联系电话</span>
                        <el-input
                            v-model="phone"
                            type="text"
                            maxlength="11"
                            class="w-50"
                            show-word-limit
                            placeholder="请输入手机号"
                        />
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-table :data="tableData" height="500" style="width: 100%" align="center">
            <el-table-column type="index" width="50" />
            <el-table-column prop="name" label="监护人姓名" width="100" />
            <el-table-column prop="idcard" label="身份证号" width="180" />
            <el-table-column prop="username" label="监护人身份" width="100" />
            <el-table-column prop="phone" label="联系电话" width="180" />
            <el-table-column prop="add" label="联系地址" width="180" />
            <el-table-column prop="vip" label="是否会员" width="100" />
            <el-table-column prop="time" label="创建时间" width="180" />
            <el-table-column label="操作" width="200px">
                <template #default="scope">
                    <el-button>修改</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import {tableData} from "@/components/home/customer/model"
const parentname = ref()
const phone = ref()

</script>

<style lang="scss" scoped>
.custormer-card {
    flex: 1;
    height: 700px;
    display: flex;
    flex-direction: column;
    /* align-content: space-between; */
    justify-content: space-around;
    .card {
        display: flex;
        justify-content: space-evenly;
        .w-50 {
            width: 250px;
        }
    }
}
</style>

