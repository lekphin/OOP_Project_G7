import { Employee } from "../employee/Employee";
export class Attendant extends Employee{
    constructor(
        firstName: string,
        lastName: string,
        public salary: number,
        public position: string,
        public bornDate: string,
        public employeeNumber: number
    ){
        super(firstName, lastName);
    };

}