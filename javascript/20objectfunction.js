let calc = {
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}

calc.sum(2,5)
7
calc.sub(9,4)
5

////////////////////
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi To ${name}`}
}

var Hindi = new language('Hindi','India');

Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi To Hindi'

var English = new language('English','England')
English
language {name: 'English', country: 'England', greet: ƒ}