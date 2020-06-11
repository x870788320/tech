import Vue from 'vue'
import router from './router'
import App from './App.vue'
import plugin from './config/plugin'
import store from './store'
import "./index.css"

Vue.config.productionTip = false
Vue.use(plugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
