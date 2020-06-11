// import { resolve } from "_any-promise@1.3.0@any-promise";



const getSum =  ( min = 0, max = 100 ) => {
    let sum = 0;
    const compute = ( min, max ) => {
        sum += min++;
        min <= max && compute(min, max) ;
    }
    compute(min, max)
    return sum
}

console.log(getSum(2,4))



const ObserverEvent = (function() {
    let clientList = {}
    const listen = function (key, fn) {
        clientList[key] = clientList[key] || []
        clientList[key].push(fn)
    };
    const trigger = function() {
        //arguments不是真正的数组，不能用一些数组方法，可以通过下面方法拿出arguments（参数）中第一个参数
        //把一个伪数组或者对象，变为数组
        
        // console.log( Array.prototype.slice.call(arguments))
        let key = Array.prototype.shift.call(arguments)
        let fns = clientList[key]
        if (!fns || fns.length == 0) return ;
        //arguments中剩余参数在function里面执行
        fns.map(fn => fn.apply(this, arguments))
        // console.log(arguments)
        // console.log(key)
        // console.log(fns)
    };
    const remove = function (key, fn) {
        let fns = clientList[key]
        if (!fns ) return;
        !fn && ( fns.length = 0 );
        fns.map((item, index) => (item == fn) && fns.splice(index, 1))
    }
    return {
        listen, trigger, remove
    }
})()

ObserverEvent.listen("aaa", fn1 = function(price,p1, p2){
    console.log("price = " + price)
    
    console.log("p1 = " + p1)
    console.log("p2 = " + p2)
})
ObserverEvent.listen("aaa", fn1 = function(name){
    console.log("name = " + name)
})
ObserverEvent.listen("bbb", function(price){
    console.log("priceee"+ price)
})
ObserverEvent.trigger("aaa", 200,300,400)

ObserverEvent.trigger("bbb", 25345300)


const  aa= {
    0:"sfsdf",
    1:"123",
    2:"dsf"
}

console.log(Array.prototype.slice.call(aa))
const bb = [1,2,3,4,5]
// const cc = bb
// const cc = Array.prototype.slice.call(bb)
const cc = JSON.parse(JSON.stringify(bb))
cc.push(7,8)

// console.log(Array.prototype.slice.call(bb))
// console.log(Array.prototype.slice.call(cc))




//单例模式 
//当result没有值时执行传进来的fn返回的值赋值给result，根据单例变量'result'是否有值，来决定是否调用fn产生一个result值

var singleton = function(fn) {
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments)); //关于这里的代码，作用是arguments是参数
    }
}

var createMask = singleton(
    function() {
        return document.body.appendChild(document.createElement('div'));
    }
)


const PromiseTe  = new Promise(resolve => {
    setTimeout(() =>{
        resolve("1111+")
    }, 10)
})

const arr = [1,2,3,4,5]
arr.forEach(async ( item ) => {

    console.log(await PromiseTe + item)
})

const aasd = async() => await PromiseTe
// console.log(aasd)

const testArr = [1,2,3,4,5]
const objTest = {
    aa:1,
    bb:2,
    cc:3
}
// console.log(testArr.concat([1,2,3]))
// console.log([...testArr,[1,2,3]])
// console.log({...objTest,...{aa:6,dd:4}})

const assignment = function() {
    // console.log( Array.prototype.slice.call(arguments))
    
    // let key = Array.prototype.shift.call(arguments)
    let concatArr =  Array.prototype.slice.call(arguments)
    // let restObj = concatArr.reduce((previous,current) => ({...previous, ...current}),{})
    return {...concatArr.reduce((previous,current) => ({...previous, ...current}),{})}
}


console.log(assignment(objTest,{aa:5,dd:6},{cc:8}))
console.log({...objTest,...{aa:5,dd:6},...{cc:8}})
// console.log(assignment(4,3,4,56))

