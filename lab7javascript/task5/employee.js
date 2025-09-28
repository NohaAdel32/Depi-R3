export class Employee{
    constructor(name,position){
        this.name=name;
        this.position=position;
    }
    showDetails(){
          console.log(`Name: ${this.name}, Position: ${this.position}`);
    }
}