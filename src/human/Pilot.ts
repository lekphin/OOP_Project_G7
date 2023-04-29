import { Employee, Gender } from "../Employee/Employee";
export class Pilot extends Employee{
    constructor(
        firstName: string,
        lastName: string,
        salary: number,
        gender:Gender,
       public position: string,
       public bornDate: string,
    ){
        super(firstName, lastName,salary,gender)
    }
}