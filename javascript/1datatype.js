es5 > Ecma Script 5
es6 > Ecma Script 6


DataTypes
>> String = "Hii"  'Hiii'  `Hello` "10" 'true'
>> Number = 1000 7867867867 3 .443654 34543.4654
>> Boolean = true false

//es5
var a = "Hiii"
typeof(a)
'string'

var b = 10
typeof(b)
'number'

var c = true
typeof(c)
'boolean'

var d = 10.11
typeof(d)
'number'

var e = "10"
typeof(e)
'string'

var e = "true"
typeof(e)
'string'

var e = `true`
typeof(e)
'string'

var a = 10
var b = 20
undefined
a+b
30
a-b
-10
b-a
10
a*b
200
a/b
0.5
b%a
0

2%4
2
3%4
3
4%4
0

var a= "Hii"
var b = "JavaScript"
a+b
'HiiJavaScript'
a-b
NaN (not a number)
a*b
NaN
a/b
NaN

var a= "Hii"
var b = 10
a+b
'Hii10'
a-b
NaN

string + string = string
string + number = string
number + string = string
number + number = number

"10"+20+30
"1020"+30
'102030'

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

"a"-1
NaN
"10a"-1
NaN

"10"+20+30-1
"102030"-1
102029
10+"20"+30-1
"102030"-1
102029
10+20+"30"-1
"3030"-1
3029


"10a"-1
NaN

"10"-1
9
"10"-"1"
9

"10"+1
'101'

"10"*"2a"
NaN
"10"*"2"
20

10/"2"
5

"10"/"2a"
NaN