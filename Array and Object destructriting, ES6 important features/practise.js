// ---------------------------------------------------------Destructuring object--------------------------------------------------------------
// ----------------------------------------------------------TOPIC # 01(A)--------------------------------------------------------------------
const user = {
  name: "Mohammad haris",
  fatherName: "Abdul Hameed",
  gender: "Male",
  address: {
    city: "Karachi",
    country: "Pakistan",
    locations: {
      streetNo: 3,
      houseNumber: "MC 391",
      ZIP: 349532,
    },
  },
  skills: {
    "soft skill": "copywritting",
    "hard skill": "Programming",
  },
};
// ------------------------METHOD # 01---------------------------
// Simple way to Destructuring objects: Simple easy Destructuring
// const {name, fatherName, gender, skills, address} = user;
// console.log("Name: ",name)
// console.log("Father Name: ",fatherName)
// console.log("Gender: ",gender)
// console.log("Address: ",address)
// console.log("Skills: ",skills)

// ------------------------METHOD # 02--------------------------- (Nested Destructuring)
// Address ky andar mazeed nested objects han un ko bhe agar destructure karna par gy to ham kesy karein gy jesy (location)....
//ANSWER: Here we are Destructuring nested "Address" object OR uss ky andar aik or nested location object bhe hay.
const {
  name,
  fatherName,
  gender,
  address: {
    city,
    country,
    locations: { streetNo, houseNumber, ZIP },
  },
} = user;
console.log("Name: ", name);
console.log("Father Name: ", fatherName);
console.log("Gender: ", gender);
// NOTE: ALWAYS REMEMBER: Yahaan my ny address or location ko destructure kar diya hy ab directly (address or location) ko access nahe kar skty.
// TO TAB KIYA AGAR MUJHY ADDRESS OR LOCATION KY PORY OBJECTS CHAIHYEE HON TAB KIYA KAREN GY ? IN SUCH SCENERIO USE METHOD # O1 (LINE NO 19)
// console.log("Address: ",address) //Uncaught ReferenceError: address is not defined
console.log("City: ", city);
console.log("Country: ", country);
// Jab ham kisi cheez(location) ko Destructuring kar chukay hon to ab usy uss ky name sy use nahe kar skty error aye ga jesy iss example my
//  ny location ko Destructure kiya tha to ab my direct location ko access nahe kar skta.
// console.log("Location: ",locations);//Uncaught ReferenceError: locations is not defined
console.log("Street Number: ", streetNo);
console.log("House Number: ", houseNumber);
console.log("ZIP: ", ZIP);
// ********************************************************************************************************************************************

// ----------------------------------------------------------TOPIC # 01(B)---------------------------------------------------------------------

// Now we will see what type of errors we could face will destructuring. And how we can solve them
// Maan lo mery pas 2 object han ab my inhay destructuring karo ga.
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  cityName: "New York",
};
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  cityName: "New York",
};
// ----------------SAME NAMING ERROR ISSUE WE WILL FACE DUE TO BLOCK SCOPE VARIBLES CANNOT BE REDECLARED AGAIN WITH SAME NAME-----------------
// Mujhy yahaan yah issue mily ga my ny yahaan 2 objects ko destructure kiya hy or ab dono ki keys/properties ky name same han to same keys
// name hony ki wjah sy varible naming ka issue aa raha hy jesa ky hamey pata hay same name ky bar bar varibles nahe bana skty block scope
// variables ko. TO aisi condition my kesy iss issue ko solve karein gy ? ANSWER (USE ALIAS METHOD)
// const {firstName,lastName,age,cityName} = person1;
// const {firstName,lastName,age,cityName} = person2;

// ANSWER NOW BY USING (ALIAS METHOD) WE CAN SOLVE SAME NAME VARIABLES ISSUE WHILE DESTRUCTRING OBJECTS AND ARRAYS (USE ALIAS METHOD)
const {
  firstName: p1FirstName,
  lastName: p1LastName,
  age: p1Age,
  cityName: p1CityName,
} = person1;
const {
  firstName: p2FirstName,
  lastName: p2LastName,
  age: p2Age,
  cityName: p2CityName,
} = person2;
// OUTPUT FOR PERSON 1:
// console.log("p1FirstName: ", p1FirstName);
// console.log("p1LastName: ", p1LastName);
// console.log("p1Age: ", p1Age);
// console.log("p1CityName: ", p1CityName);

// OUTPUT FOR PERSON 2:
// console.log("p2FirstName:", p2FirstName);
// console.log("p2LastName: ", p2LastName);
// console.log("p2Age: ", p2Age);
// console.log("p2CityName: ", p2CityName);
// ********************************************************************************************************************************************
// ----------------------------------------------------------TOPIC # 01(C)---------------------------------------------------------------------
// ----------------------------------------HOW TO DESTRUCTURE DYNAMIC PROPERTIES IN OBJECTS---------------------------------------------------
const user1 = {
  "First Name": "Mohammad",
  "Last Name": "Haris",
  nationality: "Pakistani",
};
// BY USING ALIAS METHOD TECNIQUE WE CAN DESTRUCTURE DYNAMIC PROPERTIES NAME
const { "First Name": firstName, "Last Name": lastName, nationality } = user1;
// console.log(firstName, lastName, nationality);
// **********************************************************************************************************************************************

// ----------------------------------------------------------TOPIC # 02---------------------------------------------------------------------
//--------------------------------------------- PRACTISING DESTRUCTURING ON COMPLEX Examples-------------------------------------------------

const nestedExample = {
  a: { b: "2", c: "d", e: "F", g: "h" },
  b: "i",
  j: {
    k: "l",
    m: "n",
    p: "q",
    r: ["s", "t", "u", ["v", "w", "x", "y", "z"]],
  },
};
// Simple destructuring
// const {a ,b ,j} = nestedExample
// console.log("A: ",a)
// console.log("B: ",b)
// console.log("J: ",j)

// NESTED destructuring
//---------------------- Method # 01------------------------ (complex example)
// const {a:{b,c,e,g}, b: alisaName, j:{k,m,p, r:[item1, item2, item3,[nested1,nested2,nested3,nested4,nested5]]}} = nestedExample
// console.log(b)
// console.log(c)
// console.log(e)
// console.log(g)
// console.log(alisaName)
// console.log(k)
// console.log(m)
// console.log(p)
// // console.log(r) // r ko destructure kar diya hy to ab isy iss ky name sy call nahe kara skty ab sirf iss ky items hi avalibale hon gy
// console.log(item1)
// console.log(item2)
// console.log(item3)
// console.log(nested1)
// console.log(nested2)
// console.log(nested3)
// console.log(nested4)
// console.log(nested5)

//---------------------- Method # 02------------------------ (breaking down nested array in 'R' example)
// const {a:{b,c,e,g}, b: alisaName, j:{k,m,p, r:[item1, item2, item3, nestedArray]}} = nestedExample
// console.log(b)
// console.log(c)
// console.log(e)
// console.log(g)
// console.log(alisaName)
// console.log(k)
// console.log(m)
// console.log(p)
// // console.log(r) // r ko destructure kar diya hy to ab isy iss ky name sy call nahe kara skty ab sirf iss ky items hi avalibale hon gy
// console.log(item1)
// console.log(item2)
// console.log(item3)
// // NOW AGAIN NESTED DESTRUCTRING ON nestedArray ONLY
// const [nested1, nested2, nested3, nested4,nested5] = nestedArray
// console.log(nested1)
// console.log(nested2)
// console.log(nested3)
// console.log(nested4)
// console.log(nested5)
// console.log(nestedArray)

// ----------------------------Example # 03 (Desturing ARRAY IN OBJECTS)------------------------------------
// const arrayOfObjects = [
//   { _name: "John", _age: 30, _city: "New York" },
//   { _name: "Alice", _age: 25, _city: "Los Angeles" },
//   { _name: "Bob", _age: 35, _city: "Chicago" },
// ];

// const [
//   { _name: name1, _age: age1, _city: city1 },
//   { _name: name2, _age: age2, _city: city2 },
//   { _name: name3, _age: age3, _city: city3 },

// ] = arrayOfObjects;
// console.log(name1, age1, city1);
// console.log(name2, age2, city2);
// console.log(name3, age3, city3);

const friendsName = [
  "Ali",
  "zain",
  ["ADIL", "HASSAN"],
  ["HUSAIN", "SAQIB", "Mohammad"],
];
// Simple destructuring:
const [f1, f2, f3, f4] = friendsName;
// console.log(f1,f2,f3,f4)
// Nested destructuring
// const [f1, f2, [f3,f4],[f5,f6,f7]] = friendsName
// console.log(f1,f2,f3,f4,f5,f6,f7)

// *********************************************************************************************************************************************
//------------------------------------------------------TOPIC # 03 (SPREAD OPERATOR)----------------------------------------------------------
// Why we use spread opeator ?
// Jesa ky hamey pata hay agar ham object my normal tarikay sy object ki copy banayen gy or phr uss copy my agar koi changes karein gy to wohi
// changes ORGIGNAL object my bhe reflect hon gy halankay ham to copy bana chukay thy lekin ham phelay parh kar aa chuky han ky object NON
// PRIMITIVE DATA TYPE hay. Yani beshak copy bana kar beh changes karo tab bhe woh changes ap ky orignal object my reflect hongy. To ab issue
// ko kesy solve karen gy ? Iss issue ko ham spread operator ky thorugh solve karein gy. Basically NON PRIMITIVE DATA TYPES ko copy/clone
// // karny ky liye SPREAD OPERATOR USE KARTY HAN.
// const object = {
//   fName : "Haris",
//   regIdNo: 55524,
//   "course Name": "BSCS",
// }
// ORIGNAL OBJECT:
// console.log("Orignal Object: ",object);
// // ---------------------------------------WRONG WAY OF COPYING / CLONING AN OBJECT (NORMAL COPY)--------------------------------------------
// // Stpe: 01 = METHOD TO MAKE A COPY/CLONE OF AN OBJECT AND AFTER COPING/CLONING.
// const copyiedObj = object; // normal copy
// console.log("Cloned Object: ",copyiedObj);
// // Stpe: 02 = NOW WE WILL MAKE SOME CHANGES ONLY IN THE CLONED/COPIED OBJEC.
// copyiedObj.fName = "Ali Haider";
// copyiedObj.regIdNo = 12345;
// copyiedObj["course Name"]= "Machine Learning";
// //Stpe: 03 Here the issue we faced that ky ham ny to sirf copied object my changes ki the lekin ORIGNAL OBJECT my bhe woh changes reflect hogaye han.
// console.log("Cloned Object after changes: ",copyiedObj);
// console.log("Orignal Object : ",object);
// NOTE: Hamey yah issue dekhnay ko mil raha hy ky ham ny jab copy bana li the object ki or ham ny changes bhe copied/cloned waly object my ki to
// tab bhe affect hamary orignal object par para iss sab issue sy bachnay ky liye ham spread operator use karty han NON PRIMITIVE DATA TYPES ky liye

// --------------------------------------CORRECT WAY OF COPYING / CLONING AN OBJECT (SHALLOW COPY)------------------------------------------
//Stpe: 01 = METHOD TO MAKE A COPY/CLONE OF AN OBJECT AND AFTER COPING/CLONING.
// const copyiedObj = {...object}; // SHALLOW COPY
// console.log("Cloned Object: ",copyiedObj);
// //Stpe: 02 = NOW WE WILL MAKE SOME CHANGES ONLY IN THE CLONED/COPIED OBJECT.
// copyiedObj.fName = "Ali Haider";
// copyiedObj.regIdNo = 12345;
// copyiedObj["course Name"]= "Machine Learning";
// //Stpe: 03 Here we noticed that the changes that we made in our (copied object) only reflects on it. The (ORIGNAL OBJECTS) REMAIN SAME
// console.log("Cloned Object after changes: ",copyiedObj);
// console.log("Orignal Object : ",object);

// -----------------------------------------WHAT ISSUE WE COULD FACE WHILE USING SHALLOW COPY METHOD------------------------------------------
// Jo ham ny uper copy banaye han usy shallow copy bolty han. Uss tarikay sy jab bhe ham objects ka clone banaty han to sirf root level wali
// properties tak woh sahe copy karta hy lekin jo nested level par keys(properties) hoti han jesy address ky andar location hay yah inhay sahe
// sy copy nahe karta mtlb yah ky jab my address ky andar location ki keys(properties) ky agar koi change karo ga clone/copy bana kar object my
// to wohi same issue aye ga ky woh changes orignal object par dobara sy reflect hongi. To iss sy bhe bachnay ka aik tarika hay usy method ko
// bolty han DEEP COPY. Jab ham ksi object ki deep copy banaty han to woh root level wali or nested level wali sab ki keys(properties) ka sahi
// // tarikay sy clone/ copy banati hay
const object = {
  fName: "Haris",
  regIdNo: 55524,
  "course Name": "BSCS",
  address: {
    city: "Karachi",
    country: "Pakistan",
    locations: {
      streetNo: 3,
      houseNumber: "MC 391",
      ZIP: 349532,
    },
  },
};
console.log("Orignal Object : ", object);
// const copyiedObj = {...object}; // Shallow copy
// ----------------How to solve SHALLOW COPY ISSUE ? JUST UNCOMMENT THE LINE NO 273 TO CHECK HOW DOES DEEP COPY WORKS ----------------------
const copyiedObj = JSON.parse(JSON.stringify(object)); // Deep copy (Best way to make copy while working on nested objects)
console.log("Cloned Object: ", copyiedObj);
// //Stpe: 02 = NOW WE WILL MAKE SOME CHANGES ONLY IN THE CLONED/COPIED OBJECT.
copyiedObj.fName = "Ali Haider";
copyiedObj.regIdNo = 12345;
copyiedObj["course Name"] = "Machine Learning";
copyiedObj.address.city = "Bermuda";
copyiedObj.address.country = "FIJI";
copyiedObj.address.locations.houseNumber = 999;
copyiedObj.address.locations.streetNo = 123453;
copyiedObj.address.locations.ZIP = 34564;
// //Stpe: 03 Here we noticed that the changes that we made in our (copied object) works fine only on root level KEYS but as it comes to nested
// keys(properties) it damages the ORIGNAL OBJECT. To avoid such issues we will use DEEP COPY METHOD.
console.log("Cloned Object after changes: ", copyiedObj);
console.log("Orignal Object : ", object);
// NOTE: Yahaan hamey pata chala ky spread operator ky thorugh agar object/array ko clone karein gy to woh sirf root level ki keys(properties)
// tak to sahi rahy ga lekin yah tarika nested keys(properties) par kaam nahe kary ga or unhay sahi sy clone nahe kary ga jis wjah sy hamray
// // orignal object my bhe changes relflect hon gi to iss sab sy bachnay ky liye we will use DEEP COPY METHOD To check the how does DEEP COPY
// is different from SHALLOW COPY so uncomment the line (273) and comment the SHALLOW COPY LINE (271)

// -------------------------------------------Practising making NORAMAL COPY, SHALLOW COPY, DEEP COPY------------------------------------------
const friend = [
  "Ali",
  "zain",
  ["ADIL", "HASSAN"],
  ["HUSAIN", "SAQIB", "Mohammad"],
];
// Normal copy
// const normalCopy = friend;

// // SHallow copy
// const shallowCopyFriend = [...friend];
// shallowCopyFriend[0] = "ANIS"
// shallowCopyFriend[1] = "Saeed"
// shallowCopyFriend[2][0] = "zainab"; // THIS NESTED LEVEL CHANGES WILL DAMAGE THE ORIGNAL ARRAY BECAUSE WE ARE MAKING SHALLOW COPY
// shallowCopyFriend[2][1] = "HARIS"; // THIS NESTED LEVEL CHANGES WILL DAMAGE THE ORIGNAL ARRAY BECAUSE WE ARE MAKING SHALLOW COPY
// shallowCopyFriend[3] = "OKAY BOSS";
// console.log("Orignal Array; ",friend)
// console.log("Shallow copy ; ",shallowCopyFriend);
// NOTE: We noticed the same issue ky jo root level par KEYS(PROPERTIES) mojood the unki to sahi copy bana kar changes ki lekin jo nested level
// par KEYS(PROPERTIES) the jab un my changes ki to unho ny orignal array ko bhe damage kar diya yani copied array ki changes orignal array my
// reflect hogayi but only in nested level KEYS. To avoid this problem use only DEEP COPY METHOD.

// -------------------------------------DEEP COPY THE BEST WAY TO MAKE A CLONE OF NESTED ARRAY OR OBJECT------------------------------------
// DEEP COPY
// const shallowCopyFriend = JSON.parse(JSON.stringify(friend))
// shallowCopyFriend[0] = "ANIS"
// shallowCopyFriend[1] = "Saeed"
// shallowCopyFriend[2][0] = "zainab"; // HERE, THE NESTED LEVEL CHANGES WILL NOT DAMAGE THE ORIGNAL ARRAY BECAUSE WE ARE USING DEEP COPY METHOD
// shallowCopyFriend[2][1] = "HARIS"; //HERE, THE NESTED LEVEL CHANGES WILL NOT DAMAGE THE ORIGNAL ARRAY BECAUSE WE ARE USING DEEP COPY METHOD
// shallowCopyFriend[3] = "OKAY BOSS";
// console.log("Orignal Array; ",friend)
// console.log("DEEP COPY; ",shallowCopyFriend);
// ********************************************************************************************************************************************
// ---------------------------------------------------------------REST OPERATOR----------------------------------------------------------------
// -----------------------USE CASES OF WHERE REST OPERATOR CAN BE USED----------------------------

// USE CASE # 01 (PASSING AN ARRAY AND SHOWING IT VALUES BY JUST USING REST OPERATOR)
// const array = [1,2,3,4,5,6,7,8,9,10];
// function passingArray(num1, num2, num3, ...rest){ // Here, rest items of array are passed as an argument (...Rest operator)
// console.log("Number:",num1, "Number:",num2, "Number:",num3, "remaining values: ",rest); // HERE REST WILL SHOW THE REMAINING ARRAY ITEMS
// // console.log("Number:",num1, "Number:",num2, "Number:",num3, "remaining values: ",...rest); HERE REST WILL SPREAD THE ARRAY ITEMS AND THEN IT WILL SHOW THE REMAINING ARRAY ITEMS

// }
// passingArray(...array);// Here, we have spread the entire array and passed it to a function while invoking so that it can access the values and
// pass to function parameter one by one. (...spread operator)

// // USE CASE # 02 (ADDING AN ARRAY BY PASSING IT THROUGH REST OPERATOR)
// // ADDING number by using rest operator
// const array = [1,2,3,4,5,6,7,8,9,10];
// function passingArray(...rest){
// let sum = rest.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(sum);
// }
// passingArray(...array);

// // USE CASE # 03 (ADDING AS MANY NUMBERS AS WE WANT BY PASSING IT THROUGH ARGUMENTS AND BY USING REST OPERATOR AS PARAMETER IN THE FUNCTION)
// function passingArray(...rest){
// let sum = rest.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(sum);
// }
// passingArray(1,2,3,4,5);

// // USE CASE # 04 (SHOWING THE REMAINING NUMBERS OF AN ARRAY BY USING REST OPERAOTOR)
const [num1, num2, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num1,num2, rest) // REMAMING NUMBERS WITHOUT NUM1 AND NUM2 WILL CREATE AN ARRAY
// console.log(num1,num2, rest)// HERE, THE REMAMING NUMBERS WITHOUT NUM1 AND NUM2 WILL CREATE AN ARRAY AND THEY ARE SPREAD BY USING SPREAD OPERATOR

// // USE CASE # 04 (SHOWING THE REMAINING PROPERTIES OF AN OBJECT BY USING REST OPERAOTOR)
// const user01 = {
//   name: "Mohammad haris",
//   fatherName: "Abdul Hameed",
//   gender: "Male",
//   address: {
//     city: "Karachi",
//     country: "Pakistan",
//     locations: {
//       streetNo: 3,
//       houseNumber: "MC 391",
//       ZIP: 349532,
//     },
//   },
//   skills: {
//     "soft skill": "copywritting",
//     "hard skill": "Programming",
//   },
// };

// USE CASE # 05
// const {name: nameUser1, fatherName: fatherNameUser1, gender: genderUser1, ...rest01} = user01;
// console.log(nameUser1)
// console.log(fatherNameUser1)
// console.log(genderUser1)
// console.log(rest01); // HERE, THE REMAINING OBJECTS PROPERTIES WILL BE PASSED/COME FROM  ... rest01 while destrutring

// NOTE: ... KAR KY JAB HAM KISI FUNCTION KY PARAMETER MY PASS KARTY HAN TO ISS KA MTLB HOTA HY JO BHE RAMAINING YA REST ITEMS JO BACH GY HAN
// UNHAY LAA KAR DAY DO

// ********************************************************************************************************************************************
// -----------------------------------------------------------OPTIMAL CHAINING----------------------------------------------------------------

// Maan lo mery pass API sy response aa raha hy jo ky hamesha JSON from my hota hay my ny usy normal JS object my convert kar liya ab my uss object
// ky andar aik address ki key yah phr location ki key ko access karna chah raha hon or agar woh key hamary OBJECT my present hi nahe howi to
// uss surat my mery code my error aye ga jo ky NULL UNDEFINED NOT DEFINED ki surat my ho skta hay jis ki wjah sy mery baki code ki execution
// ruk gy gi or hamara code break hogy ga. To iss sab sy bachnay ky liye ham 'OPTIMAL CHAINING' ka concept use karty han.

// NOTE: Yaaad rahay OPTIMAL CHAINING ROOT LEVEL WALI KEYS KO CHECK NAHE KARTA YAH SIRF NESTED KEYS/ PROPERTIES PAR SAHI WORK KARTA HAY. OR AGAR
// HAM KOI AISI KEY/OBJECT KO ACCESS KARNA CHAH RAHAY HAN JO HAMRAY ROOT LEVEL PAR MOJOOD NAHE HAY JESY BELOW EXAMPLE MY FATHER NAME TO HAM ISS
// SURAT MY UNDEFINED MILY GA KIU KY FATHER NAME TO PRESENT HI NAHE HAY ISS OBJECT KI KEYS MY TO HAM AGAR CHAHTY HAN KY HAMEY UNDEFINED NA MILY
// TO HAM USS SURAT MY NULSHIHG COLLCACHING KA CONCEPT BHE USE KAR SKTY HAN
const user01 = {
  name: "Mohammad haris",
  gender: "Male",
  // fatherName: "Abdul Hameed",
  address: {
    city: "Karachi",
    country: "Pakistan",
    locations: {
      streetNo: 3,
      // houseNumber: "MC 391",
      ZIP: 349532,
    },
  },
  // skills: {
  //   "soft skill": "copywritting",
  //   "hard skill": "Programming",
  // },
};

// NOTE:
// TRY OPTIMAL CHAINING TO CHECK WETHER THE HOUSE NUMBER KEY IS PRESENT IN LOCATION OR IF ? IF IT IS NOT PRESENT WE WILL RESTRICT OUR BROWSER TO
// SEARCH ITS VALUE AND DUE TO THIS WE WILL NOT GET ANY ERROR AND OUR CODE FURTHER WILL KEEP ON WORKING WITHOUT ANY BREAKAGE.
// Difficult method (old method)
// console.log(user01 && user01.address && user01.address.locations && user01.address.locations.houseNumber)
// OPTIMAL CHAINING WAS INTRODUCED THAT IF THERE IS A CHANCE FOR AN ERROR DUE TO ABSENCE OF ANY KEY/PROPERTY. SO DUE TO OPTIMAL CHAINING the
// remaining code will not break and keep on working fine.
console.log("House no: ", user01.address?.locations?.houseNumber ?? "MC 81"); //Jesa ky user01 ky object my house no ki key absent hay lekin
// phr bhe code my error(undefined,null,not defined) nahe aye ga or baki line of code ki execution stop nahe hoga baki code smoothly chalta
// rahy ga
console.log("Father name:", user01.fatherName ?? "Abdul hamid"); // ?? nulleshing collaching concept
console.log("SKILLS:", user01?.skills?.["hard skills"] ?? "Programming"); //?? nulleshing collaching concept
console.log(user01);


// EXAMPLE # 03
const arr = [1, 2, 3];
// Accessing array element with optional chaining
const thirdElement = arr?.[2];
console.log(thirdElement); // Output: 3
// Accessing non-existent array element
const fifthElement = arr?.[4];
console.log(fifthElement); // Output: undefined

// EXAMPLE # 03
const obj = {
  func() {
    return 'Hello';
  }
};
// Calling a function with optional chaining
const result = obj?.func?.();
console.log(result); // Output: Hello

// Accessing non-existent function
const nonExistentFunc = obj?.nonExistentFunc?.();
console.log(nonExistentFunc); // Output: undefined

// ********************************************************************************************************************************************

// ----------------------------------------------------------BOOLEAN CASTING-------------------------------------------------------------------
// Example # 01
// Using Boolean() function
// let num = 2;
// let numToBoolean = Boolean(num); //Explicitly convert NUMBER to boolean
// console.log("Number converted to boolean Explicitly: ",numToBoolean);

// // Using double negation (!!) BOOLEAN CASTING
// // The Above conversion to number can easily be done by using bolean casting
// let num01 = 2;
// let numToBooleanCasting = !!num01; //Explicitly convert NUMBER to boolean by using BOOLEAN CASTING method.
// console.log("Number converted by using boolean casting: ", numToBooleanCasting);

// Example # 02
// const num = 10;
// const boolValue = Boolean(num); // Explicitly convert num to boolean
// console.log(boolValue); // Output: true

// // Using double negation (!!)
// const str = '';
// const boolValue2 = !!str; // Explicitly convert str to boolean
// console.log(boolValue2); // Output: false

// ********************************************************************************************************************************************

//---------------------------------------------------------------TERNARY OPERATOR-------------------------------------------------------------
// Normal if and else condition can be done by using TERNARY OPERAOTOR
// Example # 01

// const age = 30
// // if(age > 18){
// //   console.log("Adult")
// // }
// // else{
// //   console.log("Bacha hay tu")
// // }
// Same above result can be acheived by ternary operator
// console.log(age > 18 ? "Is Adult" : "Bacha hay tu"); //? is phela wala if codition ki trha work karta hay or : ky baad wala else ki trha work 
// karta hay 

// Example # 02 (Nested if else example can also be done using TERNARY OPERATOR)
// const age = 19;
// let isAdult;
// if(age > 18){
//   isAdult = true
// }
// else{
//   isAdult = false
// }
// console.log(isAdult);
// Doing same above thing in just 1 line using TERNARY OPERAOTOR
// console.log(age > 18 ? (isAdult = true) : (isAdult = false))

// Example # 03 (Nested if else example can also be done using TERNARY OPERATOR)
const age = 90;
let isAdult;
// if(age > 18){
//   if(age <= 50){
//     isAdult = true
//   }
//   else{
//     isAdult = null
//   }
// }
// else{
//   isAdult = false
// }
// console.log(isAdult);
// Doing same above thing in just 1 line using TERNARY OPERAOTOR
console.log(age > 18 ? (age <= 50 ? isAdult = true :isAdult = null)  : isAdult = false)
// *********************************************************************************************************************************************

//--------------------------------------------------------- NULLSHING COLLACSHING -----------------------------------------------------------
// NULLSHING COLLACSHING tab kaam ati hay jab hamary pas koi value NULL UNDEFINED aa skti hay or ham nahe chahty ky iss ki wjah sy hamara code
// break ho yah ghalat values save hogy to aisy scenerios my ham NULLSHING COLLACSHING  use karty han. Ab yaad rahay NULLSHING COLLACSHING 2
// types ki hoti hay
// (1) (??) double question operator Yah(??) sirf UNDEFINED OR NULL par hi kaam karta hay yani agar UNDEFINED OR NULL aa raha ho to ?? ky baad 
// jo values ham ny set karwaye hogi woh value set hogy gi uss my UNDEFINED OR NULL anay sy hamara code bach gy ga 
// (2) Agar NULL / UNDEFINED sy hat kar koi falsy value aagai to uss ki wjah sy hamara code break hogya to usy handle karny ky liye double
// pipes (||) operator use karein gy 
//_____________________________________________________________________________________________________________________________________________

// Example for 01 for (Without NULLSHING COLLACSHING)
// let userAge; 
// // let userAge = 20;
// // Yahaan ham check kara rahay han ky  agar age null yah undefined ho to uss my 26 set kara dena or agar  null yah undefined nahe hoti to 
// // jo age starting(initialize) my hay wohi rehnay dena.
// // This thing can be done more easily using NULLSING COLLACSHING TECNIQUE check below example
// const checkAge = userAge === null || userAge === undefined ? 26 : userAge;
// console.log("Without NULLSHING COLLACSHING: ",checkAge);

//_____________________________________________________________________________________________________________________________________________
// TYPE # 01 ?? marks only works for 2 falsy values (NULL AND UNDEFINED) agar iss ky ilawa koi false value aa gaye to yah kaam nahe kary ga to
// phr aisi condition my ham NULLSHING COLLACSHING ko double pipes (||) operator ky through acheive kar skty han.

// Example for 01 coninued by using NULSHING COLLACSHING (? MARK ky baad wali value ko fallback value bolty han)
// let userAge01 = 18; // TRUTHY VALUES remain same. NULLSHING COLLACSHING is only used for avoiding FALSY values.
// What if userAge01 is null then ?
let userAge01; //userAge01 is NULL, Here NULLSHING COLLACSHING will works and userAge01 will be set to 40 because null and undefined are FALSY 
// values and NULLSHING COLLACSHING is used to avoid FALSY VALUES. 
const checkAgeByNullshing = userAge01 ?? 40;// Yah check kary ga ky left side par agar isy NULL UNDEFINED mila to yah userAge01 ko 40 set kara 
// dy ga. Or agar truthy value mili to wohi value rehnay dy ga jo user ny set karai hogi. 
console.log("By using NULLSHING COLLACSHING by using ?? operator: ",checkAgeByNullshing)
//_____________________________________________________________________________________________________________________________________________
// TYPE # 02 (||) USING DOUBLE PIPE OPERATORS TO AVOID AL TYPES OF FALSY VALUES
// let str = "MY name is Mohammad Haris";
let str = "";
//Type 01: ?? will not work here while there is a FALSY value but it is not undefined/NULL. To avoid this glitch use double pipe operator (||)
// let checkStrByNullshing = str ?? "hello"; 
//Type 02: (||) double pipe operator(||) will work for all types of FALSY values including undefined, NULL, FALSE, NAN, INFINITY, "", 0. For
// best code practise use || opertor
let checkStrByNullshing = str || "hello"; 
console.log("NULLSHING COLLACSHING by using || operator:",checkStrByNullshing);

//********************************************ALL ES6 FEATURES HAS BEEN COMPLETED ALHAMDULLIAH***********************************************



