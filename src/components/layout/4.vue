<template>
    <h1>4. 1个div在body中，固定垂直居中。即，屏幕上下滚动时，一直垂直居中显示</h1>
    <div class="container">
        <div class="box vertical-center"></div>
        <!-- <div class="box"></div> -->
    </div>
</template>
<style lang="scss" scoped>
* {
    padding: 0;
}
.container {
    width: 100%;
    height: 2000px;
}
.box {
    width: 100px;
    height: 100px;
    background-color: #d3ecec;
    border: 2px solid black;
}
.vertical-center {
    position: fixed;
    top: 50%;
}
</style>