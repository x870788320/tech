/**
 * Axios.interceptors.request.use(config => config,error => error)
 * Axios.interceptors.response.use(config => config,error => error)
 *  */



function Axios(){
    this.interceptors = {
        request : new interceptorsManner(),
        response :new interceptorsManner()
    }
}

Axios.prototype.requset = function(){
    var chain = [dispatchRequset, undefined]
    var promise = Promise.resolve();
    this.interceptors.request.handler.forEach(interceptor => {
        chain.unshift(interceptor.resolve, interceptor.reject)
    })

    //chain = [console.log(1), undefined, console.log(2), undefined, dispatchRequest,undefined]
    
    this.interceptors.response.handler.forEach(interceptor => {
        chain.push(interceptor.resolve, interceptor.reject)
    })

    // chain = []

    while (chain.length){
        promise = promise.then(chain.shift(), chain.shift())
    }
}

function interceptorsManner (){
    this.handler = []
}

interceptorsManner.prototype.use = function use (resolve, reject){
    this.handler.push({
        resolve,reject
    })
}


//注册方法
util.forEach(["get", "post","head","delete"], function (method) {
    Axios.prototype[method] = function (url, config) {
        return this.request(util.merge(config||{}, {
            method, url
        }))
    }
})