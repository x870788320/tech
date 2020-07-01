
import { hasPermission } from "@/config/until/permissions"

//获取焦点指令
const focus = {
    bind: function(){
    },
    inserted:function(el){
        el.focus()
    }
}

//组件显示指令
const displayKey = {
    inserted(el, binding) {
        let displayKey = binding.value //value需要在使用指令地方定义
        if( displayKey ) {
            !hasPermission(displayKey) && el.parentNode && el.parentNode.removeChild(el);
            // el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
        } else {
            throw new Error (`need Key! Like v-display-key = "'displayKey'"`);
        }
    }
}

export default {
    focus,
    'display-key': displayKey
}