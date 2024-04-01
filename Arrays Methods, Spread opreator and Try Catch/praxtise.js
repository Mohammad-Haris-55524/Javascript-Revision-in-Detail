//let num = [1, 3, 2, 5, 4, 6, 7, 9, 8, 11, 10];
// let num = ["a", "c", "b"];
// num.sort();
// console.log(num);
//let length = num.length;
// console.log(num, typeof num);

// let i, j;

// for (i = 1; i <= 5; i++) {
//   let star = "";
//   for (j = 1; j <= i; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }

//     *
//     **
//     ***
//     ****
//     *****

// let i, j;

// for (i = 1; i <= 5; i++) {
//   let star = "";
//   for (j = 5; j <= i; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }

//    *****
//    ****
//    ***
//    **
//    *


// let num2 = [1, 3, 4, 2, 5, 6, 7, 8, 9];
// delete num2[4]; //delete method will remove element according to index number e.g: delete num2[0] and
// console.log(num2); //lenght of orignal array will remain same after deletaion of element
// // let a = num2.length;
// // console.log(a);

// let num1 = [1, 3, 5, 7, 9, 11];
// let num2 = [0, 2, 4, 6, 8, 10];
// let num3 = [10, 12, 14, 11, 13];
// let newArray = num1.concat(num2, num3); //Conccat method will join arrays together
// console.log(newArray , typeof newArray);

// //sort method
// let compare = (a, b) => {
//   return a - b;
// };
// newArray.sort(compare);
// console.log(newArray);

// //reverse method
// newArray.reverse();
// console.log(newArray);

//splice (It is used to add elemet in an array by using its index no with deletion of array )
// it will delete the element from an array by our choice and we can add element in thier place
// let num1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 18, 21];
// // num1.splice(4, 0, 8); //splice chages the orignal array value and creates a new array in the same orignal array after using splice method
// num1.splice(2, 0, "a","b");
// console.log(num1);
// // num1.splice(2, 0, "a", "b", "c");
// // num1.splice(2, 7);
// console.log(num1);

// //slice (It creates a new array by starting from index value to the length of an array without disturbing the orignal elments in an array)
// // Slice cut out pieces through an array by our choice slice(3,5)
// let num2 = [1, 3, 5, 7, 9, 11, 21, 11, 13, 15, 17, 18, 23];

// let a = num2.slice(7, 6); //It does not chages the orignal array     [index no or kahaan tak rakhna hy array ko]
// let b = num2.slice(1, 8);
// console.log(num2);

// console.log(a, typeof a);

// console.log(b);

// function favBrowser() {
//   var mylist = document.getElementById("myList");
//   document.getElementById("favorite").innerHTML =
//     "Your favorite browser is: " + mylist.options[mylist.selectedIndex].text;
// }

// var array = ["This", "is", "my", "cat"];
// delete array[1];
// let string = array.toString();
// console.log(string);
// console.log(typeof string);
// let join = array.join();
// console.log(join);
// console.log(typeof join);

// console.log(array);

// let colorName = ["red", "green", "yellow", "black", "white"];
//ADDING COLOR IN THE BEGINNING OF AN ARAAY
// let input = +prompt("Enter the number of color you want to add");
// for (let i = 0; i < input; i++) {
//   let ColorSelStrt = prompt(
//     "Enter the color you want to add in the start of an array"
//   );
//   colorName.unshift(ColorSelStrt);
// }
// console.log(
//   "The updated color list after adding colors in the beggining ",
//   colorName
// );
// //ADDING COLOR IN THE END OF AN ARAAY
// for (let i = 0; i < input; i++) {
//   let ColorSelEnd = prompt(
//     "Enter the color you want to add in the end of an array"
//   );
//   colorName.push(ColorSelEnd);
// }
// console.log(
//   "The updated color list after adding colors in the beggining ",
//   colorName
// );
// delete colorName[0];
// // delete colorName[colorName.length - 1];
// console.log(
//   "The color has been deleted form the beggining of an array ",
//   colorName
// );
//ADD COLOR AT YOUR DESIRED LOCATION
// let colorName = ["red", "green", "yellow", "black", "white"];
// let indexColorAdd = +prompt("Add color at your favorite index no", 2);
// let input_Col = prompt("Enter the color you want");
// colorName.splice(indexColorAdd, 0, input_Col);
// console.log(colorName);

//REMOVE COLOR FROM YOUR DESIRED LOCATION
// let colorName = ["red", "green", "yellow", "black", "white"];
// let indexColorDelete = +prompt("Delete color at your favorite index no", 2);
// let noOfDeletedCol = +prompt("How many color you want to delete", 1);
//BY using DELETE METHOD
// delete colorName[indexColorDelete];
//BY using SLICE METHOD
// let z = colorName.slice(indexColorDelete, noOfDeletedCol);
// console.log("New array is formed in SLICE method ", z);
// console.log("Orignal Array remains same in slice method ", colorName);

// let input_Col = prompt("Enter the color you want");
// let cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// let selectedCities;
// selectedCities = cities.slice(2, 4);
// console.log("New copied array", selectedCities);
// console.log("Orignal array remains unchanged in SLICE METHOD", cities);

// selectedCities = cities.splice(2, 2);
// console.log("New array will be formed in SPLICE", selectedCities);
// console.log("Orignal array is changed", cities);

// let phoneManufactures = [
//   "Apple",
//   "Samsung",
//   "Motorola",
//   "Nokia",
//   "Sony",
//   "Haier",
// ];

// function favBrowser() {
//   var mylist = document.getElementById([
//     "Apple",
//     "Samsung",
//     "Motorola",
//     "Nokia",
//     "Sony",
//     "Haier",
//   ]);
//   document.getElementById("favorite").innerHTML =
//     "Your favorite browser is: " + mylist.options[mylist.selectedIndex].text;
// }

// For each loop
// let array = [11, 21, 13, 41, 15, 61, 17, 20, 19];

// array.forEach(function (value, index) {
//   console.log("index no ", index, "Orignal Array", value);
// });

// let array = ["apple", "Mange", "Banana", "Pineapple", "Orange"];
// array.forEach(function (value, index, array) {
//   console.log(index, value, array);
// });

// FILTER ARRAY:
// let array = [11, 21, 13, 41, 15, 61, 17, 20, 19];
// let filteredarray = array.filter(function (value) {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(filteredarray, array);

// let filteredArray = array.filter(function (value) {
//   return value % 2 === 0;
// });
// console.log(filteredArray,array);

// Sorted array
// let array1 = [11, 21, 13, 41, 15, 61, 17, 20, 19];

// array1.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(array1);

// Sorted array
// let array1 = [11, 21, 13, 41, 15, 61, 17, 20, 19];

// array1.sort(function (a, b) {
//   return a - b;
// });
// console.log(array1);

// let b = array1[array1.length - 1];
// console.log(b);

// *************************Array Methods***************************
// *****************toString()******************* converts array to string (Immutable)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits, typeof fruits);
// console.log(fruits.toString(), typeof fruits.toString());
// let arr = [true , false, 20.30 ,10, {"name": "mohammad haris"}, {id: 55523}];
// console.log(arr, arr.toString());

// **************join()*************** Converts array to an string It behaves just like toString(), but in addition you can specify the separator: (Immutable)
// We use such method when we need to use string methods while converting an array into string
// let arr = "true false 20.30 10 name mohammad haris id:55523"; //not an array join will not work
// let arr = [true , false, 20.30 ,10, {name: "mohammad haris"}, {id: 55523}];
// // let z= arr.join("||");
// let z = arr.join("||");
// console.log(z);
// console.log(arr) //for checking that join method is immuatable

// **********pop()************ IT IS MUTABLE. This method removes the last element from an array: Such methods only works with array or array of object not with objects
// let num2 = [1, 3, 4, 2, 5, 6, 7, 9];
// let num2 = [{name: "mohammad haris"},{id: 55523}] //array of object
// let c = num2.pop();  //last will of an array will be out in pop method
// // console.log(num2.pop());  //last elemnet of an array will be out in pop method jo element pop hoga woh milay ga
// console.log(
//   "The popped element is ",c +
//     " \nNow new array will be ",num2 +
//     " \nNew lenght is :",num2.length
// );
// console.log(num2.length)
// console.log(num2, typeof num2, num2.length);


//*********push method*********** It add last element to an array.(It is mutable: It manuplates(changes) the orignal array)
// let num2 = [1, 3, 4, 2, 5, 6, 7];          
// // console.log(num2,":", typeof num2);
// console.log(num2.length);
// let x= num2.push(10); //last elemest will be added in an array in push method it will return length
// console.log(x,num2.length); //it will return length because it manuplates the orignal array 
// console.log(num2)

// Example # 02
// let userDetail = [{"user name": "Mohammad Haris"}, {id:55524}]; 
// // let updatedDetail = {gender: "male"};
// // let result = userDetail.push(updatedDetail);
// let result = userDetail.push({gender: "male"}); 
// console.log(userDetail)
// console.log(result); // it will return length because it manuplates the orignal array 

// ********NOTE: Another method to add element to an array ****** Similar to push and unshift to add element
// let num2 = [1, 3, 4, 2, 5, 6, 7];  
// num2[num2.length] = 100;
// num2[2] = 15; // it will over write the value present on 3rd index 
// console.log(num2)        


// *******Shift method*************It is also mutable (It Removes element from the start of an array or array of object)
// let num2 = [100, 3, 4, 2, 5, 6, 7, 8, 9];
// let z = num2.shift();
// console.log(num2);
// console.log(num2.length);
// console.log(z); // will return 1st element of an array which is being removed from begining of an array

// console.log(
//   "It shifts (remove from 1st element) that is:", z    // very first element of an array will be removed
// ," \n Now new array will be " + num2);

// console.log("The type is : " + typeof num2);

// *****************UNSHIFT METHOD***********  //unshift means to add an element in the starting of an array
// let num2 = [1, 3, 4, 2, 5, 6, 7, 8, 9];
// let d = num2.unshift(20);      //unshift means to add an element in the starting of an array
// console.log(num2, num2.length);
// console.log(d);  // Will total lenght of an array after manupulation

// console.log(
//   "The unshift(Add element to the beggining of an array) it will return total lenght is:  " , // very first element of in an  array will be added
//     d ,
//     "\n Now new array will be " ,
//     num2 
// );
// console.log("The type is : " + typeof num2);
// console.log(c);

// NOTE: POP AND SHIFT: Element nikalty han yah dono method to yah hamey woh element dein gy .pop yah .shift kar ky jo ham in my daal rahy hoty han 
// NOTE: PUSH AND UNSHIFT: Wo element nae lenght dein gy jab bhe ham unhay array ky sath .push yah .shift kar ky use karein gy

// *****************Delete KEYWARD***************
//(It deletes the element on which it is targetted and then it displays empty and undefined on that index that is why we should not use delete it is not a good practice)
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // delete fruits[fruits.length-1] 
// delete fruits[2] 
// console.log(fruits)

// **************CONCAT METHOD***************IT makes copy an of array than performs an operation that is why IT does not effect the orignal array.  
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// console.log(arr1.concat(arr3,arr2));
// console.log(arr1.concat("adil","haris")); // also can add value to an array with manupulating the orignal array.
// console.log(arr1,arr2,arr3) // orignal arrays remains same.

// ***********FLAT Array Method********* (Flattening an array is the process of reducing the dimensionality of an array.) Yah method array ki dimension ko reduce karny ky liye use hota hy 
// NOTE IMPORTANT: Agar hamary pas backend yah api sy data ata hy or uss my array 5 times yah 10 time deep hota hy yah hamey nae pta hota yah kitna level deep array hy to aisi condition my ham INFINITY use karty han flat(INFINITY) ki bracket ky andar
// let arr = [["haris"],[55524,[18336]],["adil"]]; 2 dimension array
// let arr = [["haris"],[[55524,18336,[2000,4000]],[12223]],["adil","hassan","zainab"]]; //3 dimension array
// console.log(arr)
// // let flatedArr = arr.flat(3) //flat(2) in bracket we give the value according to the depthness(dimension) of an array
// let flatedArr = arr.flat(Infinity) // Jab nae pta hota kitna level deeep hy to infinity use karty han 
// console.log(flatedArr);
// for(let item of flatedArr){  // for of returns value of an array or object
// //     if(typeof item == "string"){
// //     let z = item.toUpperCase();
// //     console.log(z);
// // }
//     console.log("I am outside loop", item);
// }

// Example # 02 without using flat array we are adding a 2 dimensional array it would create headache for a developer
// const data = 
// [[1,2],
// [3,4],
// [5,6]];
// let sum = 0;

// // console.log(data);
// for(let item of data){
//     console.log("outer loop :" ,item);
//     for(let items of item){
//         console.log("inner loop: ",items)
//         sum += items;
//         console.log("items: ", items, " sum :", sum);
//     }
//     console.log(sum);
// }

// Example # 02 solution by using flat method of more advance array(three dimesional array)
// const data = 
// [[1,2,[2,5]],
// [3,4,[5,2]],
// [5,6,[2,2]]];
// let sum = 0;

// let flatedArr = data.flat(Infinity);
// console.log(flatedArr);
// for(let items of flatedArr){
//     sum += items;
//     // console.log(i);
// }
// console.log(sum);

//***********SPLICE METHOD (IT IS MUTABLE ==> CHANGES THE ORIGNAL ARRAY)It can take 3 parameter****************/ 
//NOTE: Splice method is used to delete or add item from an array but note one thing that it will make changes to an orignal array  
// It can take 3 parameter:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  //1st parameter is the starting value, 2nd parameter is the value from where to delete the item from an array, and 3rd paramter is the inputed value to an array.
// fruits.splice(1,2,"Lemon", "Kiwi"); // 2 is starting paramter, 1 is the postion where to delete from, 3rd paramter is the("lemon" kiwi) to add in an array
// fruits.splice("Lemon", "Kiwi");// wrong it will not work bcz we are not defining starting point. To define Starting point in very necessary
// console.log(fruits);
// let languages = [
//     { name: "JavaScript", year: 1995, designedBy: "Netscape" },
//     { name: "Python", year: 1991, designedBy: "Guido van Rossum" },
//     { name: "Java", year: 1995, designedBy: "Sun Microsystems" },
//     { name: "C++", year: 1983, designedBy: "Bjarne Stroustrup" },
//     { name: "Ruby", year: 1995, designedBy: "Yukihiro Matsumoto" }
// ];
// let updatedArr = languages.splice(1,1)
// console.log(languages.splice(1,1)); // splice return It will show the deleted item
// console.log("New updted array: ",languages);

//***********SLICE METHOD***********IMMUTABLE==> Does not changes the orignal Array (Take 2 parameters)
// The slice() method slices out a piece of an array into a new array.
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// //agar 1 parameter dein gy to utnay element chor kar baki element ko new array my return kary ga orignal array my changes nae kary ga.
// let slicedArr = fruits.slice(1); 
// console.log("Orignal Array: ",fruits, " New Array: " ,slicedArr);
// Example # 02
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const newArr = fruits.slice(2,3); // 2 sy start karo or 3 sy 1 kam tak slice kar ky la do
// console.log(newArr);

// **************Sorting an ARRAY******************
// Function declarations are statements that define functions and are hoisted.
// Function expressions are assignments where functions are assigned to variables and are not hoisted in the same way as declarations.
// Always use localCompare method while sorting string to avoid case sensetiveness check Example
// EXAMPLE #01 SIMPLE SORTING OF STRING WITHOUT CASE SENSITIVENESS
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.sort());
// EXAMPLE #01 (PART B) // Sorting the array using localeCompare for case-insensitive sorting
// var fruits = ['apple', 'Banana', 'Orange', 'strawberry', 'kiwi'];
// fruits.sort(function(a, b) {
//     return a.localeCompare(b)
// });
// console.log(fruits);

// EXAMPLE #02 Sorting of number here we have to write a sort function to sort numbers.
// const points = [40, 100, 1, 5, 25, 10];
// let x = function(a,b){
//     return a-b;
// }
// console.log(points.sort(x));
// console.log(points);

// EXAMPLE #03 (ADVANCE SORTING OF OBJECT OF NUMBERS)
// let languages = [
//     { name: "JavaScript", year: 1995, designedBy: "Netscape"},
//     { name: "Python", year: 1991, designedBy: "Guido van Rossum"},
//     { name: "Java", year: 1995, designedBy: "Sun Microsystems" },
//     { name: "C++", year: 1983, designedBy: "Bjarne Stroustrup" },
//     { name: "Ruby", year: 1995, designedBy: "Yukihiro Matsumoto"}
// ];
// // Here we are sorting "YEARS" in LANGUAGE object.
// let sortedArr = function(a,b){
// return a.year - b.year
// }
// console.log(languages.sort(sortedArr))

// EXAMPLE #04 (ADVANCE SORTING OF OBJECT OF STRINGS)
// Here we are sorting NAME in LANGUAGE object
// Note: We cannot sort string if they are case sensitive always try to use localcompare method while sorting strings
// languages.sort((a, b) => a.name.localeCompare(b.name));
// console.log(languages);
// languages.sort((a,b) => {
// return a.name.localeCompare(b.name);
// });
// console.log(languages)

// Random Sort of an Array (USE CASE: Such scenerio can be used in quiz app to random sort of multiple qurstion to multiple users when they are attempting quiz to avoid cheating)
// function randomSort() {
//     return Math.random() - 0.5; // Returns a random value between -0.5 and 0.5
//   }
//   const myArray = [
//     { name: 'John', age: 25 },
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 22 },
//     { name: 'Eve', age: 28 }
//   ];
//   console.log(myArray.sort(randomSort));

// Max value in an array
// const points = [40, 100, 1, 5, 25, 10];
// // BY using spread operator ...points
// console.log({...points})
// let maxValue = Math.max(...points);
// console.log(maxValue);

// Min value in an array
// const points = [40, 100, 1, 5, 25, 10];
// // BY using spread operator ...points
// console.log({...points})
// let minValue = Math.min(...points);
// console.log(minValue);

// **************************What are Spread in Arrays: Uses of spreads*******************************
// Example 1: Concatenating Arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const concatenatedArray = [...arr1, ...arr2];
// console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 2: Creating Copies of Arrays
// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray];
// console.log(copyArray); // Output: [1, 2, 3]

// Example 3: Merging Objects
// const obj1 = { name: 'John', age: 25 };
// const obj2 = { gender: 'Male', country: 'USA' };
// const mergedObject = { ...obj1, ...obj2 };
// console.log(mergedObject); // Output: { name: 'John', age: 25, gender: 'Male', country: 'USA' }

// Example 4: Creating Copies of Objects
// const originalObject = { x: 1, y: 2 };
// const copyObject = { ...originalObject };
// console.log(copyObject); // Output: { x: 1, y: 2 }

// *********************************TRY CATCH*************************************
// digits = "0123456789";
// let otp = ""
// function genrateOtp(){
//     for(let i=0; i < 4; i++)
//        { console.log(digits[i])
//     }
//     return otp;
//     8
// }
// genrateOtp();
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(typeof(citrus),citrus,fruits);

// Example # 01 ***************TRY CATCH*************** 
// function sum(){
// /*TRY BLOCK my ham woh code dalty han jis ka hamey pta hota hy yah error dy skta hy taa ky iss ki wjah sy baki code
// execution ruk na gy kiu ky JS line by line code execution karti hy agar kisi line my error agya hy to baki ka code
// executte nae hoga isi sy bachny ky liye try catch use karty han */
// // NOTE: When any code is sucessfull without error only TRY AND FINALLY block works
// try{return(x + y);}
// /*Jab ERROR AATA HY USY SHOW KARANAY KY LIYE CATCH BLOCK USE KARTY HAN TAAKY BAKI CODE KI EXECUTION NA RUKY HAMARI*/
// // NOTE: Error anay par/ Failure ki surat my yah block execute hoga or baki ka code nae phaty ga mtlb code exution will not stop if a catch block is created. It tells us the error without stoping the execution of code 
// catch(error) {console.log(error.message)}
// // NOTE: Code ki execution sucessfull ho yah unsucessfull ho yah block zaroor execute hoga finaaly use karo na karo zarori nae
// finally {console.log("I am from finally")}

// }
// sum(3,3);
// console.log("hello i am working inspite of error due to try catch")

// Example # 02
// try{
//     // addalert("Welcome to try block");
//     throw "Error hy bhai"; // custom error can be crated using throw statment
// }
// catch(err){
// console.log(err)
// }