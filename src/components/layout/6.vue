<template>
    <h1>6. 2个div，水平居中平铺，左右间距`20px`</h1>
    <div class="box horizontal-center"></div>
    <div class="box horizontal-center"></div>
</template>
<style lang="scss">
* {
    margin: 0;
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
    margin-right: 20px;
    display: inline-block;
}
</style>