console.log("hello world"); //for printing in console

/* ============= VARIABLES =============== */
var name = "nk";
console.log(name);
var my_name = "nk2";
console.log(my_name);
var $surname = "sharma";
console.log($surname);
var myAge = 18;
var myAge = 25;
console.log(myAge);
let myAge2 = 12;
//let myAge2 = 20;
console.log(myAge2);
const PI = 3.147;
console.log(PI);

/* ============= DATA TYPES ============== */
var name; //i am undefined bcoz i have no value
console.log(typeof name);

var full_name = "This is a mango"; //string data type
console.log(typeof full_name);

var phone_number = 9876543210; //nmuber data type
console.log(typeof phone_number);

var is_login = true; //BOOLEAN Data type return only true and false
console.log(typeof is_login);

var varialbeNull = null; // Null DAta Type
console.log(typeof varialbeNull);

console.log(isNaN(phone_number)); //it check phone is not a number
console.log(isNaN(full_name)); //it check full_name is a number or not

console.log(5 - "tanu"); //it return nan number

/* =========== Expressions And Operators ============ */
var a = 5; //1: assignment oparator
var b = 10;

console.log(a + b); //arithmetic operator add
console.log(a - b); //arithmetic operator add
console.log(a * b); //arithmetic operator add
console.log(a / b); //arithmetic operator add
console.log(a % b); //arithmetic operator module
console.log(a ** 2); //arithmetic operator exponential power
var c = 15;
var d = ++c; //prefix increment operator
console.log(c, d);
var c = 15;
var d = c++; //postfix increment operator
console.log(c, d);
var c = 15;
var d = --c; //prefix decreament operator
console.log(c, d);
var c = 15;
var d = c--; //postfix decreament operator
console.log(c, d);

console.log(a != b); //comparison operator not return true or false
console.log(a > b); //greater than operator
console.log(a < b); //less than operator
console.log(a >= b); //less than or equal to operator
console.log(a <= b); //less than or equal to operator
var e = 5,
  f = "5";
console.log(e == f); //equal to comparison operator return true or false
console.log(e === f); //triple equal check both data type and value

console.log(5 == 5 && 10 < 5); //logical and operator &&
console.log(5 == 5 || 10 < 5); //logical or operator ||
console.log(5 == 5 && !(10 < 5)); //not oprator !

console.log("tanu is a" + " " + "good girl"); //string concatination operator +

console.log(` hello the sum of 4 and 5 is ${4 + 5}`); //Template literals ES6 part

console.log(5 > 10 ? "5 is greater than 10" : "10 is greater than 5"); //ternary operator

//lets swap number
var first_num = 5;
var second_num = 10;
//1st way to swap number without using third varialbe in js
//[first_num, second_num] = [second_num, first_num]
//console.log('first num is' + ' ' + first_num + ' ' + 'second num is' + ' ' + second_num);

//2md way to swap number without using 3rd variables
first_num = first_num + second_num;
second_num = first_num - second_num;
first_num = first_num - second_num;
console.log(`${first_num} ${second_num}`);

/* =========== Control Statements And loops ============ */
var weather = "rainy";
if (weather == "rainy") {
  console.log("Please Wear reaincoat or take umbrella");
} else {
  console.log("no need to take umbrella, Sunny DAy");
}
var year = 2021;
if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

var age = 5;
if (age <= 5) {
  console.log("you are able to drink milk");
} else if (age <= 12 && age > 5) {
  console.log("you are able to drink complain and bornvita");
} else if (age > 12 && age <= 18) {
  console.log("you can drink colddrink");
} else {
  console.log("you can drink soft drinks or adults drink");
}

//ternary operator
console.log(age >= 18 ? " You Can drive Car " : " You Cannot Drive car ");

//Switch Statement
var day = "Sunday";
switch (day) {
  case "Sunday":
    console.log("today is Sunday");
    break;
  case "Monday":
    console.log("today is Monday");
    break;
  case "Tuesday":
    console.log("today is Tuesday");
    break;
  case "Wednesday":
    console.log("today is Wednesday");
    break;
  case "Thursday":
    console.log("today is Thursday");
    break;
  case "Friday":
    console.log("today is Friday");
    break;
  default:
    console.log("today is Saturday");
}

//While loop
var num = 5;
while (num < 10) {
  console.log(num);
  num++;
}

//do while loop
do {
  console.log(num);
  num++;
} while (num < 10);

//for loops
for (let i = 0; i <= 10; i++) {
  debugger;
  console.log(i);
}

//Function
function add(a, b) {
  //function defination  ( function parameter in bracket)
  //console.log(a+b);
  return a + b; //return keyword
}
//add(4,5);  //function calling (function Argument in bracket)
var additinOfNumbers = add(4, 5); //Function Expressions
console.log("the addition of a and b is " + additinOfNumbers);

//Anonymous Functions
var anFun = function () {
  //Anonymous function means without name functions
  return 20 * 10;
};
console.log(anFun());

//Arrow Function or Fat Arrow Functions
let mySum = (a, b) => {
  return a + b;
};
console.log(mySum(4, 5));

//if only return single line statment then no need to use return keyword for example
let myName = () => "hello world";
console.log(myName());

//Passing Default Argument In Function
function defaultArugumentFunction(a, b = 5) {
  console.log(a ** b);
}
defaultArugumentFunction(4);

//difference between let , var  block scope .
function checkVariables() {
  let checkMe = "I am Outside";
  {
    let checkMe = "I am Inside";
    console.log(checkMe);
  }
  console.log(checkMe);
}
checkVariables();

/* =========== Arrays and its methods in Javascript ============ */

//let fruits = new Array;    //optional not compulsory to write this
//console.log(fruits);
let fruits = ["mango", "apple", "orange"];
console.log(fruits);
console.log(fruits.length); //for check length of an array
console.log(fruits[0]); //for get 1st elemt in an array
console.log(fruits[fruits.length - 1]); //for get last element in an array
console.log(fruits[1]); //for get 2nd element in an array

fruits.forEach(function (element, index, arr) {
  console.log(
    `My favourite Fruit is ${element} on index numner ${index} and belong to this arry ${arr}`
  );
});
fruits.forEach((element, index, arr) => {
  console.log(
    `My favourite Fruit is ${element} on index numner ${index} and belong to this arry ${arr}`
  );
});

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(`My favourite Fruit is ${element}`);
}
for (let elementsId in fruits) {
  console.log(`The index number of array element is ${elementsId}`);
}
for (let element of fruits) {
  console.log(`my favourite fruit is ${element}`);
}

//searching and filtering of an array
var student = ["rahul", "rohit", "abhav", "ankit", "afrin", "rahul"];
console.log(student.indexOf("rahul"));
console.log(student.indexOf('abhav'));
console.log(student.indexOf('rahul', 1));
console.log(student.lastIndexOf("rahul"));
console.log(student.lastIndexOf("rahul", 3));
console.log(student.includes('rahul'));
console.log(student.includes('rahul',6));

//find method return only one matching element if not find anuthing then ot return undefined
let newStudentArray = student.find((element , index , array)=>{
    return element == 'rahul'
});
console.log(newStudentArray);

//findIndex method return only one matching element id if not find anuthing then ot return -1
let newStudentArrayIndex = student.findIndex((elementIndexNum)=> elementIndexNum == 'rahul');
console.log(newStudentArrayIndex);

//filter method returns all element in a new array with is exactly matched
//filter mrthod if not find anything return an empty array
let numGreaterThanFive = [1,2,3,4,5,6,7,8,9,10];
let numGreaterThanFiveFilterData = numGreaterThanFive.filter((element, index, arr)=>{
    return element > 5;
});
console.log(numGreaterThanFiveFilterData);
console.log(numGreaterThanFive.sort()); //sort an array

//crud of an array 
