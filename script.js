// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

function quadThing() {
    root1 = (-b + Math.sqrt((b*b) - 4*a*c)) / (2*a)
    root2 = (-b - Math.sqrt((b*b) - 4*a*c)) / (2*a)
}

quadThing();
root1 = Number(root1);
root2 = Number(root2);

alert(`The roots of quadratic equation are ${root1} and ${root2}`);
