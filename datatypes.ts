import { Employee } from './class';
import { Department } from './interface';

type empDepartment = Department & {
    salary: number
};

let testDept: empDepartment;
testDept.salary;



let fname = 'Amit';

let lname: string;

export let age: number;

age = 10;

// let salary: bigint;

let isValid: boolean = false;

console.log(isValid);

let employee: any;

employee = 'test2';
employee = 10;
employee = ['100', '500'];

let department: string[];

department = ['IT', 'Marketing', 'R&D'];

// department.forEach
for (let dept of department) {
    console.log(dept);
}

for (let dept in department) {
    console.log(dept)
}

let salary: number[] = [100, 200, 300];

let newSalary = salary.filter((sal) => sal > 100);

console.log(newSalary);

let sal = salary.find((sal) => sal === 200);
console.log(sal);

salary.push(400);

salary.pop();


let emp: [string, number];

emp = ['test', 1];

emp[0];
emp[1];

function swap(num1: number, num2: number) {
    return [num2, num1];
}

console.log(swap(5, 10));

enum Color {
    Green,
    Blue,
    Red
};

function applyColor(message: string, color: Color) {

}

applyColor('this is test message', Color.Red);

let unionType: string | number;

function receiveData(): Observable<string> | Promise<string> {
}

