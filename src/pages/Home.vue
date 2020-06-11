<template>
    <div>
        homehome
        <button @click=" handleClick() "> 
            按钮
        </button>
        <MyPopUps ref= "msg"/>
        <input v-focus/>
        <button v-display-key = "'displayKey'">按钮1</button>
        <button v-display-key = "3">按钮2</button>
        <button v-display-key = "8">按钮3</button>
        <button>按钮4</button>
    </div>
</template>

<script>
export default {
    name: "home",
    methods:{
        handleClick(){
            this.$nextTick(() => {
                this.$refs.msg.msgPlugin("这个是测试弹窗", 5000)
            })
        }
    },
    created(){
        console.log(this.$store.getters.aas)
        console.log(this.$store.state.name)
    },

    mounted(){
        // console.log(this.$store.state.isLogIn)

    }
}
</script>

<style scoped>

</style>
