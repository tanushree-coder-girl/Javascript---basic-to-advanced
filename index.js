//use strict is a es5 (EcmaScript - 2014) feature which is used to write code in strict mode.
//"use strict";

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

//Falsy values
// fasly values in js => 0, ' ', undefined, null, nan falsy values always show else block.
if (0) {
  console.log("i am not executed in falsy value");
} else {
  console.log("i am always executed with falsy value");
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
  //debugger;
  console.log(i);
}

/* ===========  Functions in Javascript ============ */

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

//rest Parameters in js           //comes in es6
function hello(...allArguments) {
  console.log(allArguments);
}
hello('hello', 'world', 'welcome')


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
console.log(student.indexOf("abhav"));
console.log(student.indexOf("rahul", 1));
console.log(student.lastIndexOf("rahul"));
console.log(student.lastIndexOf("rahul", 3));
console.log(student.includes("rahul"));
console.log(student.includes("rahul", 6));

//find method return only one matching element if not find anuthing then ot return undefined
let newStudentArray = student.find((element, index, array) => {
  return element == "rahul";
});
console.log(newStudentArray);

//findIndex method return only one matching element id if not find anuthing then ot return -1
let newStudentArrayIndex = student.findIndex(
  (elementIndexNum) => elementIndexNum == "rahul"
);
console.log(newStudentArrayIndex);

//filter method returns all element in a new array with is exactly matched
//filter mrthod if not find anything return an empty array
let numGreaterThanFive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numGreaterThanFiveFilterData = numGreaterThanFive.filter(
  (element, index, arr) => {
    return element > 5;
  }
);
console.log(numGreaterThanFiveFilterData);
console.log(numGreaterThanFive.sort()); //sort an array

//crud of an array
let colours = ["blue", "red", "orange"];
console.log(colours);
colours.push("pink", "violet"); //add data in last
console.log(colours);
colours.unshift("yellow"); //add data in first
console.log(colours);
colours.pop(); //remove data in last
console.log(colours);
colours.shift(); //remove data in first
console.log(colours);
colours.splice(2, 0, "pomegranate"); //splice metohd add and delete data in array
console.log(colours);
colours.splice(colours.length, 0, "imli"); //splice metohd add and delete data in array
console.log(colours);
colours.splice(1, 1, "etc"); //splice metohd add and delete data in array
console.log(colours);
colours.splice(2, 2); //splice metohd add and delete data in array
console.log(colours);
let color = colours.slice(1, 3); //slice method returns selected elements in an new array
console.log(color);
let color2 = colours.slice(1, Infinity);
console.log(color2);

//Map Method
let sumOfNumbers = [20, 30, 40, 50, 60, 70, 80, 90, 200];
let mapArray = sumOfNumbers.map((currElem, id, arr) => {
  return `the value is ${currElem} on index num ${id} belongs to array ${arr}`;
});
console.log(mapArray);

//Reduce method
let reduceMethod = sumOfNumbers.reduce(
  (accumulator, currentValue, index, array) => {
    return (accumulator += currentValue);
  }
);
console.log(reduceMethod);

//also pas initial values in reduce method
let reduceMethod2 = sumOfNumbers.reduce(
  (accumulator, currentValue, index, array) => {
    //debugger;
    return (accumulator += currentValue);
  },
  110
);
console.log(reduceMethod2);

//Flat An Array
let arrayInArray = [
  ["one", "two"],
  ["three", "four"],
  ["five", ["six", "seven"]],
];

let flatArray = arrayInArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
});
console.log(flatArray);

//Flat an array using flat method es10 part 
console.log(arrayInArray.flat(Infinity));

//Map Method Chaining System Example
let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
let methodChaining = allNumbers
  .map((elem) => elem * 2)
  .filter((element) => element > 50)
  .reduce((accumulator, currElem) => (accumulator += currElem));
console.log(methodChaining);

//Array Destructing
let countries = ["darjeeling", "pakistan", "afghanistan", "usa", "uk"];
let [one, two, three, four, five] = countries;
console.log(
  `Our Neighbouring countries are ${one}, ${two}, ${three}, ${four}, ${five}`
);

//spread operator
let moreNeighbouringCountries = [...countries, "china", "japan"];
console.log(moreNeighbouringCountries);

//new Set Unique Values 
let firstSet = [1, 1, 3, 4, 5, 2, 3];
let newSetOfArray = new Set(firstSet);
console.log(newSetOfArray);

/* =========== Strings and its methods in Javascript ============ */

let myString = "Hello world"; //using double quotes
let myString1 = "Hello world"; //usimg single quotes
let myString2 = `Hello world`; //using template literals
let myString3 = new String("hello world"); //using constructor
console.log(myString + myString1 + myString2 + myString3);
console.log(myString.length); //for check length of an string

//Escape Characters
let writer = `poem is written by "Mr. Shaikh" `;
//let writer = "poem is written by 'mr shaikh'";
//let writer = 'poem is written by "mr shaikh"';
//let writer = "poem is written by \"mr shk\" ";
//let writer = 'poem is written by \'Mr. Shaikh\' ';
console.log(writer);

//find a string in a string
console.log(writer.indexOf("e"));
console.log(writer.indexOf("e", 3));
console.log(writer.lastIndexOf("e"));
console.log(writer.lastIndexOf("e", 3));
//seach for a string in a string
console.log(writer.search("Mr")); //does not take 2nd argument for position

//Extracting Strings parts
console.log(writer.slice(20)); //20 s end tk return krega
console.log(writer.slice(20, 25)); // 20 s 25 tk return krega
console.log(writer.slice(20, -4)); //last k four nhi dega

console.log(writer.substring(20));
console.log(writer.substring(20, 25));
console.log(writer.substring(20, -4)); //cannot accept negative values

console.log(writer.substr(0, 10)); //0 se 10 tk return krega
console.log(writer.substr(-10)); //returns last 10 values

//Replacing String Contents
console.log(writer.replace("Shaikh", "Aarav"));

//Extracting String Characters
console.log(writer.charAt("11"));
console.log(writer.charCodeAt("11"));
console.log(writer[11]);

//Some Other UseFul Methods are
console.log(writer.toUpperCase());
console.log(writer.toLowerCase());
console.log(writer.concat("yeee"));
console.log(writer.trim()); //remove white spaces
console.log(writer.split(" ")); //converting an string into an array use split with , | - " " etc

/* =========== Date and Time in Javascript ============ */

let date = new Date();
console.log(date);
console.log(date.toLocaleString());
console.log(date.toString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());

console.log(Date.now()); //return miliseconds since 1 jan 1970

//new Date(year, month, day, hour, min, second, miliseconds);
console.log(new Date(2021, 0, 25, 33, 20, 0, 0));
console.log(new Date(2021, 0, 25)); //return year month and date
console.log(new Date(2021, 12)); //return year and month
console.log(new Date("October 13, 2014 11:13:00"));
console.log(new Date(100000000000)); //return only miliseconds

//Js Date Get Methods
console.log(new Date().toLocaleString());
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDate());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());
console.log(new Date().getDay());
console.log(Date.now());

//Js Date Set Methods
console.log(new Date().setDate(15));
console.log(new Date().setFullYear(2026));
console.log(new Date().setFullYear(2026, 10, 5));
console.log(new Date().setMonth(12));

//Js Time Get Methods
console.log(new Date().getTime());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());

//Js Time Set Methods
console.log(new Date().setTime());
console.log(new Date().setHours(5));
console.log(new Date().setMinutes(5));
console.log(new Date().setSeconds(5));
console.log(new Date().setMilliseconds(5));

/* =========== Math Object in Javascript ============ */

console.log(Math.PI); //returns pi Value
console.log(Math.round(25.78)); //return rounded value 26 bcoz .7
console.log(Math.round(25.4)); //return rounded value 25 bcoz .4
console.log(Math.pow(3, 3)); //power 3 * 3 * 3
console.log(Math.sqrt(25)); //Square Root
console.log(Math.abs(-20)); // return positive value
console.log(Math.ceil(25.48)); // always rounds a number up to the next largest integer.
console.log(Math.floor(25.6)); //rounds a number DOWNWARDS to the nearest integer.
console.log(Math.random()); //generate ranodm number
console.log(Math.floor(Math.random() * 10));
console.log(Math.min(0, 120, 150, -87, 09, -5)); //return smallest
console.log(Math.max(0, 120, 150, -87, 09, -5)); //return largest one
console.log(Math.trunc(4.9)); //returns integer part of number by removing fractional digits.
console.log(Math.trunc(-4.9)); //same as math.floor if negative equal to math.ceil

/* =========== DOM , BOM AND Window Object in Javascript ============ */

//3. window-bom : localstorage and session storage, alert , confirm , prompt etc
//inner width and inner height
console.log(innerWidth);
console.log(innerHeight);

//location
console.log(location);
console.log(location.href);

//history
function goBack() {
  console.log(history);
  window.history.back();
}

//confirm, alert, prompt
if (confirm("want to visit on facebook")) {
  alert("you are forwaded to facebook");
  prompt("Your Feed Back please");
  location.href = "https://www.facebook.com";
}

//prompt
let visitorName = prompt("what is your name");
alert(`my name is ${visitorName}`);

//localstorage
localStorage.setItem("name", visitorName);
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

//sessionstorage
sessionStorage.setItem("name", visitorName);
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

//5. Searching And Getting Elements References 
let para = document.getElementById('myPara');
para.style.color = "red";
console.log(document.getElementsByClassName('paragraph'));
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByName('firstname'));
document.querySelector('h1').style.color = "blue";
document.querySelector('.paragraph').style.color = "brown";
document.querySelector('#myPara').style.backgroundColor = "pink";
console.log(document.querySelectorAll('ul .list-item'));

//6. insertAdjacentElement and html 
let container = document.querySelector('.container');

//syntax
//targetElement.insertAdjacentElement(position, element);
//Legal position values are:
//"afterbegin"
//"afterend"
//"beforebegin"
//"beforeend"

//The insertAdjacentHTML() method inserts a text as HTML, into a specified position.
container.insertAdjacentHTML( 'beforebegin' , '<h1>Hello wolrd</h1>')

//The insertAdjacentText() method inserts a the specified element into a specified position.
container.insertAdjacentText( 'beforeend' , 'Hello i am text');


//The insertAdjacentElement() method inserts a the specified element into a specified position.
let p = document.querySelector('.pp');
container.insertAdjacentElement("afterend", p);

/* =========== Events In Javascript ============ */

//Html is on index.html file on line number 22 to 

//2. by Calling A Function
function showMe() {
  alert('Hello wolrd')
}

//3. element.onclick
const myBtn = document.getElementById('myBtn');
myBtn.onclick = function () {
  alert('hello everyone');
}

const myBtnn = document.getElementById('myBtn');
myBtnn.onclick = function () {
  alert('hello everyone2');
}

//4. using event listeners 
let myBtn2 = document.getElementById('myBtn2');
myBtn2.addEventListener('click', () => {
  alert('hello i am event listener');
});

let myBtn3 = document.getElementById('myBtn2');
myBtn3.addEventListener('click', () => {
  alert('hello i am event listener2');
});

//event object 
let eventObj = (event) => {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
}
document.querySelector('.eventobj').addEventListener('click', eventObj);

//Mouse Events 
let mouseEnter = () => {
  console.log('mouse is entered');
}
let mouseLeave = () => {
  console.log('mouse is leaved');
}
let mouseUp = () => {
  console.log('mouse is up');
}
let mouseDown = () => {
  console.log('mouse is down');
}

//Keyboards Events 
let input = document.querySelector('.keyboardEvents');
input.addEventListener('keypress', () => {
  console.log('key is pressed');
});
input.addEventListener('keyup', () => {
  console.log('key is up');
});
input.addEventListener('keydown', () => {
  console.log('key is down');
});

//Input Events in js
const inputHandler = () => {
  let inputBox = document.querySelector('.keyboardEvents').value;
  alert(inputBox);
}

//another way to use onCHange function is 
document.querySelector('.keyboardEvents').addEventListener('change', () => {
  let inputBox = document.querySelector('.keyboardEvents').value;
  alert(inputBox);
});

/* =========== Timing Based Events In Javascript ============ */

let setTimeoutFunctionReference = setTimeout(() => {      //run after 5 seconds
  alert('hello friends ')
}, 5000);
clearTimeout(setTimeoutFunctionReference);          //for stop execution 

let todayDAte = new Date().toLocaleTimeString();
document.querySelector('.Clock').innerHTML = todayDAte;

let setIntervalRefernce = setInterval(() => {         //run every 1 second again and again
  todayDAte = new Date().toLocaleTimeString();
  document.querySelector('.Clock').innerHTML = todayDAte;
}, 1000);
//clearInterval(setIntervalRefernce);           //for stop execution

/* =========== OOPs In Javascript ============ */

let details = {
  name: 'tanu',
  age: 20,
  qualification: 'graducation',
  getData: function () {
    console.log(`my name is ${this.name} my age is ${this.age} i have done ${this.qualification}`);
  }
}
details.getData();

//using es6 method
let bioData = {
  name: 'tanu',
  getData() {
    console.log(`my name is ${this.name}`);
  }
}
bioData.getData();

//nested object
let bioData2 = {
  fullName: {
    firstname: 'tanu',
    lastname: 'yadav'
  },
  age: 21,
}
console.log(bioData2.fullName.firstname);
console.log(bioData2.fullName.lastname);
console.log(bioData2.age);

//This object 
console.log(this);    //it returns window object

function testingThisObj() {
  return this;      //it returns window object
}
console.log(testingThisObj());

let thisObjTestinginObj = {
  myAge: 100,
  getAll() {
    console.log(this);    //it return current object which is thisObjTestinginObj
  }
}
thisObjTestinginObj.getAll();

let thisObjTestinginObj2 = {
  myAge2: 100,
  getAll2: () => {
    console.log(this);    //it return window object bcoz of arrow function 
  }
}
thisObjTestinginObj2.getAll2();

//Object Destructing  comes in es6
let objDEstructing = {
  myNameIs: 'tanu',
  myAgeIs: 20
}
let { myNameIs, myAgeIs } = objDEstructing;
console.log(myNameIs + myAgeIs)

//object properties comes in es6
let frutiName = 'Name of fruit';
let fruitName2 = { [frutiName]: 'Mango' }
console.log(fruitName2);

let cricketor = 'virat kohli';
let tenis = 'sania mirza';
let players = { cricketor, tenis }
console.log(players);

//Speard Operators
let abcd = { name: 'tanu' }
let bcde = { ...abcd, age: 20 }
console.log(bcde);

//Class and inheritance in js 
class myClass {
  constructor (name) {
      this.name = name;
      console.log(this.name);
  }

  myMethod (){
      console.log(`Hello i am a method in class welcome written by ${this.name}`);
  }
}
const myClassObj = new myClass('tanu');
myClassObj.myMethod();

//inheritance 
class A {
  constructor (iAm) {
    console.log(`I am ${iAm} Constructor`);
  }
  aMethod (what) {
    console.log(`A for ${what}`)
  }
}
class B extends A{
  constructor(iAm){
    super('Parents');
    console.log(`I am ${iAm} Constructor`);
  }
  bMethod (what) {
    console.log(`B for ${what}`)
  }
}
const multipleClasses = new B('child');
multipleClasses.aMethod('Apple');
multipleClasses.bMethod('Boy');

/* =========== EcmaScript => ES5 To ES11 ============ */

let letVariable = "i am let variable comes in es6";
console.log(letVariable);
const constVarialbe = "i am const variable comes in es6";
console.log(constVarialbe);
console.log(` I am Template String ${5 + 5}`);
function iAmDefaultArgument(Name = "tanu") {
  return `my name is ${Name}`;
}
console.log(iAmDefaultArgument());
let arrayDestructing = [1, 2, 3, 4, 5];
let [first, second, third, fourth, fifth] = arrayDestructing;
console.log(`1st index value is ${first} and three index value is ${third}`);

let objectDestruting = { title: 'henry poter', desc: 'yay!hello all' }
let { title, desc } = objectDestruting;
console.log(`the title of the book is ${title} and description is ${desc}`);

let MySchool = 'school';
let objProperties = { [MySchool]: 'SSVM' }
console.log(objProperties);

let school = 'SSVM';
let objProperties2 = { school }
console.log(objProperties2);

let iAmArrowFunction = (msg) => `Welcome from ${msg}`;
console.log(iAmArrowFunction('Arrow Function'));

let iAmSpeardOperator = { ...objectDestruting, message: 'i am spread operator' }
console.log(iAmSpeardOperator);

let iAmSpeardOperatorInArray = [...arrayDestructing, 6, 7, 8, 9, 10];
console.log(iAmSpeardOperatorInArray);

let restParameterInFunction = (...allParams) => {
  return allParams;
}
console.log(restParameterInFunction('hello', 'everyone', 'welcome', 'i', 'am', 'rest', 'parameter'));

console.log(`exponential operator of 3 in 3times is ${3 ** 3}`);
console.log(arrayDestructing.includes(3));

let messagee = 'Hello i am a string';
console.log(messagee.padStart(10));
console.log(messagee.padEnd(10));
let myObj = { tofee: 'melody', icecream: 'vanilla' }
console.log(Object.values(myObj));  //it returns only values
let myNewArray = Object.entries(myObj); //it return both in array format
console.log(myNewArray);
console.log(Object.fromEntries(myNewArray));  //it converts an array in object
let flatthisArray = [1, [2, 3, [4, 5], 6, 7], 8]
console.log(flatthisArray.flat(Infinity));    //its flat na array

//Big int
let oldNumber = Number.MAX_SAFE_INTEGER;
console.log(oldNumber);
const newNumber = 9007199254742091n + 100n;
console.log(newNumber);
console.log(typeof (newNumber));

/* =========== Advanced Javascript ============ */

//1.Event Propagation 
//Event Bubblig phase is by DEfault
let parentElement = document.querySelector('#parentElement');
let childElement = document.querySelector('#childElement');

//Event Bubbling 
// parentElement.addEventListener('click',()=>{
//   alert('Hello from parent Element');
// });

// childElement.addEventListener('click',()=>{
//   event.stopPropagation();    //if want to stop propagation use this 
//   alert('Hello from Child Element');
// });

//Event Capturing 
parentElement.addEventListener('click', () => {
  alert('Hello from parent Element');
}, true);      //true is used for event capturing

childElement.addEventListener('click', () => {
  alert('Hello from Child Element');
});

//2. Higher Order Function or callback function
const adding = (a, b) => {                  //CallBack function
  return a + b;
}
const substract = (a, b) => {            //CallBack function
  return a - b;
}
const divide = (a, b) => {               //CallBack function
  return a / b;
}
const multiply = (a, b) => {             //CallBack function
  return a * b;
}

const calculator = (num1, num2, operator) => {          //Higher Order function
  return operator(num1, num2);
}
console.log(calculator(5, 2, adding));
console.log(calculator(5, 2, substract));
console.log(calculator(5, 2, divide));
console.log(calculator(5, 2, multiply));


//=========================================================//

//Before moving ahead let's discuss About some Important topics that is-
//How JavaScript Works And What is Asynchronous javascript (Async js) ? 

//1) Hoisting in JavaScript 
console.log(iAmAVarVarialbe);
var iAmAVarVarialbe = 5;
console.log(iAmAVarVarialbe);

//it executes like this
//var iAmAVarVarialbe;
//console.log(iAmAVarVarialbe);  so the output is undefined
//var iAmAVarVarialbe = 5;
//console.log(iAmAVarVarialbe);  the output  is 5

//2. Scope Chain Lexical scopping 
let myGlobalVarialble = 'Hello, i am global variable';

let outerFunction = () => {
  let outerFunctionVarialbe = 'Hello i am in outer function variable';
  console.log(myGlobalVarialble);
  console.log(outerFunctionVarialbe);
  //console.log(innerFunctionVarialbe);  //cannot acess bcoz i am inside inner function gives errors


  let innerFunction = () => {
    let innerFunctionVarialbe = 'Hello i am in inner function variable';
    console.log(myGlobalVarialble);
    console.log(outerFunctionVarialbe);
    console.log(innerFunctionVarialbe);

  }
  innerFunction();

}
outerFunction();
console.log(myGlobalVarialble);
//console.log(outerFunctionVarialbe); //cannot acess bcoz i am inside function gives errors
//console.log(innerFunctionVarialbe);  //cannot acess bcoz i am inside function gives errors

//3) Closures in Javascript 
let outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    //console.log(a + b);
    return a + b;
  }
  //innerFun();
  return innerFun;
}
//outerFun(5);
let checkClosure = outerFun(5);
console.log(checkClosure());
console.dir(checkClosure);

//4) asychronous js example 
console.log('Hello everone');
setTimeout(() => {
  console.log('i am settimeout function run after 5 seconds but it does not block other code');
}, 5000)
console.log('I am next after st timeout ');

//The output of this code is 
//Hello everone
//I am next after st timeout 
//i am settimeout function run after 5 seconds but it does not block other code

//5) What is Event Loop
//all code comes for execution in execution stak when there is a code which must be run later so it moved in web apis section then when it times turn comes then it moved in message queue then message queue passed it to the execution stack and finally code is executed . 

//=========================================================//

//====================Advanced javascript=========

//3) Function Currying
functionCurrying(3)(5)(8)
function functionCurrying(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    }
  }
}

let currying = (a) => (b) => (c) => console.log(` The sum of ${a} , ${b}, ${c} is ${a + b + c}`);
currying(3)(5)(10)


//4) CallBack Hell 
function callBackHell1() {
  console.log('welcome1')
  function callBackHell2() {
    console.log('welcome2')
    function callBackHell3() {
      console.log('welcome3')
      function callBackHell4() {
        console.log('welcome4')
        function callBackHell5() {
          console.log('welcome5')
          function callBackHell6() {
            console.log('welcome6')
            function callBackHell7() {
              console.log('welcome7')
              function callBackHell8() {
                console.log('welcome8')
                function callBackHell9() {
                  console.log('welcome9')
                  function callBackHell10() {
                    console.log('welcome10')
                  }
                  callBackHell10();
                }
                callBackHell9();
              }
              callBackHell8();
            }
            callBackHell7();
          }
          callBackHell6();
        }
        callBackHell5();
      }
      callBackHell4();
    }
    callBackHell3();
  }
  callBackHell2();
}
callBackHell1();

//5) Ajax Call Using XML Https Request
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/brazil');
request.send();
request.addEventListener('load', function () {
  console.log(this.responseText);   //in json format 
  const data = JSON.parse(this.responseText); // in array an object format
  console.log(data);
});

//6) JSON 
//1. JSON.stringify();
let jsObj = {
  title : 'THe Jungle book',
  author : 'Milky Man',
  Published_on : 'December'
}
let jsonFormat = JSON.stringify(jsObj);
console.log(jsonFormat);

//2) JSON.parse();
let ObjFormat = JSON.parse(jsonFormat);
console.log(ObjFormat);

//7)Fetch API  


















