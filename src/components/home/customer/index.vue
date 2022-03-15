<template>
    <div class="custormer-card">
        <el-row :gutter="12">
            <el-col>
                <el-card shadow="always">
                    <el-button type="primary">新建</el-button>
                </el-card>

                <el-card shadow="always">
                    <div class="card">
                        <el-form :inline="true" :model="formInline" class="demo-form-inline">
                            <el-form-item label="监护人姓名">
                                <el-input
                                    v-model="formInline.name"
                                    placeholder="请输入客户姓名"
                                    type="text"
                                    show-word-limit
                                    clearable
                                    maxlength="30"
                                />
                            </el-form-item>
                            <el-form-item label="联系电话">
                                <el-input
                                    v-model="formInline.phone"
                                    placeholder="请输入手机号"
                                    type="text"
                                    maxlength="11"
                                    show-word-limit
                                />
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>

                <el-card shadow="always">
                    <el-table :data="tableData" height="500" style="width: 100%" align="center">
                        <el-table-column type="index" width="50" />
                        <el-table-column prop="name" label="监护人姓名" width="100" />
                        <el-table-column prop="idcard" label="身份证号" width="180" />
                        <el-table-column prop="username" label="监护人身份" width="100" />
                        <el-table-column prop="phone" label="联系电话" width="180" />
                        <el-table-column prop="add" label="联系地址" width="180" />
                        <el-table-column prop="vip" label="是否会员" width="100" />
                        <el-table-column prop="time" label="创建时间" width="180" />
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { tableData, Form } from "@/components/home/customer/model"
const formInline = reactive(new Form())
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

.el-card {
    margin-bottom: 10px;
}
.el-form--inline .el-form-item{
    margin-bottom: 0px;
}
.el-form {
    width: 75%;
    display: flex;
    justify-content: space-between;
}
</style>

