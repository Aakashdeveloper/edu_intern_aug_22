let uname = "Avengers"
let type = "Actions"
let ind = "Hollywood"
let rating = 4.5

//es5
let out = "An "+uname+" is an "+type+" movie with rating of "+rating+" and from ind "+ind+"."
'An Avengers is an Actions movie with rating of 4.5 and from ind Hollywood.'

//es6
let out1 = `An ${uname} is an ${type} movie with rating of ${rating} and from ind ${ind}.`
'An Avengers is an Actions movie with rating of 4.5 and from ind Hollywood.'