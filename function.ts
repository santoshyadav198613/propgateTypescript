
// named function
export function add(num1: number, num2: number, num3?: number): number {
    if(num3> 0) {
        return num1 + num2 + num3; 
    }
    return num1 + num2;
}

// funtion expression
export let sub = function (num1: number, num2: number, num3 = 5): number {
    return num1 - num2 - num3;
}

// arrow function
let multiply =
    (num1: number, num2: number)
        : number => num1 * num2;

console.log(add(10, 5, 5));

// console.log(sub(10, 5, 5, 5));

