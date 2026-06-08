class BasePage{
    constructor(pageName){
        this.pageName = pageName;
    }
    open(){
        console.log(this.pageName + " opened");
    }
    close(){
        console.log(this.pageName + " closed");
    }
}

class LoginPage extends BasePage{
    // constructor(){
    //     console.log("Login Page");
    //     super("Login Page");
    // }
}

let page = new LoginPage(); //Login Page
page.open();
page.close();