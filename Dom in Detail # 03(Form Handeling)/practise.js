// Note: Form values cannot be access using onclick approach and by simple <form> method.
// CONCLUSIONS
// Note: Always use either a simple <button> with type submit (the default type of button in the form is already 
// submit)  for accessing form values
// <!-- <button> Submit </button>    -->
// <!-- <button type="submit">Submit</button>    -->
// <!-- <input type="submit" value="submit">  --> 
// with type <form onsubmit = formSubmission(event)> approach 
// TOPIC # 02 BASIC (Nullish cooleching)
// Nullish cooleching is also present in this lecture to control the null behavior of a form if a user does not fullfills
// the validation on checkboxes, radio buttons, and option. kiu ky in 3 chezo par direct HTML sy validations nae laga skty.

// *********************************APPROACH # 01 OF HANDELING FORM USING FUNCTION*************************************** 
formSubmission=(event)=>{
console.log(event); 
event.preventDefault();

const name = document.getElementById('name1');
const email = document.getElementById('email');
const password = document.getElementById('password');
const date = document.getElementById('registration');
const country = document.getElementById('country');
const nameValue = name.value
const emailValue = email.value
const passwordValue = password.value
const dateValue = date.value
const countryValue = country.value
// console.log("name value:", nameValue);
// console.log("email value:", emailValue);
// console.log("password value:", passwordValue);
// console.log("date value:", dateValue);
// console.log("Country value:", countryValue);

}
// Abi jab ham form ko submit karty han to screen refresh ho jati hy or console par output show nae hota aisa kiu hota hy?
// kiu ky hamary form ka defualt method GET ka hota hy woh sara data jo console par show karana hota hy ham ny jo input
// fields my fill kiya hota hy woh sab ka sab data url my show hota hy kiu ky GET ka kaam retrive karana hota hy data ko
// to jesy website ka data bhe url sy ata hy hamary pas GET request jab ham karty han to yahaan bhe kuch aisa hi hy ky 
// jab submit karen gy form ka data to page refresh hoti hi tamam feilds ka data URL my show ho raha hoga.

let contactInformations = []
// *******************************APPROACH # 02 OF HANDELING FORM ADD EVENT LISTNERS************************************* 
document.getElementById('contact-form').addEventListener("submit", function(event){
event.preventDefault();
// console.log(event)
// ***************************LONG METHOD*******************************
//Yahaan ham name.value or baki fields ki one by one value nikal rahay han lekin iss ka short cut method bhe hy lekin woh
// short cut method ham sirf tab hi use karty han jab for example: hamey countryValue agy kahen use nae karni sirf show
// karani hy to tab hamey usy alag varible my save karany ki koi zarorat nae hy. 
// const name = document.getElementById('name');
// const nameValue = name.value
// const email = document.getElementById('email');
// const emailValue = email.value
// const password = document.getElementById('password');
// const passwordValue = password.value
// const date = document.getElementById('registration');
// const dateValue = date.value
// const country = document.getElementById('country');
// const countryValue = country.value

// if (countryValue === "Please select any one country") 
// {
//     alert("Please select a valid country");
//     return false; // Prevent form submission
// }
// // Accessing gender value by radio button:
// const gender = document.querySelector("input[name='gender']:checked");
// const genderValue = gender.value;

// console.log("name value:", nameValue);
// console.log("email value:", emailValue);
// console.log("password value:", passwordValue);
// console.log("date value:", dateValue);
// console.log("country value:", countryValue);
// console.log("Gender:", genderValue)

// *************************************Same above code in short syntax************************************************

// Aik example lety han may value access kar raha hon apni HTML sy lekin agar NULL value aa jati hy jo ky undefined show
// honi chaihyee console par mujhy lekin jab ham NULL value ko access karty han to hamaray pas error aa jata hy to aisi
//  condition my error sy bachnay ky liye ham nullishing collecsing ka concept use karein gy.
// NULL value kesy aa skti han ? 1) Maan lo jo apni HTML sy value pass kar rahy han ID ya CLASS yah TAG ky through uss my
// ham sy koi ghalti hojati han yani maan lo ghalat ID ky thorugh access karna kar rahy han to aisi surat my NULL value
// aye gi hamaray pas jab ham usy extract karein gy document.getElementById() ky method sy.

// 2) // Maan lo user ata hy or form fill karta hy or apna gender dalna bhol jata hy to error aa agy ga to ham iss trha ky errors
// ko control karny ky liye taaky user ko validate karein ky jab tak tm gender select nae kar lety form submit nae hoga
// kiu ky radio buttons or checkboxes par ham HTML ky through validations nae lagwa skty aisi surat my ham JS ky through
// validations control karein gy to aisi situtions my null error any ko roknay ky liye nullish ka concept use karein gy.

// nullish method # 01
// const name = document.getElementById('name3') && document.getElementById('name3').value; // null or undefined both falsy aik hi baat hy bas iss trha karny sy code block nae ho raha agar kiu ky yahaan ham gahalt ID sy access kar rahy han yah HTML sy value access my ghalati kar rahy hon to iss trha error ko control kar skty han 

// nullish method # 02
// const name = document.getElementById('name3') 
// const nameValue = name && name.value; // null or undefined both falsy aik hi baat hy bas iss trha karny sy code block nae ho raha agar kiu ky yahaan ham gahalt ID sy access kar rahy han yah HTML sy value access my ghalati kar rahy hon to iss trha error ko control kar skty han 
// console.log(nameValue)

// nullish method # 03 (Short and most preferred method)
const name = document.getElementById('name1')?.value; // is ? ka ki mtlb hy ? Yahaan par yah check karey ga .value sy phely ky ky wahaan par isy truthy value mil rahi hay agar to hi yah .value kar kay uss ki value nikalay ga warna value nae nikalay ga or phelay jo NULL wala error(Cannot read properties of null) walay error ki jagah code ko block nae kary ga balky console par hamey undefined show kara dy ga
const email = document.getElementById('email').value
const password = document.getElementById('password').value;
const date = document.getElementById('registration').value;
const country = document.getElementById('country')?.value;
// const gender = document.querySelector("input[name='gender']:checked")?.value // for method # 01 and 02(check gender method 01)
const gender = document.querySelector("input[name='gender']:checked");// for method # 02 (check gender method 03)
const intrests = document.querySelectorAll("input[name='intrests']:checked");
const gettingGenderConatiner = document.getElementById('gender-section');
const gettingIntrestSection = document.getElementById('interest-section');
const gettingCountrySection = document.getElementById('country-section');


// Yahaan par ham error mesaages ki classes ka message jo bar bar submit ky click honay par aa raha tha usy repeat hony
// sy roknay ky liye ham uss message ko class day kar tamam messages ko acces karein gy uss ki aik node list  ka array 
// banay ga or woh node list ka array hamey built in methods provide karta hay iteration ky liye phr ham un tamam class ko
//  iterate karwa kar by using for each loop ham unhay remove kar dein gy tamam classes ky msgs ko phr ab woh bar bar 
// repeat nae hongy jab bhe ham submit ky button par click karein gy.  
const gettingClassNameToRemoveErr = document.querySelectorAll('.error-messages');
console.log(gettingClassNameToRemoveErr);
gettingClassNameToRemoveErr.forEach((error)=>{
    // console.log(error);
    error.remove();
})
// what is code refactoring ?
// Refactoring is a technique to improve the quality of existing code. It works by applying a series of small steps, each of which changes the internal structure of the code, while maintaining its external behavior.
// Jahaan bhe ap ko lagay ap ka code repeat ho raha hy make a function.
// Creating a dynamic function for all errors messages. Else block ky andar validation false honay par error aye ga bar 
// bar aik error message ko show karanay ky liye har else my jaa kar bar bar code karnay sy acha hy aik dynamix function 
// bana kar uss ky through sab ko value pass karein gy ji ki wjaah sy code repeat nae hoga. 
const dynamicFunctionForErrorMessages= (sectionId,message) => {
    const section = document.getElementById(sectionId);
    const error = `<p class="error-messages" style="color: red;"font-weight: bold">${message}</p>`;
    section.innerHTML = `${section.innerHTML} ${error}`;

}
// **************************Validation for gender*************************************
// Maan lo user ata hy or form fill karta hy or apna gender dalna bhol jata hy to error aa agy ga to ham iss trha ky errors
// ko control karny ky liye taaky user ko validate karein ky jab tak tm gender select nae kar lety form submit nae hoga
// kiu ky radio buttons or checkboxes par ham HTML ky through validations nae lagwa skty aisi surat my ham JS ky through
// validations control karein gy
// Method # 01 and 02 are similar they work on if there is a falsy value.
// Method # 01 user will not be able to submit the form untill he/she completes the validation and requirement.
// if(typeof gender === "undefined")
// {   alert("Select Gender");
//     return false;
// }
// Method # 02
// if(!gender){
//     // alert("Please select the gender");
//     const gettingGenderConatiner = document.getElementById('gender-section');
//     let errorMessage = `<p class="error-messages" style="color: red;"font-weight: bold">Please Select a Gender!</p>`;
//     gettingGenderConatiner.innerHTML = `${gettingGenderConatiner.innerHTML} ${errorMessage}`;

// }

// Method # 03 user will not be able to submit the form untill he/she completes the validation and requirement.
if(gender){
const genderValue = gender.value;
// const sucessMessage = document.createElement('h4'); 
// let gettingGenderConatiner = document.getElementById('gender-section');
// // sucessMessage.innerHTML= `<h4> Gender selected sucessfully </h4>`;
// // sucessMessage.textContent = "Gender selected sucessfully";
// gettingGenderConatiner.appendChild(sucessMessage);

}
else{
    // console.log(gender)
    // Method # 01
    // const gettingGenderConatiner = document.getElementById('gender-section');
    // let errorMessage = `<p class="error-messages" style="color: red;"font-weight: bold">Please Select a Gender!</p>`;
    // gettingGenderConatiner.innerHTML = `${gettingGenderConatiner.innerHTML} ${errorMessage}`;
    // console.log(gettingGenderConatiner.innerHTML);

    //  // Method # 02
    // let gettingGenderConatiner = document.getElementById('gender-section');
    // const sucessMessage = document.createElement('h4');
    // sucessMessage.innerHTML= `<p class="error-messages"> Please Select a gender </p>`;
    // // sucessMessage.textContent = "Please Select a gender";
    // gettingGenderConatiner.appendChild(sucessMessage);
    dynamicFunctionForErrorMessages("gender-section","Please Select a gender");

    // return false;
}

// Short cut method of  if and else
// gender ? gender.value :  alert("Please select the gender");

// ************************Validation for Intrest************************************
let intrestArrayValue = [];
if(intrests.length > 0){
    const intrestValues = Array.from(intrests).map(intrest=>{
    // console.log(intrest.value); // will show the values of selected intrests
    // console.log(intrest); // will show the HTML of selected intrests
    // console.log(intrestValues); //cannot acces value of intrestValues before initialization kiu ky abi iteration chal rahi hay map ki agar isi value ko access karana hy to map ki body ky bahar acces karna parey ga
    return intrest.value; // Return karanay sy intrest.value ki jo bhe selected fields hon gi woh jaa kar const intrestValue
// my aik aik kar ky save hoti rahey gi har iteration par or end my aik array ban kar mil gy ga kiu ky ham map use kar 
// rahay han to map (map() returns a new array with the results of calling a provided function on every element in the 
// calling array. It does not change the original array.)muliple value ko khud array bana kar show karata hay.Yahi kaam
// ForEach loop sy bhe hoskta tha magar woh multiples values ka array bana kar return nae karta uss ky liye mujhy aik 
// empty array bana kar intrest.value ko uss my push karana parta nichy wali line my dekha jaa skta hay
// intrestArrayValue.push(intrestValues); // for forEach method
});
console.log(intrestValues);
intrestArrayValue.push(intrestValues); // Here i am pushing values in an array so that i could access it and save it in local storage.
    // console.log("Selected Intrest values: " + intrestValues.join(', '));
}
else{
    // alert("Enter your Intrests");
    // const gettingIntrestSection = document.getElementById('interest-section');
    // let errorMessage = `<p class="error-messages" style="color: red;"font-weight: light">Please Select any 1 Interest</p>`;
    // gettingIntrestSection.innerHTML = `${gettingIntrestSection.innerHTML} ${errorMessage}`;
    dynamicFunctionForErrorMessages("interest-section","Please Select any 1 Interest");
    // return false;
}
// console.log("checking scope: ",intrestArrayValue,intrests);


// ************************Validation for Country************************************
// Validation for country agar user koi country select nae karta or submit karta hy form to form restrict kary ga user ko
// ky jab tak ap country select nae karty my submit nae ho skta
if(country === "Please select any one country"){
    // alert("Select any country");
//     const gettingCountrySection = document.getElementById('country-section');
//     let errorMessage = `<p class="error-messages" style="color: red;"font-weight: bold">Please Select any Country</p>`;
//    gettingCountrySection.innerHTML = `${gettingCountrySection.innerHTML} ${errorMessage}`;
   dynamicFunctionForErrorMessages('country-section','Please Select any Country');
    return false;
}
// Short cut method by creating using object.
// console.log({name,email,password,date,country,gender,intrests})
// console.log({name});

// localStorage.setItem("contactInformation:", con)
// console.log({gender,intrests,country})

// Here we are setting values in local Storage
if(gender && intrests.length > 0 && country) {
// step 1) Yahaan ham aik object bana kar uss my tamam information ko uss object my save karein gy
let contactInformation = {name: name, email: email, password: password, date: date,
gender:gender.value, intrests : intrestArrayValue, country: country};
// console.log("Contact Information: ",contactInformation);
// Step:02) Hamaray pas aik array hay let contactInformations = [] bhot uper ki lines jo bhe form ja data object ki shakal
// my hamaray pas aye ga ham usy array my push kara dein gy.
contactInformations.push(contactInformation);
// console.log("Users Information: ", contactInformations, JSON.stringify(contactInformations));
// Step:03) Ab hamary pas jo arrayof objects hoga ham usy local storage my JSON.stringify() kar ky JSON format my convert
// kar ky save karein gy.
localStorage.setItem("keyName", JSON.stringify(contactInformations),);
getingValueFromLocalStorageAndShowOnUI();
}
});

// Step: 04) Yahaan ham aik function bana rahay han iss my ham local storage sy data get kar ky UI par show karein gy.
const getingValueFromLocalStorageAndShowOnUI = ()=>{
// Here we are getting data form local storage by passing key name and array of object (contactInformations).
const getingValueFromLocalStorage = localStorage.getItem("keyName", contactInformations);
// console.log("Now Showing the value in console after getting it from local storage in JSON FORMAT: ",getingValueFromLocalStorage);
// console.log("Now Showing the value in console after getting it from local storage converted in JS OBJECT: ",
// JSON.parse(getingValueFromLocalStorage));
// Step: 05)
// Here i am storing the object into a variable after parsing it into an JS object because i am getting it from local
// Storage after that i will save it into a varible so that i could use array methods on it so that i could display on UI. 
const realJsObjectAfterGettingItFromLocalStorage = JSON.parse(getingValueFromLocalStorage);
// Step # 06: Yahaan par my woh parent elemet get kar raha hon jis ky andar my data append karana chahta hon
const showDataOnUi = document.querySelector('.form-data');
// Step # 07: Yahaan par may JS OBJECT my say map kara kar value nikal raha hon or unhay dynamically HTML my set kara rahayhan
// Important NOTE: Aik issue yah aa skta hay ky agar my apna local storage ka data delete kar do yah phr mera local storage
// empty ho to jab ham uss par map kawain gy to error aye ga kiu ky map sirf arrays objects par kaam karta hay falsy, null
// undefined par kaam nae karey ga jis ki surat my hamary pas error aye ga. TO ab ham 2-3 methods aisy dekhain gy ky kis 
// trha iss type ky errors sy deal kiya jaa skta hay.

// How to handle error while map iteration: Error # 01
// My yah to check kara lo ky jo localstorage sy my jo data parse kar kar ky aik varible my save kara kar uss par jab MAP
// kara raha hon to woh kahen null to nae hay kiu ky null falsy value hay or uss par map kaam nae karta
// if(Array.isArray(realJsObjectAfterGettingItFromLocalStorage)){

// How to handle error while map iteration: Error # 02 (Professional logic)
// Yahaan my check kar raha hon ky agar localstorage sy anay wala data null hota hy to ham uss my empty array set kara
// dein gy kiu ky MAP array par work karta hay.
const contactUi = (realJsObjectAfterGettingItFromLocalStorage || []).map(contact=>{

// How to handle error while map iteration: Error # 03
// const contactUi = Array.isArray(realJsObjectAfterGettingItFromLocalStorage) && realJsObjectAfterGettingItFromLocalStorage.map(contact=>{
    // console.log("Name: ",contact.name);
    // console.log(contact.intrests)
    return `
    <h5>Name: ${contact.name} </h5>
    <h5>Email: ${contact.email}</h5>
    <h5>Password: ${contact.password}</h5>
    <h5>Regustration: ${contact.date} </h5>
    <h5>Gender: ${contact.gender}</h5>
    <h5>Intrests: ${contact.intrests} </h5>
    <h5>Country: ${contact.country}</h5>`
});
console.log(contactUi);
// For solving issue for error 03 use this code kiu ky null yah falsy value par JOIN kaam nae kary ga kiu kyh join array ka method hay 
// if(contactUi){
// showDataOnUi.innerHTML = contactUi.join(' ') 
// }
// Step # 08: Yah parent parent div ky andar banain gy or phr jo data hamary pas map ky thorough aye ga usy iss ky andar
// inner HTML ky through set karwain gy or phr iss div (createDivToAppendDataIntoIt) ko apppend kara dein gy parent div
// ky andar jisy ko ham ny step 06 my target kiya tha.
if(contactUi.length > 0){ //Error # 02 use this code Iss Error ko handle karty yahaan aik masla yah aa skta tha ky jab empty array par map chalta to nichey wala code bhe execute hota or phr ham parent elment ky andar value to aa nae rahe kiu ky empty array par map chal raha hy to phr yah empty array ko UI my show kara deta to usy restrict karr raahy han ky agar contactUi ki lenght 0 sy ziada hay to hi ap parent element my child elment ko append karao 
const createDivToAppendDataIntoIt = document.createElement('div')
// Yahan my aik custom class bana raha hon taky mujhy bar bar css properties JS my na likhni parein my class name set kar
// do set attribute ky through or phr iss ku css yah class use kar ky css my likho na ky JS my.
createDivToAppendDataIntoIt.setAttribute('class', 'cutom-appended-class');
// createDivToAppendDataIntoIt.style.border = "2px solid black"
createDivToAppendDataIntoIt.innerHTML = contactUi;
showDataOnUi.appendChild(createDivToAppendDataIntoIt);
}
}
// }

// function onload(){
window.onload = ()=>{
getingValueFromLocalStorageAndShowOnUI();
}
// *****************(When onLoad function can be used) *********************************This is an event present in DOM.
// on load ham tab use karty han jab ham chah rahy hon ky yah code sirf tab execute ho jab hamara page load ho or sari
// ki sari chezain load ho jayen yani UI load hogy then ham yah onLoad() ka method use karein gy
// Sitution # 01 
// onload event karta kia hy yah hamey yah assurity deta hy ky jis element ko ham access karna chah rahy han abi walay 
// code my ham ny JS ki file ko bilkul bottom my link karaya hy to yahaan par jitni bhe HTML hy woh parse ho chuke hogi 
// iss my kuch kuch chezain jesy images yah phr koi external link libaraies ko jo ham ny lagayen han woh chezain shaid 
// hamray pas foran sy load na howi hon yah execute na howi hon but hamara HTML parse ho chuka hoga to aisi situtation 
// my hamey html to data jo ham JS my mangwa rahay han woh to hamey mil gy ga lekin issue images my aye ga kiu ky images
//  load honay my thora time leti han may be ap ka internet slow ho yah koi or issue ho or ap my image ko JS my get kiya 
// howa ho document.getElementBy... ky method ky through to aisi condition my hamey null milay ga  

// Sitution # 02:
// Maan lo ap ny JS ki file bottom my link karanay ky bajaye head ky andar link kara di hay to aisi sitution my hamri
//  HTML parse howi nae hy lekin JS ka code phelay parse ho gy ga or on gy aisi sitution my hamari WINDOW KY DOM my abi 
//  elemnets aye hi nae hamary pas or JS dhonday gi un elements ko jin ko ham ny JS my get kiya hoga to usy kuch nae milay 
//  ga yani NULL milay ga. 

// Result for handeling situation # 01 and 02
// Asi tamam scesnerio sy agar ham bachna chah rahy han ky beshak images der sy load howi ho yah phr user ny JS ki file 
// ko head my link kara diya ho ham chah rahy han ky JS ka code sirf tab hi execute ho jab pora document load ho chuka ho 
// to aisi situation my han window.onload() ka event use karen  gy or apna tamam woh code iss ky andar rakhen gy ky jab tab 
// pora document load nae ho jata yah nae chalna chaihyee. Woh tamam chezain jo ham chahty han ky file execute hony ky baad 
// hi code execute ho to un tamam chezo ko directly file ky andar likhnay ky bajaye window.onload my rakhen gy 

// function changeAndReverseColor1(){
// const box1 = document.querySelectorAll(".box-1")
// box1.forEach((box)=>{
// //   console.log(box); 
// box.addEventListener("click",function(){
// console.log(box);
// if(box.style.backgroundColor === "yellow"){
//     box.style.backgroundColor = "green"
//     console.log("iam from if")
// }
// else{
//     box.style.backgroundColor = "yellow";
//     console.log("else")
// }
// }); 
// })

// const box = document.querySelector('#box-1');
// console.log(box);
// box.addEventListener("click",function(){
// if(box.style.backgroundColor === "green"){
//     box.style.backgroundColor = "yellow"
//     console.log("I AM FORM IF")
// }
// else{
//     box.style.backgroundColor = "green";
//     console.log("Else")
// }
// })





















// function foo(){
//     // console.log("hello");
// return "hello"
// }
// const result = foo();
// console.log(result,result,foo());