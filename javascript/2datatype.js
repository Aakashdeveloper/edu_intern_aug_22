true+true
2
true+false
1

true is equal to 1
false is equal to 0

10+true
11
10/false
Infinity

"10"+true
'10true'

"a"+false
'afalse'

"true"+"true"
'truetrue'

"true"-"true"
NaN

var a = "10"
var b = "20"


var a = "10"
var b = "20"
undefined
a+b
'1020'
parseInt(a)
10
parseInt(b)
20
parseInt(a)+parseInt(b)
30
parseInt(a+b)
1020
var a = "Hii"
undefined
parseInt(a)
NaN


var a = "123Delhi456"
var b = "Delhi123"

parseInt(a)
123
parseInt(b)
NaN

var c = parseInt(a)
c 
123


var a = "10.11"
var b = "20"

parseInt(a)+parseInt(b)
30

a+b
'10.1120'
parseFloat(a)+parseFloat(b)
30.11

//es6
var a = "10.11"
var b = "20"
Number(a)
10.11

Number(a)+Number(b)
30.11

var a = "123Delhi456"
var b = "Delhi123"
Number(a)
NaN
Number(b)
NaN
