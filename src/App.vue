<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="header">
      header
      <NavComponent/>
    </div>
    <div class = "center">

      <router-view/>
    </div>
    <div class="footer">
      footer
    </div>
    <!-- <GisMap/> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import GisMap from "@/pages/Openlayers.vue"
export default {
  name: 'App',
  components: {
    NavComponent: () => import("./components/NavComponent")
  }
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:0; margin:0;
  height: 100%;
}
.header,.footer{
  height: 100px;
  background: #999;
  color:#fff;
}
.center{
  height: 500px;
}
</style>
