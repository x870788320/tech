<template>
    <div class = "lottery">
        <div class="fixedPlate">
            <div class = "">
                DSF
            </div>
        </div>
        <div class = "rotatePrize">
            <Sector/>
        </div>
    </div>
</template>

<script>
import Sector from "../components/sector"
export default {
    name:"lottery",
    components:{Sector},
    data(){
        return {
            prizeData:[
                {
                    id:1,
                    name:"问过色粉",
                    angle:1,
                    probability:1
                },
                {
                    id:2,
                    name:"问过色粉",
                    angle:1,
                    probability:1
                },
                {
                    id:3,
                    name:"问过色粉",
                    angle:1,
                    probability:1
                },
                {
                    id:4,
                    name:"问过色粉",
                    angle:1,
                    probability:1
                },
                {
                    id:5,
                    name:"问过色粉",
                    angle:1,
                    probability:1
                }
            ]
        }
    }
}
</script>

<style scoped>
.lottery{
    width: 300px;
    height: 300px;
    border: 1px solid #888;
    position: relative;
    /* padding: 10% */

}
.fixedPlate{
    width: 80%;
    height: 80%;
    position: absolute;
    left: 10%;
    top:10%;
    background: #f90;
    border-radius: 50%;
    border:1px solid #888
}
.rotatePrize{
    width: 80%;
    height: 80%;
    position: absolute;
    left: 10%;
    top:10%;
}
</style>