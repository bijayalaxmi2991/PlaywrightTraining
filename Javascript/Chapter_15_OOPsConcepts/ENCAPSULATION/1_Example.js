class Bijaya{
    //hide the properties of the class
    #child1;
    #child2;

    constructor(name, child1, child2){
        this.name = name;
        this.#child1 = child1;
        this.#child2 = child2;
    }
    getChild1(){
        return this.#child1;
    }
    getChild2(){
        return this.#child2;
    }
}

let bijaya = new Bijaya("Bijaya", "Amit", "Sunil");

console.log(bijaya.name); //Bijaya
console.log(bijaya.#child1); //SyntaxError: Private field '#child1' must be declared in an enclosing class
console.log(bijaya.#child2); //SyntaxError: Private field '#child1' must be declared in an enclosing class
console.log(bijaya.getChild1()); //Amit
console.log(bijaya.getChild2()); //Sunil

//As child1, child2 are private fields, they cannot be accessed directly from outside the class. 
// We can only access them through the public methods getChild1() and getChild2(). 
// This is an example of encapsulation, where we hide the internal details of the class and provide