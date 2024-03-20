// var name = prompt("Enter your name");
// console.log("Assalam o alikum!" + name);

// prompt("enter any number");
// var num;
// num = Number(num);
// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// var num = prompt("Enter Number"); //prompt user to enter the number

// var num = parseInt(num) || 15;

// document.write('<table border="1" cellspacing="0">');
// for (i = 1; i <= 10; i++) {
//   document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
// }

// var sub_1 = prompt("Enter subject name");

// var subject_2 = document.getElementsByClassName(sub_2);
// var subject_3 = document.getElementsByClassName(sub_3);
//var mark_obt_a = prompt("Enter marks for subject 1");
// var sub_2 = prompt("Enter subject name");
// var mark_obt_b = prompt("Enter marks for subject 2");
// var sub_3 = prompt("Enter subject name");
// var mark_obt_c = prompt("Enter marks for subject 3");

// function calculate() {
//   var a_1 = document.getElementById("sub_1").value;
//   // var a_2 = document.getElementById("sub_2").value;
//   var b_1 = parseInt(document.getElementById("totalMarks1").value);
//   // var b_2 = parseInt(document.getElementById("tot_marks2").value);
//   var c_1 = parseInt(document.getElementById("obtainedMarks1").value);
//   // var c_2 = parseInt(document.getElementById("Obtained_2").value);
//   var percentage = parseInt(percentage);
//   percentage = (c_1 / b_1) * 100;

//   document.getElementById("percentage1").innerHTML = percentage;
// }

// var userName="Mohammad haris"
// console.log("Thanks " + userName + " !");

// ***************************LOOP IN DETAIL (FOR, FOR EACH, FOR IN, WHILE, DO WHILE)*************************
// *******For loop example*************
// For loop syantax: 1) initialization(declaration + assignment hoti hy variable ki) ; (2) condition (3) increment and decrement (4) {statment in karli brackets}
// let names = ["haris", "adil", "ali", "zain", "anis", "hassan",] //array 
// for(let i = 0; i<names.length; i++){
// console.log("element on index: ", i , " = ", names[i])
// }

// ******For of Loop***********(It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more)
// Syntax for(initialization (declaration + assignment) + of keyward due to for of loop + jis par loop karwana ho woh array aye ga)
// FOR OF is used to get values from an array or object
// let namess = ["haris", "adil", "ali", "zain", "anis", "hassan",] //array 
// for(let name of namess){ //will return array values
//     console.log(name);
//     console.log(namess); // will return the above array 

// }

// let str = "JAVASCRIPT";
// for(let x of str){
//     console.log(x); 
// }

// ********For In Loop********* // FOR IN is used to get KEY from an array or object
// *******************************IMPORTANT QUESTION D/f between FOR IN AND FOR OF loop*******************************
// ANSWER: For of loop hy woh array yah object par jab bhe ham chalaty han woh hamey un ki value return karta hy magar joo for of loop hy woh hamey value ki jagah array yah object ka INDEX/KEY ki value return karta hy 
// let names = ["haris", "adil", "ali", "zain", "anis", "hassan",] //array 
// for(let name in names){ // It will return index of each array
//     console.log(name);
//     // console.log(names); 

// }



// While loop Syntax: (1) initialization(declaration + assignment hoti hy variable ki) ; (2) While(condition) (3) Loop body {Statement hoti hy} + increment and decrement
let names = ["haris", "adil", "ali", "zain", "anis", "hassan",] //array
let i = 0;
while(i < names.length){
    console.log("element on index: ", i , " = ", names[i])
    i++; // agar issy block sy bahar likh diya to loop infinite chaly ga bahrhta rahy ga ruky ga nae 
}

// Do While loop Syntax: (1) initialization(declaration + assignment hoti hy variable ki) ; (2) Do ki body ay gi jis my {Statement hoti hy} + increment and decrement (4) condition last my ay gi While(condition) 
// let names = ["haris", "adil", "ali", "zain", "anis", "hassan",] //array
// let i = 0;
// do{
//     // Example # 01:
//     // let element = names[i] 
//     // console.log("element on index: ", i , " = ", element)
//     // i++
//     console.log("element on index: ", i , " = ", names[i])
//     i++;
// }
// while(i < names.length)

//*****************Implementing For loop on objects***********************
// let users = [
//     {
//         "name": "Mohammad Haris",
//         "reg id No" : 55524,
//         email : "mohammadharis11122@gmail.com",
//         gender : "male",
//         thumbnail : "https://picsum.photos/id/237/200/300"
//     },

//     {
//         "name": "Adil Nadeem",
//         "reg id No" : 11124,
//         email : "adil11122@gmail.com",
//         gender : "male",
//         thumbnail : "https://picsum.photos/seed/picsum/200/300"
//     },

//     {
//         "name": "Zain",
//         "reg id No" : 51234,
//         email : "zain11122@gmail.com",
//         gender : "male",
//         thumbnail : "https://picsum.photos/200/300?grayscale"
//     }
// ]
// for(let i = 0; i<=users.length; i++){
//     console.log("Name :",users[i].name);
//     console.log("Reg ID No :",users[i]["reg id No"]);
//     console.log("Email :",users[i].email);
//     console.log("Gender :",users[i].gender);
//     console.log("Image :",users[i].thumbnail);
//     // Now showing this user data on website
//     document.write(`<H1>User No: ${i+1} </H1>`)
//     document.write(`<h3>Name: ${users[i].name}</h3>`)
//     document.write(`<p>Reg Id No ${users[i]["reg id No"]}</p>`)
//     document.write(`<p>Email: ${users[i].email}</p>`)
//     document.write(`<p>Gender ${users[i].gender}</p>`)
//     document.write(`<img src = ${users[i].thumbnail}><br>`)
// }

// // Now using object example on For of loop
// for(let detail of users){
//     console.log(`Name ${detail.name}`);
//     console.log(`Reg Id No ${detail["reg id No"]}`);
//     console.log(`Email ${detail.email}`);
//     console.log(`Gender ${detail.gender}`);
//     console.log(`Images ${detail.thumbnail}`);
//     // // Now showing this user data on website
//     document.write(`<H1>Name: ${detail.name}</H1>`)
//     document.write(`<H1>Reg Id: ${detail["reg id No"]}</H1>`)
//     document.write(`<H1>Email: ${detail.email}</H1>`)
//     document.write(`<H1>Gender: ${detail.gender}</H1>`)
//     document.write(`<H1><img src = ${detail.thumbnail}></H1>`)

// }

// Now using object example on For of loop (return value)
// console.log("FOR OF LOOP")
// for(let value of users){
//     console.log(value); // will return each and every object
//     console.log(users); // return complete array/object in every iteration
// }
// console.log("FOR IN LOOP")

// Now using object example on For of loop (return keys)
// for(let keys in users){
//     // console.log(keys);
//     // console.log(users);  // return complete array/object in every iteration
//     // QUESTION: Can i acess value by using key in for in loop ? ANS: YES EXAMPLE BELOW
//     // console.log(users[keys].name);
//     console.log(users[keys]); // will return each key value
//     // will return each key value of an object
//     console.log(users[keys].name); 
//     console.log(users[keys]["reg id No"]);
//     console.log(users[keys].email);
//     console.log(users[keys].gender);

// }

    // console.log(`Reg Id No ${detail["reg id No"]}`);
    // console.log(`Email ${detail.email}`);
    // console.log(`Gender ${detail.gender}`);
    // console.log(`Images ${detail.thumbnail}`);
    // // // Now showing this user data on website
    // document.write(`<H1>Name: ${detail.name}</H1>`)
    // document.write(`<H1>Reg Id: ${detail["reg id No"]}</H1>`)
    // document.write(`<H1>Email: ${detail.email}</H1>`)
    // document.write(`<H1>Gender: ${detail.gender}</H1>`)
    // document.write(`<H1><img src = ${detail.thumbnail}></H1>`)

// }


// Now implementing this example by using while Loop
// let users = [
//     {
//         "name": "Mohammad Haris",
//         "reg id No" : 55524,
//         email : "mohammadharis11122@gmail.com",
//         gender : "male",
//         thumbnail : "https://picsum.photos/id/237/200/300"
//     },

//     {
//         "name": "Adil Nadeem",
//         "reg id No" : 11124,
//         email : "adil11122@gmail.com",
//         gender : "male",
//         thumbnail : "https://picsum.photos/seed/picsum/200/300"
//     },

//     {
//         "name": "Zain",
//         "reg id No" : 51234,
//         email : "zain11122@gmail.com",
//         gender : "male",
//         thumbnail : "https://picsum.photos/200/300?grayscale"
//     }

// ]

// let i=0;
// while(i < users.length){
//     console.log("Name :",users[i].name);
//     console.log("Reg ID No :",users[i]["reg id No"]);
//     console.log("Email :",users[i].email);
//     console.log("Gender :",users[i].gender);
//     console.log("Image :",users[i].thumbnail);
//     // Now showing this user data on website
//     document.write(`<H1>User No: ${i+1} </H1>`)
//     document.write(`<h3>Name: ${users[i].name}</h3>`)
//     document.write(`<p>Reg Id No ${users[i]["reg id No"]}</p>`)
//     document.write(`<p>Email: ${users[i].email}</p>`)
//     document.write(`<p>Gender ${users[i].gender}</p>`)
//     document.write(`<img src = ${users[i].thumbnail}><br>`)
//     i++;
// }

// Do while moving foward to for in loop and for of


