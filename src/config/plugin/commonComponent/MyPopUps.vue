<template>
    <div>
        <div ref = "msg" 
            :class = "{
                msgBaseStyle: true,
                activeMsg: msgState
            }" >
            <div class = "msg_warpper">
                {{text}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MyPopUps",
    props:{
        msg: String
    },
    data(){
        return {
            text:"",
            msgState: false
        }
    },
    methods:{
        msgPlugin(msg, time = 2000) {
            this.text = msg;
            this.msgState = true;
            setTimeout(() => {
                this.msgState = false;
            }, time)
        }
    },
    mounted(){
        // console.log(this.$refs.msg)
    }
}
</script>

<style scoped>
.msgBaseStyle{
    position :absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
    width:0;
    min-height: 0;
    text-align: center;
    background: rgba(0, 0, 0, .5);
    border-radius: 5px;
    color:#fff;
    transition: all 0.5s;
    z-index: -1;
    opacity: 0;
}
.msgBaseStyle.activeMsg{
    width: 150px;
    min-height: 25px;
    opacity: 1;
    z-index: 11;
}
</style>