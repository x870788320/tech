import { get, post } from "../plugin/globalMethod/http"

export const getTest1 = params => post("", params)
export const getTest2 = params => get("", params)
export const getTest3 = params => {
    const formData = new FormData()
    formData.append("userName", params.userName)
    formData.append("passWord", params.passWord)
    return post("", formData)
}
