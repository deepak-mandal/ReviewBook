export class Product {
    //userName: string;
    username: string;
    productName: string;
    description: string;
    verificationId: string;
    category: string;
    specs?: string[];


    constructor(userName:string,name: string, desc: string,verification:string, category: string,  specs?: string[]){
       // this.userName=userName;
        this.username=userName;
        this.productName = name;
        this.description = desc;
        this.verificationId=verification;
        this.category = category;
        this.specs = specs;
    }
}
