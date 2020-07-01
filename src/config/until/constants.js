


const constants = {
    ACTION_GO_LOGIN: "ACTION_GO_LOGIN",
    children:{
        aa:"sdfsdf"
    }
}



export const freezeObj = obj => {
    Object.seal(obj)
    Object.freeze(obj)
    Object.keys(obj).map(key => 
        (typeof obj[key] === "object") && freezeObj(Object(obj[key])))
}

export default (function(){
    constants && freezeObj(constants)
    return constants
})()

// const format = (fn, obj) => {
//     obj && fn(obj)
//     return obj
// }

// export default format( freezeObj, constants) 


// export const SIDEBAR_TYPE = 'sidebar_type'
// export const TOGGLE_MOBILE_TYPE = 'is_mobile'
// export const TOGGLE_NAV_THEME = 'nav_theme'
// export const TOGGLE_LAYOUT = 'layout'
// export const TOGGLE_FIXED_HEADER = 'fixed_header'
// export const TOGGLE_FIXED_SIDEBAR = 'fixed_sidebar'
// export const TOGGLE_CONTENT_WIDTH = 'content_width'
// export const TOGGLE_HIDE_HEADER = 'auto_hide_header'
// export const TOGGLE_COLOR = 'color'
// export const TOGGLE_WEAK = 'weak'
// export const TOGGLE_MULTI_TAB = 'multi_tab'
// export const APP_LANGUAGE = 'app_language'






