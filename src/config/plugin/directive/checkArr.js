import store from "../../../store"

const getPowerList = () => 
    new Promise ( resolve => 
        setTimeout(() => {
            resolve(store.state.displayKey)
        }, 1000))


const checkArr = async() => {
    const  displayList = await getPowerList()
    console.log(displayList)
    return displayList
}

export default checkArr