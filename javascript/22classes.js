// ////////////////////
// function language(name,country){
//     this.name = name;
//     this.country = country;
//     this.greet = () => {return `Say Hi To ${name}`}
// }

class language1{
    //all declaration
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet=() => {return `Say Hi to ${this.name}`}
}

var German = new language1('German','Germany')

let French = new language1('French','France')