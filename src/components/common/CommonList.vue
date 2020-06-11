<template>
    <div class = "commonList">
        <div v-for="item in navList"
         :key="item.name"
         @click="go(item)"
         :class="{ 
             baseListStye:true,
             clickStyle:$route.name === item.path
             }">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
    name: "commonList",
    data(){
        return {

        }
    },
    props:{
        navList:{
            type: Array,
            required: true
        }
    },
    methods:{
        go(path){
            this.$router.push({
                name:path.path
            })
        }
    },
    created(){
        // console.log(this.navList)
    }
}
</script>

<style scoped>
.commonList{
    display: flex;
}
.baseListStye{
    margin-left: 30px
}
.clickStyle{
    color:#000
}
</style>