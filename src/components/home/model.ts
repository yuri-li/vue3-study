import {ref} from "vue"

const extend=ref(false)

 function bian(){
    const boo=extend.value=!extend.value
    return boo
}

export {extend,bian}