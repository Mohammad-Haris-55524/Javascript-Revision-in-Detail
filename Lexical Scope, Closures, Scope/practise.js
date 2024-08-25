// ------------------------------------------What is LEXICAL SCOPE ?----------------------------------------------------
// Any inner function can have access to its outer scope variables it is called Lexical Scope.
// Lexical scope in JavaScript refers to the concept that the accessibility of variables is determined by their location
// within the code's structure, specifically where they are defined and where they are being used. In simpler terms, it
// means that variables declared outside of a function are accessible inside that function, but not vice versa.

// Lexical scope JavaScript mein ek concept hai jismein variables ki accessibility unki code ki structure mein location
// ke through decide hoti hai, specifically unki definition aur unka use kahaan hai. Aur simple shabdon mein, ye yeh
// kehta hai ke agar kisi variable ko kisi function ke bahar declare kiya gaya hai toh wo us function ke andar access
// ho sakta hai, lekin ulta nahi.

// --------------------------------------------My own defination:--------------------------------------------------------
// Ham Lexical scope ko 2 parts my smjhain gy
// 1-)Bhai lexical scope ko simple words my aisy smjh sktay han ky varibles ki accessiblity depend karti hay ky unhay code
// structure my kidhar define kiya jaa raha hay. Yani unhay agar global scope my define kiya jaa raha hy to uss
// varibale ko kahen bhe use kiya jaa skta hy. Kiu ky agar kisi varibale ko global scope my declare karein gy or ussi
// varible ko kisi bhe function ky andar use karna chahen to ham use kar skty han kiu ky uss variable ka scope gloabl hay
// lekin agar kisi varible ko function ky andar define kia gya hay to ham uss variable ko outside the function use
// nahe kar skty kiu ky ab uss varible ka scope (function scope) hay.

// 2) Lexical scope part 2
// Lexical in simple words beta(child), baap(parent) ki sab chezain lain skta hy magar beta(child) apni chezaain apnay
// baap(parent) ko nahe day skta isi trha beta(child) apni chezain apnay dosry bhaiou(child2 ,child3...) ko bhe nahe dy
// skta. Kitnay hi betay(child functions) hon apnay baap sy chezain lein skty han magar day nahe skty.

// -----------------------------------CODE BASED EXAMPLES OF LEXICAL SCOPE-----------------------------------------
// Example # 01 (Beginner level Example):
// Lexical scope with code Example:
//Funtion scope my jo bhe variable banao gy woh ap ko outer space my avalible nahe hota. Har fuction ka apna aik scope
// hota hy or jo bhe cheez scope ky bahar use karna chahty han woh avaliable nahe hoti.(Check line 31 userName has a
// function scope that is why it is not avaliable outside the scope)

// function outer(){
//     let userName ="Mohammad Haris"; //userName has a function scope so it cannot be used outside the function.
//     console.log(`My name is ${userName}`)
// }
// // console.log(`My name is ${userName}`)
// outer();
// console.log(`My name is ${userName}`) // Error not defined bcz (It cannot be used/called outside the function scope).

// Example # 02
// let userName ="Mohammad Haris"; //userName was globlay defined that is why it is accessible inside the function
// function outer(){
//     console.log(`My name is ${userName}`)
//     function innerOne(){
//         console.log(`I am inner ONE: ${userName}`);
//     }
//     function innerTwo(){
//         console.log(`I am inner TWO: ${userName}`);
//     }
//     innerOne()
//     innerTwo();
// }
// outer();

// Example # 03 (Detailed example)
// Agar Kabhi ham ny function ky andar koi function banaya hy to bahar(Outer) waly function ky (variable properties) wagera
// ka scope andar waly functions innerOne(), innerTwo() ky pas hoga yahi lexical scoping kehlati hay. Yani ky child
// functions apnay outer/parent function sy chezaian(variable properties) lay skta han magar wohi child functions
// innerOne(), innerTwo() apni chezain (variable, properties) na hi aik dosry ky sath share kar skty han or nahe parent ko
// day skty han.
// let gender = "Male";
// function outer() {
//   let userName = "Mohammad Haris"; //userName has a function scope so it cannot be used outside the function.
//   console.log(`My name is ${userName}`);
//   //   console.log("Friends name:",innerOneFriend, innerTwoFriend) // Error: Not defined BCZ (Variables declared inside a Child functions cannot be accessed outside of its own child function scope)
//   function innerOne() {
//     let innerOneFriend = "Zain Ahmed khan";
//     console.log(`I am inner ONE: ${userName} ${gender}`);
//     console.log(`I am ${userName}'s friend my name is ${innerOneFriend}`);
//     // console.log(innerTwoFriend) // Error: Not defined BCZ (innerTwoFriend is a varible of innerTwo() child function so we
//     //  already know that child functions does not  have an outer scope it means that every child function will not
//     //  share its (varible and properties) values with any other child and parent funtion because it does not have an outer
//     //   scope
//   }
//   function innerTwo() {
//     let innerTwoFriend = "Nadeem Akram";
//     console.log(`I am inner TWO: ${userName} ${gender}`);
//     console.log(`I am ${userName}'s friend's my name is ${innerTwoFriend}`);
//     // console.log(innerOneFriend); // Error: Not defined BCZ (innerOneFriend is a varible of innerOne() child function so
//     // we already know that child functions does not have an outer scope it means that every child function will not
//     // share its (varible and properties) values with any other child and parent funtion because it does not have an outer
//     // scope
// }
// innerOne();
// innerTwo();
// }
// outer();
// console.log(`My name is ${userName}`); // Error not defined bcz (It cannot be used/called outside the function scope).

//-----------------------------------------------CLOSURES IN JAVASCROPT-------------------------------------------------
// EXAMPLE # 01 : (In this code we will be returning refrence of 1 functions ===> 1: child function)
function makeFunc() { // PARENT FUNCTION
  let message = "Good morning !";
  console.log("I am parent function:", message);

  function displayName() { // CHILD FUNCTION ACCESSING VALUES OF ITS PARENT FUNCTION DUE TO LEXICAL SCOPE AND CLOSURES
    let age = 25;
    console.log("Child function :", message);
  }
return displayName // Yaad rahay ky yahaan ham child function ko call nahe kar rahy balky Ham yahaan par displayName
  // ka refrence pass kar rhay han yani iss my sirf isi displayFunction ki pori body pass
}
let myFunc = makeFunc();
myFunc();

// ---------------------------------EXPLAINING THE ENTIRE DYNAMICS OF CLOSURES-----------------------------------------
// function makeFunc(){
//   let message = "Good morning !";
//   console.log("I am parent function:", message)
//     function displayName(){
//       let y =100;
//        console.log("Child function :",message),y;
//     }
// return displayName; // Yaad rahay ky yahaan ham child function ko call nahe kar rahy balky Ham yahaan par displayName
//     // ka refrence pass kar rhay han yani iss my sirf isi displayFunction ki pori body pass
//  }
// let checking = makeFunc();
// checking()

// ----------------------HOW DOES CLOSURES AND LEXICAL SCOPING WORKS USING ABOVE CODE EXAMPLE---------------------------
/*Function ka scope kab tk rehta hy? Jab tak woh execute hota hy. Lekin jab execute hogya to uss ka scope to khatam hogya 
to uper ki example ham dekhty han ky jab ham ny  let checking = makeFunc(); makeFunc() ko execute kar diya hy to iss pory
function (makeFunc()) ka scope to khatam/ghaib hogya to iss ka mtlb agar pory function ka scope hi pora khatam yah ghaib
hogya hy to ab kesy chaly gi LEXICAL SCOPING kiu ky jab tak outer function(makeFunc()) tha tab hi to inner function(display
Name()) ko sab kuch(varibales/parameter) mil raha thy na to agar outer function ki ghaib hogya hay to ab kiya hoga ?

Yahhan par bara important concept ata hy JS ka jis ka name hay 'CLOSURES' jo hamey batata hy ky although uss ka scope
execution context wahaan sy hata diya hy (yani function execution context) lekin yahaan par memory ka role aajata hy jesy 
ky hamey pata hy JS ky pas 2 hi chezain han aik memory store karna or dosra single thread my execute karna to yahaan 
memory ki execution ka role ajata hy yahaan par. To yahaan par jo ap ny (let myfunc = makeFunc();) bnaya hy (myfunc) to yah 
myfunc kiya karta hy ky jesy hi aap ny (let myfunc = makeFunc()) myfunc() ko execute kara or return kar diya displayName
to sirf displayName nahe gy ga yah important hay note karo ghor sy ky sirf displayName nahe gy ga balky agar uss ka outer
function bhe agar exsist karta hy to uss ky outer function(makeFunc()) ka bhe pora scope gy ga kiu ky lexical scoping to hay
hi na to lexical scoping ki wjah sy hi woh jata hy to yah mat sochna ky sirf yah function(displayName()) hi uth gy gy ga
kiu ky ham ny to sirf is function ko hi bheja hy (return displayName) kiu ky jesa ky hamey pata hy iss function (displayName())
ky sath or bhe bhot sy tar juray howy han jesy uss ky parent function(makeFunc()) ki woh chezain bhe uss mu uth kar jayen gi
jis ki tar displayFucn() ky sath juray howy han yani makeFunc() ka let message = "Good morning !" bhe uth kar child function
my gy kiu ky LEXICAL SCOPING hy na to pora ka pora lexical scope uth kar jata hy jo jo cheez bhe child function(displayName())
my use ho rahi ho woh parent sy uth kar child my bhe aagya kiu ky pori ki pori memory share hoti hay na ky function ka execution
context mtlb yahi ghalti log interview my karty han ky ham function ka execution context  return displayName; jaa raha hy to  sirf
yahi uth kar jaa raha hoga  
function displayFucn(){
      let y =100;
       console.log("Child function :",message);
    }
lekin aisa nahe hay sirf yahi uth nahe kar nahe gy ga balky pora lexial scope uth kar jaa raha hy to iss sy howa kiya hamey kiya
acheive kar liya ham ny ? to ham ny yah acheive ka liya ky ab ham child function (displayFucn()) my console.log("Child function :",message)
iss message ko print kara skta han kiu ky agar aisa nahe hota to ham child function my message ko print hi na karwa skty error ajata hamary pas
kiu ky mesage to outerFunction (makeFunc()) my tha na inner function my to tha hi nahe phr kesy print hogya to yah sab lexical scoping thy
thorugh possibile howa hay.
Yahaa hamey 2 chezain smjh ayen han 
1) Lexical scope: Yani innner function apnay parent function sy values share kar skty han 
2) Closures: Jab bhe ham koi pora ka pora function hi return kar dety han to sirf wohi function return nahe hota balkay uss ka poray ka 
pora scope return hota hy yanni uss ka 'LEXICAL SCOPE' pora return hota hy. */

// ------------------------------------------NESTED CLOSURES EXAMPLES-----------------------------------------------
// Example # 02: (In this code we will be returning refrence of 2 functions ===> 1: a parent function 2: child function)
// function makeFunc() { // GRAND PARENT FUNCTION
//   let message = "Good morning !";
//   console.log("I am parent function:", message);

//   function displayName() { // PARENT FUNCTION
//     let age = 25;
//     console.log("Child function :", message);

//     function child2() { //This CHILD FUNCTION can access values of GRAND PARENT FUNCTION as well as PARENT FUNCTION due TO LEXICAL SCOPE AND CLOSURES
//       console.log("AGE: ", age, "Message:", message);
//     }
//   return child2; // here we are returning refrence of a function not an invoking a function.
//   }
// return displayName // here we are returning refrence of a function not an invoking a function.
// }
// let dispName = makeFunc();
// let child2 = dispName();
// child2();

// Example # 03 (In this code we will be returning refrence of 1 function ==> 1: child function)
// function makeFunc() { //GRAND PARENT FUNCTION
//   let message = "Good morning !";
//   console.log("I am parent function:", message);

//   function displayName() { // PARENT FUNCTION
//     let age = 25;
//     console.log("Child function :", message);

//     function child2() { //This CHILD FUNCTION can access values of GRAND PARENT FUNCTION as well as PARENT FUNCTION due TO LEXICAL SCOPE AND CLOSURES
//       console.log("AGE: ", age, "Message:", message);
//     }
//   return child2;
//   }
//   let childfun = displayName();
//   childfun();
//   // console.log(childfun)
// }
// makeFunc()

// function makeFunc(){
//   let message = "Good morning !";
//   console.log("I am parent function:", message)
//     function displayName(){
//       let age = 30;
//        console.log("Child function :",message);
//        console.log("AGE:", age)
//     }
//     // displayName();
//     // console.log(displayName);
//     // return displayName();
//     return displayName; // Yaad rahay ky yahaan ham child function ko call nahe kar rahy balky Ham yahaan par displayName
//     // ka refrence pass kar rhay han yani iss my sirf isi displayFunction ki pori body pass
//   }
// // let checking = makeFunc;
// // console.log(checking())
// let checking = makeFunc();
// // console.log(checking)
// // console.log(makeFunc())
// checking(); // output
// // console.log(checking());// undefined + output

// Example # 04: Using Anonymuys function expression
// let parentFunc = function(a){
// let c = 10;
// console.log("value of A: ",a);
// console.log("value of C: ",c);

// let childFunc = function(b){
// return a + b + c
// }
// return childFunc;
// }
// let parent = parentFunc(20) //passing value of 'a' as an argument
// console.log("SUM :",parent(5)); // passing value to 'b' as an argument

// Example # 05:
// function parentFunc(a){
//   let c = 10;
//   console.log("value of A: ",a);
//   console.log("value of C: ",c);
//   // Creating another function and returning it at the same time
//   return function childFunc(b){
//   return a + b + c;
//   }
// }
//   let parent = parentFunc(20) // passing value of 'a' as an argument
//   console.log("SUM :",parent(5)); // passing value to 'b' as an argument

// Example # 06: CLOSURES USING Nested functions Without paramter and arguments
// function calculator(a, b, c) {
// return{
//     sum:function() {
//       return a + b;
//     },
//     sub: function() {
//       return a - b;
//     },
//     mul: function() {
//       return a * b * c;
//     },
//     div: function() {
//       return (a + b) / c;
//     }
//   }
// }
// let parent = calculator(100,50,20)
// // Passing values without using parameters
// console.log("Addition: ",parent.sum());
// console.log("Subtraction: ",parent.sub());
// console.log("muliplication: ",parent.mul());
// console.log("division: ",parent.div());


// Example # 07: CLOSURES USING Nested functions using paramter and arguments
// function calculator(a, b, c) {
//   return{
//       sum:function(a,b) {
//         return a + b;
//       },
//       sub: function(a,b) {
//         return a - b;
//       },
//       mul: function(a,b,c) {
//         return a * b * c;
//       },
//       div: function(a,b,c) {
//         return (a + b) / c;
//       }
//     }
//   }
// // Passing values to functions parameters using their arguments while invoking them. 
// let parent = calculator()
// console.log("Addition: ",parent.sum(10,20,30));
// console.log("Subtraction: ",parent.sub(20,10));
// console.log("muliplication: ",parent.mul(10,10,10));
// console.log("division: ",parent.div(100,200,10));

// Example # 08: CLOSURES USING Nested functions using paramter and arguments
// function calculator(a,b){
//   function add(){
//     return a + b;
//   } 
//   function sub(a,b){
//     return a - b;
//   }
// // Creating a varible to store the value of sub function 
// let subtraction = sub(20,10)
// console.log("Subtaction: ",subtraction)
// // Passing add function refrenece
// return  add;
// }

// let parent = calculator(100,100)
// console.log("Addition answer: ",parent());


// Example : 09
function mathOperation(){
function radius(){
let length = 100;
let breath = 200;

// child function # 01
function circleRadius(){
    return length + breath;
  }
let child = circleRadius();
console.log("INNER CHILD 1: ",child)

// Child function # 02
function squareRadius(a,b){
  return a * b;
}
let child2 = squareRadius(10,20);
console.log("INNER CHILD 2: ",child2)
}
radius()

// function airthmeticOperation(a,b){
// return
// {
//   function add(){
//     return a + b;
//   } 

//   function sub(){
//     return a - b;
//   }
// }

}
mathOperation()
// let operation = airthmeticOperation(10,20)
// console.log(operation)

// ----------------------------------------------------SCOPES IN JS----------------------------------------------------
// There are 3 types of scopes 1) Gloabl scope (2) Function scope (3) Block scope
// ---------------------------------Example using VAR (Global scope vs Function scopes)--------------------------------
// // Example # 01(BASIC EXAMPLE)
// var a= 10;
// function number(){
//   var b =20;
//   console.log("A inside function: ",a) // a is accesable because it is avalible in global scope
//   console.log("B inside function: ",b) // b is accesable because it is avalible in function scope
// }
// number()
// console.log("A outside function: ",a) // a is accesable because it is avalible in global scope.
// console.log("B outside function: ",b) //Error: b not defined (Because it is avalible inside function scope and cannot be 
// // accesed outside the function)

// NOTE: Agar kisi variable ko function ky andar declare kiya hay to uss ka access function sy bahar nahe hoga

// Example # 02 (REASSIGNMENT WILL REMAIN SAME FOR LET AND VAR KEYWARD CONST KEYWARD CANNOT BE REASSIGNED)
// var a= 10;
// function number(){
// console.log("A inside function before reassignment: ",a) // 10
// //Re assignment now the value of a will be changed from a=10 to a = 20 Wether it is inside a function or outside the function
//   a = 20; 
//   console.log("A inside function after reassignment: ",a) // a = 20 due to reassignment.
//   ++a;
//   a++;
// }
// number()
// console.log("A outside function: ",a) 
// Note: Here the value of a will be changed from a = 10 to a = 20 beacuse it was reassigned inside the function now its 
// values has been changed. The reassigned value will remain same wether it is outside or inside the function.

// NOTE: Agar kisi variable ko let / var sy reassignment kara diya hy fuction scope ky andar to ab uss ki value change ho
// gy gi yani ab agar uss variable ki value ko ham function ky andar access karein yah function ky bahar access karein hamey
// reassignment (changed) value milay gi. Han yaad rahy agar ham uss value ko reassignent sy phelay access karein gy to
// hamey global scope wali value mil gy gi.


// ---------------------------Example using LET KEYWARD (Global scope vs Function scopes)-------------------------------
// // Example # 01
// let a = 10; // Global scope

// function bar() {
//     let b = 20; // Function scope
//     console.log(a); // Accessible a =10
//     console.log(b); // Accessible b = 20
// }

// bar();
// console.log(a); // Is Accessible due to GLOBAL scope a =10. 
// console.log(b); // ReferenceError: b is not defined


// What is the Difference between redeclaration and reassignment?  Do they both produce different result while accessing 
// them inside or outside a function ? ANSWER: "YES"

// HERE, We Cannot access 'a' from global kiu ky jab aik hi name ky varible ko gloabal or function scope my same
// name sy redeclare karein gy to LET keyward jo function ky andar wala hoga woh global scope ki power ko khatam kar
// dy ga yani global wala 'a' hamey function ky andar access nahe hoga due to REDECLARATION. Or Agar ham redeclararion 
// baad my kar rahy han function ky andar or uss ki value ko pehlay access karna chah rahy han taky woh value hamey global
// scope wali mil gy. To aisa nahe hoga kiu ky function scope ky andar wala LET bahar waly let ka rasta band kar dy ga due
// to same name initialization. Lekin agar yahi same cheez VAR keyward ky through ki hoti to hamey error ki jagah 
// UNDEFINED milta kiu ky var keyward are HOISTED. (CHECK LINE # 423)

// Example # 02 (CONCEPT OF REDECLARTION USING LET)
// let a = 10; // Global scope
// function bar() {
//   // What if a redeclare a ? Here global scope power will be finished due to REDECLARTION of 'a' again 
//   // console.log("Before redeclaration: ",a); // ERROR CANNOT ACCESS VALUE BEFORE INITIALIZATION
//     let a = 100; // Function scope
//     console.log("After redeclaration: ",a); // Accessible from function scope After redeclaration a = 20;
// }    
// bar();
// // REDECLARE EXAMPLE:
// console.log("Outside function: ",a); // Is Accessible from  GLOBAL scope because redeclaration only avaliable inside the function scope a =10. 

// ----------------------------------------------------------------------------------------------------------------------

// Example # 02 (CONCEPT OF REDECLARTION USING VAR)
// var b = 20;// Global scope
// function bar() {
//   // What if a redeclare a ? 
//   console.log("Before redeclaration: ",b); // UNDEFINED DUE TO HOISTING BECAUSE OF USING (VAR) KEYWARD
//     var b = 100; // Function scope
//     console.log("After redeclaration: ",b); // Accessible from function scope After redeclaration a = 20;
// }    
// bar();
// // REDECLARE EXAMPLE:
// console.log("Outside function: ",b); // Is Accessible from  GLOBAL scope because redeclaration only avaliable inside
//  the function scope b =20. 


// ----------------POINTS TO REMEMBER: DIFFERENCE BETWEEN REDECLARATION AND REASSIGNMENT IN SCOPES----------------------- 
// 1-A) REDECLARATION GLOBAL SCOPE KI POWER KO KHATAM KAR DETI HAY CHECK (EXAMPLE 2)
// 1-B) JAB BHE REDECLARATION HO GI LET / VAR SY TO UNN KI REDECALRED VALES SIRF USI FUNCTION KY ANDAR TAK HI ACCESSIBLE HON GI 
// FUNCTION SY BAHAR GLOBAL SCOPE WALI VALUE KAAM KARY GI 
// 1-C) DECLARATION AND FUNCTION ARE ONLY HOISTED BUT ONLY WHEN WE USE VAR TO DECLARE A VARIBALE OR USE FUNCTION KEYWARD
// TO DECALRE A FUNCTION   

// 2-A) REASSIGNMENT GLOBAL SCOPE KI POWER KO KHATAM NAHE KARTI (EXAMPLE 1)
// 2-B) AGAR JAB BHE HAM REASSIGNMENT KARTY HAN LET / VAR SY TO VARIBLES KI VALUES SIRF FUNCTION KY ANDAR HI NAHE BALKY
// FUNCTIONS KY BAHAR BHE CHANGE HO JATI HAN 

// --------------------------------------------BLOCK SCOPE USING VAR----------------------------------------------------
// Example # 01
// console.log(x);  //undefined
//   var x = 200;
//   if (true) {
//     var x = 400;  // redeclaration
//     console.log(x);  // 400
//   }
//   console.log(x);  //400 due to var becz var does not have a block scope (this is the drwaback of var kiu ky jab ham
// chah rahy hoty han koi declaration hamary block sy bahar accesible na ho to tab agar ham var use karein gy to hamara
// kaam kharab ho gy ga aisi situion jab ham chahtay han hamara scope block sy bahar na gy then always use LET)

// Example # 02

// var x = 1200; 
// function example(){
// console.log(x);  //undefined
// var x = 200;
// let z = 900;
// if (true) {
//   let i = 200;
//   var x = 400;  // redeclaration
//   // let x = 400;  // redeclaration
//   console.log("Inside block I : ",i);  // i = 200
//   console.log("Inside block X : ",x);  // x = 400
//   // console.log("I AM Z: ",z);
//   // z = 400;  // will not damage above value of z
//   // let z = 21; //redeclaration of z
// }
// console.log("Outside block X : ",x);  // x = 400 (bcz var is not a block scope)
// // console.log("Outside block I : ",i); // Error: i not defined (becz i is a blocked scope varible)
// console.log(z);
// }
// example();
// console.log("Outside function scope X : ",x);  // Error: x not defined (NOT AVALIABLE DUE TO FUNCTION SCOPE ONLY WHEN IF GLOBAL X VARIABLE IN NOT AVALAIBLE)
// console.log("Outside function scope I : ",i); // Error: i not defined (NOT AVALIABLE DUE TO BLOCK SCOPE)


// Example  # 03(A)
 // Maan lo agar js my may aik function banata hon show() name sy or phr usi name sy aik varibale bnata
// hon to yahaan par function show() overwrite ho gy ga show varible sy.
function show(){}
show = "How are you? " 
  console.log(show)

// Example # 03(B)
// Jab bhe ham function ky andar koi variable declared karein or phr usi name sy function ko bhe declare kar dein to 
// woh function overwite ho gy varible ky name sy 
let a = 1;
function b() {
    a = 10; //local varibale hay (JS my functions ko ziada perority milti hay hoisting ky process my to yahaan 
    // compilation face my function a() function b() sy attach ho gy ga or JS my functions variable ki trha treat hoty 
    // han to yahaan par function a() overwrite ho gy ga varible  a = 10 sy to iss coditon my yahaan par jo a = 10 hay
    //  woh overwrite hochuka hoga function sy to ab a =10 wali value hamey nahe mily gi balky global scope wali value
    // mil gy gi yah local varibale untouched rahy ga.
    return;
    function a() {}
}
b();
console.log(a)

// Example # 04
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

for (let i = 0; i < 3; i++) {
  console.log(i)
  setTimeout(function() {
      console.log("var in loop :", i);
  }, 3000);
  // console.log(i)
}
console.log("OUTSIDE: ",i)



