class Student{
    static collegeName = "VSSUT, Burla";

    constructor(name){
        this.name = name;
    }

    static display(){
        console.log(this.name + " from " + Student.collegeName);
    }

}
let amit = new Student("Amit");
let sunil = new Student("Sunil");

console.log(Student.collegeName); //VSSUT, Burla
console.log(amit.collegeName); //VSSUT, Burla
console.log(amit.name); //Amit