 // Basics:


// Comments:
// This is an in-line comment.

/* This is a
multi-line comment */

// Declaring vars:
var myName;

//Storing Values with the Assignment Operator
var a;
a = 7;

//assigning the value of one var to another
var a;
a = 7;
var b;
b = a;

//initializing variables with the assignment operator
var a = 9;

//declaring string variables
var myFirstName = "jamie";
var myLastName = "metcalfe";

//understanding unitialised variables

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + "String!";

//compound assignment with augmented addition

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

//escaping literal quotes in strings

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//concatenating strings
const myStr = "This is the start. " + "This is the end.";

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

const myName = "Jamie";
const myStr = "My name is "+myName+" and I am well!";

const someAdjective = "fun";
let myStr = "Learning to code is ";
myStr += someAdjective;

//find the length of a string
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

//bracket notation to find the first character in a string
let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

//string immuatabillity
let myStr = "Jello World";

myStr = "Hello World"; 
