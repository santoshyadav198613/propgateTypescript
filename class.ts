import { add, sub } from './function';
import { Department } from './interface';

export class Employee {
    private id: number;
    name: string;
    dob: Date;
    dept: Department;

    get Id() {
        return this.Id
    }

    set Id(id: number) {
        this.Id = id;
    }

    constructor(id: number) {
        this.id = id;
    }

    getName() : string {
        return this.setName()
    }

    private setName() {
        // import('./interface').then();
        // message = 'the current user is' + this.name + 'with id' + this.id;
        return `the current user is ${this.name} with id ${this.id}`;
    }

}

let newEmp = new Employee(1);

newEmp.name = 'test3';
newEmp.dob = new Date('10-Feb-1989');

console.log(newEmp);
console.log(newEmp.getName());

console.log(add(10,5));