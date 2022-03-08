<template>
    <div class="box">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>Card name</span>
                    <el-button class="button" type="text">Operation button</el-button>
                </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
    </div>
</template>
<style lang="scss" scoped>
.box {
    display: flex;
    justify-content: center;
    font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
.box-card {
    width: 480px;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.text {
    font-size: 14px;
}

.item {
    display: flex;
    margin-bottom: 18px;
}
</style>