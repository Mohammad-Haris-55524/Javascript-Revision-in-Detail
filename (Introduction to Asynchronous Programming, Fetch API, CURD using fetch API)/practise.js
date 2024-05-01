/*We can make our code Asynchronous in multile ways (1)CALLBACKS (2)PROMISES we utilize promises in 2 ways ===> Then Catch & Async and await (3)INTERVALS*/
// Callbacks my aik issue hy callbacks my aik cheez ati hy callbacks hells ky name sy jo NODE.js parhain gy yani aik callback hy jab uss ka response aagy ga phr uss ky andar aik or callback hy phr uss ky andar beh aik or phr aik or yani multiple callbacks ky andar callsbacks use ho rahy hoty han iss sy code ki readiblity less hojati hy code ko maintain karna difficult hojaata hy issi liye jab aisa scenerio aajata hy phr ham wahaan par  callbacks ko convert karna parh jata hy PROMISES ky andar to phr aisa sceneio my ham promise object ko use kar rahy hon gy new promise wala . 
// Promises in JS
// Promise bani banaye bhe hoti han yah phr ham khud beh bana skty han. Bani baniye PROMISE ko 2 methods sy use kar
// skty han (1) async/await (2) then catch finally

// ****************************************PROMISES***********************************************
//DEFINATION: "A PROMISE IS A PROMISE OF CODE EXECUTION. THE CODE EITHER EXECUTES OR FAILS IN BOTH THE SITUTION THE SusCRIBER WILL BE NOTIFIED"
//Promise 1 object hy uss my 2 properties hoti han 1st state or 2nd result
/*A Promise has three states:
Pending: The initial state; the promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.*/

// These are customs promises which are created but most of the time we consume(use) built in promises like jab ham mongodb use karein gy to uss ky build in promise use karein gy example find hy find all hy inhy use kar rahy hon gy
// Syntax # 01 (MOST PREFERRED SYNTAX) 
// const promise = new Promise((resolve, reject) => {
//     resolve("Here is your requested data: Sucessfull");
//     reject("Data Rejected may due to network issue");
// })

// promise.then((data)=>{
// console.log(data)
// }).catch((err)=>{
// console.log(err);
// })

// Syntax # 02
// function myPromise(resolve,reject){
//     resolve("Here is your requested data: Sucessfull ");
//     reject("Data Rejected may due to network issue");
// }
// let promises = new Promise(myPromise);
// promises.then((data)=>{
// console.log(data)
// })
// .catch((error)=>{
// console.log("Error due to netwrok or any other issue: ",error);
// })


// *******************************************FETCH API********************************************
// ************Syntax # 01************ FETCH API BY USING THEN CATCH (A BUILT IN PROMISE)
// let x= fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>{
// return response.json();
// }).then((posts)=>{
// console.log(posts)
// })
// .catch((error)=>{
// console.log("When the promise is rejected the error occurs: ",error)
// })
// console.log(x);

// ************Syntax # 02************ FETCH API BY USING aync and await  (A BUILT IN PROMISE) await are always used in async functions
// const fetchApi = async ()=>{
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json(); //In JavaScript, the await keyword is used in an async function to pause the execution of the function until a Promise is resolved or rejected. It can only be used within an async function.
//     console.log({response,posts})
//     return posts
// }
// catch(error){
// console.log("Catch block Error: ",error)
// // throw error
// }
// }
// console.log("Iam funtion fetch: ",fetchApi());
// // fetchApi();

// "FETCH API CAN BE USED TO SEND AND RETRIVE INFORMATION FROM NETWORK WHEN NEEDED."
// console.log("hello world : 1")
// console.log("hello world: 2",x)

// let resultElement = document.getElementById("ui-data");
// // NOTE: Fetch API sy jo hamary pas response ata hy woh JSON format my hota hy iss ka mtlb phely ham usy parse karty han agar parse nae karein gy to hamey ARRAY OF OBJECTS nae milen gy console par ajeeb si cheez mily gi
// fetch("https://jsonplaceholder.typicode.com/posts") // fetch aik built in promise hay ham isy consume(ustilize/use) kar rahy han.
// // API sucessfull hony ki surat my then block chaly ga or error any par catch block chaly ga
//     .then((response)=>{
// // Yahaan par hamey hamara desired result nae mily ga yani hamey ARRAY OF OBJECTS yahaan nae mily gy to ab ham usy parse karein gy response.json() kar ky return karein gy to phr woh hamey next waly then ky block my mil gy ga
//     // console.log(response); // iss waly then sy response ata hy ky API sahi chali hy yah nae
//     // Jo mery pas response aye ga usy my json format my change kar ky return karo ga or aglay next THEN my woh output mujhy mil gy ga.
//     return response.json();

//     })
//     .then((posts)=>{
//         console.log(posts);
//         // resultElement.textContent = JSON.stringify(posts,null,2);
//         resultElement.textContent = JSON.stringify(posts,null,2);
//         // const ids = posts.map(item => item.id);
//         // console.log(ids);
//         // resultElement.textContent = ids
//     })
//     .catch((err)=>{
//     console.log("Error:", err);
//     })

//     // console.log("hello world: 2",x)
//     console.log("hello world: 2")
//     console.log("hello world: 3")

// ***********************************CRUD operation using Fetch API*********************************(INTERVIEW QUESTION PUT VS PATCH)
// HTTP METHODS (************EXAMLES WITH CODE ARE IN THE END**************)
/*
GET:YAH METHOD TAB USE HOTA HY JAB HAM KISI SPECIFIC WEBSITE SY KOI CHEEZ(DATA) MANGWANA CHAHTY HON YAH SERVER PAR KOI CHANGES NAE KAREY GA
YANI DATABASE MY KOI MODIFICATIONS NAE KARY GA JESY KISI KISAM KI KOI UPDATE DELETE ADD NAE KARY GA 
Purpose: Retrieve data from a specified resource.
Example: GET /users/123 

POST: JAB HAM DATABASE MY KOI NEW CHEEZ ADD KARANA CHAHTY HAN TO POST KA METHOD USE KARTY HAN FOR EXAMPLE: HAM NEW PRODUCT ADD KARANA CHAH RAHY
HO YAH NEW USER ADD KARANA CHAH RAHY HO TAB YAH METHOD USE HOGA YAH METHOD UPDATE KARANY KY LIYE BHE USE HOSKTA HY LEKIN GOOD PRACTISE NAE HY
UPDATE KY LIYE HAM (PUT) YAH (PATCH) METHOD USE KARTY HAN 
POST:
Purpose: Submit data to be processed to a specified resource.
Example: POST /users, submitting user data for registration.

PUT: YAH METHOD BHE CREATE OR UPDATE KARNAY KY LIYE USE HOTA HY. (ENTIRE PROFILE UPDATE KARANI HOTO PUT USE HOGA OR AGAR AIK KOI FEILD UPDATE KARANI HO TO PATCH USE HOGA)
Purpose: Update a resource or create it if it doesn't exist.
Example: PUT /users/123, updating user data with ID 123. EXAMPLE ARE BELOW IN (EXAMPLE OF PUT VS PATCH)

PATCH: THIS METHOD IS MOSTLY USED TO APPLY PARTIAL MODIFICATION TO RESOURCE. IT IS OFTEN USED TO UPDATE A PART OF THE RESOURCE RATHER THAN 
RAPLACING THE ENTIRE RESOURCE. 
PATCH:
Purpose: Partially update a resource.
Example: PATCH /users/123, updating only specific fields of user data with ID 123.
FOR EXAMPLE: MY APPNY FRONTEND SY KOI BHE CHEEZ UPDATE KARANA CHAH RAHA HAN TO WESY BASICALLY AISY HOTA NAE MAAN LO MY NAME KO UPDATE KARANA
CHAH RAHA HON TO MY AGAR APNAY FRONTEND SY NAME KI REQUEST BHEHTA HON MAY DISCRITION TITLE IMAGE WAGERA NAE BHEJ RAHA TO YAH KIA KAREY GA? YAH 
SIRF NAME KO JAA KAR HI UPDATE KAREY GA OR BAKI DISCRITION TITLE IMAGE WAGERA KO WESY KA WESY HI PARA REHNAY DY GA REMOVE WAGERA REPLACE WAGERA
NAE KAREY GA YAH BASICALLY UPDATE KAR RAHA HOTA HY ||OR|| PUT: JO HAY WOH REPLACE KAR RAHA HOTA HY OR YAHI KAAM AGAR PUT SY KAR RAHA HOTA TO 
WOH NAME KI FEILD SY SAB KO REPLACE KARA DETA YANI JO DISCRITION TITLE IMAGE MOJOOD HOTA USY NAME SY REPLACE KAR DETA OR HAAMRY PAS AIK HI NAME
KI FIELD AAJATI BAKI REPLACE(DELETE) HO JATI 
*******************************************************PATCH VS PUT ************************************************** 
PUT BASICALLY REPLACE KAR RAHA HOTA REPLACE. UPDATE OR REPLACE MY YAH DIFFERNCE HY KY AGAR MY NAME BHEJ RAHA HON FRONTEND SY OR MERY PAS PHELY
SY NAME DISCRITION TITLE IMAGE PARA HY TO NAME KIA KARY GA?  TO NAME JAA KAR APNAY AAP KO UN TAMAM(NAME DISCRITION TITLE IMAGE) FIELDS SY REPLACE
KAR ADY GA WOH BAKI (DISCRITION TITLE IMAGE) KI FIELDS KO URA DY GA (THIS IS REPLACE)

******************************************EXAMPLE OF PUT VS PATCH******************************************************
PUT Method:
Imagine you have a resource representing a user profile, and you want to update the entire profile with new information. You use PUT to send
the full representation of the updated user.
PUT /users/123 HTTP/1.1
Host: example.com
Content-Type: application/json
{
  "name": "New Name",
  "age": 30,
  "email": "newemail@example.com"
}
In this case, the entire user profile for user with ID 123 is replaced with the new data provided in the PUT request.

PATCH Method:
Now, suppose you want to make a partial update to the user profile. You only want to change the user's email address. Instead of sending the
entire user profile, you use PATCH to send only the specific change.
PATCH /users/123 HTTP/1.1
Host: example.com
Content-Type: application/json
{
  "email": "updatedemail@example.com"
}
With PATCH, you're indicating that you only want to modify the email address field for the user with ID 123. The server will apply this change,
leaving other fields unaffected.

NOTE:
In both cases, the server updates the resource, but the extent of the update (complete or partial) is what distinguishes PUT from PATCH.


5) DELETE: KOI FIELD KOI ENTRY SERVER SY DELETE KARANI HO TO DELTE METHOD USE KARTY HAN FOR EXAMPLE AGAR KOI PRODUCT PRODUCT DELETE KARANA CHAH 
RAHY HON TO DELETE METHOD KO USE KAREIN GY  
DELETE:
Purpose: Delete a specified resource.
Example: DELETE /users/123, deleting user data with ID 123.

*/
 
// HTTP KY BHOT SY METHODS HAN JIS MY SY COMMON METHOD UI PAR LIKH DIYE HAN BAKI METHODS JESY KEEP ALIVE OR CREDENTIALS JAB USE HOTY HAN JAB
// HAM COOKIES YAH CACHE KY SATH HANDELEING KARTY JAB USE KARTY HAN.
// HEADER: AP META DATA BEHJ RAHY HOTY HO KISI BHE REQUEST SY RELATED META DATA MEANS CHOTI MOTI CHEZAIN  
// IT IN: KOI METHOD SET KARANA CHAH RHAY HO KOI CACHE KI HANDELING KARANA CHAH RHAY HO TO WOH HAM INIT KY OBJECT KY ANDAR LIKH RAHY HOTY HAN 
// BODY
// jab mujhy koi post create karani hy to my frontend sy post ka input lo ga jesy post ka name, image tittle discription wagera usy mujhy bhejna
// bhe to pary ga server kisi tarikay sy to my kesy bhejo ga? To yaahaan par my woh sab BODY ky andar rakh kar bhejo ga.
// METHOD: FOR ITS EXPLANATION CHECK UI.

// ********GET METHOD****** JO API SY ATA FETCH HO KAR AA RAHA HOTA HY USS KA DEFAULT METHOD GET HOTA HY AGAR METHOD:"GET" NAE BHE LIKHAIN GY
// TO TAB BHE USI TARHA HI DATA GET KAR KY LAY GY JESY GET KY BEGAIR LAA RAHA HOTA HY 
// REST routes: 
const getPosts = async ()=>{
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"});
    const posts = await response.json();
    console.log({response,posts})
    return posts
}
catch(error){
console.log("Catch block Error: ",error)
// throw error
}
}
getPosts();

// ********POST METHOD****** (Jab data bhejna ho server par to post method use karty han)
// const createPosts = async (passingDataAsArgument)=>{ ////passingDataAsArgument likh do yah body baat aik hy ham pass data argument my hi kar rahy han jo save body my ho raha hy kiu ky body ky through hi data server ko bheja jata hy chahay woh update(PUT/PATCH) karany ky liye jo yah phr add(POST) karany ky liye ho
//   try{
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts",
//   { method: 'POST',
//     body: JSON.stringify(passingDataAsArgument), //JSON.stringify: Jab client sy data bhejty han yah server sy data mangwaty han to hamesha JSON ki form my yah kaam karty han kiu ky yah light weight hota hy ki ky hoskta jo data ham mamgwa rahy hon woh milions my ho to JSON.stringify karny sy woh JSON my change hogy ga or phr usy body my set kara dein gy 
//     //Iss my jo bhe fields jayen gi woh backend developer bataye ga for e.g: uss ny bola my title chaihyee body or userId(ky kis specific bandy ki post hy) or id my(backend developer) manage kar loga or woh auto increment genrate ho rahi hy
//       // title: 'foo',
//       // body: 'bar',
//       // userId: 1,
//     // }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   const posts = await response.json(); //await nichey wala code block kar deta hy yani getPosts() ko uss waqt nae chalaye ga jab tak uper wala code execute ho nae jata.
//   console.log({response,posts})
//   getPosts(); // my agar chahta hon ky post create hony ky baad post ko get kary to phr my usy post method ky andar iss trha use karo ga or phely sy jo post hogi hamary pas for e.g(10 posts hongi to POST METHOD ky thorugh or posts uss my add ho jayen gi)
//   return posts
// }
// catch(error){
// console.log("Catch block Error: ",error);
// }
// }
// // createPosts(); //yah baad my chaly ga get post ki nisbat kiu ky yah time taking hota hy post create karana 
// // getPosts(); //get post jaldi chaly ga create post ky muqablay my kiu ky create post time taking hy or ham asycnhronous code kar rahy han to baki ka code block nae hoga agay wala kaam continue rahy ga jab create post hogy gi phr laa kar dekha dy ga 
// // Note: argument my data ko pass kar ky ham data ko dynamic bna rahy han kiu ky ab hamy ab bar bar ..............
// createPosts({ 
//   title: 'foo2',
//   body: 'bar2',
//   userId: 1,
// });
// createPosts({ 
//   title: 'foo3',
//   body: 'bar3',
//   userId: 1,
// });
 


// // ********PUT METHOD****** (TO UPDATE OR REPLACE FILEDS) 
// const updatePosts = async (body)=>{ 
//   try{
//   // const response = await fetch("https://jsonplaceholder.typicode.com/posts/2", // slash /1 yah karein gy to yah id 1 wali post my gy ga or wahaan par jo jaa kar woh changes kar dy ga jo ham ny aurgument my pass karein hon gi usi id ki fields ko hi update karay ga jo slash kar ky enter ki hogi lekin iss kam my aik masla aye ga aik ham at a time aik hi field ko update karein gy bar bar /1 /2 dal kar
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${body.id}`, //MAKING URL DYNAMIC Now we will also make the URL DYNAMIC taa ky bar bar slash /2 /1 /3 kar ky post ki id ko update nae karana pary iss trha ham dynamcaaly URL create kar ky post update kara skty han
//   { method: 'PUT',
//     body: JSON.stringify(body),  
//     //Iss my jo bhe fields jayen gi woh backend developer bataye ga for e.g: uss ny bola my title chaihyee body or userId(ky kis specific bandy ki post hy) or id my(backend developer) manage kar loga or woh auto increment genrate ho rahi hy
//       // title: 'foo',
//       // body: 'bar',
//       // userId: 1,
//     // }),

//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   const posts = await response.json();
//   console.log({response,posts})
//   // console.log(body);
//   getPosts(); // my agar chahta hon ky post create/Add (POST METHOD) hony ky baad or update(PUT METHOD) hony ky baad ham UI par show karanay chah rahy ho to in sab ky bad (GET METHOD) getPosts() ka function chala dein gy or jo bhe id ham ny pass ki hogi uss post my jaa kar yah usy update kar ky hamey UI par show kara dy ga GET METHOD KY through
//   return posts
// }
// catch(error){
// console.log("Catch block Error: ",error)
// }
// }

// updatePosts(
//   {
//     id: 1,
//     title: 'Hello',
//     body: 'bar',
//     userId: 1
//   });
// updatePosts(
//   {
//     id: 2,
//     title: 'Hey',
//     body: 'bar',
//     userId: 1
//   });
  

// **********************PATCH METOD*************** CHECK JSON PLACEHOLDER GUIDE (YAH SIRF AIK FIELD KO UPDATE KARANAY KY LIYE USE HOTA HY BAKI 
// SAB FIELD WESY KI WESY REHTI HAN  PUT KI TRHA CODE SAB SAME HI RAHEY GA BSS METHOD KI JAGAH PATCH LIKH DEIN GY OR ID KY THROUGH HI UPDATE
// KAREEIN GY)

// *****************************************************DELETE METHOD********************************************************************
// NOTE
// (Purpose: Delete a specified resource) body iss my set nae karty kiu ky ham koi data server par bhej  nae rahy hoty sirf id pass karty han
// uss ki jo resource ham delete karana chah rahy hoty han
// const deletePosts = async (id)=>{ 
//   try{
//   // const response = await fetch("https://jsonplaceholder.typicode.com/posts/2", // slash /1 yah karein gy to yah id 1 wali post my gy ga or wahaan par jo jaa kar woh changes kar dy ga jo ham ny aurgument my pass karein hon gi usi id ki fields ko hi update karay ga jo slash kar ky enter ki hogi lekin iss kam my aik masla aye ga aik ham at a time aik hi field ko update karein gy bar bar /1 /2 dal kar
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, //MAKING URL DYNAMIC Now we will also make the URL DYNAMIC taa ky bar bar slash /2 /1 /3 kar ky post ki id ko update nae karana pary iss trha ham dynamcaaly URL create kar ky post update kara skty han
//   { method: 'DELETE',
//   });
//   const posts = await response.json();
//   console.log({response,posts})
//   // console.log(body);
//   getPosts(); // my agar chahta hon ky post create/Add (POST METHOD) hony ky baad or update(PUT METHOD) hony ky baad ham UI par show karanay chah rahy ho to in sab ky bad (GET METHOD) getPosts() ka function chala dein gy or jo bhe id ham ny pass ki hogi uss post my jaa kar yah usy update kar ky hamey UI par show kara dy ga GET METHOD KY through
//   return posts
// }
// catch(error){
// console.log("Catch block Error: ",error)
// }
// }
// deletePosts(1);
// deletePosts(2);

// ***************************Filtering resources**************************************(?userId=1 query params yani key:value ky pair Question mark ? ky baad query params diye howy hota hy)
// Note: Filtering resources my ham query params ky through woh object return kara rahy han jo ham ny URL my pass kiye han as a query param
//  ?userId=1 yah sirf woh objects laa kay aye ga jis ki userId 1 hogi.
const filteringPosts = async ()=>{ 
  try{
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts/2", // slash /1 yah karein gy to yah id 1 wali post my gy ga or wahaan par jo jaa kar woh changes kar dy ga jo ham ny aurgument my pass karein hon gi usi id ki fields ko hi update karay ga jo slash kar ky enter ki hogi lekin iss kam my aik masla aye ga aik ham at a time aik hi field ko update karein gy bar bar /1 /2 dal kar
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=1`) //MAKING URL DYNAMIC Now we will also make the URL DYNAMIC taa ky bar bar slash /2 /1 /3 kar ky post ki id ko update nae karana pary iss trha ham dynamcaaly URL create kar ky post update kara skty han

  const posts = await response.json();
  console.log({response,posts})
  // console.log(body);
  getPosts(); // my agar chahta hon ky post create/Add (POST METHOD) hony ky baad or update(PUT METHOD) hony ky baad ham UI par show karanay chah rahy ho to in sab ky bad (GET METHOD) getPosts() ka function chala dein gy or jo bhe id ham ny pass ki hogi uss post my jaa kar yah usy update kar ky hamey UI par show kara dy ga GET METHOD KY through
  return posts
}
catch(error){
console.log("Catch block Error: ",error)
}
}
filteringPosts(1);
// deletePosts(2);
  

