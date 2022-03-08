<template>
    <div class="container">
        <div class="header">
            <div class="logo"></div>
            <div class="content1"></div>
            <div class="content2"></div>
        </div>
        <div class="main"></div>
        <div class="footer"></div>
    </div>
</template>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
.container {
    width: 970px;
    height: 593px;
    margin: 0 auto;
    background-color: #d3ecec;
}
.header {
    width: 100%;
    height: 103px;
    margin-bottom: 10px;
}
.logo {
    width: 277px;
    height: 103px;
    background-color: #e8176e;
    float: left;
}
.content1{
    width: 137px;
    height: 49px;
    background-color: #3ae817;
    float: right;
}
.content2{
    width: 679px;
    height: 46px;
    background-color: #3ae817;
    float: right;
    margin-top: 10px;
}
.main {
    width: 100%;
    height: 435px;
    background-color: #f5df1a;
    margin-bottom: 10px;
}
.footer {
    width: 100%;
    height: 35px;
    background-color: #0b07df;
}
</style>