= //assignment
== //compare the data
=== //compare data and datatype


var a = 10  //assignment
var b = "10"
var b = 20

a == b   // it compare just data
true
a === b // it will compare the data and data type
false

var a = 10
var b = "10"
a == b
true
a === b
false

var c = 10
a == c
true
a === c
true

var d = 20
a == d
false
a === d
false

var a = true
var b = "true"
a == b
false

///////////
var a = "hi"
var b = "Hi"
a == b
false
a === b
false

10 > 5
true
10 < 5
false
10 >= 5
true
10 <= 5
false
10 != 5
true
10 !== 5
true

///////Negation/////
if its true make it false vice-vesra

var a = true
!a
false

var a = false
!a
true

var a = 1
!a

var a = 1
!a
false

var a = 0
!a
true

var a = "Hii"
!a
false

var a = -1
!a
false

> Truthy >> any number except 0 weather +ve or -ve, any string, true
> Falsy >> 0, false, null,undefined