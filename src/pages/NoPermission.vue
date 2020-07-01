<template>
    <div>
        哎木骚瑞！你木有权限！
        你可以尝试以下操作-------
        哭{{divaceWidth}}
        <div>
            <button @click="goLogin">登录</button>
        </div>
        <div v-if = "$Method()">
            test
        </div>
    </div>
</template>

<script>
import constants from "@/config/until/constants"
import { ObserverEvent, deviceW} from "@/config/until"
const {ACTION_GO_LOGIN} = constants


export default {
    name: "noPermisssion",
    // data: () => ({
    //     hasListen: false
    // }),
    data(){
        return{
            hasListen: false
        }
    },
    computed:{
        divaceWidth(){return deviceW}
    },
    mounted(){
        // constants.ACTION_GO_LOGIN = "sdfsdf"
        // constants.children.aas = "fsdf"
        // vGradeInfo("v2") = {aa:"sdfsd"}
        console.log(this)
        // console.log(sss)
        this.BbserveTest("sssads")
        ObserverEvent.trigger(ACTION_GO_LOGIN,"sefdsefsefsge")
    },

    created(){
            console.log(this.hasListen)
        if(!this.hasListen){
            ObserverEvent.listen(ACTION_GO_LOGIN, this.BbserveTest)
            this.hasListen = true
        }
    },
    destroyed(){
        ObserverEvent.remove(ACTION_GO_LOGIN)
    },

    methods:{
        goLogin(){
            this.$router.push({
                name: "login"
            })
        },
        
        BbserveTest(param){
            console.log(param)
        },
        
    }
}
</script>

<style scoped>

</style>