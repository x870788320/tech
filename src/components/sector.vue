<template>
    <div class = "sector">
        <canvas width="150" height="150" ref = "sector"></canvas>
    </div>
</template>

<script>
export default {
    name:"sector",
    data(){
        return {
            prizeNum:6
        }
    },
    props:{

    },
    methods:{
        //https://blog.csdn.net/weixin_38547641/article/details/101779548
        //https://www.cnblogs.com/givebest/p/5296335.html
        DrawSector (start_angle,angle,radius,fill,anticlockwise) {
            let canvas = this.$refs.sector;
            if( !canvas.getContext ) {
                console.log("不知池")
                return;
            };
            let centerPoint = {x:75,y:75};
            let ctx = canvas.getContext("2d");

            start_angle = start_angle || 0;
            
            // 保存当前状态
            ctx.save();
                //开始绘制路径
            ctx.beginPath();
            //画出弧线du
            ctx.arc(centerPoint.x,centerPoint.y,radius,start_angle,angle,anticlockwise);
            //画出结束半径
            ctx.lineTo(centerPoint.x,centerPoint.y);
            //如果需要zhi填充就填充，不需要就算了
            if (fill) {
                ctx.fill();
            }else{
                ctx.closePath();
                ctx.stroke();
            }
        }
    },
    mounted(){
        //画一个起始角度为bai45度，结束角度为90度，绘图方向顺时针的填充扇形
        this.DrawSector(Math.PI/4,2*Math.PI/3,50,false,false);
        //画一个起始角度为-90度，结束角度为-135度，绘图方向逆时针的未填充扇形
        // DrawSector(canvas,-Math.PI/2,-Math.PI*3/4,50,false,true);
    }
    
}
</script>

<style scoped>
/* .sector{
    height: 0;
    width: 0;
    border-width: 50px;
    border-style: solid;
    border-color:  transparent #ff0 transparent transparent;
} */
.sector{
    width: 100%;
    height: 100%;
}
.sector canvas{
    width: 100%;
    height: 100%;
}
</style>