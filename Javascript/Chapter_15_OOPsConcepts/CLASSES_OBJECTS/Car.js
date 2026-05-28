class Car{
    //Attributes
    //declaring the attributes is not mandatory in JS, 
    //but it is a good practice to declare them for better readability 
    //and maintainability of the code
    name;
    model;

    //Constructor - the setup function
    constructor(name, model){
        this.name = name;
        this.model = model;
    }

    drive(){
        console.log("Drive the Car");
    }
    printDetails(){
        console.log("Car details: ",this.name, this.model);
    }
}

let tesla = new Car("Tesla","Model S"); //Calls the constructor to create an instance of Car class
console.log(tesla.name, tesla.model);
tesla.drive();
tesla.printDetails();