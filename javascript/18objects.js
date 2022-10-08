var a = [] // array
var b = {} // object
let movieName = "Avengers"
let movieRating = 4.5
let movieType = "Action"

let movieName1 = "Jab We Met"
let movieRating1 = 4.9
let movieType1 = "Romantic"

var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

typeof(movie)
'object'
movie.name
'Avengers'
movie.rating
4.5
movie.type
'Action'
movie.lang = "English"
'English'
movie
{name: 'Avengers', rating: 4.5, type: 'Action', lang: 'English'}
movie.rating = 4.3
4.3
movie
{name: 'Avengers', rating: 4.3, type: 'Action', lang: 'English'}
delete movie.type
true
movie
{name: 'Avengers', rating: 4.3, lang: 'English'}

movie['name']
'Avengers'


var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

for(key in movie){
    console.log(key)
}

name
rating
type

for(key in movie){
    console.log(movie[key])
}

Avengers
4.5
Action

JSON > javascript Object notation
// way to represent data
// Array of object

var movie = [
    {
        "name":"Avengers",
        "rating":4.5,
        "type":"Action"
    },
    {
        "name":"Jab we Met",
        "rating":4.8,
        "type":"Romantic"
    }
]
movie[1]
{name: 'Jab we Met', rating: 4.8, type: 'Romantic'}name: "Jab we Met"rating: 4.8type: "Romantic"[[Prototype]]: Object
movie[1].name
'Jab we Met'


for(data of movie){
    console.log(data['name'])
}

Avengers
Jab we Met