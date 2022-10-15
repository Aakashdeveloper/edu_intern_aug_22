class geo{
    constructor(){
        this.lat = 43.22;
        this.long = 32.98
    }
}

class language1 extends geo{
    //all declaration2
    constructor(name,country){
        super()
        this.name = name;
        this.country = country;
    }

    greet=() => {return `Say Hi to ${this.name}`}
}

var Hindi = new language1('Hindi','Bharat');

console.log(Hindi)