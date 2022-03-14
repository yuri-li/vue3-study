const rules = {
    phone: [
        // { required: true, message: "请输入手机号", trigger: "blur", },
        { required: true, message: "请正确输入手机号", trigger: "blur" },
        {
            pattern: "^134[0-8]\\d{7}$|^13[^4]\\d{8}$|^14[5-9]\\d{8}$|^15[^4]\\d{8}$|^16[6]\\d{8}$|^17[0-8]\\d{8}$|^18[\\d]{9}$|^19[8,9]\\d{8}$",
            message: "手机号输入错误",
             trigger: "blur"
        },
        // {
        //     pattern: "^134[0-8]\\d{7}$|^13[^4]\\d{8}$|^14[5-9]\\d{8}$|^15[^4]\\d{8}$|^16[6]\\d{8}$|^17[0-8]\\d{8}$|^18[\\d]{9}$|^19[8,9]\\d{8}$",
        //     message: "请输入正确的手机号码",
        //     trigger: "blur",
        // },
    ],
    pwd: [
        {required:"true",message:"请正确输入密码",trigger:"blur"},
        {required:"true",message:"密码至少6位",trigger:"blur",min:6}
    ],
}

enum Role {
    admin = "admin",
    seller = "seller"
}
class Form {
    phone: string | undefined
    pwd: string | undefined
    role = Role.seller
}



export { rules, Form, }