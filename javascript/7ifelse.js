if(condition is true){

}else{

}
//////////
var a = 10
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even

var uname = "John"
if(uname == "John"){
    console.log(`Hi ${uname} you are admin`)
}else if(uname == "Bhumika"){
    console.log(`Hi ${uname} you are super admin`)
}else{
    console.log(`Hi ${uname} you are unknown`)
}
> Hi John you are admin

/////////////ternary operator (single line ifelse)
condition ? if condition true : if condition false

var a = 10
a > 10 ? "Hii":"Bie"

var a = 10
a > 10 ? "Hii":"Bie"
'Bie'
var a = 10
a == 10 ? "Hii":"Bie"
'Hii'
var a = 10
a == 10 ? a+1:a-1
11
var a = 10
a > 10 ? a+1:a-1
9