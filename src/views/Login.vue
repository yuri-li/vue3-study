<template>
    <div class="login">
        <div class="content">
            <div class="content-title">
                <h1>邦思教育订单管理</h1>
            </div>
            <div class="content-main">
                <el-form :ref="loginFrom" :model="loginForm" :rules="rules" class="login-form">
                    <el-form-item class="radio">
                        <el-radio-group v-model="loginForm.radio">
                            <el-radio label="管理员"></el-radio>
                            <el-radio label="销售"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item class="phone" prop="phone">
                        <el-input
                            v-model="loginForm.phone"
                            type="text"
                            size="large"
                            clearable
                            autocomplete="off"
                            placeholder="请输入手机号"
                            class="login-input"
                        >
                            <template #prepend>
                                <el-icon :size="32">
                                    <phone />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item v-if="change == 0" class="pwd" prop="pwd">
                        <el-input
                            v-model="loginForm.pwd"
                            type="password"
                            size="large"
                            placeholder="请输入密码"
                            autocomplete="off"
                        >
                            <template #prepend>
                                <el-icon :size="32">
                                    <lock />
                                </el-icon>
                            </template>com
                            <template #append>
                                <el-icon :size="32" @click="change = 1">
                                    <turn-off />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item v-else class="pwd" prop="pwd">
                        <el-input
                            v-model="loginForm.pwd"
                            type="text"
                            size="large"
                            placeholder="请输入密码"
                            autocomplete="off"
                        >
                            <template #prepend>
                                <el-icon :size="32">
                                    <lock />
                                </el-icon>
                            </template>com
                            <template #append>
                                <el-icon :size="32" @click="change = 0">
                                    <turn-off />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item class="btn" size="large">
                        <el-button type="primary" @click="go">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, } from "vue"
import { useRouter } from "vue-router"
import type { FormInstance } from "element-plus"

const loginFrom = ref<FormInstance>()
const change = ref(0)

const loginForm = reactive({
    phone: "",
    pwd: "",
    radio: "",
})

//验证手机号
const phoneRules = (rule: any, value: any, callback: any) => {
    if (value === "") {
        callback(new Error("请输入手机号"))
        console.log(rule)

    } else {
        if (loginForm.phone !== "") {

            if (!loginFrom.value) return loginFrom.value.validateFiled("check", () => null)




        }
        callback()
    }
}

//验证密码
const pwdRules = (rule: any, value: any, callback: any) => {
    if (value == "") {
        callback(new Error("请输入密码"))
        console.log(value)
    }
}


const rules = reactive({
    phone: [{ validator: phoneRules, trigger: "blur" }],
    pwd: [{ validator: pwdRules, trigger: "blur" }]
})

const router = useRouter()
//路由跳转
function go() {
    router.replace("home")
}


</script>
<style lang="scss" scoped>
$width: 100%;
.login {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        display: flex;
        width: 400px;
        height: 400px;
        border-radius: 20px;
        flex-wrap: wrap;
        background-color: rgb(162, 174, 180);
        justify-content: center;
        .content-title {
            width: $width;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .content-main {
            width: $width;
            display: flex;
            justify-content: center;
            align-items: center;
            .login-form {
                width: 80%;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: center;
                .radio {
                    width: $width;
                }
                .phone {
                    width: $width;
                    .phone-icon {
                        width: 70px;
                        height: 32px;
                        background-color: rgb(238, 213, 213);
                    }
                }
                .pwd {
                    width: $width;
                    .phone-icon {
                        width: 70px;
                        height: 32px;
                        background-color: rgb(238, 213, 213);
                    }
                }
                .btn {
                    width: $width;
                    .el-button--large {
                        width: $width;
                    }
                }
                .login-input {
                    width: $width;
                    height: 36px;
                }
            }
        }
    }
}
</style>