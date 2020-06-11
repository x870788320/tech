<template>
    <div>
        哎木骚瑞！你木有权限！
        你可以尝试以下操作-------
        哭
        <div>
            <button @click="goLogin">登录</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "noPermisssion",

    methods:{
        goLogin(){
            this.$router.push({
                name: "login"
            })
        }
    }
}
</script>

<style scoped>

</style>