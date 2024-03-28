// let inputFirstName = prompt("Enter your First name");
// let inputLastName = prompt("Enter your last name");
// let finalName = inputFirstName.concat(" ", inputLastName);
// console.log("HELLO! ", finalName);
// let lengthOfString = finalName.length;
// console.log("Length of an array: ", lengthOfString);

// let myName = "PAKNISTAN";
// let a = myName.length;
// console.log(a);
// let b = myName.indexOf("N");
// let c = myName.lastIndexOf("N");
// let d = myName.indexOf("PAKISTAN");
// console.log(b,c, d);

// let c = myName.indexOf("A");
// let res = myName.lastIndexOf("A");
// console.log(c, res);

// // CHAR AT IS USED TO FIND THE CHARACTER
// let e = myName.charAt(3);
// console.log(e);
// let res = myName.includes("z");
// console.log(res);

// let inputName = prompt("Enter name");
// // let y = inputName.split("");
// // console.log(y);
// // let nameArray = [];

// // // let found = false;
// let specialCharacters = [33, 44, 46, 64];
// let ifFound = true;
// console.log(typeof specialCharacters)
// let inputName = prompt("ENTER YOUR NAME");
// for (let i = 0; i < inputName.length; i++) {
//     // console.log(inputName.charCodeAt([i]), typeof inputName)
//     // let newArray = inputName.charCodeAt([i]);
//     // console.log(newArray, typeof newArray);
//     if(inputName.includes("!") || inputName.includes("@")){
//       console.log("wrong user name : ", inputName);
//       break;
      
//     }
//     else{
//       console.log("Good user name : ", inputName);
//       break;
//     }
//     // nameArray = inputName.split("");
//     // console.log(nameArray);
//     // console.log(nameArray[i]);
//   // if (inputName.charCodeAt(inputName[i]) == specialCharacters[i]) {
//   //   console.log(y[i]);
//   // }
//   // else{
//   //   console.log("poor")
//   // }
// }
// console.log(inputName[i]);
// let y = inputName.split("");
// let checkCode = inputName.charAt(y);

// console.log(y);
// console.log(checkCode);
// if (valid[i] != 33 || valid[i] != 44 || valid[i] != 46 || valid[i] != 64) {
//   console.log("Valid user name");
// }


// var inputName = prompt("Enter your Username "); //HARIS
// var storeUserName = [];
// var displayMessage;
// for (var i = 0; i < inputName.length; i++) {
//   storeUserName[i] = inputName.charCodeAt(i);
//   if (
//     storeUserName[i] != 33 ||
//     storeUserName[i] != 44 ||
//     storeUserName[i] != 46 ||
//     storeUserName[i] != 64
//   ) {
//     displayMessage = "Correct Username";
//   }
//   while (
//     storeUserName[i] == 33 ||
//     storeUserName[i] == 44 ||
//     storeUserName[i] == 46 ||
//     storeUserName[i] == 64
//   ) {
//     alert("Invalid username");
//     inputName = prompt("Enter your Username ");
//     for (var i = 0; i < inputName.length; i++) {
//       storeUserName[i] = inputName.charCodeAt(i);
//       if (
//         storeUserName[i] != 33 ||
//         storeUserName[i] != 44 ||
//         storeUserName[i] != 46 ||
//         storeUserName[i] != 64
//       ) {
//         break;
//       }
//     }
//   }
// }
// alert(displayMessage);

//*************************CREATE YOUR PASSWORD******************************** */
// let inputPassword = prompt("Enter Your password: ");
// let storePassword = [];
// let message;
// for (let i = 0; i < inputPassword.length; i++) {
//   storePassword[i] = inputPassword.charCodeAt(i);
//   if (
//     storePassword[i] >= 48 ||
//     storePassword[i] <= 57 ||
//     storePassword[i] >= 65 ||
//     storePassword[i] <= 90 ||
//     storePassword[i] >= 97 ||
//     storePassword[i] <= 122
//   ) {
//     message = "Strong password";
//   }

//   while (storePassword[0] >= 48 && storePassword[0] <= 57) {
//     alert("Invalid password");
//     inputPassword = prompt("Enter a valid password: ");
//     for (let i = 0; i < inputPassword.length; i++) {
//       storePassword[i] = inputPassword.charCodeAt(i);
//       if (
//         storePassword[i] >= 48 ||
//         storePassword[i] <= 57 ||
//         storePassword[i] >= 65 ||
//         storePassword[i] <= 90 ||
//         storePassword[i] >= 97 ||
//         storePassword[i] <= 122
//       ) {
//         break;
//       }
//     }
//   }
// }
// alert("Strong pASSWORD");

// let myName = "PAKISTANI";
// let a = myName.indexOf("A");
// let b = myName.lastIndexOf("A");
// console.log(a);
// console.log(b);
// let c = myName.charAt(3);
// console.log(c);

//******REPLACE STRING METHOD************** */
//Q1
// let cityName = "HYDERABAD";
// let d = cityName.replace("HYDER", "ISLAM");
// console.log(d);
// //Q2
// var message =
//   "Ali and Sami are best friends. They play cricket and football together";
// let messg = message.replace(/and/g, "&"); //gloabal replacement means to change strings more than 1 character
// //let messg = message.replaceAll("and", "&");
// console.log(messg);
// //  Q3
// let fullName = "Mohammad Haris Hameed";
// let myName = fullName.replace(/haris/gi, "Adil"); // g for global and i with stand for insensitive case for e.g (Haris starts with capital H but due to /gi it replaces word Haris neglectiing its capital H due to /gi i=insensitive)
// console.log(myName);

// // By using uper case only on relaced words
// let full_Name = "Mohammad Haris Hameed";
// let my_Name = full_Name.replace(/haris|hameed/gi, function (x) {
//   return x.toUpperCase();
// }); // g for global and i with stand for insensitive case for e.g (Haris starts with capital H but due to /gi it replaces word Haris neglectiing its capital H due to /gi i=insensitive)
// console.log(my_Name);

// //check the last character
// let inputName = prompt("Enter your name");
// let x = inputName.charAt(inputName.length - 1);
// console.log(x);

// //check the ASCII code of last character
// let inputName1 = prompt("Enter your name");
// let y = inputName1.charCodeAt(inputName.length - 1);
// console.log(y);

//************Convert name to tittle case *******************/
// let inputName = prompt("Your name");
// // let i = inputName.split("");
// const capitalized = inputName.charAt(0).toUpperCase() + inputName.slice(1);
// console.log(capitalized);
// console.log(inputName);

//************remove . from num *******************/
// let num = 32.42;
// let arr = [];
// arr.push(num)
// let a = num.toString();
// let j = a.replace(".", "");
// console.log(a);
// console.log(j);
// console.log(typeof num, typeof a);
// console.log(arr, typeof arr);

//******STRING SPLIT METHOD************** */

// let university = "University of Karachi";
// let z = university.split("");
// console.log(z);

// let text = "How! are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];
// console.log(myArray);
// console.log(word);

// let university = prompt("Enter any string");
// let z = university.split("");
// console.log(z);

// function indexOf(inputString,indexOfString){
//     inputString=prompt("Enter any string");
//     indexOfString=inputString.split("");
//     console.log(indexOfString);
//     return indexOfString;    
// }
// indexOf();


// let text = "Apple, Banana, Kiwi";
// let part = text.slice(5,10);
// console.log(part);

// JS revision

// let firstName = prompt("Enter your First Name", );
// let lastName = prompt("Enter your Last Name", );
// let fullName = firstName.concat(" ", lastName);
// console.log(fullName);

// program to check the number of occurrence of a character
// function countString(str, letter) {
//     let count = 0;
//     console.log(str, letter)
//     // looping through the items
//     for (let i = 0; i < str.length; i++) {

//         // check if the character is at that position
//         if (str.charAt(i) == letter) {  
//             count += 1;
//         }
//     }
//     return count;
// }
// // take input from the user
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');

// //passing parameters and calling the function
// const result = countString(string, letterToCheck);

// displaying the result
// console.log(result);

// let userFavMobile = prompt("Tell me your favourite mobile name");
// console.log(userFavMobile," Length of characters: ", userFavMobile.length);

// let input = prompt("Enter any name");
// console.log(input);
// let checkIndex = prompt("Enter any character of which you want to find the index");
// console.log(input.charAt(checkIndex)); // how to check the character by typing the index no
// console.log(input.indexOf(checkIndex)); // how to check the index of any character in a string
// console.log(input.lastIndexOf(checkIndex)); // how to check the last index in a string if 2 same charcter are present for e.g harias two a are present for 2nd last a we would use lastIndexOf()

//concat method
// let firstName = prompt("ENTER FIRST NAME");
// let middleName = prompt("ENTER MIDDLE NAME");
// let lastName = prompt("ENTER LAST NAME");
// console.log(firstName.concat(" ",middleName, " ",lastName));

// REPLACE METHOD
// let input = prompt("enter any string");

// for(let j=0; j<=specialCharacters.length; j++){
//     console.log(specialCharacters[i,j]);
// }

//Q13 // wrong method
// let CharFound = "!.";
// let userName = prompt("User Name");
// // console.log(userName);
// for(let i=0; i<CharFound.length; i++){
//     // console.log("outer loop : " , CharFound[i]);
//     for(let j=0; j<userName.length; j++){

//         // console.log(typeof userName);
//         // console.log(typeof CharFound);
//         console.log(CharFound[i] ,"  : " ,userName[j]);
        
//         if(CharFound[i] == userName[j]){
//             console.log("IF WALA: ",userName);
//         //     console.log(typeof userName);
//         // console.log(typeof CharFound);
        
//         }
        
//         else{
//             console.log("Wrong user name");
                
//         }
      
//     }
// }
  



// let userName = "haris"
// // console.log(userName.charAt(2));
// console.log(specialCharacters.charCodeAt(0));

//Q13 RIGHT METHOD

// function checkUsername(){
// const specialCharacters = ["@","!",".","#","$","()"]; // for indexOf() method
// // const specialCharacters = [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64]; // for charCodeOf() method
// let userName = prompt("Enter your name: ");
// let isValid = false;
// for(let i=0; i<specialCharacters.length; i++){
//   if(userName.indexOf(specialCharacters[i]) !== -1){
//     // if(specialCharacters.includes(userName.charCodeAt(i))){
//     console.log("Wrong user name" , userName);
//     isValid = true;
//     break;
//   }
// }
// if(isValid){
//   alert("Special characters are not allowed");
//   checkUsername()
// }
// else{
//   alert("User name saved: " +userName)

// }
// }
// checkUsername()


// function checkUserPassword(){
//   let inputPassword = prompt("Enter your password");
//   let numbers = ["0","1","2","3","4","5","6","7","8","9"];
//   // let character = ["A","a","B","b","C","c","D","d","E","e"];
// let character = "/^(0|[1-9]\d{0,2})$/";
//   // console.log(character)
// let isValid = false;
// if(inputPassword.length<=6){
// for(let i=0; i<numbers.length; i++){
//   if(inputPassword[0] == numbers[i]){
//     alert("password should not start with number");
//     console.log(inputPassword);
//     isValid = true;
//     break;
//   }
// }
// if(isValid){
//   alert("Again enter password");
//   checkUserPassword();
// }
// else{
//   alert("correct password: " + inputPassword);
// }
// }
// else{
//  alert("password too long"); 
//  checkUserPassword();
// }
// }
// checkUserPassword();



// Wrong appraoch because i don't know REGEX
// function checkUserPassword(){
//   let inputPassword = prompt("Enter your password");
//   // let character = "/^[A-Za-z]+$/";
//   // let number = "/^(0|[1-9]\d{0,2})$/";
//   // console.log(character)
// let isValid = false;
// //checking 1st condition for password length should be less than 6 characters
// if(inputPassword.length>6){

//   //checking 2nd condition: That password shouldn't start with number
// if("/^(0|[1-9]\d{0,2})$/".includes(inputPassword[0])){
//     console.log("Starting character shouldn't be a number");
//     checkUserPassword(); //phela wala if
// }

//   //checking 3rd condition: Password should contain numbers and character both
// for(let i=1; i<inputPassword.length; i++){
//     if("/^[A-Za-z]+$/".includes(inputPassword) && "/^(0|[1-9]\d{0,2})$/".includes(inputPassword)){
//       console.log("GEO");
//       break;
//     }
//     else{ //1st wala else
//       console.log("Password Sucessfull :" + inputPassword);
//       break;
//     }

// }
   

// }
// else{
//   console.log("Password too short...");
// }


// }
// checkUserPassword();

// The correct One 
function checkUserPassword(){
let inputPassword = prompt("Enter your password");
let numbers = [48,49,50,51,52,53,54,55,56,57]; // FOR NUMBERS 1-9
let character = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]; //ONLY FOR CAPITAL LETTERS
let numberFound = false;
let charcterFound = false;
  let isValid = false;
//Checking 1st condition: Password lenght should be greater than 6 characters
if(inputPassword.length>=6){

//Checking 2nd condition: Password should not start with a number
for(let i=0; i<inputPassword.length; i++){
    if(inputPassword[0] == numbers.includes(numbers[i])){
        alert("password should not start with number");
        isValid = true;
        console.log(inputPassword);
        break;
    }
    
//Checking 3rd condition: Password should contain alphabets and character boths   
  if(numbers.includes(inputPassword.charCodeAt(i))){
    numberFound = true;

  }
  if(character.includes(inputPassword.charCodeAt(i))){
    charcterFound = true;

  }}

if(numberFound !== charcterFound ) {
    alert("Wrong Password");
    console.log("Password does not meets the criteria : " , inputPassword);
    isValid = true;

}
  if(isValid){
    alert("Again enter password");
    checkUserPassword();
}

else{
alert("Password Sucessfully activated :")
console.log("Password Sucessfully activated : ",  inputPassword);
}

}
else{
alert("password too short..."); 
checkUserPassword();
}

}
checkUserPassword();

// let inputPassword = prompt("Enter your password");
// let numbers = [48,49,50,51,52,53,54,55,56,57];
// let character = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
// for(let i=0; i<inputPassword.length; i++){
// // if(numbers[i].includes(inputPassword.charCodeAt(i)))
// // if(inputPassword.charCodeAt(inputPassword[i]) )
// // if(inputPassword[i].charCodeAt()) 

// // == (numbers[i].includes()))

// //  console.log(inputPassword[i].charCodeAt())   
// //  console.log(inputPassword[i].charCodeAt() == inputPassword[i].includes(numbers[i])) 
// if(numbers.includes(inputPassword.charCodeAt(i)) && character.includes(inputPassword.charCodeAt(i))){
// console.log("true")
// }  
// else{
// console.log("false")
// }

// }

// let inputPassword = prompt("Enter your password");
// let numbers = [48,49,50,51,52,53,54,55,56,57];
// let character = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];

// let hasNumber = false;
// let hasCharacter = false;

// for (let i = 0; i < inputPassword.length; i++) {
//   if (numbers.includes(inputPassword.charCodeAt(i))) {
//     hasNumber = true;
//   }
//   if (character.includes(inputPassword.charCodeAt(i))) {
//     hasCharacter = true;
//   }
// }

// if (hasNumber && hasCharacter) {
//   console.log("Password contains both numbers and characters.");
// } else {
//   console.log("Password does not contain both numbers and characters.");
// }
// let x = [1,2,3]; 
// console.log(typeof x) // type object
// for(let i=0; i < x.length; i++){
// let y = x // work fine
// console.log(y);
// }
// {
// console.log("true")

// }
// else{
//     console.log("false");
// }
// }

// // let character = ["A","a","B","b","C","c","D","d","E","e"];
// let character = ["65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90"];
// for(let i=0; i < numbers.length; i++){
// if(inputPassword[i].includes(numbers[i])){
// console.log("true");
// }
// else{
//     console.log("false")
// }
// }

// console.log(character, numbers)
// let isValid = false;
// if(inputPassword.length<=6){
// for(let i=0; i<numbers.length; i++){
// if(inputPassword[0] == numbers[i] && inputPassword.includes(numbers[i])){
//   alert("password should not start with number");
//   console.log(inputPassword);
//   isValid = true;
//   break;
// }

// // Palindrome no:
// let inputNo = prompt("Enter any number");
// console.log(inputNo,":",typeof inputNo);
// // let checkNo = inputNo.split("").reverse().join("");
// for(let i=inputNo.length; i>=1; i--){
//     var output = Number(i) + 0;
//     console.log(output);
// }
// console.log(output)
// console.log(y);
// if(checkNo === inputNo){
//     console.log("Palindrome NUMBER");

// }
// else{
//     console.log("NOT PALINDROME");
// }

//Strings method slice() It will return a new string and will not change the orignal string on which it is called 
// let names = "haris, adil, hassan, ali";
// console.log(names.slice(4,6)); //starting point 4 is where to cut the string and the second number means till where you want the string
// console.log(names.slice(15,5));
// console.log(names.slice(15)); //starting 15 strings will be extracted
// console.log(names.slice(-15)); // will extract string from backward due to nagetive sign
// console.log(names.slice(-12,-10));
// console.log(names.slice(-12,15));
// console.log(names);

//replace() It will return a new string and will not change the orignal string on which it is called /g (g flag)means global mtlb yah replaceAll ki jagah use hota hy 
// let detail = "my name is haris. who named you haris and why and what is the meaning of haris";
// console.log(detail.replace("haris","adil"));
// console.log(detail);

//replaceAll() It will return a new string and will not change the orignal string on which it is called /g (g flag)means global mtlb yah replaceAll ki jagah use hota hy
// let detail = "my name is haris. who named you haris and why and what is the meaning of HARIS";
// // console.log(detail.replaceAll("haris","adil"));
// console.log(detail.replace(/haris/gi,"adil")); //yahi replaceAll() wala kaam /g flag use (global match) /i for insensitive cases
// console.log(detail.replace(/haris/g,"adil"));
// console.log(detail.replace(/haris/i,"adil"));  
// console.log("Orignal string: ",detail);

// //UPPER CASE AND LOWER CASE METHODS
// let myName = "M.Haris";
// let hisName = "ALI";
// let herName = "M.adil";
// console.log(myName.toUpperCase());
// console.log(hisName.toLowerCase());
// console.log(myName.concat(" ",hisName," ",herName));

//TRIM METHODS (Use to remove white spaces from the string)
// let sentence = "           hello   world       ";
// console.log("length : ", sentence.length);
// console.log(sentence.trim(),"length :" , sentence.trimStart().length);
// console.log(sentence.trimStart(),"length :" , sentence.length);
// console.log(sentence.trimEnd(),"length :" , sentence.length);

//PAD METHOD The padStart() method pads a string with another string (multiple times) until it reaches a given length.
//It pads a string with another string (multiple times) until it reaches a given length.
// let string = "My name is Haris";
// console.log(string.padStart(21,"hello"));
// console.log(string.padEnd(20,"Bye"));

// Differnce b/w charAt() charCodeAt() In dono ki brackets my number jata hy jis ka hamey character yah phr ASCII code pta karna ho
// let input = prompt("Enter any name");
// console.log(input);
// let checkIndex = prompt("Enter index no of which you want to find the character");
// console.log("input no :", checkIndex);
// console.log("char At method: ",input.charAt(checkIndex));
// console.log("Char code At method: ",input.charCodeAt(checkIndex));
// let myname = "haris";
// console.log(myname.charAt(3));
// console.log(myname.charCodeAt(s)); // error

//Split array (It converts string to array(object) by splitting them and it can be reconverted to string by using join() method
// let myString = "An,array,in,a,string,separated by a comma";
// let myString = "An array in a string separated by a comma";
// // console.log(myString.split(""));
// // console.log(myString.split(" "));
// console.log(myString.split(","));

//Search String methods 
//indexOf() vs search() 
// Q) Did You Notice?
// The two methods, indexOf() and search(), are equal?
//They accept the same arguments (parameters), and return the same value?
//The two methods are NOT equal. These are the differences:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
//indexOf() Iss my string pass karty han or yah uss ki location btata hay ky woh kis index par mojud hay agar woh string present nae hota to -1 show karta hy 
// let text = "Please locate where 'locate' occurs! locate safasfsaf locate";
// // let index = text.indexOf("Locate",10); 1st paramenter my jis string ko find karna hy woh ata hy or second parameter agar dena chahye to dy skty han phr woh searching wahaan hi sy start karey ga jo second parameter my index number pass kia hoga 
// // let index = text.indexOf("locate");
// // let index = text.lastIndexOf("locate");
// let index = text.lastIndexOf("locate", 40);
// console.log(index)

// search() 
// let string = "hello Haris! Why you came late totay haris ?"
// console.log(string.search(/haris/));
// console.log(string.search(/haris/gi));

//match()
// let text = "The rain in SPAIN stays mainly in the plain";
// let output = text.match(/ain/gi);
// let occurrence = output.length
// console.log(output);
// console.log("no of occurence in a string is: ", occurrence);

//matchAll()

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// console.log(typeof iterator, Array.from(iterator))
// console.log(typeof checkOcc, ":" , checkOcc);

//Example for matchAll()
// let input = prompt("Enter any string");
// console.log(input);
// var checkOcc = prompt("Enter the charcter to check");
// let iterator = (input.matchAll(checkOcc));
// console.log(iterator);
// console.log("Occurence of: ", checkOcc, " = ", Array.from(iterator).length);

//includes()
// let text = "Hello world, welcome to the universe.";
// console.log(text.includes("world")); // return true if string found and false if string not found
// console.log(text.includes("work")); //false

//Example for includes()
// let inputStr = prompt("Enter any string");
// let chrFound = prompt("Enter the character to find in the string");
// var count = 0;
// for(let i=0; i<inputStr.length; i++){
// // if(inputStr[i] == chrFound){
// if(inputStr[i].includes(chrFound)){
//     count += 1;
//     // console.log(count);
// }
// }
// console.log("No of occurence of ",chrFound, ":" ,count)
// if(count == 0){
//     console.log("not found")
// }

// startWith() It also takes 2 parameter 1 is the string another is the starting point from where to start
// let str = "A Quick brown fox jumps over the lazy dog but why only it jumped only dog";
// console.log(str.startsWith("Quick"))// false
// console.log(str.startsWith("A"))// true
// console.log(str.startsWith("fox",14))// true

//endsWith() NOTE: It also takes 2 but parameter 1 is the string 2ND ONE IS THE ENDING POSTION OF THE STRING COUNT
// let strg = "A Quick brown fox jumps over the lazy dog but why only it jumped only dog";
// console.log(strg.endsWith("Quick"))// false
// console.log(strg.endsWith("dog"))// true
// console.log(strg.endsWith("jumps",23),)// TRUE
// console.log(strg.endsWith("brown",13))// TRUE
// console.log(strg.endsWith("brown",12))// false

//************TEMPLATE LITERLS ********************/
// Template literals allows US TO USE variables in strings

// For multiple lines strings we use back ticks
// In this example we have write qoute in double qoma and secondly it is also a multiple line string that is why we used back ticks.
// let text = `"A Quick brown fox jumps over the lazy dog" but why only it jumped only dog A Quick brown fox jumps over the lazy dog but why only it jumped only dog A Quick brown fox jumps over the lazy dog but why only it jumped only dog A Quick brown fox jumps over the lazy dog but why only it jumped only dog A Quick brown fox jumps over the lazy dog but why only it jumped only dog A Quick brown fox jumps over the lazy dog but why only it jumped only dog`;
// console.log(text);

// let firstName = "Mohammad";
// let lastName = "Haris";
// console.log(`"Welcome" ${firstName} ${lastName}`);

// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// console.log(total)
// console.log((`TOTAL: ${price * (1 + VAT).toFixed(2)}`));

// let x = 20.233,
// y = 2,
// i = 7,
// z = 12;
// let dmasRule = `Result: ${(z*y) + (x / i) - (x+y+z)}`
// console.log(dmasRule);










