<template>
    <h1>2. 1个div在body中，垂直居中</h1>
    <div class="box vertical-center"></div>
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
.vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>