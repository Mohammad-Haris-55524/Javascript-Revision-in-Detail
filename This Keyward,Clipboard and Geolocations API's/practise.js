// 'use strict';
// age = 30;
// age = 40;
// age ++;
// console.log(age ++)
// console.log(age)
// console.log(window)
// console.log(navigator)
// console.log(navigator.clipboard);
// Text copy karny ky liye ham yah use karty han aksar webistes par dekha hoga ap ny aik button diya howa hoga uss par click karnay sy text copy hojata hy
// navigator.clipboard hamey hamari global window object my milta hay yani global window object ky andar navigator ka method/function hota hy 
// woh method/function hamey aik object provide karta hy jis my clipboard ka method hota hay.
// Yah bhe aik built in promise return karty han kiu ky ham parh chukay han ky built in promises ko 2 methods sy mainly resolve karty han by 
// using try catch and then catch methods sy. 

// The function will only work on the click of button.
function copyToClipboard(changeButtonText){ // Method 01: How to access button value ?function ky parameter my button ki value ko THIS keyward ky through access karein gy taky jab text copy hogy to ham button ki value ko bhe change kar dein
// function copyToClipboard(){ //Method # 02
if(navigator.clipboard){
    const copiedClipboardText = document.querySelector(".para-1 > p")
    // const changeButtonText = document.querySelector("#button-value") //Method # 02
    navigator.clipboard.writeText(copiedClipboardText.textContent) // .writeText(): Method is use to copy the text to the clipboard. 
    .then(()=>{
        // alert("Text sucessfully copied from clipboard")
        changeButtonText.innerHTML = "Copied"
    })
    .catch((error)=>{
        console.log("Unable to copy text ",error);
    })
// .readText(): Method is use to read text from the clipboard. 
    navigator.clipboard.readText()
    .then((text)=>{
        console.log(text) // jo text uper copy kiya hoga woh yahaan mil gy ga.
    })
    .catch((error)=>{
        console.log("Unable to read text: ",error);

    })
}
else{
    console.log("Clipboard API is not supported in this browser")
}
}

// navigator.onLine checks wether the user is online or not if user is online it will return true if offline will show false.
console.log(window.navigator.onLine)
//   How to check coonection of user or how to check the network of a user ?
console.log(navigator.connection);

// This NAVIGATOR.GEOLOCATION API IS A OLD API THAT IS WHY IT IS USING CALLBACKS RATHER THAN NAVIGATOR.CLIPBOARD IS A LATEST API AND IT
// RETURNS PROMISES RATHER THAN CALLBACKS
// How to check geo location ? 
function getLocation(buttonValue) {
    if (navigator.geolocation){
    //Get Current position: It is a higher order function that takes 2 callbacks 1st (sucess callback: This call back will run only when it is 
    // sucessfull in getting postion it provides us an object of GeolocationPosition that contains the coordinates and by accesing cordinates 
    // we can acheive latitude and longitute becuase  coordinates contains an object of values of latitude and longitude) and the 2nd callback 
    // is the failure callback that works only when there is an eroor while fetching location.
    navigator.geolocation.getCurrentPosition(sucessCallback, failureCallback)
    buttonValue.innerHTML = "Location fetched!"
    }
     else {
      console.log("Geolocation is not supported by this browser");
    }
  }
  function sucessCallback(GeolocationPosition) {
    console.log(GeolocationPosition)
   console.log("Latitude: ", GeolocationPosition.coords.latitude)
   console.log("Longitude: ", GeolocationPosition.coords.longitude);
   console.log("Time: ", (GeolocationPosition.timestamp / (1000 * 60 * 60)) % 24)
  }

  function failureCallback(error){
    console.log(error)
    console.log("Error meesage: ",error.message);
  }

// ************************************************************THIS KEYWARD******************************************************************
const userDetail = {
    "First Name": "Mohamamd",
    "Last Name": "Haris",
    regId: 55524,
    // *******************************************THIS KEYWARD AS A GLOBAL OBJECT (Window object)**********************************************
    // regId: this,// regId: "this ==> Here this will refer as a global object known as window object beacuse we are using browser console but in NODE enviroment where we does not use any browser there it will show an empty object.
    address: {street: 3, area: "Golden Town", city: "Karachi", "THIS keyward": this}, //"THIS keyward": this ==> Here this will global object known as window object.
    // greeting: () => {console.log("THIS: ", this);} // In an arraow function this keyward will refer as a global object known as window object.
    // *****************************************************THIS KEYWARD AS A OBJECT *********************************************************

    // 1) In an object method, this refers to the object.
    // greeting: function() {console.log("THIS: ", this)} // Here, THIS keyward will show the entire object of user Deatil.
      // Method definition using ES6 shorthand
    greeting() {console.log("THIS: ", this)}                // Here, THIS keyward will show the entire object of user Deatil.
    }
    console.log(userDetail.greeting()); //Yahan undefined isi liye aa raha hy kiu ky ham greeting() ky function my kuch return nae kara rahy 
    // han lekin agar ham console ko hata kar return ("THIS: ", this) likh dein to yah wala undefined bhe chala gy ga.
    // console.log("User Info: ",userDetail.address);
    // console.log("User Info: ",userDetail.regId);

    // **************2) Alone, this refers to the global object (WINDOW OBJECT).*****************
    // console.log("Alone THIS: ",this)


    // 'use strict'; Will not work here due to function keyward beacuse it is hoisted. Agar strict mode lagana hi hay to top of the code on line # 01 par lagana pary ga.
    // **************3) In a function, this refers to the global object.*************************
    const functionThis = function(){  // this is a function expression function expression ko bhe normal function ki trha call karna parta hay
    // yahaan my function expression isi liye bana raha hon kiu ky yah anonyums function hay or iss ki value kisi my to save karani pary gi isi
    // liye yah function expression bana kar varible my save kara di. Ham chahty to function name dy kar bhe yah kaam kara skty han koi issue
    // nae.
    console.log("Function THIS:",this)
    return this
    }
    // functionThis();
    // console.log("Function THIS: ",functionThis()) // will return the function output
    // console.log(functionThis) // will return the function defination

// 4) In a function, in strict mode, this is undefined. Scernrio # 01
//    const checkingStrictModeUsingThis = function(){
//     return this
//    }
// console.log(checkingStrictModeUsingThis()); // Will return undefined if strict mode is open and function is declared by using function keyward

// 4) In a arrow function, in strict mode, this is GLOBAL OBJECT HOW ? Scernrio # 02 (Due to arrow function)
// Remember: Arrow function my this hamesha global object(Window) hi rahey ga beshak strict mode on ho yah na ho. Lekin
// STRICT MODE my normal function undefined hogy ga. or agar strict mode hatain gy normal function sy to woh wapis global object (window) ko 
// target kary ga
    const checkingStrictModeUsingThis = () => {
      // console.log(this)
        return this
       }
      //  const result = checkingStrictModeUsingThis();
      //  console.log(result)
    console.log(checkingStrictModeUsingThis());
    //Will return GLOBAL OBJECT (WINDOW OBJECT) beacuse function is declared by using arrow function
    // not by function keyward so conclusion is that THIS keyward does not works on arrow functions.

// 5) In an event, this refers to the element that received the event.
function checkingThisKeyward(thisValue){
    console.log(thisValue);// HERE, when a user click the buttons this function triggers and it will show the entire button. Ab iss ko use kar
    // ky ham button ki value get kar skty han .innerHTML ky through yah button ka text change kara skty han .textContent ky through. 
}

function myName(){
  console.log("Hello")
  return this
}
console.log(myName());
// *********************************************EXAMPLES OF THIS KEYWARD********************************************
// Example # 01
// Define an object with a method using a function declaration
let person = {
    firstName: "John",
    lastName: "Doe",
    // Method definition
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  // Call the object method
  console.log(person.fullName()); // Output: John Doe (kiu ky object method ky andar THIS refers to an object)

// Example # 02
// Define an object with a method using a function expression
let car = {
    brand: "Toyota",
    model: "Camry",
    // Method definition using function expression
    displayInfo: function() {
      return "Brand: " + this.brand + ", Model: " + this.model;
    }
  };
  
  // Call the object method
  console.log(car.displayInfo()); // Output: Brand: Toyota, Model: Camry

//   Example # 03
// Define an object with a method using ES6 method shorthand
let calculator = {
    // Properties
    operand1: 0,
    operand2: 0,
    // Method definition using ES6 shorthand
    add() {
      return this.operand1 + this.operand2;
    },
    subtract() {
      return this.operand1 - this.operand2;
    }
  };
  // Set operand values
  calculator.operand1 = 10;
  calculator.operand2 = 5;
  
  // Call the object methods
  console.log(calculator.add());      // Output: 15
  console.log(calculator.subtract()); // Output: 5

//   Example # 05:
let circle = {
  radius: 5,
  // Method definition using arrow function
  circumference: () => 2 * Math.PI * this.radius
//   What if we will create a function by using function keyward it will bind 'THIS' to an object an will sove the NaN error beacuse here 'THIS'
// keyward will refer to an object method, and this refers to the object if declared with function keyward.
//   circumference: function() {return 2 * Math.PI * this.radius}
};

// Call the object method
console.log(circle.circumference()); // Output: NaN (because arrow function does not bind 'this' to the object)

//   const time = new Date();
// //   const getTimeOfDate = new Date("2-28-2024");
// const getTimeOfDate = Date.now();
// console.log(getTimeOfDate)
// console.log(Math.floor((getTimeOfDate / (1000 * 60 * 60)) % 24));

// //   console.log(getTimeOfDate.getHours())
// //   console.log(getTimeOfDate.getTime()/(1000 * 60 * 60) % 24)
// // console.log(time.getTime()/ (1000 * 60 * 60 * 24) - )


