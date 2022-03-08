<template>
    <h1>1. 1个div在body中，水平居中</h1>
    <div class="box horizontal-center"></div>
</template>
<style lang="scss" scoped>
* {
    padding: 0;
}
.box {
    width: 100px;
    height: 100px;
    background-color: #d3ecec;
    border: 2px solid black;
}
.horizontal-center {
    margin: 0 auto;
}
</style>