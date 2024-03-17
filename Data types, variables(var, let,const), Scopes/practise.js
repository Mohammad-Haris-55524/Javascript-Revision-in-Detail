// alert(
//   "Starting with the name of ALLAH who is the most benificial and the most magnificent"
// );
// var a = 10,
//   b = 20;
// var c = a + b;
// alert(c);
// var a = 10,
//   b = 20,
//   c = 4;
// // var z = (a + b) / c;
// var z =((a / c) * b) + (a % c);
// alert(z);
// var $_ = 10;
// alert($_);

var myname; //declaration 
myName = "MOHAMMAD adil"; //assignemt
myName = "adil nadeem"
console.log(myName);

//****************************Data types  ==> Primitive & Not Primitive Data type**********************************
// Data type ka data ko store karny ka tarika hoti han
//********** */ Primitive data types**************** 
var firstName = "haris"; 
console.log(typeof firstName, firstName); //string: The string data type in javascript represents a sequence of characters that are surrounded by single or double quotes.

var myNumber= 55524; 
console.log(typeof myNumber, myNumber); //Number: Number data type in javascript can be used to hold decimal values as well as values without decimals. 

var isAdult = true 
console.log(typeof isAdult, isAdult); //Boolean: The boolean data type can accept only two values i.e. true and false.

var userInput = null; //when we don't know the initial value we use null. For exp we are creating object for student and we dont't know the information about student we will use null.
console.log(typeof userInput, userInput); //null

var myName;
console.log(typeof myName, myName); //undefined 

// why primitive data types are called primitive ?
// because primitive is always copied by VALUE

//example # 01
// console.log("first Name: ", firstName);
// var lastName = firstName;
// console.log("Last Name: ",lastName);


//example # 02
console.log("first Name: ", firstName);
fullName = "haris-hameed";
console.log("Full-Name: ",fullName);




// *********NON PRIMITIVE DATA TYPES***************** 
//Objects = objects
//Array = Objects

//1) When to use an array
//ANS: Jab hamary pas same data type ki multiple values ho to array use karein gy, differnet data type ki values bhe use kar skty han error naae aye ga magar good practise my yah cheez nae ati

// Index value starts from 0(zero) length value starts form 1 (lenght is the property of an array)
//What is Prototypal  ?
//Ans: Jab bhe ham string ya array ky agy dot lagaty han to hamary pas multiple methods uss jaty han array yah string use kar rahy hon us skyh lihaaz sy jo yah method aty han hamary pas woh PROTOTYPAL INHERITANCE ky thorugh aty han.


let students = ["ALI" , "HARIS", "SAQIB" , "ADIL"]; // lenght = 4, Index = n-1 ==> 4 - 1 = 3
console.log(typeof students, students);
// console.log("std arr lenght: " , students.length); // 4 
// console.log("std arr lenght (method 1): " , students[students.length-2]); //[iss bracket my index no ata hy]  uts method 2 is below
// const index = students.length-1;
// console.log("std arr lenght (method 2): " , students[index]);
students[1] = "musa";
students[0] = "ALI HAIDER";
console.log(students);
// AT method is JS
// console.log(students.at(1)); //- laganay sy ulta chaly ga 
// console.log(students.at(-2)); //- laganay sy ulta chaly ga 
// //How to acess a value of an array
// console.log("STD NAME: " ,students[1]);//SAQIB


// let adults = [true , false, true, false];
// console.log(adults);

// adults.forEach(function (e){
// console.log("we are adults: ", e);

// });
 let $undefined = [undefined , undefined, undefined];
 console.log($undefined);

 let mixedArray = ["haris" , 55524, false, undefined, null]; //lenght = 5, index = n-1 = 5-1 = 4
 console.log(mixedArray);


//**********Objects************/
//2) When to use an Object
//ANS: kisi specific cheez sy related multiple information ho jesy students tab ham objects use karty han OR Jab hamary pas multiple data type ki multiple value hon to ha objects use karty han
//object ky pas properties hoti han key value pairs my

let Std_1 = {
name:"haris",  //name is key and haris is value
"reg Id No": 55524,  
"father Name": "abdul hameed",
hometown: "karachi",
isAdult: true,
hometown: "Islamabad", // this will overwrite the old value of karachi ==> Islamabad
}
//how to access object value
//old methodd
console.log("Student Data: ",Std_1);
console.log("Student Data: ",Std_1.name);
console.log("Student Data: ",Std_1.hometown);

//new method for dynamic value (best way)
console.log("Student Data: ",Std_1["reg Id No"]);
console.log("Student Data: ",Std_1["name"]);
console.log("Student Data: ",Std_1["isAdult"]);
console.log("Student Data: ",Std_1["father Name"]);

//create a new key an assign it a value

Std_1["full name"] = "Mohammad Haris";
Std_1.fullName = "mohammad haris"

// var x = 10;
// console.log(x);
// x=11;
// console.log(x); 

//create a new key an assign it a value to an object by using function (for adding dynamicaly we use [] )

const addKey = (key) =>{
Std_1[key] = "adil nadeem";
}
addKey("last name");



// console.log(std1); //value cannot be accces before inatizalization
// let std1 = "haris";


// console.log(std2); 
// var std2 = "adil"; 


// console.log(std3);  //value cannot be accces before inatizalization
// const std3 = "zain";


//**************************************/VARIABLES & D/F BETWEEN LET VAR CONST****************************************** 
// Whenever a variable with var is declared it adds in window object and when it commented it vanishes from window object.
// so in a project our approch should be to use let and const varibles because if the more var variable will be, the more varibles would get add into window object and our window object will get heavy and the size of window object will indirectly be increased and it is also not a good practise.
// console.log(regIdNo); //undefined (because var is hoisted whenever the code runs the var and function get on the top of the code)
// var regIdNo = 55524;
// console.log(regIdNo); 

// // console.log(studentName); // will throw and error and will not read code further ==> value cannot access before inatizalization
// let studentName = "adil";
// console.log(studentName);

// console.log(pi); // will throw and error and will not read code further ==> value cannot access before inatizalization
// const pi = 3.142;
// console.log(pi);

 
// D/F BETWEEN LET VAR CONST 
// var ==> global scope, function scope, can be reassigned as well as re declared 
// let , const ==> block scope, function scope, further information below

// let and var  can be re assigned but  
//let and const cannot be re declared ===> only var can be re declared.
  
// var a = 10;
// // var a = 20; can be re daclared by same variable name
// a = 20; // re assignment to a 
// let b = 20;
// // let b = 30; // cannot be redeclared 
// b = 30; //  let can only be re assigned
// const c = 40; // const can neither be re assigned nor re declared
// // const c = 10; // error ==> c is already been declared
// // c = 40; // error ==> assignemt to const is not possible
// let d= a + b + c;
// b = 30;
// console.log(d); //70
// console.log(window);

// *********************************Scopes in JS*************************************************

// JavaScript has 3 types of scope:

// Block scope
// Function scope
// Global scope

// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

// let a = "hello";

// function greet() {
//     let b = "World"
//     console.log(a + b); //helloWorld
// }

// greet();
// // console.log(a + b); // b is not defined

// function myFunction() {
//     var carName = "Volvo";   // Function Scope
//     console.log(carName);
//   }
// myFunction();
// console.log(carName);

//***************Block scope (let and const)*******************
// console.log(a); //not defined
// if(true)
// {
//     // console.log(a); // cannot acess value before initialization
//     let a = 10;
//     // a=12;
//    console.log(a++);
//     console.log(a);

// // example #03
// // const a = 10;
// // // a++;  // error ==> assignemt to constant variable
// // console.log(a);


// }
// else{
//     console.log("hell0");
// }
// console.log(a); // not defined

//******************Block scope example for var******************

// console.log(a); //undefined
// if(true)
// {
// console.log(a); //undefined
// var a = 10;
// a++; 
// ++a;
// console.log(a);

// }
// a++;
// console.log(a); // not defined






