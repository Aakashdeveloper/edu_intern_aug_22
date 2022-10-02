Array is a collection of homogenious as well as hetrogenious datatype

var a = ["hii","Hello","Test","Biee"] >>>> Array of string
var b = [4,67,32,35,69,14,57] >>> Array of number
var c = [true,false,false,true,true] >>> Array of Boolean

var d = ["hii",56,23,true,true,'jfdj',45,"gdbfb"] 


var a = ["hii","Hello","Test","Biee"]
typeof(a)
'object'
var d = ["hii",56,23,true,true,'jfdj',45,"gdbfb"] 
undefined
var a = ["hii","Hello","Test","Biee"]
typeof(a)
'object'

var city = ["Delhi","Mumbai","Amsterdam","Helsinki"]
undefined
city.length
4
city.sort()
(4) ['Amsterdam', 'Delhi', 'Helsinki', 'Mumbai']
city.reverse()
(4) ['Mumbai', 'Helsinki', 'Delhi', 'Amsterdam']

var city = ["Delhi","Mumbai","Amsterdam","Helsinki"]
city.push('Venice')
5
city
['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice']0: "Delhi"1: "Mumbai"2: "Amsterdam"3: "Helsinki"4: "Venice"length: 5[[Prototype]]: Array(0)
city.push('Boston')
6
city
['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston']
city.pop()
'Boston'
city
['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice']
city.pop(2)
'Venice'
city
(4) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki']
city.pop(100000)
'Helsinki'

var city = ["Delhi","Mumbai","Amsterdam","Helsinki"]
undefined
city.shift()
'Delhi'
city.unshift('Dubai')
4
city
(4) ['Dubai', 'Mumbai', 'Amsterdam', 'Helsinki']

push > add as a last value to Array
unshift > add as a first value to array
pop > take out the last value of array
shift > take out the first value of array

var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston']
city.slice(1)
(5) ['Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston']
city.slice(2)
(4) ['Amsterdam', 'Helsinki', 'Venice', 'Boston']
city.slice(2,5)
(3) ['Amsterdam', 'Helsinki', 'Venice']
city.slice(0,1)
['Delhi']
city.slice(2,-2)
(2) ['Amsterdam', 'Helsinki']
city
(6) ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston']


var city = ['Delhi', 'Mumbai', 'Amsterdam', 'Helsinki', 'Venice', 'Boston']
city.splice(startIndex,deletecount,values)

// add value on index number 3
city.splice(3,0,'Nice','Pisa')
['Delhi', 'Mumbai', 'Amsterdam', 'Nice', 'Pisa', 'Helsinki', 'Venice', 'Boston']

// remove 1 value forn index number 2
city.splice(2,1)
['Delhi', 'Mumbai', 'Nice', 'Pisa', 'Helsinki', 'Venice', 'Boston']

//remove 2 value form index 4 and add 1 value
city.splice(4,2,'Genoa')
['Delhi', 'Mumbai', 'Nice', 'Pisa', 'Genoa', 'Boston']

var a = ['Delhi', 'Mumbai', 'Nice', 'Pisa', 'Genoa', 'Boston']
undefined
a.indexOf('Paris')
-1
a.indexOf('Indore')
-1
a.indexOf('Delhi')
0
a.indexOf('Genoa')
4

var a = ['a','b','c',1]
var b = [2,3,'d','e']
a+b
'a,b,c,12,3,d,e'

a.concat(b)
(8) ['a', 'b', 'c', 1, 2, 3, 'd', 'e']

var a = ["a","b",'c']
var b = "Hiii"
undefined
Array.isArray(a)
true
Array.isArray(b)
false

var a = ['Delhi', 'Mumbai',['Red',['Audi','Bmw','Merc'],'Yellow',"Green"], 'Genoa', 'Boston']
a[0]
'Delhi'
a[2]
(4) ['Red', Array(3), 'Yellow', 'Green']
a[2][0]
'Red'
a[2][2]
'Yellow'
a[2][1]
(3) ['Audi', 'Bmw', 'Merc']
a[2][1][0]
'Audi'
a[2][1][1]
'Bmw'
[
    [0,1,0],
    [0,1,0],
    [0,1,0]
]

