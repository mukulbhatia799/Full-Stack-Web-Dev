'use script';

document.querySelector(".add").addEventListener("click", function() {
    let input1 = Number(prompt("Enter first number."));
    let input2 = Number(prompt("Enter second number."));
    let sum = input1 + input2;
    let newText = `${input1}+${input2} = ${sum}.`;
    document.querySelector(".answer").innerHTML = newText;
});
document.querySelector(".subtract").addEventListener("click", function() {
    let input1 = Number(prompt("Enter first number."));
    let input2 = Number(prompt("Enter second number."));
    let sub = input1 - input2;
    let newText = `${input1}-${input2} = ${sub}.`;
    document.querySelector(".answer").innerHTML = newText;
});
document.querySelector(".multiply").addEventListener("click", function() {
    let input1 = Number(prompt("Enter first number."));
    let input2 = Number(prompt("Enter second number."));
    let mul = input1 * input2;
    let newText = `${input1}*${input2} = ${mul}.`;
    document.querySelector(".answer").innerHTML = newText;
});
document.querySelector(".divide").addEventListener("click", function() {
    let input1 = Number(prompt("Enter first number."));
    let input2 = Number(prompt("Enter second number."));
    let div = input1 / input2;
    let newText = `${input1}/${input2} = ${div}.`;
    document.querySelector(".answer").innerHTML = newText;
});
document.querySelector(".modulus").addEventListener("click", function() {
    let input1 = Number(prompt("Enter first number."));
    let input2 = Number(prompt("Enter second number."));
    let mod = input1 % input2;
    let newText = `${input1}%${input2} = ${mod}.`;
    console.log(newText);
    document.querySelector(".answer").innerHTML = newText;
});









// function addition() {
//     let inputData_1 = prompt("Enter first number.");
//     let inputData_2 = prompt("Enter second number.");
//     let sum = input1 + input2;
//     let newText = `Sum of ${input1}+${input2} = ${sum}.`;
//     document.querySelector(".answer").innerHTML = newText;
// }

// function subtraction() {
//     let inputData_1 = prompt("Enter first number.");
//     let inputData_2 = prompt("Enter second number.");
//     let sub = input1 - input2;
//     let newText = `Sum of ${input1}+${input2} = ${sum}.`;
//     document.querySelector(".answer").innerHTML = newText;
// }

// function multiplication() {
//     let inputData_1 = prompt("Enter first number.");
//     let inputData_2 = prompt("Enter second number.");
//     let mul = input1 * input2;
//     let newText = `Sum of ${input1}+${input2} = ${sum}.`;
//     document.querySelector(".answer").innerHTML = newText;
// }

// function dividing() {
//     let inputData_1 = prompt("Enter first number.");
//     let inputData_2 = prompt("Enter second number.");
//     let div = input1 / input2;
//     let newText = `Sum of ${input1}+${input2} = ${sum}.`;
//     document.querySelector(".answer").innerHTML = newText;
// }

// function modulus() {
//     let inputData_1 = prompt("Enter first number.");
//     let inputData_2 = prompt("Enter second number.");
//     let mod = input1 % input2;
//     let newText = `Sum of ${input1}+${input2} = ${sum}.`;
//     document.querySelector(".answer").innerHTML = newText;
// }

// function calculator(inputData_1, inputData_2) {
    
//     operation_func(inputData_1, inputData_2);
// }