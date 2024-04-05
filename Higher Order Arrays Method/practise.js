// *********at()****** It returns the element for which the index is passed to it at(1) ==> access 2nd element at index 1
// This method is basically last element ko acess karny ky liye use karty han uss  my -1 pass kar ky 
// const fruits = ['apple', 'banana', 'orange',"pineaaple", "pomegranate"];
// checkVal = fruits.at(-1); //fruits.length()-1 ki jagah at(-1) karo to yah bhe last value dy deta hy
// console.log(checkVal);

// // ******************enteries()********************* 
// const fruits = ["Apple","Banana","Mango","Orange","grapes", "watermelon"];
// // Simple destructring 
// const [a,b,c,d,e,g] = fruits; // here a,b,c are variables declared to an array of fruit1
// // console.log(a,b,c,d,e,g)
// console.log("Acessing value using index no: ",fruits[0], "\nAcessing value using destructuring: ",a);
// console.log("Acessing value using index no: ",fruits[1], "\nAcessing value using destructuring: ",b);
// console.log("Acessing value using index no: ",fruits[2], "\nAcessing value using destructuring: ",c);

// const iterator = fruits.entries();
// console.log(iterator);
// ******************Array Desturcturing***********************
// const fruits1 = ["Apple","Banana","Mango","Orange","grapes", "watermelon"];
// for (const f of fruits1.entries()) { //here fruits1.enteries will give us an iterator when we will apply loop on iterator it will create an array on each iteration
//     console.log(f); //here f will return an array on each iteration that always contain 2 elements 1 is index and other is value
//     const [index,value,nothing] = f; // here we are destructuring each element of an array one by one 
//     console.log("f2: ", f ,"index: ",index, " value: ",value, " nothing: ",nothing, f[0], f[1]);
//     // console.log("Acessing value by indexing: ",f[0],f[1]);
// }  

// String Desturcturing
// const fruits = ["Apple","Banana","Mango","Orange","grapes", "watermelon"];
// // for (const f of fruits) {
// //     console.log(f); //It will return element of an array one by one on each iteration ==> Apple 
// //     const [index,value,ali] = f; // here we are destructuring each element of an array one by one  0==> A, 1==>P, 2==>P ....
// //     console.log("f1: ", f ,index, value, ali, f[0], f[1], f[2],f[4],f[5]);
// //     // console.log("Acessing value by indexing: ",f[0],f[1]);
// // }  

// const f = fruits.entries();
// console.log("f:" , f);

// for (const x of f){
//     console.log(x)
// }

// ************KEYS() METHOD***********
// It is similar to enteries both return iterator but enteries() make array of each element conatining 2 values index and value while keys only return indexes of arrays and keys of objects.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const iterator = fruits.keys();
// console.log(iterator);
// for(let key of iterator){
//     console.log(key, fruits[key])
// }


// *************************every() method*******************************:
// NOTE: Yah utni baar chaly ga jab tak condition true rahey gi false condition milty hi next term ko iterate nae kareye ga
// It works same as AND && operator ==> If all condition meets the requirement it return true and If any single condition (fails) it stops it iteration and returns false beshak uss ky baad true wali conditon mil bhe rahi ho agy nae gy ga agar aik bar false milgy to
// const numbers = [45,25,19,8,41]; 
// //method # 01
// let output = numbers.every(checkCond); //using every as a higer order method and checkCond as a callback
// function checkCond(value,index,array){
// console.log(value,index,array)
// return value>18;
// }
// console.log(output);

// method #02
// let checkCond = function (value,index,array){
//     console.log(value,index,array)
//     return value>18;
// }
// let output = numbers.every(checkCond);
// console.log(output);

// // method #03 using anonyums function
// let output = numbers.every(function(value,index,array){
//         console.log(value,index,array)
//         return value>18;
// });
// console.log(output);

// method #03 using fat arrow function
// let output = numbers.every((value,index,array)=>{
//     console.log(value,index,array)
//     return value>18;
// });
// console.log(output);

// Example for every()
// const emails = [
//     'john.doe@example.com',
//     'jane.smith@example.com',
//     'bob.jones@example.com',
//     'alice.wonder@example.com',
//     'samuel.jackson@example.com',
// ];
// let checkCond = emails.every(myFunc)
// function myFunc(email,index,array){
//     console.log(email,index,array)
//     return email.includes("@");
// }
// console.log(checkCond)

//**********************some method()**************************** Note: Yah every() method ka ulat==> hy true milty hi ruk gy ga
// It works same as OR || operator ==> If ANY ONE condition meets the requirement it return true and stops iteration behsak agy ki conditon fail hi kiu na ho rahi ho yah agy gy ga hi nae true milty hi ruk gy ga. sary false howy to false hi dy ga
// const numbers = [4, 9, 16, 25]; //check it 1st  for testing code
// const numbers = [4,9,22,16, 25]; //check it 2nd for testing code
// let someOver18 = numbers.some(myFunction);
// function myFunction(value, index, array) {
//     console.log(value,index,array)
//   return value > 18;
// }
// console.log(someOver18);

// *************find() method************** [] [for empty array] return ==> undefined 
// It is moslty used to find element in array or object Its best example is given after filter method. Filter and find are bit similar methods 
//It returns VALUE of the iteration that passes the test and then stops wether it is the 1st element or last. 
// It is a bit same like SOME() method only differnce is that it some returs boolaen find() returns value.
/*The find() method returns the value of the first element that passes a test.
The find() method does not change the original array. */
// const numbers = [4,9,22,16, 25]; //check it 2nd for testing code
// let someOver18 = numbers.find(myFunction);
// function myFunction(value, index, array) {
//     console.log(value,index,array)
//   return value > 18;
// }
// console.log(someOver18);
// console.log(numbers)


//************fill method******************** Fill all the elements with a value in an array and can take 3 parameter:
// const fruits = ["Banana", "Orange", "Apple", "Mango","pineapple"];
// // let copyFruits = [...fruits];
// // console.log(copyFruits)
// // copyFruits.fill("Kiwi", 2, 4);
// // console.log("orignal Array",fruits);
// // console.log("copied Array",copyFruits);
// // fruits.fill("Grapes",2,2) // it will not work
// fruits.fill("Grapes",2,4)
// console.log(fruits)

// ******findIndex(Same as SOME() method)==>Index no return karta hy jahaan condition true hogi true hoti hi ruk gy ga agar koi condition true nae hogi to -1 index no dy ga
// Note: Index find karey ga according to condition or jesy hi woh condition mily gi gy nae gy ga beshak agy condition dobara sy true kiu na ho rahi ho same as some() method difference dono my itna hy bss ky woh true yah false return karta hy or yah index return karta hy jis jagah par condition satisfy ho rahi ho
// const ages = [3, 10, 18, 20,21];
// let output = ages.findIndex(checkAge);
// function checkAge(age,index,array) {
//     console.log(age,index,array)
//   return age > 18;
// }
// console.log(output);


// ***************INDEXOF ************ It takes 2 paramters 1st VALUE TO FIND and  2nd the STARTING POINT where to find
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple","grapes"];
// // let index = fruits.indexOf("Apple"); //2
// let index = fruits.indexOf("Apple", 3); //4 it will negeleact apple on index 2 bcz starting from indx 3 is defined and it will count from begining and not considering 1st apple bczs starting point is telling him to find after 3 index
// console.log(index);
// // EXAMPLE # 02
// const person = {
//     name: 'John',
//     hobbies: ['reading', 'swimming', 'coding']
//   };
  
//   // Example: Finding the index of 'swimming' in the hobbies array
//   const swimmingIndex = person.hobbies.indexOf('swimming');
//   console.log(swimmingIndex);  // Output: 1

// **************LASTINDEXOF*********** yah starting ky elements chor kar last wala closest element ka index number return kary ga.
// const fruits = ["Orange", "Apple", "Mango", "Banana", "Banana", "Apple"];
// let index = fruits.lastIndexOf("Banana");
// console.log(index);

/*NOTE
Key Differences: B/W INDEXOF AND FINDINDEX
Search Condition:

indexOf() uses a simple equality check to find the specified element.
findIndex() uses a callback function to test each element against a condition.

Usage:
indexOf() is more generic and can be used with simple values.
findIndex() is more flexible as it allows you to define complex conditions using a callback.

Callback Function:
indexOf() doesn't require a callback function.
findIndex() requires a callback function to define the search condition.

Complex Conditions:
findIndex() is more powerful for searching based on complex conditions.
indexOf() is simpler and more suitable for basic equality checks.
*/

// *************Array.from()******************** Converts strings/Objects to an an Array
// Example # 01
// const fruits = ['apple', 'banana', 'orange'];
// const entriesArray = Array.from(fruits.entries());
// console.log(fruits.entries());
// console.log(entriesArray);

// Example # 02
// const obj = {
//     name: 'John',
//     age: 25,
//     hobbies: ['reading', 'swimming', 'coding']
//   };
//   // Convert the 'hobbies' property to an array
//   const hobbiesArray = Array.from(obj.hobbies);
//   console.log(hobbiesArray);
//   // Output: ['reading', 'swimming', 'coding']

// Example # 03
// const obj = {
//     name: 'John',
//     age: 25,
//     hobbies: ['reading', 'swimming', 'coding']};
// // Convert all values of the object to an array
// const valuesArray = Array.from(Object.values(obj));
// console.log(valuesArray); // Output: ['John', 25, ['reading', 'swimming', 'coding']]
// console.log("check it is array or not: ",Array.isArray(obj));
// console.log("check it is array or not: ",Array.isArray(obj.hobbies));

// ****************forEach loop********************* Ya bss array items par iteration ky liye use hota hy
/*The forEach loop is a method available on arrays in JavaScript that allows you to iterate over each element in the array
and perform a specified action for each element.It provides a concise way to loop through array elements without the need for a traditional for loop*/

// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach((value,index,array)=>{
//    console.log("Value:",value, "Index:",index, " Array: ",array);
// })

// Addition by for each loop
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach((value,index)=>{
//    console.log("Index:",index, "Output = ", sum += value);
// })
// console.log("Total answer = ", sum)

//Facebook test questions
// let f1 = "apple";
// // let f2 = "Banana";
// // let result = f2 < f1;
// // console.log(result)
// // console.log(f1.charCodeAt());
// // console.log(f2.charCodeAt());

// ********************INCLUDES METHOD***************** Syntax ==> array.includes(element, start)
// NOTE: This method directly does not works on an object for object we use hasOwnProperty to check wether the element or ket is present in object or not.
// const fruits = ["Banana", "Orange", "Apple", "Mango","grapes","pineapple","Banana"]; //true
// // const fruits = ["Banana", "Orange", "Apple"]; // false
// let result = fruits.includes("Banana", 3);

// ******************Array.isArray*********************
//  This method is use to check wether the given value is an array or not if array it will return true else for object,string it will return false 
// const fruits = ["Banana", "Orange", "Apple", "Mango","grapes","pineapple","Banana"]; //true
// console.log(Array.isArray(fruits));
// const obj = {
//     name: 'John',
//     age: 25,
//     hobbies: ['reading', 'swimming', 'coding']
//   };
// console.log(Array.isArray(obj)); // false
// console.log(Array.isArray(obj.hobbies)); // true

// ****************join Method**************** It converts array to string default separtor is comma
// NOTE:-ARRAY can be converted to string by using join method and string can bhe converted to array using split mthod(string method) 
// const str = 'hello my name is mohammad haris'
// const fruits = ["Banana", "Orange", "Apple", "Mango","grapes","pineapple","Banana"];
// console.log(fruits.join()); 
// console.log(fruits.join(" and ")) //Array to String 
// console.log(str.split(" ")) // String to Array

// ***************Check the longest string *******************
// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     console.log(longestWord);
//     return longestWord;
//   }
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  

//*****************/ HOW TO FIND THE GREATEST OR SMALLEST NUMBER IN AN ARRAY *****************************
// NOTE: We have 2 techniqques math.min/max(...value of an array) OR Math.max.apply(null, ARRAY OF THAT TO FIND THE GREATEST NUMBER)
// const numbers = [4, 9, 16, 25];
// // Method # 01 to find the greatest number in an array
// let maxNumber = Math.max.apply(null, [4, 9, 16, 25])
// console.log("Maximum number of an array: ",maxNumber)
// // Method # 02 to find the greatest number in an array
// let greatestNumber = Math.max(4, 9, 16, 25) // technique #02 Math.max(...numbers)
// console.log("Greatest number of an array: ",greatestNumber)
// // Method # 01 to find the SMALLEST number in an array
// // let minNumber = Math.min.apply(null, [4, 9, 16, 25])
// // console.log("Min number of an array: ",minNumber)
// let smallNumber = Math.min(...numbers)
// console.log("Smallest number of an array: ",smallNumber)

// ********************MAP() METHOD*****************
/* NOTE: MAP basically use itertion ky liye hota hy jesy for each hota hy magar iss ka most important kaam yah nae hota
yah moslty shakal change karny ky liye use hota hy array ko object my or object ko array bana skty han map ky through
bhot powerfull method hy yah */

// 01*********BEST EXAMPLE OF FUNCTIONALITIES OF MAP()
// Method # 01 Long syntax for beginers 1 liners are done in the end
// Converting an object to an array using map()\
// const numbers = [4, 9, 16, 25];
// console.log(numbers.map((number,index)=>{
// return {index_No: index, item: Math.sqrt(number)}
// }));

// Converting an object to an array using map()
// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'watermelon'];
// console.log(
// fruits.map((fruit,index)=>{
// return {"Index No": index, fruit_Name: fruit, id: Number((Math.random()*10).toFixed(0))}
// })
// )

// 02*********MAIN FUNCTIONALITIES OF MAP() Differnece b/w MAP AND FOR EACH()
/*For example my ny aik array ky tamam number ka sqaure lena hy to my kia karo ga firstly my for each use kar ky har
 any wali term ko usi ky sath multiply karo ga or phr har aik term ko bari bari empty array my push karo ga jis sy kaam
bhot lamba ho gy ga iss ka simple solution hy MAP() yah iterate karwa kar har term ka square bhe kar dy ga jesy for each
kar raha tha magar sab sy important baat ky yah khud array create kar dy ga un items ka alag sy jo square hony ky baad ayen gy push nae karwana pary ga hamey*/
// TESTING FOR EACH ACCORDING TO ABOVE EXPLANATION
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = [];
// numbers.forEach(num => {
//  squaredNumbers.push(num * num);
// });
// console.log(squaredNumbers);

// TESTING MAP() ACCORDING TO ABOVE EXPLANATION
// const numbers = [4, 9, 16, 25];
// // Short syntax 1 LINER We doesn't need any return and {} brckets if we are returning 1 thing like number
// let result = numbers.map(num => (num * num));
// // let result = numbers.map(num => Math.sqrt(num));
// console.log(result);
// // Short syntax 1 LINER We doesn't need any return and {} brckets if we are returning 1 thing like number
// // **************MOST IMPORATANT FOR EACH ONLY RETURN 1 VALUE AT A TIME CAN RETURN ARRAY OR OBJECT ACCORING TO OUR NEED
// numbers.forEach(number=> console.log("Iam for Each LOOP: ",Math.sqrt(number)));
// // FOR EACH ==> UNABLE TO RETURN AN ARRAY WHILE MAP CAN DO 
// console.log("I am for each: ",numbers.forEach(number=>Math.sqrt(number)));
// // MAP ==> CAN RETURN AN ARRAY OR OBJECT ACCORDING TO OUR NEED WE CAN TRANSFORM ARRAY TO OBJECT OR OBJECT TO ARRAY USING MAP
// console.log("I am MAP :",numbers.map(number=>Math.sqrt(number)));

// ****ADDITION USING MAP********
// let add = 0;
// let total = numbers.map((number)=>{ // AGAR as a argument(call back)pass kiya add =0 to woh as an index act karey ga hamey desired result nae mily ga 
//   console.log({"I am map:": number,add})
//  console.log(add += number);
// })
// console.log("addition using MAP: ", add);
// ****ADDITION USING FOR EACH********
// let add = 0;
// numbers.forEach((number)=>{ // AGAR as a argument(call back)pass kiya add =0 to woh as an index act karey ga hamey desired result nae mily ga
//   // console.log({number})
//   console.log("Add:", add);
//  add += number;
//  return  console.log(number,add)
// })
// console.log("addition by using for each:", add);



// Justification: For each array bana kar return nae karta map array bana kar return karta hy

//CONVERTING OBJECT TO AN ARRAY USING MAP
const myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  const arrayOfKeyValuePairs = Object.entries(myObject);
  console.log(arrayOfKeyValuePairs);
  // Using map to transform the array of key-value pairs
  const newArray = arrayOfKeyValuePairs.map(([key, value]) => {
    return { key, value };
  });
  console.log(newArray);

//***********************************FILTER METHOD(Returns an ARRAY)****************************************
/*MOST IMPORTANT NOTE: Iss my console.log(mobile) ka loop utni bar chaly ga jitny total objects han uss ki wjah yah hy
 ky for example: My ny bola iphone ko filter kar ky la kar do or mery pas 10 objects han agar 1st object par mujhy iphone
mil bhe jata hy lekin phr bhe iteration baki pori remaining 9 bar chali gi kiu ky hoskta jo iphone 1st object par mila hy
to aik or iphone 8th yah 9th object par dobara mil gy. Isi wjah sy FILTER() utni bar hi chaly ga jitnay total objects han */ 
// const mobiles = [
//     { id: 1, brand: 'Samsung', price: 500 },
//     { id: 2, brand: 'iPhone', price: 1000 },
//     { id: 3, brand: 'Samsung', price: 700 },
//     { id: 4, brand: 'Nokia', price: 800 },
//     { id: 5, brand: 'Nokia', price: 600 },
//     { id: 6, brand: 'Samsung', price: 400 },
//     { id: 7, brand: 'iPhone', price: 550 },
//     { id: 8, brand: 'iPhone', price: 350 },
//     { id: 9, brand: 'Nokia', price: 300 },
// ];
// // //   filtering items accoding to brand name
// //   console.log(mobiles.filter(mobile=>{
// //     console.log(mobile);
// //     return mobile.brand ==="iPhone"
// //   })); 

// //   filtering items accoding to price
//   console.log(mobiles.filter(mobile=>{
//     return mobile.price >500
//   })); 

// //   filtering items accoding to multiple brands name
//   console.log(mobiles.filter(mobile=>{
// // yahan par ham isy bol rahy han ky woh mobiles lay kar ao jin ka brand name nokia and samsung dono to yah possile nae isi liye yah empty array output dy ga []
//     // return mobile.brand === "Nokia" && mobile.brand === "Samsung" // []
//     return mobile.brand === "Nokia" || mobile.brand === "Samsung" 

//   })); 

//   //  filtering items accoding to multiple brands name and prices
//   console.log(mobiles.filter(mobile=>{
//     return (mobile.brand === "Nokia" || mobile.brand === "Samsung") && mobile.price > 500;
//   })); 


// //***********************Find(Always return 1 thing)********************** Koi bhe cheez AIK hi bar find ho skti hy find usy aik hi bar return kary ga beshak agy or bhe mojud ho agy nae gy ga
// // Yah mobile ki iteration tab tak chaly gi jab tak usy nokia na mil gy NOKIA milti hi ruk gy gi agy nae gy ga beshak agy
// // or NOKIA mojoud kiu na ho filter ki trha agay nae gy ga  (line 403)
// console.log(mobiles.find(mobile=>{
//     console.log("I am Mobile: ",mobile);
//     // return mobile.brand === 'iPhone' 
//     // return mobile.brand === 'Nokia' 
//     // return mobile.id === 5;
//     // return mobile.brand === "Nokia" && mobile.brand === "Samsung" //iss ka mtlb aisa brand jis ka at a time 2 name hon to yah possible nae (UNDEFINED)
//     // return mobile.brand === "Nokia";
//     return mobile.brand === "Nokia" || mobile.brand === "Samsung" 
//   }));

  // General Question: Google my jo ham searching karty han jo google search filter() use karta hy yah find() ?
  // ANSWER: GOGGLE use filter() method jo bhe ham search karty han uss ky keyward ky realted multile chezain return karta hy
  
// *******************************************REDUCE()************************************************
/* Yah 4 values as a callback leta hy 1) Accumulator (initial value bhe bolty han yah phr jo phely add karty howy add = 0)
rakhty thy woh yahaan rakhnat ki zarorat nae kiu ky starting my default accumaltor 0 hi hota hy change kar skty han ham 
agar karna chahye remaining 3 arguments(callback) same hi rehty han (2) value (3) index (4) array */
// ***********Syntax # 01*****************
// const numbers = [11, 2, 3, 4, 5];
// // //let total = 0 ==> yah jo add karny ky liye aik variable ko phely sy bana kar rakhty thy reduce my iss ki zarorat nae yah initial value khud set kar leta hy 
// const sum = numbers.reduce((total, value, index, array) => {
//   // console.log({"Index":index,"Accumulator ":total,"Each value from array":value,"Array":array})
//   console.log({total,value})
//   return total + value
// }, 2); // here Accumulator(initail value) is set to 2 while the default value is 0 if it is not set example in line 452
// // },0); //Default Accumulator(initail value) is always 0 if we didn't save it to 0.
// console.log("Addition using Reduce: ",sum); // Output: 15
/*Note: Here accumultor acts as a container where every value after iteration gets add to the value of an array and stores
into an accumalator like before we need to create extra varibale to store addition value for Example(let total = 0) here
every value after addition gets save it this total variable so reduce() method does not need such varibales it has its own
built in Accumulator or initial value that is always set to 0 we can also change it if we need.*/

//**************Syntax # 02****************
// const numbers = [11, 2, 3, 4, 5];
// function checkingReduceMethod(accumulator,value,index,array){
//   console.log({accumulator,value})
//   return accumulator + value;
// }
// console.log("Addition using reduce: ",numbers.reduce(checkingReduceMethod,0));
// // console.log("Addition using reduce: ",numbers.reduce(checkingReduceMethod,2));

// Most usefull example of Reduce() Here we are grouping the data by brand using REDUCE METHOD 
const mobiles = [
    { id: 1, brand: 'Samsung', price: 500 },
    { id: 2, brand: 'iPhone', price: 1000 },
    { id: 3, brand: 'Samsung', price: 700 },
    { id: 4, brand: 'Nokia', price: 800 },
    { id: 5, brand: 'Nokia', price: 600 },
    { id: 6, brand: 'Samsung', price: 400 },
    { id: 7, brand: 'iPhone', price: 550 },
    { id: 8, brand: 'iPhone', price: 350 },
    { id: 9, brand: 'Nokia', price: 300 },
];

const groupByBrand = mobiles.reduce((acc,mobile)=>{
console.log({acc,mobile});
// console.log(!acc[mobile.brand])
// console.log(acc[mobile.brand]);
// const brand = mobile.brand;
if(!acc[mobile.brand]){
  acc[mobile.brand] = [];
}
acc[mobile.brand].push(mobile)
return acc;
},{});
console.log(groupByBrand);

// array of obejcts
// acc = { 'Samsung': [
//   { id: 1,
//   brand: 'Samsung',
//   price: 500 
// }
// ],
// 'iPhone':
// [{ id: 2,
//   brand: 'iPhone',
//   price: 1000
//  }
// ]
// }

// const groupByBrand = mobiles.filter((mobile)=>{
// return (mobile.brand === "iPhone" || mobile.brand === "Nokia");
//   });
//   console.log(groupByBrand);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.splice(1, 1, "hello brother");
// console.log(spliced,months);
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(1, 1, "hello brother");
console.log(spliced,months);
