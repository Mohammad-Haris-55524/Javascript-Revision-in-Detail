// ## Javascript and Classes
// JS my Classes hoti nahe the or technically dekha gy to abi bhe nae hoti han. 
// According to CHATGPT ..... 
// Yes, there are classes in JavaScript. This feature was introduced in ECMAScript 2015 (ES6), However it's important to
//  note that JavaScript is primarily a Prototype based Language and its classes are primarily "syntactic sugar" over 
// the existing prototype-based inheritance model. In other words it provides a more fimiliar syntax for developer comming
// from class based languages such as Java, C++, but under the hood it works somewhat differently.

// Bhai basically yah kehna chah raha hy ky JS class based language technically nae hay kiu ky yah aik Prototype based 
// Language na hi functional based language hay na hi object oriented based language hy iss my sab prototype based 
// chalta hy. JS my classes "syntactic sugar" han iss ka mtlb yah hay ky sirf hamey aik syntax provide kar diya gya hy
// taaky developer kuch miss out feel na kar pay mainly woh developers jo aik aisi language sy aa rahy hon jesy C++ yah 
// JAVA  sy jin par already object oreinted ka baggage hota hy ky iss my classes nahe han to my kesy object banao ga to 
// un ki problem ko overcome karnay ky liye iss feature ko ECMAScript 2015 (ES6) my introduced karwaya gya hy.

// ## OOP hay kia ? yah aik design patern hay code likhnay ka
// OOP bascially aik programming paradiam hay yani ap ky code likhnay ka structure kesa hota hy yani ap code likhnay ka 
// konsa style prefer karty ho. Or bhe bhot sy style hay coding likhnay ky jesy functional based prograaming hay,
// procedure programming hay yah bhe phr object oriented programming hay. Jo ham use karty howy aa rahy han 
// woh procedure programming way tha uss my objects arrays functions sab bana kar code kar rahy hoty han is ki wjah 
// sy 'spagheti code' ho raha tha to usy avoid karny ky liye OOP use karty han iss my ham apna sara code objects ki 
// form my hi likh rahy hoty han. Ham ny already functions parhay thy uss sy hamra code kafi resueable hojata hy han 
// lekin agar ham apnay code ko mazeed reuseable banana chahty han to OBJECT OREIENTED PROGRAMMING use karein gy
// 1) OOP is faster and executes faster.
// 2) It also provides clear structure for the programs
// OOP my jo hamey code lag raha hay ky yah bar bar use hoga usy ham CLASS my rakh lety han 

// ## Classes?
// Class is a template for objects and object is an instance of class
// Clases basically blue print hoti han for Example #01: Ice cubes jis my jamaty han woh CLASS hay or ice ki cubes jo uss 
// // sanchay my sy nikalti han woh objects han. Example # 02 :Class==> fruit and object==> mango,banana,apple  

// ## OBJECT KIA HOTA HY ?
// A collection of properties and method is called an OBJECT. Objects examples: Promises, Dates jo ham new keyward sy 
// banaty thy. Isi trtha methods bhe ham dehty aye han toLowerCase(), toUpperCase() includes etc.

// ## Why OOP?
// Wesy to koi such zarorat nae the sab kaam chal raha tha lekin Code bhot mess up ho raha hy programming my aik term 
// use hoti hy 'Spaghetti Code' ki yani ky code itna mess up hogya hy ky iss my koi bhe chunk reuse nae ho raha tha  

// // What is object literal ? Answer ==> {}
// Object literal wesy hay kuch nahe bss aik collection hota hy. Yah object bananay ky tarika hota jis ky kuch properties 
// hon gi or kuch methods jin ko ham objectName.username kar ky access karty han bilkul same arrays ki trha jesy uss my
// built in methods hoty han .lenght kar ky ham uss ki property to access karty han.
// const user = {
//     userName: "Mohammad Haris",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetail: function(){
//         // console.log("Get User Detail from Database");
//         // console.log(`My Name is ${userName}`); // Undefined aagy ga kiu ky ap ny isy context nahe bataya ky ap kis saman(username) ki baat kar rahy hon to issy batana parta hy ky bhai my apnay saman(this.userName) ki baat kar raha hon ky mujhy ap THIS mean isi object ka userName la kar do to phr aisi situtions my THIS keyward kaam my ata hy.
//         console.log(this) //because in a object method 'THIS' refers to current context 
//         console.log(`My Name is ${this.userName}`); //because in a object method 'THIS' refers to current context 
//     }
// }
// console.log(user.userName);
// // console.log(user["userName"])
// console.log(user.loginCount)
// console.log(user.signedIn);
// // console.log(user["signedIn"])
// console.log(user.getUserDetail());
// // console.log(user["getUserDetail"]);

// ## Current context ky liye ham THIS keyward use karty han. For Example my 2 array bana raha hon
const array1 = [1,2,3];
const array2 = [1,2,3,4,5]
console.log(array1,array2);
// Ab maan lo my array1 ko MAP karanay chah rahay han to brower ko kesy pta chaly ga ky my array1 par yah array2 kis par
// map karana chah raha hon kiu ky MAP method to aik hi hay na to yah jo difference ata hy ky my pata lagao ky my current 
// context ki baat kar raha hon context sy muraad current chezo ki baat kar raha hon jesy MONDAY monday hota hay lekin iss 
// week ka MONDAY alag hy or last week ka MONDAY alag hy to ap ko context batana pary ga ap ky kis MONDAY ki baat kar rahy han
// to aisi situtaion my ham THIS keyward kaam ata hay

// ******************************Constructor function************************************
// Acha ab maan lo mujhy aik or USER 2 ka object banana pary ga to yah to mujhy aik or USER 2 ka object banana paray ga or uss my alag value hon gi  
// lekin agar 1000 USER ho gy to my kia 1000 OBJECTS BANAO GA ? ANSWER :- Bilkul nae kiu ky har bar repeat karna 
// possible nae hy. Supose kar lo my aik structure bana leta hon DATA ka DATABASE my dalnay ky liye jis my username 
// logincount signedIn daal dn ga to har bari itna kaam karna pary ga uss kaam ko roknay ky liye hamary pas CONSTRUCTOR
// FUNCTION kaam my ata han

// ## Constructor function: basically hamey har bari aik naya instance deta hy yah har bari aik new copy deta hy ab hamari
// marzi ham usy kesy use karein or orignal value yah previous data affect nahe hota hy.
// const promiseOne = new Promise(); // Yah jo new keyward hay yah actually my constructor function hay. Yah hamey allow karta 
// hay ky aap aik hi object literal(object) sy multiple INSTANCES bana sako. Kuch aisay scenerio hoty han jahaan hamey
// pichla or latest dono context ko apnay pas rakhna hota hy tab ham yah Constructor function use karty han
// const data = new Date()
// Here is an practicaly implementation of using constructor function and without constructor function.
// Lets create a simple Function (This was an old legacy way to create objects by using function after es6 that introduced classes now we make functions by using classes)
function userInformation(username,isloggedIn,loginCount){
// Here we are iniailizaing there variable and providing them the context by using THIS keyward. Yahaan ham kisi or name sy bhe variable bana skty han lekin good coding practises my aisa hi karty han or uss ky sath this.username likh dety han taky context bhe define hogy ky isi function ki values han.
this.username= username;
this.isloggedIn= isloggedIn;
this.loginCount= loginCount;
// console.log(["Orignal values: ",username,isloggedIn,loginCount]);
// return ([username,isloggedIn,loginCount]);
// return this;
} 
// Here, I am passing values to the (function userInformation) and calling the function and then saving its result in 2 varibles (userone & usertwo).   
// const userOne = userInformation("Haris",true,10);
// const userTwo = userInformation("Adil", false, 20);
// As I noticed, That the values of user two have been overwritted on user one. As, I though that the function userInformation will create 2 
// multile users with 2 different values but it didn't create. Balky different users bananay ky bajaye iss ny last user ki values phelay waly
// user my copt kar di issi cheez ko avoid karnay ky liye ham constructor function use karty han NEW keyward wala check below for its solution.
// console.log("User 02: ",userTwo.isloggedIn, "User 01: ",userOne.isloggedIn);
// console.log("User 02: ",userTwo.username,"User 01: ", userOne.username);
// console.log("User 02: ",userTwo.loginCount, "User 01: ",userOne.loginCount)
// console.log(userOne, userTwo)

//Solution: How can we avoid the over writting behavior of values just simple using a constructor function just add new keyward will passing 
// values to a function. Yah har bar new instances(copy) bana day ga yani jab bhe new values pass hongi yah unhay bhe save kareya ga or previous 
// value ko wesy ka wesa hi rakhy ga over write nae kareye ga. 
// step # 01: Jab bhe new keyward likhty han aik empty object create hota hy jisy instance bolty han.
// step # 02: phr NEW keyward ky though contructor function call hota hy phr yah saray arguments iss my pack karta hy or hamey dy deta hy.
// step # 03:iss tep my tamam arguments jo this.username kar ky likh hoty han woh iss my inject ho jaty han.
// step # 04:or iss step my hammey function my values mil jati han
const userOne = new userInformation("Haris",true,10);
const userTwo = new userInformation("Adil", false, 20);
// Check these console soltuion for better understanding and compare them with above console then all concepts would get clear.
console.log("User 02: ",userTwo.isloggedIn, "User 01: ",userOne.isloggedIn);
console.log("User 02: ",userTwo.username,"User 01: ", userOne.username);
console.log("User 02: ",userTwo.loginCount, "User 01: ",userOne.loginCount)
console.log(userOne, userTwo)
// console.log(userOne.constructor); // constructor property reference hoti hy khud hi ky bary may yani userInformation ky hi bary may.






//               ***********************************Poor way to create multiple objects****************************************
// Acha maan lo mery pas multiple products han or un ki multiple properties(keys) han or isi trha multiple values bhe han. To my un ky objects
// banao ga aisa hi hay jesy my niehcey bana raha hon lekin .... issue kiya aye ga.
const product1 = {
    name: "washing Machine",
    price: 20000,
    // greet: function(){
    // }
}
const product2 = {
    title: "Juicer machine",
    price: 10000
}
const product3 = {
    name: "Honda Cd 0",
    price: 100000
}
const products = [product1, product2, product3];
(products.forEach(product=> console.log(product.name))); //geting undefined due to change ki key name of product2 isi trha ky errors aa skty han 
// jab ham mannualy bhot objects ki properties set kara rahy hoty han 

// Issue yah aa skta hy ky agar 1000 products han to my kia 1000 objects banao ga to har un 1000 objects ki properties bhe set karo ga or yah 
// bhe possible hay ky un ki properties set karty howy mujh sy koi mistake bhe ho skti hy un uss mistake ki surat my jab my un par for each
// loop karwao ga to jis property ky name sy my unhay mangwana chah raha hon to phr usy woh product ki property ki jagah undefined mil skta hy

// How to Avoid Such issues and problems ?  
// To aisi sitution sy bachynay ky liye my kiu na aik function bana dn jesy contructor function bhe bol skty han or uss my sirf aik bar object
// create kara dn ga taaky bar bar mujhy objects ki properties set na karani paren iss sy mera time bhe beachy ga or error jo aa raha tha for
// each karty time woh bhe nahe aye ga kiu ky ab my properties aik hi bar set karaa raha hon or function ko call kara kar new keyward ky through
// uss functions my values set kara raha hon ga check below code.

//       ************************************* Better(old )way to create multiple objects**************************************
// Better way to create multiple objects by wraping them in a constructor function and create its as many instances as i need by using New keyward.
// OLD WAYS TO CREATE FUNCTION SO THAT WE COULD MAKE MULTIPLE OBJECTS FOR USERS.
function Products(name,price){
        this.name= name;
        this.price= price;
}
// Here we are creating multiple instances of Product object. (This Whole contructor function topic is already explained on line 74.
const product01 = new Products("washing machine", 20000) // Passing value by parameter. New keyward already explained above 
const product02 = new Products("juicer machine", 10000)
console.log(product01,product02);
const productsArray = [product01,product02];
(productsArray.forEach(product => console.log("By using Contructor function: ",product.name))); 


// // ## Classes*********************Best and the mordern code way to create multiple objects by using CLASSES****************************
// Hamary pas poranay legacy code ky andar function ky thorugh ham object create karawty thy jisy contructor function bolty han. And new 
//Best way to create multiple objects by using classes This feature was introduced in ES6 before this feature we use above Contructor method.
// Classes in JS also acts same as functions. 
class Product{
constructor(name,price){
    this.name= name;
    this.price= price;
}
}
const product001 = new Products("washing machine", 20000) // Passing value by parameter. New keyward already explained above 
const product002 = new Products("juicer machine", 10000)
const products_Of_Array = [product01,product02];
(products_Of_Array.forEach(product => console.log("By using CLASSES: ",product.name))); 

//**********************************/ Another better example for understanding the Classes.***************************************************
class UserDetail{
    // Yah constructor function kab call hota hy? Yah tab call ho jata hy jb ham New keyward ky thorugh instance(object) create karty han tab hi yah 
    // call ho jata hy ======>  new UserDetail("Mohammad Haris",2132123) iss sy call hojata hy
    constructor(name, phoneNumber){ // Iss constructor my sirf wohi chezain ati han jo dynamicaaly set karani hoti han yah har user ki woh chezain jo har bari change ho rahi hongi.
        console.log("Constructor THIS: ", this); // Iss my THIS class ka tamam data la kar dy ga warna without This sirf wohi data mily ga jo cnstructor function ky andar initiazlize hoga
        // This refer to an empty object and we are refering it values to store in that empty object of a consturctor.
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
// Constuctor sy bahar STATIC DATA aye ga yani yahaan woh data rakhty han jo sab my same rahy ga or jo bhe properties yahaan add karein gy woh
// user my khud append(add) hojayen gi  
// These all are properties 
    gender = "Male";
    isAdult = true;
    // console.log("hello"); // Yahaan par console nahe kara skty yah console yahaan work nahe karta.
    // Here we are creating method in a Class

    // Method definition using function expression
    greet= function(){
        console.log(`Hello Iam ${this.name} and my Contact No is: ${this.phoneNumber}`)
        // return(this.name)
    }
    // Method definition using ES6 shorthand
    hello(){
        console.log(`my Contact No is: ${this.phoneNumber}`)
    }
}

// console.log(UserDetail.greet()) // Will show Error: Iss ka output tab tak nahe mily ga jab tak ap object/Class ka intances na create kar lo.
const user1 = new UserDetail("Mohammad Haris",2132123) 
const user2 = new UserDetail("Ali Haider",424234)
console.log(user1);
console.log(user2);

// console.log(user1.greet());
// console.log(user1.hello());
// console.log(user2.greet());
// console.log(user2.hello());


// methods mean ky jis object my woh banty han uss sy related hi sirf kaam karna in simple words woh functions jo ham object ky andar banaty han 
// woh methods kehlaty han kiu ky woh functions sirf wohi tasks perform karnay ky liye hoty han jo object ky andar declare karty han.

// ## Instances (new, this keyward) // TOPIC COVERED 


// ## Prototype / Proto
// What are the 4 pillars of OOP?