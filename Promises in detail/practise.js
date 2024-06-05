// Here I am using API FOR CALLING USERS
/*WHY WE NEED PROMISES ? 

/*My ny uper 3 API'S ki request kari hy jis my sy ny USERS, POSTS OR COMMENTS MANGWAYE HAN. LEKIN MAIN IMPORTANT BAAT YAH
HY KY IN 3 API'S KY REQUST KY ANDAR KOI BHE AISI CHEEZ NAE JIN KA AIK DOSRY PAR DEPENDENT HO MTLB ? yah ky POST ki request
my aisi koi bhe cheez nae hy ky jab tak sary user nae aajty to yah POST ki request nae kar skty. Abi to my sari ki sari
POSTS mangwa raha hon uper waly scenrio my. Suppose karlo mery pas aisa scenerio hota ky ky phely my USERS ki request karta
phr mery pas USER ki sab chezain ati or uss my USER ki ID hoti hy (UserId). Abi hamary pas POSTS my jo UserId arrahi uss ko
ham USER ki (UserId) ky through filter kara skty han ky yah POSTS kis USER ki han yah ap mujhy USER 1 / USER 2/ USER 3 ki
POSTS dekhao
Ap aisa supose kar lo mery pas aik aisi API hy jis ky end point my sirf ik single USER ki information mil rahi hogi
for E.G (fetch"https://jsonplaceholder.typicode.com/users/1") iss my mujhy USER ki ID mil rahi hogi my uss ID ko POST ky 
end point dalna hy kar my use kar ky sirf usi USER ID 1 waly ki posts mangwa lo ga to aisy scenrio ky andar ham POSTS ki
request uss time tak nae kar skty han jab tak hamary pas USER ki information na aagy server sy. In short getPost is
dependent on getUser ki (id) to access the getPosts according to USER id 1 or 2 or 3 accroding to scnerio. 
// Also check notes for further explanation

// *************************************IMPORTANT EXAMPLE **********************************************************
// *************************NOTE: Here we are fetching user data according to its USERID*****************************
// // Here i am fetching only 1 user at a time
const getUser = async ()=>{
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const user = await response.json();
    console.log({response,user})
    // getPosts(user);// Here i am passing the whole user to getPosts() method to get the posts of only those user which iss passed in an API /1 /2 etc (poor way)
// NOTE: getPosts(user); // avoid passing the whole user while we can pass only id to fetch the posts of only of those user passed in an API /1 /2 etc
    getPosts(user.id); // here i am passing id from getUser() method to the getPost() method to fetch the posts of only user 1 (good way)
    return user
    }
    catch(error){
    console.log("User API ERROR:", error)
    }
    }
    getUser();

    const getPosts = async (id)=>{ // here by getting id now i can see posts of only user 1 or 2 or 3 according to scenerio 
        try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        // console.log("I am from posts: ",id); 
        const posts = await response.json();
        console.log("POSTS",{response,posts})
        getComments(id)
        return posts
        }
        catch(error){
        console.log("Posts API ERROR:", error)
        }
        }
        getPosts();

    const getComments = async (id)=>{
        try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        const comments = await response.json();
        // console.log("I am from COMMENTS: ",id);
        console.log("COMMENTS",{response,comments})
        return comments
        }
        catch(error){
        console.log("Comments API ERROR:", error)
        }
        }
        getComments();

*/

//*********************************/ Here we are Fetching multiple users at a time************************************** 
//     const getUsers = async ()=>{
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log({response,users})
//     return users
//     }
//     catch(error){
//     console.log("User API ERROR:", error)
//     }
//     }
//     getUsers();

// // Here I am using API FOR CALLING POSTS
// const getPosts = async ()=>{  
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();
//     console.log("POSTS",{response,posts})
//     return posts
//     }
//     catch(error){
//     console.log("Posts API ERROR:", error)
//     }
//     }
//     getPosts();
    
// // Here I am using API FOR CALLING COMMENTS
    // const getComments = async ()=>{
    //     try{
    //     const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    //     const comments = await response.json();
    //     console.log({response,comments})
    //     console.log("hello")
    //     return comments
    //     }
    //     catch(error){
    //     console.log("Comments API ERROR:", error)
    //     }
    //     }
    //     getComments();

// ************************************** HOW TO CREATE YOUR OWN CUSTOMS PROMISES**************************************** 
// **********************************************CUSTOM PROMISES*********************************************************
/*Ziada tar ham built in promises hi consume/use karty han (fetch API AIK BUILT IN PROMISE HY) lekin agar ham ny custom 
promise bananya hoto ham NEW KEYWORD ky through aik custom promise bana skty han jis my ham 2 parameter pass karty han 
resolve or reject yani agar API sy response sucessfully aagy ga to resolve function execute ho gy ga or promise FULLFILL hojanay ki surat my
uss ka output callback ky thorugh jo ham ny .then(xyz..) ky andar pass kiya hoga .then block my show hogy ga or agar API request fail hogy gi to PROMISE REJECT 
hogy ga or REJECT function execute hogy ga phr .CATCH block chalgy ga  uss ky andar .catch(error) ky andar pass kiye gy 
gy ERROR ky callback my uss ka ouptut ka error show hogy ga yaad rahy ham .then .catch or try catch isi liye hi use kar 
rahy hoty han taky error handeling kar saken*/

//***************************************NOTE(PROMISES VS FETCH API)*************************************************/ 
// Promises are often used for parallel execution of asynchronous tasks. One of the advantages of promises is that they
//  allow you to handle multiple asynchronous operations concurrently,
/*NOTE: Ham promise ky methods(Promise.all vs Promise.allSettled vs Promise.race vs Promise.any) tab use karein gy jab 
hamey pta hoga ky 1 API ka response dosri API ky response par dependent nae hy iss ka benefit kia hoga kiu ky yahi kaam
Async function bhe kar skta hy lekin JAB bhe async function ki code execution hoti hy jesy uper wali example di howi hy iss my ham FETCH API ky through data 
mangwa rahay han 1st function agar 2 second 2nd function agar 3 second or 3rd function agar 4 second lay raha hy to mery
pas API's sy repsonse 2+3+4 = 9 second my aye ga yani 1 API jab tak call nae ho jati or uss ka response  nae aa jata to agli API initiate nae ho gi iss my
basically ho kia raha hy yaahaan(FETCH API) my series execution(BASICALLY BY DEFAULT EXECUTION SERIES) hoti hy tasks
ki mtlb jab tak 1 task complete nae hoga to agla task start nae hoga isi problem ko overcome karny ky liye ham PROMISES
METHODS (parallel execution) use karein gy or tamam ki tamam API's aik hi time par initiate ho jayen gi or uss ka RESPONSE
BHE JALDI AA GY GA lekin uss ky liye yaah baat bhot zarori hy ky koi bhe API dosri API par dependent nae honi chaihyee 
tab hi ham PROMISES KY METHOD (Promise.all vs Promise.allSettled vs Promise.race vs Promise.any) use kar saken gy */

// NOTE : *****IN THIS EXAMPLE WE HAVE BREAKDOWN THE PROMISE 01 CODE TO UNDERSTAND THE PROMISE EXAMPLE MORE EASILY*******
// const promise1 = new Promise  // A new promise, promise1, is created using the Promise constructor.
// The executor function is the anonymous function passed as an argument to the Promise constructor:
// (resolve, reject) => { // resolve and reject: These are functions provided by the JavaScript runtime to the executor function They are used to control the state of the promise.
//   setTimeout(() => {
//     resolve("P1 resolved");
//   }, 3000);
// }
// EXAMPLES FOR ABOVE BREAKDOWN OF PROMISES CODE ..... 
// PROMISE 01 (ORDER OF PROMISES DOES NOT MATTERS TIME MATTERS)
const promise1 = new Promise((resolve,reject) =>{ // A CUSTOM PROMISE WITH NEW KEYWARD 
setTimeout(()=>{
resolve("P1 resolved"); // resolve is a function
},3000)
// setTimeout(()=>{
// reject("P1 rejected"); // reject is a function
// },3000)
})
// promise1.then((data)=>{
//     console.log({data})
// }).catch((error)=>{
//     console.log("Promise 01 error: ",error)
// })
// console.log(promise1);

// // PROMISE 02
const promise2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
    resolve("P2 resolved");
},3000)
// setTimeout(()=>{
//     reject("P2 rejected");
// },4000)
})
// promise2.then((data)=>{
// console.log({data})
// }).catch((error)=>{
//     console.log("Promise 02 error: ",error)
// })
// console.log(promise2);

// PROMISE 03
const promise3 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//     resolve("P3 resolved");
// },5000)
setTimeout(()=>{
        reject("P3 Error");
    },7000)
})
// promise3.then((data)=>{
//     console.log({data})
// }).catch((error)=>{
// console.log("Promise 03 error: ",error)
// })
// console.log(promise3);



// ************************(Promise.all vs Promise.allSettled vs Promise.race vs Promise.any)***************************
// WHEN TO USE THESE PROMISES METHODS ?  (For parallel execution we use these methods)
/*CONCLUSION: UPER 3 PROMISES MY AGAR MY AIK BAAAT NOTE KAREIN TO WOH YAH HY KY WOH PROMISE SAB SY PHELY RESOLVE HOGA JIS
KA RESPONSE SAB SY JALDI AYE GA OR PHR AGLA PROMISE TAB TAK NAE CHALY GA JAB TAK PEHLY WALY PROMISE KA RESPOSE NAE AA JATA
TO AGAR (P1 4 SEC) (P2 2 SEC) OR (P3 7 SEC) LAY RAHA HY TO ISS SCENEIO MY SAB SY PHELAY WOH PROMISE CHALY GA JO LESS TIME
TAKING HY OR SAB SY IMPORTANT BAAT YAH HY KY SAB SY PHELY (P2) CHALY GA KIU KY WOH LESS TIME TAKING HY OR AGLA RESPONSE 
TAB TAK NAE AYE GA YANI P1 TAB TAK (INITIATE) NAE HO GA JAB TAK P2 RESOLVE/REJECT NAE HOJATA ISI SO ON ... AGAR HAM CHAHTY
HAN KY TAMAM PROMISE AIK HI TIME PAR INATIATE HO JAYEN OR UNHY AIK DOSRY KA WAIT NAE KARNA PAREY TO HAM PROMISES KY METHODS
USE KAREIN GY (Promise.all vs Promise.allSettled vs Promise.race vs Promise.any)
*/

// *******************************************PROMISES.ALL**************************************************
/*PROMISES.ALL ham sy array of promises lata hy or wait karta hy jab tak tamam ky tamam PROMISES settle (Yani jab
tak woh success yah fail (fullfilled yah reject) nae hoty wait karey ga sab ky liye) nae ho jaty jab sary promises settle
ho jaty han to un ka result array my mil jata hy or agar koi aik bhe promise fail hojta hy to sirf uss reject hony waly
promise ka hi result milta hy beshak baki promise fullfilled hi kiu na ho rahy han more important baat yah ky agar promise
1 fullfilled hota hy promise 2 rejected hota hy promise 3 rejected/fullfilled hota hy to yah sirf usi promise ko hi show 
kareye ga jo sab sy pehlay reject howa ho beshak uss ky nicehy baki sary fullfilled yah reject hi kiu naa horahy hon yah 
un ko show nae karey ga  
*/
// (ORDER OF PROMISES MATTERS) Drawback: We cannot track all the API responses if any error occurs.
Promise.all([promise2,promise1,promise3]).then((data)=>{ // here we are doing parallel execution(yani aik hi time par tamam promise ko initiate kar rahy han or phr wait karein gy jab tak sary ky sary promise settle nae hojaty yani jab tak sary ky sary promise yah to fullfilled yah rejected nae hojaty tab tak output show nae hoga)
console.log("i am all",{data});
}).catch((error)=>{
console.log("i am all",{error});
})

// **********************/*PROMISES.ALLSETTLE****************************(Returns an array of objects) 
// (ORDER OF PROMISES MATTERS) ADVANTAGE: We can track all API responses if any error occurs it will show all the
// responses either they are fullfilled or rejected 
Promise.allSettled([promise2,promise1,promise3]).then((data)=>{ // here we are doing parallel execution(yani aik hi time par tamam promise ko initiate kar rahy han or phr wait karein gy jab tak sary ky sary promise settle nae hojaty yani jab tak sary ky sary promise yah to fullfilled yah rejected nae hojaty tab tak output show nae hoga)
console.log(data);
})
.catch((error)=>{
console.log({error});
})

// PROMISE.ALL VS PROMISE.ALLSETTLED
/*SIMILARITIES : (1)ORDER MATERS IN BOTH 
                (2) BOTH TAKES ARRAYS OF PROMISES
DIFFERNECE :(2) PROMISE.ALL(RETURNS ARRAY) || PROMISE.ALLSETTLE(RETURNS ARAAY OF OBJECTS)
DIFFERNECE : 
(2) PROMISE.ALL(CANNOT TRACK THE ERROR OCCURED) || PROMISE.ALLSETTLE(CAN TRACK THE ERROR OCCURED)
(3) PROMISE.ALL: IF ANY REJECTION OCCURS ONLY THE REJECTED PROMISE WILL BE DISPLAYED REAMINGING RESULTS WOULD NOT BE 
DISPLAYED EITHER THEY ARE FULLFILLED OR REJECTED || PROMISE.ALLSETTLED: EITHER A PROMISE IS REJECTED OR FULLFILLED IT WILL
BE DISPLAYED AS AN ARRAY OF OBJECT  IN THIS WAY WE CAN TRACK OUR PROMISES EITHER THEY ARE FULLFILLED OR REJECTED*/


// ***************PROMISES.RACE************* returns single value either be a success value or an error same as PROMISE.ALL
// Yah basically race lagaye ga mtlb jo bhe promise sab sy pehaly settle hoga yani jo bhe promise kam time my yah to 
// resolve yah phr reject ho raha hoga yah uss promise ka result show kara dy ga fullfill ho ga to value dy day ga reject
// hoga to error show kara dy ga.
// Promise.race([promise3,promise1,promise2]).then((data)=>{ 
// console.log("RACE: ",data);
// })
// .catch((error)=>{
// console.log("RACE ERROR: ",{error});
// })

// Dissimilarities of PROMISES.RACE vs PROMISE.ALL AND PROMISE.SETTELED
// 1) Order does not matter ===> Promise.race([promise2,promise1,promise3])
// 2) Time of completeion matters means that if i have requested 3 API at a time and the response that comes 1st will be
//  showed as a result it can be either resolved(fullfilled) or rejected it does not matters.
// 3) Always returns a single promise.

// ***************PROMISES.ANY************* ONLY RETURNS A RESOLVE(FULLFILLED) in lesser time
/*Maan lo mery pas 1,2,3 promises han or woh or sary resolve ho rahy han to yah sirf usi promise ka result/value show
karaye ga jo kam time ho ho raha hoga lekin agar promise 1,2 reject ho rahay han or promise 3 resolve ho raha ho or time 
bhe ziada lag raha ho to yah promise 3 ko hi show karaye ga kiu yah sirf resolve(fullfilled) value hi show karata hy..
  */
Promise.any([promise3,promise1,promise2]).then((data)=>{ 
    console.log("ANY: ",data);
})
.catch((error)=>{
console.log("ANY ERROR: ",{error});
})

// Dissimilarities of PROMISES.ANY vs PROMISE.RACE, PROMISE.ALL AND PROMISE.SETTELED
// 1) Always return a single resolved(fullfilled) value.
// 2) Only returns resolved(fullfilled) value.
/*3) Time matters and not matters depends on sitution if all promises are resolved the result will show the promise that
 is fullfilled in lesser time and if I have 3 promises supose 2 of them are rejected and the third promise is taking 
more time to be resolve so then it will show only that promise that has been resolved in more time . 
e.g # 01 : p1 = 2sec, p2 = 3 sec, p3 = 1 sec (ALL has been resolved): It will display the only promise that consumes less time
e.g # 02: p1 = 2sec, p2 = 3 sec, p3 = 5 sec (p1,p2 has been rejected): In this scenerio it will display the only promise
that has been resolved wether it is taking more time it doesn't matter in such scenerio.
e.g # 03: p1 = 2sec, p2 = 2 sec, p3 = 2 sec (ALL has been resolved in same time): Displays Promise 01 (p1) because it 
comes first 
e.g # 04: p1 = 3sec, p2 = 2 sec, p3 = 3 sec (ALL has been rejected): Displays an ERROR (AggregateError: All promises were
rejected) 


SIMILARITES B/W  PROMISES.ANY vs PROMISE.RACE
1) Both returns single value
2) Both prefers to show the promise that consumes less time to settle (IMPORTANT: But their result behavaior is different) 
*/