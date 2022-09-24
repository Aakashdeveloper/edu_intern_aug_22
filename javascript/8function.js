var a = 10;
var b = 20;
a+b
30

// keyword nameoffunction(parameters){
//     return output
// }

function add(a,b){
    return a + b
}

add(1,2)
3
add(6,99)
105
add('v','g')
'vg'
add(786876,87687)
874563

function isEven(userInput){
    let output;
    if(userInput%2 == 0){
        output =`Number ${userInput} is even`
    }else{
        output =`Number ${userInput} is odd`
    }
    return output
}

isEven(10)
'Number 10 is even'
isEven(11)
'Number 11 is odd'

///////es5////
function add(a,b){
    return a + b
}

///////es6////
let addfn = (a,b) => {
    let output;
    if(userInput%2 == 0){
        output =`Number ${userInput} is even`
    }else{
        output =`Number ${userInput} is odd`
    }
    return output
}

/////////
function add(a,b){
    return a,b
}
add(1,2)
2


function add(a,b){
    return b,a
}
add(1,2)
1

function add(a,b){
    var out = [a,b];
    return out
}