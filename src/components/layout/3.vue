<template>
    <h1>3. 1个div在body中，固定水平居中。即，屏幕水平滚动时，一直水平居中显示</h1>
    <div class="container">
        <div class="box horizontal-center"></div>
        <!-- <div class="box"></div> -->
    </div>
</template>
<style lang="scss" scoped>
* {
    padding: 0;
}
.container {
    width: 2000px;
    height: 100%;
}
.box {
    width: 100px;
    height: 100px;
    background-color: #d3ecec;
    border: 2px solid black;
}
.horizontal-center {
    position: fixed;
    left: 50%;
}
</style>