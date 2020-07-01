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
    const trigger = function(key, ...rest) {
        //arguments不是真正的数组，不能用一些数组方法，可以通过下面方法拿出arguments（参数）中第一个参数
        //把一个伪数组或者对象，变为数组
        
        // console.log( Array.prototype.slice.call(arguments))
        // let key = Array.prototype.shift.call(arguments)
        console.log("key"+key)
        console.log("rest"+rest)
        let fns = clientList[key]
        if (!fns || fns.length == 0) return ;
        //arguments中剩余参数在function里面执行
        fns.map(fn => fn.apply(this, rest))
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


const Obser2 = {
    list:{},
    subscribe:function(key,fn){
        if(!this.list[key]){
            this.list[key] = []
        }
        this.list[key].push(fn)
    },
    publish:function(key, ...arg){
        if(!this.list[key])return 0;
        for(const fn of this.list[key]){
            fn.call(this, ...arg)
        }
    },
    unSubscribe: function(key, fn) {
        const fnList = this.list[key]
        if(!fnList) return false;
        if(!fn) {
            fnList && (fnList.length = 0)
        } else {
            fnList.forEach((item, index) => {
                if(item === fn){
                    fnList.splice(index, 1)
                }
            });
        }
    }
    
}





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

    // console.log(await PromiseTe + item)
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


// console.log(assignment(objTest,{aa:5,dd:6},{cc:8}))
// console.log({...objTest,...{aa:5,dd:6},...{cc:8}})
// console.log(assignment(4,3,4,56))



var _toString = Object.prototype.toString;

const toRawType = value => _toString.call(value).slice(8, -1)


// const asdfa = [1,2,3,45]
const ming = 45
// console.log(toRawType(ming))



var debounce = function(fn, delay, context) {
    let timer = null;
    return function() {
        // console.log(this)
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        const arg = Array.prototype.slice.call(arguments);
        fn.apply(undefined, arg);
      }, delay)
    }
  }
  
  // 测试部分
  var run = function(text) {
    console.log(text);
  }
  
  run = debounce(run, 200);
  
  run('run1');
  run('run2');
  
  setTimeout(() => {
    run('run3');
  }, 201)

  const Throttle = (method, context) => {
	clearTimeout(method.tid);
	method.tid = setTimeout( () => {
        method.call(context)
    }, 3000)
}

// Throttle(() => console.log("-------"), this)



function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse(
      '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"')
          .replace(/\+/g, ' ') +
        '"}'
    )
  }


  let arr11 = [1,2,3,4,5]
const [first, ...rest] = arr11
console.log(first)
console.log(rest)
console.log(arr11)

// const deviceW =window.document.body.clientWidth

// console.log(deviceW)


const oooo = function (){
    this.fe = "fe"
}


oooo.prototype.getCurrentHandle = function(name){
    let obj = this.name = {a:1}
    // console.log(obj)
    return this

}
const testoo = new oooo()

// console.log(testoo.getCurrentHandle().name.a)
// oooo.getCurrentHandle("ss")
// console.log(oooo)

// myServe.prototype.getCurrentHandle = function (vue){
//     this.currentHandle = vue
//     return this
// }

let eee,addd = [1,2,4,6,7]
let adddtest = function(){
    // for(var i = 0; i < addd.length; i++) {
    //     if(addd[i]==4){
    //         return addd[i]
    //     }
    // } 
    addd.map(item => {
        if(item==4){
            eee = item
        }
    })
    return eee
}

// console.log(adddtest())

let test299 = (false && "fw") || "ffff"
// console.log(test299)

let test302 = {}
// console.log(test302[0])
// console.log(test302.aa)

let test306 = {a:2,b:3,c:5}

let [test3061,test3062,test3063] = [test306.a,test306.b,test306.c]
// console.log(test3063)

function rand(start, end) {
    return parseInt(Math.random() * (end - start + 1) + start);
}
/*
method：生成随机验证码
@para num：验证码位数
*/
function verificationCode(num) {
    var code = "";
    for (var i = 0; i < num; i++) {
        // 如果生成随机数1，验证码从1-9中随机
        if (rand(1, 3) == 1) {
            code += String.fromCodePoint(rand(48, 57));
        // 如果生成随机数2，验证码从A-Z中随机
        } else if (rand(1, 3) == 2) {
            code += String.fromCodePoint(rand(65, 90));
        // 如果生成随机数3，验证码从a-z中随机
        } else {
            code += String.fromCodePoint(rand(97, 122));
        }
    }
    return code;
}
// 我们随机生成10个6位的验证码
for (var i = 0; i < 10; i++) {
    // console.log(verificationCode(6));
}


// while (codeRange) {
//     randomCode(codeRange.shift(),codeRange.shift())
//   }

let randomNum = (start, end) => parseInt(Math.random() * (end - start + 1) + start);
let code = ''
// for(var i =0;i<6;i++){
//     code += randomNum(1,3) == 1 ? String.fromCodePoint(randomNum(48,57)):
//             randomNum(1,3) == 2 ? String.fromCodePoint(randomNum(65,90)):
//             String.fromCodePoint(randomNum(97,122));
// }
let asd = 6
while(asd--){
    code += randomNum(1,3) == 1 ? String.fromCodePoint(randomNum(48,57)):
            randomNum(1,3) == 2 ? String.fromCodePoint(randomNum(65,90)):
            String.fromCodePoint(randomNum(97,122));
}
console.log(code)
