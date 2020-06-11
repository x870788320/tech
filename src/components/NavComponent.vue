<template>
    <div>
        <CommonList :navList = "navlist"/>
    </div>
</template>

<script>
export default {
    
    name:"navComponent",
    data(){
        return{
            navlist:[
                {
                    name:"首页",
                    path:"home"
                },
                {
                    name:"GIS",
                    path:"gismap"
                },
                {
                    name:"THREE",
                    path:"three"
                }
            ]
        }
    },

    components: {
        CommonList: () => import("./common/CommonList")
    }
}
</script>

<style scoped>

</style>