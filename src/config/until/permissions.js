
import store from "../../store"


//export  可以通过import解构来拿，
//export default  通过import拿  https://www.jianshu.com/p/f3268bdfdee3
// export { checkPermission }

//临时方法 检查路由里面meta是否在拿到的权限列表里 
export const hasPermission = permissions => {
    //后端返回具体数值
    // const { displayKeys } = store.state
    //     // if是数组    !!permissions.find(permission => permissionList.includes(permission))
    // return displayKeys.includes(permissions)

    //后端只返回一个v3
    const { userVipGrade } = store.state
    return vGradeInfo(userVipGrade).viewPage.includes(permissions)
}

//工厂模式写法

export const vGradeInfo = function(role) {
    try {
        //如果new了，true,
        return this instanceof vGradeInfo ? new this[role](): new vGradeInfo(role);
    } catch {
        //抛出错误
        // throw new Error('参数错误, 可选参数:"v1","v2","v3","v4","v5"'); 

        console.log('参数错误, 可选参数:"v1","v2","v3","v4","v5", 默认: "v1"')
        return this instanceof vGradeInfo ? new this["v1"](): new vGradeInfo("v1"); 
    }
}

vGradeInfo.prototype = {
    v1: function(){
        this.name = "VIP1",
        this.viewPage = [1,2,3,4,5]
    },
    v2:function(){
        this.name = "VIP2",
        this.viewPage = [1,2,3,4,5,6,7]
    },
    v3:function(){
        this.name = "VIP3",
        this.viewPage = [1,2,3,4,5,6,7,8]
    },
    v4:function(){
        this.name = "VIP4",
        this.viewPage = [1,2,3,4,5,6,7,8,9]
    },
    v5:function(){
        this.name = "VIP5",
        this.viewPage = [1,2,3,4,5,6,7,8,9,10]
    }
}
