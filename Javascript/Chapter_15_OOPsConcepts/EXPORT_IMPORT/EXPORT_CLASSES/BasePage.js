export class BasePage{
    constructor(pageName){
        this.pageName = pageName;
    }
    open(){
        console.log(this.pageName + " opened");
    }

}