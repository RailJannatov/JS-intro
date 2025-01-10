"use strict";

// console.log("1", a);

// var a = 10;

// console.log("2", a);

// var a = "20";

// console.log("3", a);

// console.log("4", b);

// let b = null;

// elovset = "elovset";

// console.log("5", b);
// console.log(elovset);

// console.log("6", age);

// const age = 20;

// 10 20 null 20

// Primitive type ve Reference type

// number
const number = 10;
// string

const student = "Sabi";
// boolean

const isStudent = true;
const isMarried = false;

// undefined

let group;
console.log(group);

group = "FE2606";

// null

let car = null;

// let students = ["test"];

// symbol

// BigInt

// Reference type

// Array

// students = 124.241.24.52.52

// let students = ["Sabi", "Elovset", "Nurlan", "Ramin"];

// Object
let test = {};
// function
let func = () => {};

// Conditional Statements

let age = 20;

// let sum = !(age * 20 - 40 + "test");

// if-deki condition true olarsa o zaman if block-una daxil olur

// && and operator
if (age > 18 && age < 21) {
  console.log("you are teenager");
} else if (age > 18) {
  console.log("You are adult");
} else {
  console.log("You are child");
}

let firstNumber = 20;
let secondNumber = 40;
let thirdNumber = 20;

let fourthNumber = "20";
let fiveNumber = "40";

// operators
console.log("1", firstNumber > secondNumber);
console.log("2", firstNumber < secondNumber);
console.log("3", firstNumber >= thirdNumber);
console.log("4", firstNumber <= thirdNumber);

// console.log("5", firstNumber == secondNumber); check if value is same

console.log("6", firstNumber == fourthNumber);
console.log("7", fiveNumber == thirdNumber);

// console.log("8", firstNumber === fourthNumber);   check if value and type is same

console.log("9", firstNumber != thirdNumber);

console.log("10", firstNumber != fourthNumber);
console.log("11", secondNumber != thirdNumber);

console.log("12", firstNumber !== fiveNumber);
console.log("13", firstNumber !== fourthNumber);

// or operator

let something = 0;

// Convert to falsy values

// 0,null,undefined,"",NaN

console.log("14", firstNumber || secondNumber);

console.log("15", null || something);

// console.log("16", something ?? 505);  if left hand is null or undefined then return right hand
console.log("16", something ?? 505);

console.log("17", undefined ?? secondNumber);

console.log("18", null ?? 20);

console.log("19", "" ?? 60);
// Logical operator if left hand is falsy return right hand

// and operator

console.log("20", null && 40);

console.log("21", 4 && 56);

console.log("22", null && undefined);

console.log("23", 0 && 40);

console.log("24", "" || (40 && 0));
console.log("24", "" && 40 && 0);
// "" || 0
