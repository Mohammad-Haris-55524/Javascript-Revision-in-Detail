// NOTE: There can be multiple naming exports in a file but default export should be only 1 in a file. We cannot make
//  multiple default export in a single file.
// ************************Learning how to IMPORTS in main file by using NAMING exports.********************************
// HERE, Iam importing all the naming exports files. Always remember to write .js in the end while give file path name.

// NOTE: NAME imports my wohi name rakhnay parin gy jo file my varibales function objects yah arrays ky thy lekin defualt 
// export my zarori nae hay ky wohi name rakhy jo actual my uss function yah varibale ka hy

// TRY TO UNDERSTAND 1 THINGS THAT: (Alias) kara ka name ko meaning full banaya jaa skta hy NAMING OR DEFAULT dono imports 
// my lekin jab ham import karty han naming import ky thorugh jesy (import { userName,fatherName,regId,arrayOfName,userInformation } from "./dataTypes.js";)
// iss trha to tab hamey wohi name rakhna hoga jo varible function array/object ka hay lekin agar yahi import ham ny 
// DEFAULT import (import airthmetic from "./airthmetic.js") ky through hota to agar ham iss ky NAME(airthmetic) hy to ham
//  iss ki jagah (import meriMarziKaNaam from "./airthmetic.js"; NAME(meriMarziKaNaam) likh bhe dein tab bhe yah wohi 
// function array object variable lay kar aye ga jis name sy woh phelay laa raha tha.

// import { userName,fatherName,regId,arrayOfName,userInformation } from "./dataTypes.js";
// import { greeting } from "./message.js";
//(as) kar ky jo ham import ki andar function, variable, array ka name change karty han isy ALIAS KEHTY HAN yah kiu karty
// han iss ka faida kia hay end my explain kiya howa hay (check in the end of file).
// import { greeting as greetingFunction } from "./message.js"; 
// (greetingFunction("haris")); 
// import { add, sub,mul,div,modulus } from "./airthmetic.js";

console.log("HERE ALL THE OUTPUTS ARE COMING FROM DIFFERENT FILES USING NAMING EXPORTS");

// Yahaan ham ny un tamam varibles ko show use kar skty han jo ham ny datatype.js ki file my banaye thy.
// console.log(userName, fatherName, regId, arrayOfName, userInformation);
// // Yahaan ham ny uss  function ko call kara kar uss ki value show kara rahy han jo ham ny message.js ki file my banaya tha.
// (greeting("haris"));
// console.log(greeting("haris again")); // undefined kiu ky ham ny message ki file my greet ka function banaya hy to uss 
// function my ham kuch return nae kara rhy sirf console kara rahy han uss ki wjah sy hamey undefined mil raha hy main ki 
// file my 

// Important note: Bhai dekho agar function my console nae karaya sif function define kiya hy or uss ky andar uss ki 
// value ko return karaya hay to jab uss ko ap kisi or file my uss function ko use kar ky uss ki value show karana chahty ho
// to tab ap ko console.log ky andar uss function ko likh kar uss ky andar value pass karana pary gi jesy ham airthmatic 
// wali file ki ky sath kar rahy han kiu ky airthmatic ki file my tamam functon my ham return kara rahay han or un ki values
//  ham main file my aa kar pass kar rahy han to agar ham un value ka output dekhna chahty han to hamey un functions ki 
//  values pass karty time console.log(add(2,4)) kar ky pass karna pary ga main file ky andar.
// Yahaan ham ny un tamam functions ko value pass kar rahy han jo ham ny aik or airthmatic file my banaye thy.
// console.log("Addition: ",add(10, 20));
// console.log("Subtraction: ",sub(20, 10));
// console.log("Multiplication: ",mul(20, 10));
// console.log("Division", div(100, 50));
// console.log("Modules", modulus(45, 10));


// ************************Learning how to IMPORTS in main file by using DEFAULT exports.********************************
// Here we are importing Default exports which has some different syntax rather than naming exports. 

// *********************CAN WE CHANGE NAME OF DEFUALT IMPORTS WHILE IMPORTING ? Answer is YES****************************

// ****************IMPORTANT NOTES*****************
// Default function pori file my (1 aik) hi hota hay to uss ka name change karny sy bhe woh wohi values ya functions laa
//  kar aaye ga joh phelay name sy laa raha tha 
// Default exports karty time ham name change kar skty han kiu ky hamey maloom hay ky pori file my aik hi defualt export ho 
// skta hay aik sy zaida default exports aik file my nae ho skty. Isi liye deafult export ka feature hamey allow karta hay
// ky agar ap (import airthmetic from "./airthmetic.js";) ==> airthmetic name na rakhen koi or apni marzi sy name rakh 
// dein jesy meriMarziKaNaam to tab bhe yah sahi work kary ga bss ab sy iss ka name airthmetic sy badal kar meriMarziKaNaam
// ho gya hy to ab isi name sy isss ko invoke karen gy. lekin yah kaam naming import my nae kar skty. han lekin ALIAS sy
// dono ka name change kar skty han

// For more better understanding
// MAAN LO MY NY 1 CUSTOM FUNCTION BANA KAR USY IMPORT KARAYA OR USS FUNCTION KA NAME MESSAGE() THA OR MAAN LO AIK 
// EXTERNAL LIBRARY HAY USS SY BHE HAM NY AIK FUNCTION IMPORT KARA LIYA OR USS KA NAME BHE MESSAGE() THA DONO KA ALAG
// ALAG PATH HAY DONO FUNCTION AIK DOSRY SY DIFFERENT HAN LEKIN MY KESY INDENTIFY KARO GA KY IN DONO KA NAME TO SAME HY 
// AISI SITUTION MY HAM APNI CONFUSION KO DOOR KARNAY KY LIYE NAME CHANGE KAR SKTY HAN JO NORMAL FILE SY MESAAGE ARAHA
// THA USY (import MESSAGE from "./airthmetic.js";) =====> (import NORMALMESSAGE from "./airthmetic.js") KAR DN GA 
// OR JO (import MESSAGE() from "./external.js") ======> (import EXTERNALMESSAGE() from "./external.js"). Yahaan ap ny 
// dekha ky path same reh raha hy bss phelay name kuch or tha import file ka ab usy ham ny apni understanding ky liye 
// change kar diya 



// **********************CODE FOR LEARNING DEFUALT IMPORTS **********************

import airthmetic from "./airthmetic.js";
import greeting from "./message.js";
// Data comming from message.js file this is the power of modules multiple data coming from different files can be
// accesed and used whereever in any file where  we need
(greeting("ZAIN")); // best approach just pass value to function that has been created in other file.
// console.log(greeting("ZAIN again")) // undefined kiu ky ham return nahe kara rahy greeting ky function my...  ham sirf console.log
// kara rahay han jis ki wjah sy undefined aa raha hay.

// Data comming from airthmetic.js file
console.log("Complete Data: ",airthmetic)
console.log("Addition: ", airthmetic.add(10, 20));
console.log("Subtraction: ",airthmetic.sub(20, 10));
console.log("Multiplication: ",airthmetic.mul(20, 10));
console.log("Division", airthmetic.div(100, 50));
console.log("Modules", airthmetic.modulus(45, 10));


// import dataTypes from "./dataTypes.js";
// // // Data comming from datatypes.js file
// console.log("Complete Data: ",dataTypes)
// // We can also extract data according to our need.
// console.log(dataTypes.userName)
// console.log(dataTypes.fatherName)
// console.log(dataTypes.regId)
// console.log(dataTypes.arrayOfName)
// console.log(dataTypes.userInformation);

// import dataTypes from "./dataTypes.js"; iss ka name badal kar import differentDataTypes from "./dataTypes.js"; rakh 
// diya hy nichey tab bhe yah same work kary ga han bss yaad rakhna ky ab isi name sy hi isy invoke karna hy lekin yah 
// same thing naming import my allow nae hoti. Han lekin iss sab ka hal ALIAS provide kar skta hy
// import differentDataTypes from "./dataTypes.js";
// console.log("Complete Object Data:", differentDataTypes);
// console.log("User Name:", differentDataTypes.userName);
// console.log("Father Name:", differentDataTypes.fatherName);
// console.log("Reg Id #:", differentDataTypes.regId);
// console.log("Array of names", differentDataTypes.arrayOfName);
// console.log("User Information", differentDataTypes.userInformation);


// **********************************************WHAT IS ALIAS? *****************************************************
// WHAT ARE ALIAS IN MODULES
// In the context of JavaScript modules, an alias refers to an alternative name given to an imported entity. This allows 
// you to reference the imported entity using a different name within the importing module. Aliases can be particularly 
// useful for avoiding naming conflicts or for providing more descriptive names.
// Basically jab ham file imports karwaty han chahey woh naming import ho yah default import ho to kabhi files ky names
// my conflict aa skta hy yah phr meaning full names deny ky liye taky ham smjh sakhen yah file jo ham import kara rahy
// han iss my data kis cheez sy related hay to aisi sitation my ham ALIAS ko use karty han iss ka syntax koi alag sy nahe 
// hay bss as kar ky agy apni meaning full name dy skty han jo hamey sahi sy smjh ayy or phr usi name sy hi agy usy 
// invoke/ use karen gy

