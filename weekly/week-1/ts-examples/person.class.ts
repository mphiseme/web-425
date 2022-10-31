/**
 * Title: person.class.ts
 Author: Professor Krasso
 Date: 23 Oct 2022
 Modified By: Manel Phiseme
 Description: Typescript class which implement
 */
 
/* This is an import typescript interface from person.interface.ts */
import {IPerson} from './person.interface';

class Person implements IPerson{
    firstName: string;
    lastName: string;

    constructor(firstName: string,  lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    } 
}


//Below codes create a new Person object
//And out put the result
const me: Person = {
    firstName: "Manel",
    lastName: "Phiseme",
}
console.log(`My name is ${me.firstName} ${me.lastName}`)