var city = "amstErDaM"
var city = "paRIs"

var city = "amstErDaM"

city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'
city.length
9
city[0]
'a'
city[1]
'm'
city.charAt(0)
'a'
city.charAt(1)
'm'
city.charAt(-1)
''
city.at(0)
'a'
city.at(1)
'm'
city.at(-1)
'M'
city.at(-2)
'a'

var a = "John"
var b = "john"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "amstErDaM"

city.slice(1)
'mstErDaM'
city.slice(2)
'stErDaM'
city.slice(2,5)
'stE'
city.slice(0,1)
'a'
city.slice(0,-1)
'amstErDa'
city.slice(0,-2)
'amstErD'
city.slice(2,-2)
'stErD'
city.slice(-2,2)
''


var city = "amstErDaM"
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'


city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'
var city = "paRIs"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'


var uname = "   Nikita.  "
uname.length
12
uname.trim()
'Nikita.'

var uname = "   Nikita .  "
uname.trim()
'Nikita .'

var a = "I am learning JavaScript"
a.replace('JavaScript','JS')
'I am learning JS'

var a = "JavaScript I am learning JavaScript"
a.replace('JavaScript','JS')
'JS I am learning JavaScript'
a.replaceAll('JavaScript','JS')
'JS I am learning JS'
a.replace(/JavaScript/g,'JS')
'JS I am learning JS'

var uname = "   Nikita .  "
uname.replace(/ /g,'')
'Nikita.'


var url = "https://github.com/Aakashdeveloper/edu_june_intern_22"
url.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'edu_june_intern_22']
url.split('/')[4]
'edu_june_intern_22'
var url = "https://github.com/Aakashdeveloper/edu_sep_ang_22"
url.split('/')[4]


var a = "I am learning JavaScript"
undefined
a.split(' ')
(4) ['I', 'am', 'learning', 'JavaScript']


var a = "Javascript"
undefined
a.split('')
(10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
var b = ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
undefined
b.join()
'J,a,v,a,s,c,r,i,p,t'
b.join().replace(/,/g,'')
'Javascript'

var uname = "   Nikita .  "
uname.replace(/ /g,'').replace('.','')
'Nikita'