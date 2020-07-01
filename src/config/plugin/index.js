import { firstCharUpper } from "../until"
import directive from "./directive"
import http from "./globalMethod/http"

console.log(http)

//获取vue公共组件
const requireComponent = require.context('./', true, /\.vue$/);

const install = Vue => {
    if(install.installed) return;
    install.installed;
    
    //一些测试
    Vue.prototype.$msg = "全局状态"
    Vue.prototype.$Method = function(){
        console.log("全局方法")
        return false;
    }

    //公共组件放到vue
    requireComponent.keys().map(fileName => {
        const config = requireComponent(fileName)
        const componentName = firstCharUpper(config.default.name);
        Vue.component(componentName, config.default || config)
    });

    //公共指令放到vue
    Object.keys(directive).map( name => Vue.directive(name, directive[name]))

}

if( typeof window !== "undefined" && window.Vue ) {
    install(window.Vue)
}

export default { install }
