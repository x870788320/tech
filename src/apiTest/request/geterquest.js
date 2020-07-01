import serve from "./server"
import qs from "qs"

function myServe(){
    this.serve = serve
    this.currentHandle = null
    this.state = true
}

myServe.prototype.getCurrentHandle = function (vue){
    this.currentHandle = vue
    return this
}

myServe.prototype.parseRouter = function (name, urlObj){
    let obj = this[name] = {}
    Object.keys(urlObj).map(item => {
        obj[item] = this.sendMessage.bind(this, name, item, urlObj[item])
        obj[item].state = "ready"
    })
}

myServe.prototype.sendMessage = function (moduleName, name, url, config) {
    let config = config || {}
    let data = config.data || {}
    let type = config.type || "get"
    let _this = this
    //一些before操作，加遮罩等

    let before = function (msg) {
        _this.state = true
        return msg
    }

    //自己控制请求默认
    let defaultFn = function(msg) {
        _this[moduleName][name].state = "ready"
        return msg
    }

    let defaultError = function() {}

    let success = config.success || defaultFn
    let callback = function (res) {
        success(res, defaultFn)
    }

    let state = {
        get: function(){
            let urlQs = url + "?" + qs.stringify(data);
            serve.get(urlQs).then(before).then(callback);
        },
        post: function(){
            serve.post(url,data).then(before).then(callback)
        }
    }

    if(_this[moduleName][name].state == "ready") {
        _this[moduleName][name].state == "pending"
        state[type]()
    }

}


export default new myServe

// mounted(){
//     myServe.v(this)
//     myServe.login.loginIn()
// }