class Car{
    #engine;

    constructor(name){
        this.name = name;
    }

    //Getter method to access the private field
    getEngine(){
        return this.#engine;
    }

    setEngine(engine){
        this.#engine = engine;
    }
}

let tesla = new Car("Tesla");
tesla.setEngine("Electric");
console.log(tesla.name); //Tesla
console.log(tesla.getEngine()); //Electric
console.log(tesla.#engine); //SyntaxError: Private field '#engine' must be declared in an enclosing class