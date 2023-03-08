// Js Questions

// //Question :01

// let a1 = prompt("Enter your first name");
// console.log(a1);
// let b1 = prompt("Enter your last name");
// console.log(b1);

// let fullName = ("Hey! Welcome " + (a1 +" " + b1));
// alert(fullName);

// //Question :02

// let c = prompt("Enter your favourite mobile model" , "Samsung Galaxy S6 Edge Plus");
// console.log(c);

// document.write("length of string is : " + c.length);


//uestion :03

let d = "Pakistani";

let indexOfPak = d.indexOf("n");
document.write("Index of n is: " + indexOfPak);
document.write("<br /><br />");


//Question :04

let e = "Hello world ";

let hello = e.lastIndexOf("l");
document.write("last Index of l is :" + hello);
document.write("<br /><br />");


//Question :05

let f = "Pakistani";

let charAt = f.charAt("3");
document.write("Character at index 3 is :" + charAt);
document.write("<br /><br />");


// //Question : 06

// let a2 = prompt("Enter your first name");
// console.log(a2);
// let b1 = prompt("Enter your last name");
// console.log(b2);

// let fullName = ("Hey! Welcome " + a2.concat(" ", b2));
// alert(fullName);


//Question no:07

let g = "Hyderabad";
let replace = g.replace("Hydera" , "Islam");
document.write(replace);
document.write("<br /><br />");


//Question no:08

var message = "Ali and Sami are best friends. They play cricket and football together.";
var reg = new RegExp("and" , "gi"); 
var join = message.replace(reg , "&");
document.write(join);
document.write("<br /><br />");

//Question no:09

let h = "472";

document.write("Value :" + h);
document.write("<br />");

document.write("Type :" + typeof h);
document.write("<br />");


let newtype = Number(h);

document.write("Value :" + newtype);
document.write("<br />");

document.write("Type :" + typeof newtype);
document.write("<br /><br />");


// //Question no:10

// let url = prompt("Enter Url :" , "www.facebook.com");
// console.log(url);
// let domain = url.replace("www." , "");
// document.write("Domain: " + domain);
// document.write("<br /><br />");


// //Question no :11

// let i = prompt("Enter input in lowercase" , "peanuts");
// console.log(i);
// let uppercase = i.toUpperCase();
// document.write("Uppercase: " + uppercase);
// document.write("<br /><br />");


// //Question no :12

// let j = prompt("Enter input in uppercase" , "ZONG 4G");
// console.log(j);
// let lowercase = j.toLowerCase();
// document.write("Lowercase: " + lowercase);
// document.write("<br /><br />");


// //Question no :13

// let k = prompt("Enter input in uppercase" , "javascript");
// console.log(k);
// let titlecase = k.charAt(0).toUpperCase() + k.slice(1);
// document.write("TitleCase: " + titlecase);
// document.write("<br /><br />");


//Question no:14

var num1 = 35.36;
var num2 = num1.toString();
var num3 = num2.replace("." , "");
document.write(num3);
document.write("<br /><br />");


//Question no :15

let a = "3";
let b = "3";
document.write("a is " + a);
document.write("<br />");

document.write("b is " + b);
document.write("<br />");

document.write("a + b is " + a + b);
document.write("<br /><br />");


//Question no :16

let a3 = 3;
let b3 = 3;
let sub = a3-b3;


document.write("a is " + a3);
document.write("<br />");

document.write("b is " + b3);
document.write("<br />");

document.write("a - b is " + sub);
document.write("<br /><br />");
