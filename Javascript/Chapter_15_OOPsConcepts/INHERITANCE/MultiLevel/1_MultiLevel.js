//BasePage -> AuthPage -> AdminPage
class BasePage{
    constructor(name){
        this.name = name;
    }

    open(){
        console.log("[OPEN] "+ this.name);
    }

}

class AuthPage extends BasePage{
    login(user){
        console.log("[LOGIN] "+ user );
    }
}

class AdminPage extends AuthPage{
    constructor(){
        super("Admin Page");
    }

    mangeUsers(){
        console.log("[ADMIN] Managing users");
    }
}

let admin = new AdminPage();
admin.open(); //Method inherited from BasePage
admin.login("AdminUser"); //Method inherited from AuthPage
admin.mangeUsers(); //Method of AdminPage

//[OPEN] Admin Page
//[LOGIN] AdminUser
//[ADMIN] Managing users

let newAuth = new AuthPage("Auth Page");
newAuth.open(); //[OPEN] Auth Page
newAuth.login("NewUser"); //[LOGIN] NewUser 
newAuth.mangeUsers(); //Error: newAuth.mangeUsers is not a function