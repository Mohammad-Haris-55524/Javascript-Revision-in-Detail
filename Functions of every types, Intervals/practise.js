// INSTRUCTIONS FOR FUNCTIONS
//***********************           2 TYPES OF FUNCTIONS         ***************************
//1--)agar my kisi variable ko globally define karo ga to usy function ky andar bhe or bahar bhe kahen bhe use/call kar skta hon magar agar my kisi variable ko locally yani sirf function ky andar use karta hon to usy my sirf function sy bahar hi call kar skta hon
//2--) For good practise use return statement for obtaining the local variable value
// tellTime = () => {
//   let time = new Date();
//   alert(time);
// };
// tellTime();

// function tellTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   alert("Current time: " + theHr + ":" + theMin);
// }
// tellTime();
//agar my kisi variable ko globally define karo ga to usy function ky andar bhe or bahar bhe kahen bhe use kar skta hon magar agar my kisi function ko locally yani sirf function ky andar use karta hon to usy my sirf function sy bahar hi call kar skta hon
// Q2;
// let firstName = prompt("First name");
// let lastName = prompt("Last name");
// function tellName() {
//   firstName = firstName.toUpperCase();
//   lastName = lastName.toUpperCase();
//   console.log("Hello! ", firstName, lastName);
//   alert(firstName, lastName);
// }
// tellName();

//Q3
// function sum() {
//   let firstName = +prompt("First num");
//   let lastName = +prompt("Last num");
//   console.log("Total= ", firstName + lastName);
// }
// sum();

//Q4
// *****************************CALCULATOR **********************************
// function calculator(num1, num2, num3) {
//   let operation = prompt(
//     "Enter the operation you want to perform (+), (-), (*), (/), (%)",
//     "+"
//   );
//   num1 = +prompt("Enter 1st number");
//   num2 = +prompt("Enter 2nd number");
//   num3 = +prompt("Enter 3rd number");
//   if (operation === "+") {
//     let sum = num1 + num2 + num3;
//     console.log(sum);
//   } else if (operation === "-") {
//     let sub = num1 - num2 - num3;
//     console.log(sub);
//   } else if (operation === "*") {
//     let mul = num1 * num2 * num3;
//     console.log(mul);
//   } else if (operation === "/") {
//     let div = num1 / num2 / num3;
//     console.log(div);
//   } else if (operation === "%") {
//     let mod = (num1 % num2) % num3;
//     console.log(mod);
//   } else {
//     console.log("Try again");
//   }
// }
// calculator();

//Q5
// function square(a = 5, b = 5) {
//   return a * b;
// }
// console.log(square());

// function square(a, b) {
//   return a * b;
// }
// console.log(square(6, 6));

// function square(a, b) {
//     let y = a * b;
//     alert(y);
//   }
//   square(6, 6);

//        ****************************** GLOBAL FUNCTION EXAMPLE ****************************************
// globally declartion
// let theSum;
// function addNumbers() {
// var theSum = 5 + 7;   // (Function scope) var let const kisi sy bhe agar function ky andar var ko decalare kerein gy to uss ka scope function ky andar tak hi rahey ga.
// // theSum = 5 + 7;        // global scope because the var or let is declared outside the function
// console.log(theSum);
// }
// addNumbers();
// console.log(theSum); // here the sum is globally defined so the sum will work inside and outside of the function

//        ****************************** LOCAL FUNCTION EXAMPLE ****************************************
// function addNumbers(a, b) {
//   let theSum = a + b; //thesum is a local variable
//   //   alert(theSum); // for good practise use return statement for obtaining the local variable value
//   return theSum;
// }
// // addNumbers(5, 5);
// console.log(addNumbers(5, 5));
// console.log(theSum); //  IT WILL NOT WORK BCZS THESUM IS LOCALLY DEFINED

// // calling the function by passing the value in arguments
// addNumbers(5, 5);

let theSum;
function addNumbers(a, b) {
  theSum = a + b;
}
addNumbers(5, 5);
alert(theSum);

//*************RIGHT ANGLE TRIANGLE************************** */
// function calculateHypotenuse(base, perp) {
//   base = +prompt("Enter base value");
//   perp = +prompt("Enter perp value");

//   function calculateSquare(square, squareRoot) {
//     base = Math.pow(base, 2);
//     perp = Math.pow(perp, 2);
//     square = base + perp;
//     squareRoot = Math.sqrt(square);
//     return squareRoot;
//   }

//   console.log("Hypoteneous = ", calculateSquare());
// }
// calculateHypotenuse();

//*************AREA OF RECTANGLE************************** */ (ARGUMENTS AS VARIABLES)
// function areaORentangle(width, height, area) {
//   width = +prompt("Enter widht");
//   height = +prompt("Enter height");
//   area = width * height;
//   return area;
// }
// console.log("Area of rectangle = ", areaORentangle());

// //*************AREA OF RECTANGLE************************** */ (ARGUMENTS AS VALUES)
// function areaORentangle(width, height) {
//   let area = width * height;
//   return area;
// }
// console.log("Area of rectangle = ", areaORentangle(10, 10));

//*************AREA OF RECTANGLE************************** */ (ARGUMENTS AS VALUES)
// function areaORentangle(width = 10, height = 10) {
//   let area = width * height;
//   return area;
// }
// console.log("Area of rectangle = ", areaORentangle());




// let num = +prompt("Enter the number");
// let fact=1;
// for(let i=1;i<=num;i++){
//     fact = fact*i;   // fact values:- 1,2,6,24,120
//    //fact*=i;
//    console.log(fact); 
// }
 
//**************FACTORIAL  *****************************/

// let num = +prompt("Enter the number"); //Here num is globally declared and can be used in or outside of a fuction.
// function factorial(num,fact){
// num = +prompt("Enter the number");  //locally declared num only can be used only  inside a fuction
// fact=1;

// if(num<0){
//     console.log("Factorial is not possible of nagetive numbers: ", fact);
// }
// else if(num==0){
//     fact = fact +num;
//     return fact;
    
// }
// else
// for(let i=1;i<=num;i++){
//     fact = fact*i;   // fact values:- 1,2,6,24,120
//    //fact*=i;
// }
// return fact;
// // console.log(fact);
// }
// console.log("The factorial of "+ num +  "=",factorial()); // here if we want to call num it will show an error bczs num is locally decleared within a function to call num outside a function we have to make num a global variable outside the function

// function counting(start,end,count){
// num=0;
// start=+prompt("Enter the starting number");
// end=+prompt("Enter the ending number");
// for(let i=start;i<end;i++){                  
//  count= num + i;   
// console.log(count);   // if we use return statement here it will return only 1 num here we want to a series of number thats why we will use console within a loop
// }
// }
// counting();


//************************MOST IMPORTANT FUNCTION PROGRAMS************************************************************************ */

//*****************Without using function*********************
// const str = 'i have learned something new today';

// //split the above string into an array of strings 
// //whenever a blank space is encountered

// const arr = str.split(" ");  //split my space deny sy har word alag alag split ho kar ARRAY ban gy ga 
// console.log(arr);

// // //loop through each element of the array and capitalize the first letter.


// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);  //slice array hamari marzi ka array return kar ky deta hy.slice(1,3) 1 means index and 3 means lenghth of an array jahaan tak ham return karwana chaty han agar length wali jagah kuch nae dalian gy to default end tk return kara dy ga
// console.log(arr[i]);
// }


// // //Join all the elements of the array back into a string 
// //using a blankspace as a separator 
// const str2 = arr.join(" ");
// console.log(str2);

function palindrome(splitInput,reverseInput,joinInput){
    //Taking text input
    let input=prompt("Enter anything");
    console.log(input);
    //Here we are split a string and split will create a new array and we will store it in a split array.
    splitInput=input.split("");
    console.log(splitInput);
    //Here we will reverse tyhe whole array string  and  will store it in a reverse array.
    reverseInput=splitInput.reverse();
    console.log(reverseInput);
    joinInput= reverseInput.join("");
    //Here we will join the array after reversing
    console.log(joinInput);
    // here we will check wether the input string is same after spliting revering and joining if equal THEN IT IT IS PALINDROME
    if(input==joinInput){
        console.log("String you entered is a palindrome");
    }
    else{
        console.log("String you entered is not a palindrome");
    }
}
palindrome();

//*********************************DIFFERNCE BETWEEN CONCAT AND JOIN
// let text1=["Mohammad"];
// let text2=["Haris"];                //CONCAT join karta hy 1 sy ziada strings yah arrays ko aik sath yah data tye change nae karta string ko string or array ko array rehnay deta hy 
// let result=text1.concat(text2);
// console.log(result);
// console.log(typeof result);
// let array1=["apple","mango","orange"];
// let result1=array1.join(" ");            //join 1 hi array ky tamam elements ko aik sath mila deta hy or string return karta hy .
// console.log(result1);
// console.log(typeof result1);

// function longest_str_in_array(arra)
//   {
//     var max_str = arra[0].length;
//     var ans = arra[0];
//     for (var i = 1; i < arra.length; i++) {
//         var maxi = arra[i].length;
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array("Web Development Tutorial"));

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));


// function add(a,b){
//   console.log(Number(a) + b);
// }
// add("a",5);

// Functions and default Parameters Function in JS acts like var both of them are hoisted
// Function Defination OR Function declaration ? And function CALLING OR INVOKING A FUNCTION
//(1) function keyward (2) function name (3) Round brackets () (4) Karli brackets {} (5) karli brackets ky andar
// function ki body ati hy (6) Body close hony ky baad function call kiya jata hy. (function invoke bhe kehty han)
// What are function parameter ?
// Ans: Function name ky sath jo round brackets my variable declare kiye jaty han unhy function parameter kehty han 
// What are functions arguments ?
// Ans: Jab function call karty han to uss ky rounds brackets ky andar argument pass karty han jo parameter ki value bhe kehlaty han 
// Agar aik hi name ky 2 funtion bana dein to konsa wala function execute ho ga yah phr error aye ga ?
// Ans: Agar 2 function same name ky bana dein to last wala function phely walay functions ko overwrite kar dy ga 
// Q) Why we use functions ?
// For Code resuseblity and for example my ny aik form create kiya my chahta hon ky jab my submit ky button par click karo sirf tab hi form submit ho iss ky liye ham function use karty han taaky koi operation tab tak trigger na ho jab tak ham usy allow nae karien.
// Kiu ky agar ham yahi form submission function ky begair bana dety to code run hoty hi operation perform hojata or ham form fill hi nae kar paty woh form empty submit hojata
// Kiu ky jo cheez functions sy bahar hoti han woh code run hoty han yah file execute hoti hi chal jati han or yah execution direct na hon sirf user ky allow karny yah click karny par hi operation perform ho to aisy kamo ky liye ham functions use karty han 
// Can we call a function before declaring it ?
// Ans: Yes, Due to Hoisting whenever a function is declared or a variable is declared with var keyward they will go to the top of the code that it why it is not necessary to invoke (call) a function only after the function declartion/ function defination   

// Doo 2 function of same name =====> sum 
function sum(num1, num2, sum){  //Fuction parameters in (num1,num2,sum)brackets in ka scope sirf function ki body ky andar tak hota hy
sum = num1 - num2;
console.log(sum);
}
sum(3,2); // while passing arguments order does matter 
// // console.log(sum("a" + 5)); // because only 1 variable arguments is passed and num2 is empty that why it is showing undefined
// // console.log(sum()) //NAN because there is no number inside
// // console.log(sum("a" - 5))//NAN because there is no number inside

// function sum(num1, num2, sum){ 
//     sum = num1 + num2;
//     console.log(sum)
    
// }
// sum(5,5); // This function will execute only and both invoking of function will work on the last function 

// Example # 02:
// function Num(number){  
//     document.write('You have passed '+number+"<br/>");  
//     }  
//     // function Num(num){  
//     // document.write(`You haven't passed any arguments ${num}<br/>`);  
//     // }  
//     Num();//Calling function with no parameters undefined
//     Num(1);//Calling function with one parameters 1

//Example # 03 By using return statement
// function sum(num1, num2){ 
//     sum = num1 + num2;
//     return sum // return statement ky nichey wala code kahi execute nae hota iss body ky andar andar hi
//     //agar return nae karwain gy to output bhe nae aye ga undefined show ho ga 
// }
// // console.log(sum(5,5));
// console.log(sum());

// function sum(num1, num2){ 
//     let sum = num1 + num2;
//     return sum
    
// }
// console.log(sum(15,15));

//Example # 03
// What are default Parameters ?
// Ans: Default parameter sirf usy time use my aty han jab function invoking ky time ham arguments my value pass nae karty to jo value ham ny parameter my pass ki hoti hy woh execute hojati hy

function sum(num1 = 10, num2 = 5, sum,mul){ 
let arr = [];
sum =  num1 + num2;
// mul =  num1 * num2;
// arr.push(sum,mul)
// console.log(arr)
// return arr // return statement ky nichey wala code kahi execute nae hota iss body ky andar andar hi
    //agar return nae karwain gy to output bhe nae aye ga undefined show ho ga 
//return sirf at a time 1 value ko hi return kara skty han return num1 + num2 karskty han lekin return add , mul nae karskty agar aisa karein gy to sirf last mul wali value return hogi
//Example on line 368: lekin agar ham chahty han return multile values return karey to ham array yah object my value save kara kar return karein gy
return sum
}
// console.log(sum(5,5)); //10
// console.log(sum());    // 15 due to default parameter
console.log(sum(60)); //65 due to default parameter num1 will be assigned a value of 60 and num2 is not passed in funtion arguments it will take value form parameter which will now work as default parameter

// function sum(num1, num2){ 
//     let sum = num1 - num2;
//     return sum
    
// }// 0 AND NAN

// *******************ARROW FUNCTION OR FAT ARROW FUNCTION (IT IS NOT HOISTED)************************
// NOTE>>>> If we have created 1 Arrow function with SUM name then we cannot create another function with same (SUM) name BEACAUSE we are using let and const AND they both cannot be redeclacred 
// BUT if we want to create functions with same name then we need to store value of a function to a VAR variable.
// Why we use arrow function: It It increases the readability of the code and it is not hoisted
// const sum = (num1 , num2) => {
//  let add = num1 + num2
//  return add;
// }
// console.log(sum(2,4));

// const add = ()=>{
//     console.log("hello");
// }
// add()


// *****************ANONAYMUS FUNCTION(A FUNCTION THAT HAS NO NAME) (IT IS NOT HOISTED)**********************
// This function can never be created in the root of file or in the main code otherwise it will show an error.
// If we need to create this function in a main code so we should have to save its value in any variable like example below

// Use anonymous functions when a short, simple function is needed for a specific task and is not going to be reused elsewhere in the code.
// They are often suitable for quick operations, such as mapping, filtering, or sorting arrays.

// Where ANONAYMUS FUNCTIONs can be used.
//(1) ANONAYMUS FUNCTION AS IIFE
// (function(){ 
//     console.log("hello buddy");
// });

// //(2) ANONAYMUS FUNCTION AS ARROW FUNCTION
// (() => {
//     console.log("This is another anonymous function.");
// })();

// // (3) Anonymous function assigned to a variable
// const str = function(a,b){
//     // console.log("hello");
//     return a+b;
// }
// console.log(str(10,5));

// // (4) Using an anonymous function with map
// // When you use array methods like map, filter, or forEach and you want to specify a function on the spot.
// let numbers = [1, 2, 3, 4];
// let squared = numbers.map(function(x){
//     return x ** 2;
// });
// console.log(squared)

// //ANONAYMUS FUNCTION FOR EVENT HANDELING 
// // function(){
// //     console.log("hello! How are you ?")
// // } // This will show error because anonyyms function does not have any name so it cannot be created in main code 
// document.querySelector("button").addEventListener('click', function(){
//     console.log("I am from anonyyums function : ","Whats up?")

// })

// ANONAYMUS FUNCTION using arrow function
// document.querySelector("button").addEventListener('click', () => {
//     console.log("I am anonyums function as well as arrow function")

// })

// ******************************Intervals in javascript**********************************
// It takes 2 arguments a handler and a time out
// ******setTimeout() and clearTimeout()
//setTimeout() ALLOWS US TO RUN A FUNCTION ONCE AFTER A INTERVAL OF TIME. OR It delays the function execution or Code to be executed after a delay
// Best Example is showing modals jo website open hoty hi aajaty han screen par.
// Example # 01
// console.log("Before Timeout");
// setTimeout(function(){
// console.log("I am from timeout")
// },3000)
// console.log("After Timeout");

// Example # 02 NOTE: Agar timeout my ham koi time pass na bhe karen tab bhe yah sab sy last my execute hoga
// console.log("Before Timeout");
// setTimeout(function(){
// console.log("I am from timeout")
// });
// console.log("After Timeout");

// Example # 03
// let sum = (num1,num2,num3) => {
//    sum = num1 + num2 + num3; 
//     console.log(sum);
// }
// setTimeout(sum,5000,2,2,2) //1st call function then dalay time 5000 for 5 sec, then arguments for adding number
// console.log(sum(2,2,2));

// Example # 04 NOTE : ANOTHER NEW WAY most prefered way also in react
// const setTimeoutHandler = (num1, num2) =>{  
//     console.log(num1 + num2)
// }
// setTimeout(setTimeoutHandler,3000,10,20); // setTimeout is HOF and setTimeoutHandler is a callback

// Example # 05
// function greet(name){
//     console.log(`Hello How are you ${name} `);
// }
// setTimeout(greet,5000,"haris");

// Example # 06
// let greet = prompt("Do you want to run the setTime out if yes press (y) else (n)")
// let a = setTimeout(()=>{
//         console.log("Hello i got yes");
// },3000);

// if("n" == greet){
//     clearTimeout(a);
//     console.log(a);
// }

// Example # 07
// const a = setTimeout(()=>{
// console.log("hello buddy");
// },3000)
// console.log(a); // timer id
// clearTimeout(a); //here we cleared the above settime out function whose value is stored in "a" has be cleared by clear timeout

// Uses of Timeout 
// Delayed Execution: Use setTimeout() when you want to delay the execution of a function or a piece of code.
// User Interface (UI) Updates: Use setTimeout() to schedule UI updates or changes after a certain delay, providing a smoother user experience.
// Asynchronous Code: In scenarios where you need to simulate asynchronous behavior, setTimeout() can be used to defer the execution of code, making it appear asynchronous.
// Loading Indicators: Displaying loading indicators or splash screens for a brief period before displaying the main content.
// Animations: Controlling the timing of animations and transitions in web development.


//**************SET TIME INTERVAL************************/
// The setInterval() function is commonly used to set a delay for functions that are executed again and again, such as animations. You can cancel the interval using clearInterval()

// // EXAMPLE # 01
// // Method # 01 Most prefered method
// let i = 0;
// const setIntervalHandler = setInterval(()=>{
// console.log("hello buddy",i);
// i ++;
// },3000)

// const setClearlHandler = () => {
//     clearInterval(setIntervalHandler);
//     console.log("stop")
// }
// document.querySelector("#stop-timer").addEventListener("click",setClearlHandler); 

// Method # 02
// let i = 0;
// const setIntervalHandler = setInterval(()=>{
// console.log("hello buddy",i);
// i ++;
// },3000)

// by using anonyums function as a callback with a HOF function of add event listner
// document.querySelector("#stop-timer").addEventListener("click",function(){ // function() ya anonyums function hy iss ki jagah ham arrow function use kr skty han or yahaan par yah as a callback function use ho raha hy addeventlistner ky HOF ky sath 
//     clearInterval(setIntervalHandler) //timer id in round bracket to get its value and clear the function execution 
//     console.log("stop i am from anonyums function")
// }); 

// by using fat arrow function as a callback with a HOF function of add event listner
// document.querySelector("#stop-timer").addEventListener("click",()=>{ 
//     clearInterval(setIntervalHandler) //timer id in round bracket to get its value and clear the function execution 
//     console.log("stop i am from fat arrow function")
// });




// ****************************CallBack functions************************** (Technical thapa channel for call backs)
// Function Sequence :- JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined
// Definations for call back 
// A function that is passed into an argument of a higher order function, such function  is called callback.
// This technique allows a function to call another function
// A callback function can run after another function has finished
// Callbacks are a way to make sure certain code doesn't execute untill other code has already finished execution.
// Example # 01
// function fetchData(message) {
//     // Simulating an asynchronous operation (e.g., fetching data from a server)
//     setTimeout(function() {
//         const data = "Hello, this is the fetched data!!!!!!!";
//        message(data) // Execute the callback function with the fetched data
//     }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
// }

// // Using the fetchData function with a callback
// const call_back = (result)=>{
//     console.log(result);
// }
// fetchData(call_back)
// fetchData((result)=> {
//     console.log(result); // Output: Hello, this is the fetched data!
// });

// Example # 02
// const msg1 = (msg2)=>{
//     setTimeout(function(){
//         console.log("hello");
//         msg2()
//     },3000);
    
// }

// const msg2 = ()=>{
//     console.log("haris");
// }
//  msg1(msg2);

// Example # 03
// function repeatAction(a, times) {
//     for (let i = 0; i < times; i++) {
//         a(i);
//     }
// }

// // Callback function
// function printIndex(a) {
//     console.log("Action performed at index:", a);
// }

// // Using the custom higher-order function
// repeatAction(printIndex, 3);

// Example # 04
// let testing = (run,limit) => {
// for(let i=0; i < limit; i++){
// run(i);
// }
// }
// let callMeBack = (value)=>{
//     console.log("Show me the limits:", value)
// // const a = `Show me the limits: ${value} <br>`;
// // document.write(a);

// }
// testing(callMeBack, 5);

// Example # 05
// const myName = (name)=>{
// name = prompt("Enter your name");
// console.log(name);
// }
// document.querySelector('#btn').addEventListener("click",myName);

// Example # 06 (Good example)
  //main function
//   function myCalculator(num1, num2, myDisplayerCallback) {
//     let sum = num1 + num2;
//     // console.log(sum)
//     //callback
//     myDisplayerCallback(sum);
//   }

//   function myDisplayer(sum) {
//     console.log(sum)
//   }
  
//   myCalculator(5, 5 ,myDisplayer);

// // Example # 07 (Good example)
// const greet1 = (msg, greet2 )=>{
//     // setTimeout(function(){
//         msg(); //callback
//         console.log("Iam no 1") //main function
//     //     callback(greet2);
//     // },3000);
//     greet2() //callback
    
// }
// const greet2 = ()=>{
//     console.log("Iam no 2")
// }
// const msg = ()=>{
//     console.log("Hello")
// }
// greet1(msg,greet2);


// Higher Order Functions

// A higher-order function is a function that takes one or more functions as arguments or returns a function as its result
// A function that takes another function as an argument such function is HOF 
// map filter reduce and such other functions are also be used as higher order function like add event listner
//Here add event listner is a higher order function bcz it is taking an arrow function as an argument  
// Example #01
// document.querySelector("xyz").addEventListener("click",()=>{ 
// console.log("This is just an example it will not work")
// });

// Example #02
// // Higher-order function: map
// let numbers = [1, 2, 3, 4];
// // Callback function
// let squared = numbers.map(function(x) {
//     return x ** 2;
// });
// console.log(squared); // Output: [1, 4, 9, 16]

// *********IIFE (Immidately invoked function expression)*********
// A function that is called immideately on the time of execution with even being called
// Jab hamary pas let or const ka concept nae aya tha tab ham IIFE use karty thy 
// Why we use IIFE 
// ANS: Yah ab use nae hota han lekin legacy (old) code my kahen use ho raha hota hy yah use isi liye kia jata tha ky agar jab kisi varaible ko window object my space occupy karey begahir use karna chaiheyee taa ky woh window object my naa chala gy tab ham uss variable ko IIFE use karty thy
// kiu ky agar hamary pas multiple files hoti han project kt time hosta hy ky jis name sy ham varibale declare karen woh already kahen kis or file my use ho raha ho or uss ki wjah sy error aa gy kiu ky multiple files hon magar un ka window object aik hi hota hy to ham agar chahty han yah issue create na hon isi wjah sy ham IIFE use karty thy 
// multiple files aik project ki hon lekin un ka window object aik hi hota hy.
// Example 
// var area = 20; // yah window object my chala gy ga  
// (function greet(){
// var area = 20; // yah window object my nae gy ga iss ka scope sirf block ky andar hi hy bahar iss ka scope khatam ho gy ga
// console.log(area);
// })();
// console.log(window)
// console.log(area);

// consclusion:
// Basically hamary pas phely let const nae hoty thy hamary pas sirf var hota tha jis ka scope global hota hy or woh
// window object my bhe space leta hy to iss sy bachny ky liye ham var ko IIFE ky andar declare karty taa ky hamara
// kaam bhe ho gy to window object my bhe naa gy 