<template>
    <h1>7. 2个div，垂直居中平铺，上下间距`20px`</h1>
    <div class="vertical-center">
        <div class="box"></div>
        <div class="box"></div>
    </div>
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
.vertical-center :nth-child(2) {
    margin-top: 20px;
}
.vertical-center {
    position: fixed;
    top: 50%;
}
</style>