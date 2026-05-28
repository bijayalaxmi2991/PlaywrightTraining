class APIClient{
    constructor(baseURL){
        this.baseURL = baseURL;
    }

    get(path){
        return this.baseURL +path;
    }
}

let staging = new APIClient("https://api.staging.com");
let prod = new APIClient("https://api.prod.com");
console.log(staging.get("/users")); //https://api.staging.com/users
console.log(prod.get("/users")); //https://api.prod.com/users
