import myServe from "./request/geterquest"
import login from "./login"

import shop from "./shop"


myServe.parseRouter("login", login)
myServe.parseRouter("shop", shop)

export default myServe


