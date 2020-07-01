<template>
    <div class = "lottery2">
        <div class = "container">
            <div v-for="(item) in prizeData" 
                :key="item.id"
                :class="{ 
                    baseListStye:true,
                    clickStyle:item.id === selectVal
                }">
                {{item.id}}
            </div>
        </div>
        <div class = "btns">
            <button @click="startCircle()">start</button>
            <button @click = "endCircle()">end</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"lottery2",
    data(){
        return {
            prizeData:[
                {
                    id:1,
                    text:"wefdsefs",
                    msg:"edsf"
                },
                {
                    id:2,
                    text:"wefdsefs",
                    msg:"edsf"
                },
                {
                    id:3,
                    text:"wefdsefs",
                    msg:"edsf"
                },
                {
                    id:4,
                    text:"wefdsefs",
                    msg:"edsf"
                },
                {
                    id:5,
                    text:"wefdsefs",
                    msg:"edsf"
                },
                {
                    id:6,
                    text:"wefdsefs",
                    msg:"edsf"
                },
                {
                    id:7,
                    text:"wefdsefs",
                    msg:"edsf"
                },
                {
                    id:8,
                    text:"wefdsefs",
                    msg:"edsf"
                },
                {
                    id:9,
                    text:"wefdsefs",
                    msg:"edsf"
                }
            ],
            timer:null,
            circleData:[1,2,3,6,9,8,7,4],
            selectVal:5,
            speed:150,
            circleDataId: 0,
            getPrizeId: 8,
            count:32,
            hasClick : false
        }
    },
    computed:{
        countComputed:{
            get(){
                return this.count + this.circleData.length - this.circleData.indexOf(this.getPrizeId) -1
            },
            set(v){
                this.count = v
            }
        },
    },
    methods:{
        initTimer(){
            this.speed = 150
            this.hasClick = false
            this.count = 32;
            clearTimeout(this.timer);
        },
        timeOutFn(){
            //通过改变selectVal值，来控制显示
            this.circleDataId > 7 ?
                this.selectVal = this.circleData[0] && (this.circleDataId = 1) :
                this.selectVal = this.circleData[this.circleDataId++];
            //当剩余10个时开始减速
            (this.count-- <= 10) && (this.speed += 75)
            //再次设置延时操作，实现setinterval
            this.timer = setTimeout(this.timeOutFn,this.speed)
            //当count=0时结束转动
            if(this.count <= 0){
                this.initTimer();
                if(this.selectVal != this.getPrizeId){
                    console.log("error:connot connect to the network, please re-extract!")
                    // this.timer = setTimeout(this.timeOutFn,this.speed)
                }
                console.log("close")
            }
        },
        startCircle(){
            //防止重复点击
            if(this.hasClick) return ;
            this.hasClick = !this.hasClick;
            //需要转动的格数+中奖的index-当前所在的index
            this.count = this.count + this.circleData.indexOf(this.getPrizeId) -this.circleData.indexOf(this.selectVal)
            setTimeout(this.timeOutFn,this.speed)
        },
        endCircle(){
            this.initTimer() 
        }
    },
    mounted(){
    },
    destroyed(){
        this.initTimer()
    }

}
</script>

<style scoped>
.lottery2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
}
.container{
    width: 360px;
    height: 360px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
}
.baseListStye {
    width: 100px;
    height: 100px;
    border:1px solid #888;
    display: flex;
    justify-content: center;
    align-items: center;
}
.clickStyle{
    border:1px solid #f80;
    color:#f80;
}
.btns{
    width: 360px;
    height: 80px;
    display: flex;
    justify-content: space-around;
}
.btns button{
    width: 80px;
    height: 35px;
    border: none;
    border:1px solid rgba(255,88,0,.5);
    color:rgba(255,88,0,.5);
}
.btns button:hover{
    background: rgba(255,88,0,.5);
    color:#fff;
}
</style>
