//Private Fields - Hidden data (#)

class Credentials{
    #apikey;

    constructor(user , apikey){
        this.user = user; //public field
        this.#apikey = apikey; //private field
    }

    getAuthHeader(){
        return "Bearer " + this.#apikey;
    }
}

let cred = new Credentials("admin", "1234567890");
console.log(cred.user); //admin
console.log(cred.getAuthHeader()); //Bearer 1234567890   
console.log(cred.#apikey); //SyntaxError: Private field '#apikey' must be declared in an enclosing class
console.log(cred.apikey); //undefined