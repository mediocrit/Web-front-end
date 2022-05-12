//手写apply
//1、es6写法
Function.prototype.myapply=function(context,args){
    let key=Symbol("key")
    context[key]=this
    let result=context[key](...args)
    delete context[key]
    return result
}
//2、es5写法
// Function.prototype.myapply1=function(context){
//     let args=Array.prototype.slice(arguments)
// }
let a={}
function sum(a,b){
    return a+b
}
console.log(sum.apply(a,[1,1]))
console.log(sum.myapply(a,[1,1]))