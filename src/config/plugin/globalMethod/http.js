import axios from "axios"
import router from "@/router"

const toLogin = () => router.replace({name: "login"})

const errorHandle = (status, msg) => {
    switch(status){
        case 200:
            toLogin();
            break;
        default:
            window.console.log(msg);
    }
}

let Axios = axios.create({
    baseURL:"",
    timeout: 1000*10,
    responseType: "json",
    withCredentials: true, //是否允许带cookie
})

Axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded;charset=utf-8";

Axios.interceptors.request.use(
    config => {
        console.log("request")
        config.data = JSON.stringify(config.data)
        if (config.method == 'post'){
            let formObj = new FormData();
            console.log(config)
            formObj.append('file',"config", "s" ) //todo
        }
        return config
    },
    error =>  Promise.error(error)
)

Axios.interceptors.response.use(
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    error => {
        const { response } = error;
        console.log(response)
        
        errorHandle(response.status, response.data.message);
        return Promise.reject(response);
    }
)

/**
 *         return config
    },
    error => Promise.error(error)
)

Axios.interceptors.response.use(
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            window.console.log(response);
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            // store.commit('changeNetwork', false);
            window.console.log("请查看网络");
        }
    }
)
 *  */


//方便使用封装get方法
export const get = (url, params) => {
    return new Promise((resolve, reject) => {
        Axios.get(url, { params }).then( res => {
            resolve(res.data)
        }).catch(error => {
            reject(error.data)
        })
    })
}

//方便使用封装post方法
export const post = (url, params) => {
    return new Promise((resolve, reject) => {
        Axios.post(url, { params }).then( res => {
            resolve(res.data)
        }).catch(error => {
            reject(error.data)
        })
    })
}

export default Axios;

