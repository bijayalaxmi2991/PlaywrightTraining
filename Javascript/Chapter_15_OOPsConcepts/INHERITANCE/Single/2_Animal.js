class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(this.name + " is eating");
    }
    sleep(){
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name); //call the constructor of the parent class
        this.breed = breed;
    }

    bark(){
        console.log(this.name + " is barking");
    }   
}

let dog = new Dog("Tommy", "Labrador");
dog.eat(); //Method inherited from Animal class
dog.sleep(); //Method inherited from Animal class
dog.bark(); //Method of Dog class

//Tommy is eating
// Tommy is sleeping
// Tommy is barking

