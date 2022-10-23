import {IPerson} from './person.interface';

class Person implements IPerson{
    firstName: string;
    lastName: string;

    constructor(firstName: string,  lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    } 
}

const me: Person = {
    firstName: "Manel",
    lastName: "Phiseme",
}

console.log(`My name is ${me.firstName} ${me.lastName}`)