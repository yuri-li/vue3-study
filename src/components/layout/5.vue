<template>
    <h1>5. 2个div：1个沾满全屏，1个水平居中</h1>
    <div class="container">
        <div class="box horizontal-center"></div>
        <!-- <div class="box"></div> -->
    </div>
</template>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
.container {
    width: 100%;
    height: 100%;
    background-color: burlywood;
    position: absolute;
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