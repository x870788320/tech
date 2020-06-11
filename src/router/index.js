import Vue from "vue"
import Router from "vue-router"
import store from "../store"
import { hasPermission, vGradeInfo } from "../config/until/permissions"

console.log(vGradeInfo("v4"))

//点击路由后再次点击报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

//获取routes文件内的路由，解构到router里面
const routeList = [];
const requireRoutes = require.context('./routes', true, /\.route\.js/)
requireRoutes.keys().map(route => routeList.push(requireRoutes(route).default))

//临时数据 不登录时可以看的页面
const canSeePage = ["login", "home"]

Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [{
            path: "/",
            name: "home",
            component: () =>
                import ('../pages/Home')
        },
        ...routeList,
        {
            path: "/nopermission",
            name: "nopermission",
            component: () =>
                import ('../pages/NoPermission.vue')
        },
        {
            path: "/login",
            name: "login",
            component: () =>
                import ('../pages/Login.vue')
        }
    ]
})


//路由守卫 先声明target 可以避免死循环  
// https://www.cnblogs.com/amysu/p/10951067.html
router.beforeEach(async(to, from, next) => {
    let target = null
    if (store.state.isLogin) {
        try {
            //可以拿到具体显示数组
            // await store.dispatch("getPowerList")
            //只能拿到用户信息vip
            await store.dispatch("getUserVipGrade")
            const { permissions } = to.meta
            target = permissions && !hasPermission(permissions) && { name: "nopermission" };
        } catch {
            console.log("Error:Can't get user permission !")
            target = !canSeePage.includes(to.name) && { name: "home" };
        }
    } else {
        target = !canSeePage.includes(to.name) && { name: "login" };
    }
    target ? next(target) : next();
})

export default router;