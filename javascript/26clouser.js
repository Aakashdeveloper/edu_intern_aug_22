// enclose something;
// global scope
// local scope

// var a = 10
// function add(){
//     var b = 20;
//     return a+b
// }

// console.log(">>>>add",add())
// console.log(">>>>A>>>",a)
// console.log(">>>>B>>>",b)

// >>>>add 30
// >>>>A>>> 10
// console.log(">>>>B>>>",b)
// ReferenceError: b is not defined

var a = 10
for(i=0;i<5;i++){
    let b= 20
    console.log(a+b+i)
}
console.log(">>>>A>>>",a)
console.log(">>>>B>>>",b)