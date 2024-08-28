// ************************************************Window Object********************************************************
// Window Object aik global object hy yah hamey aik tarika provide karta hy hamey hamari pori brower window ko control
// karny ka
// The window object is a global object that has the properties pertaining to the
// current DOM document, which is what's in the tab of a browser. The document
// property of the window object has the DOM document and associated nodes and
// methods that we can use to manipulate the DOM nodes and listen to events for
// each node.
// window object my ===> DOM hota hy
// window object my ===> BOM hota hy
// window object my ===> JS core features hotay han
// console.log(window)
// console.log(window)
window.console.log(window);
// console.log(window.alert())
// console.log(alert())

//**************************************************/WHAT IS DOM ?*******************************************************
/*The HTML DOM (Document Object Model) DOM USE TREE DATA STRUCTURE & GOOGLE MAP USES GRAPH DATA STRUCTURE
When a web page is loaded, the browser creates a Document Object Model of the page.
The HTML DOM model is constructed as a tree of Objects: (check image on UI)
DOM jo hota hy woh (Document Object Model): yani ap ky pory HTML page ko JS OBJECT bana diya gya hy or usy DOCUMENT name
dy diya gya hy
OR
Ap ky poray HTML page ka aik OBJECT banaya diya gya or usy DOCUMENT name dy diya gya hy 
//In English:
The DOM (Document Object Model) is a programming interface that represents the structure of a document as a tree of 
objects in JavaScript. It allows scripts to dynamically manipulate and interact with the content, structure, and style 
of web documents.

//Dom explanation in simple words:
"Jab bhe hamara web page load hota hy to to DOM hamaray uss page ka aik OBJECT bna deta hy or uss ka name DOCUMENT hota
hy. DOM hamey aik aisa tarika provide karta hy ky ham apany web page ky structure, styles, content my dynimacally changes
kara saken. Yah phr kisi functionality ky trigger hony par koi event listen kara saken to aisi condition my ham DOM use
karty han.

//Accoring to chatGPT:
Ji, bilkul sahi samjha hai aapne! Jab hamara web page load hota hai, to DOM uss page ko ek object ke roop mein represent
karta hai, jise hum "DOCUMENT" kehte hain. DOM hamen allow karta hai ki hum apne web page ke structure, styles, aur 
content ko dynamically change kar sakein. Hum DOM ka istemal kisi functionality ke trigger hone par event sunne aur uske
accordingly actions lene ke liye bhi karte hain.

By using DOM we can do the following actions:--
JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page

1) What does <head> tag contains ==> CSS OR JS YAH KOI LIBRARY ADD KARNNI HO IN TAMAM KY LINKS OR FILES KO LINK KARANAY KY
LIYE HEAD TAG USE KARTY HAN
1a) <TITLE> WEBPAGE KA BHE HEAD TAG KY ANDAR RAKHTY HAN
1b) <META> TAG: Iss my page sy realted information store hoti hy for Example: SEO sy related kaam ky liye use hota hy 
The <meta> tag in HTML is used to provide metadata about the HTML document. Metadata is information about the document
that is not displayed on the web page but is used by browsers, search engines, and other web services. Here are some
common attributes used in the <meta> tag: (check UI)
Daily life example of <meta> tag:
Ap ny note kiya hoga jab bhe ham kisi file ka link copy kar ky bhejty han too jab woh link hamey copy hony ky baad
show hota hy to uss my aap ny aik cheez dekhi hogi ky uss link ki website ka image url or uss link sy related information
show hoti hy link ky uper woh tamam chezain jo hamey link ky sath show hoti hy link paste karny ky baad woh tamam 
information ham META tag my rakhty han Yah sari information jo hamey show hoti hy woh chat application yah browser yah 
engine ky andar aisi functionality hoti hy ky woh khud uss ko render kar raha hota hy For example: whatsapp par jab link
copy kar ky dalty han jesy hi woh paste hota hy to hamary pas aik ui render ho kar ati hy jis my uss ki image information
link hota hy woh sab meta tag my rakh kar hi ham add karty han agar ham yah tamam chezain add nae karein gy to phr yah 
tamam chezain show nae kareye ga sirf link show hoga phr ... 
2) <Body> tag: It contains the content of the website that is render on the UI. 

Summary of DOM: In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
yahaan par jo bhe deletion hoga woh temporary ho raha hoga jab ham DATABASE parhaein gy to uss my jo deletion hoga woh
permenant hoga
DOM BASICALLY YAH HOTA HY KY JS PAR REHTY HOWY APNI HTML KY SATH INTERACTION KAREIN YAH MANUPULATION KAREIN OR USS KY SATH
CURD OPERATION PERFORM KAREIN. 
*/

/*Things to remember about <script> tag: JS ki koi bhe file jo ap link kara rahay ho hamesha end my karao UI par to koi 
farq nae parta ziada tar lekin agar <script> TAG ko ham ny starting my rakha hoga or ham kisi html element ko aceess 
karana chah rahy han by id or class to woh hamey null show hoga kiu ky <script> start my hi load ho gy gi or boly gi
mujhy iss id/class ka element laa kar do lekin uss time tak HTML load hi nae howi hogi isi liye <script> tag ko hamesha
end my use karo bilkul <body> tag sy 1 line uper dalo <script> tag ko taaky HTML CSS load hony ky baad hi JS run ho */

// TOPIC # 01
// INTERVIEW QUESTION: EVERY HTML ELEMENT IS A VALID OBJECT IN JAVASCRIPT
// Basically at the end JS my hamary pas HTML KY tamam elements objects hi ban rahy hoty han isi liye ham isy DOM bhe bolty han 
// Example # 01
const para = document.querySelector("p");
console.log(para);
// Example # 02
const div = document.querySelector("div");
console.log(div);

// TOPIC # 02
// Difference B/W innerHTML and innerText:
// innerHTML:
// Includes HTML Tags: innerHTML includes both the text content and HTML tags of the specified element.
// Allows HTML Markup: You can use innerHTML to set or get content with HTML markup.
// let exampleForInnerHtml = document.getElementById("para-2")
// console.log(exampleForInnerHtml);

// // innerText:
// // Excludes HTML Tags: innerText only retrieves or sets the text content of the specified element, excluding any HTML tags.
// // Treats Content as Text: It treats the content as plain text, not HTML
// let exampleForInnerText = document.getElementById("exampleDiv")
// console.log(exampleForInnerText);

// // What are special characters that are seen in innerHtml ?
// console.log("hello \"15\" ");
// // Same thing can be acheived by template literals : Example below
// console.log(`hello "15" `);

// // TOPIC # 03
// // Acessing / Finding HTML Elements
/*NOTE: ISS TOPIC MY AIK BAAT YAH YAAD RAKHNI HY KY WOH TAMAM ELEMENTS JO SINGLE VALUE RETURN KARTY HAN  TO AGAR HAM UN KI
VALUE ACCESS KARAY HON OR KISI WJAH SY VALUE NA MILY TO WOH 'NULL' RETURN KAREIN GY OR ISI TRHA WOH METHODS JO HAMEY
HTML COLLECTION YANI MULTIPLE ELEMENTS KA ARRAY RETURN KARTY HON TO WOH HAMEY EMPTY ARRAY [] RETURN KAREY GA ERROR KI
CONDITION MY YAH PHR HAMARI KOI GHALATI KI SURAT MY MAY BE HAM KOI GHALAT CLASS NAME YAH TAG NAME SY USY ACCESS KAR RAHY 
HON OR WOH USS KA NAME HI NA HO*/
// console.log(document) // Will console the entire DOCUMENT objects that contains the HEAD AND BODY.
// //*************METHOD # 01:*****************
// //document.getElementById() works like find() method of array jo phely phely element mil gy ga iss ID ky name sy usy lay 
// // kar aagy ga beshak usi same ID name sy or bhe elements hon yah sirf 1st wala utha kar ly aye ga jis ka name isy 
// // div-1 mila hoga
// const usingId = document.getElementById('div-1');
// console.log(usingId);
// NOTE: To aceess single element we use document.getElementById
//*************METHOD # 02:*****************
// document.getElementsByTagName: Basically yah hamey aik HTML COLLECTION deta hy hy jo tamam ky tamam elements lay kar
// aaye ga beshak woh root level par hon yah jitnay bhe nested hon yah HTML COLLECTION ARRAY lagta hy lekin hota nae hy
// agar ham chahyeen to Array.from() ky method sy usy ARRAY my convert kar ky Array ky methods laga skty han apni conditon
// ky mutabiq FOR EXAMPLE LOOK BELOW:
// const usingTagName = document.getElementsByTagName('div');
// console.log(usingTagName); // here we will get a HTML COLLEECTION OF ALL DIV presesnt in my body
// const htmlCollectionToJsArray = Array.from(usingTagName);  //HTML COLLECTION is converted to JS array
// const shallowCopy = ([...htmlCollectionToJsArray]); // shallow copy isi liye banaye hy taky pop() method orignal array my changes naa karey phely copy bana ly phr changes karey
// shallowCopy.pop() // will remove the last element from an array of shallow copy.
// console.log(shallowCopy,htmlCollectionToJsArray,usingTagName); // will remove the last element from an array
// Note: Yah wala accessing method tab use karty han jab ham ny aik hi element ky multiple elements ko accees karna ho to jesy
// 'ul' ky andar multiple 'li' ko tab isy use karty han yah phr sary div ko access karna ho yah phr saray p(paragraphs)
// ko access karna ho tab 
//*************METHOD # 03:*****************
// const usingClassName = document.getElementsByClassName('checking-DOM');
// console.log(usingClassName);
// // HOW TO TARGET A SPECIFIC ELEMENT IN AN ARRAY OF HTML COLLECTION
// const usingClassNameConvertedToArray = Array.from(usingClassName);
// const shallowCopy = [...usingClassNameConvertedToArray];
// Method # 01
// let result = shallowCopy.pop(); // will remove the last element from copied array 
// Method # 02
// let result = shallowCopy.shift(); // will remove the first element from copied array 
// Method # 03 (More advance and mostly used method)
// Let us consider a scenerio we want to access the only elemnets present on index 3,4,5 
// let result = shallowCopy.filter((value,index)=>{
// if(index === 3 || index === 4 || index === 5 ){
//     return true;
// }
// else{
//     return false;

// }
// })
// console.log(result); 
// // Method # 03(b) (More advance and mostly used method)
// // Let us consider a scenerio we want to ignore the only elemenets present on index 3,4,5 
// let result = shallowCopy.filter((value,index)=>{
//     if(index === 3 || index === 4 || index === 5 ){
//         return false;
//     }
//     else{
//         return true;
    
//     }
//     })
//     console.log(result); 

// Method # 03(c) (More advance and mostly used method) (Ignore even index values)
// Let us consider a scenerio we want to ignore the only elemenets present on index 3,4,5 
// let result = shallowCopy.filter((value,index)=>{
//     if(index % 2 === 1 ){
//         return true;
//     }
//     else{
//         return false;
    
//     }
//     })
//     console.log(result); 

// NOTE: Yah method bhe hamey HTML COLLECTION dy ga un tamam elements ko return karey ga hamey jis ki class ka name
//  (checking-DOM) hoga beshak woh tamam elements different hon yah phr kitnay bhe nested hon yah tamam ky tamam elements
// nikal kar lay aye ga jin ki class sy isy acess kiya gy ga 
// *********What is the differnce b/w document.getElementsByClassName vs document.getElementsByTagName*************
// 1a) document.getElementsByClassName : Yah method hamey different elements return kara skta hy yani p ho yah h1 ho h2 ho div
// ho yah sab elements ko HTML COLLECTION bana kar return kara skta hy bss class name sab ka same hona chaihyee
// 1b) case sensitive bhe hota class name jesa class name hy bilkul wesa hi dalna warna empty array dy ga  lekin agar ...
// 2a) document.getElementsByTagName: Yah sirf same elements ki collection return karey ga jo hamari HTML ki BODY my present
// hon gy beshak woh kitnay bhe nested hon lekin sab ka tag name same hoga 2b )or yah case sensitive nae hota.
// *********What is the SIMILARITES b/w document.getElementsByClassName vs document.getElementsByTagName*************
// 1) BOTH RETURNS HTML COLLECTION
// 2) BOTH RETURNS EMPTY ARRAY IF NO ELEMENTS FOUND OR IF ANY ERROR OCCURS ...
// ********************************************TYPE SCRIPT 1:26****************************
//*************METHOD # 04:***************** document.querySelector() VS document.querySelectorAll()
// Note: Yah combination hy tamam methods ka or sab sy ziaada use kiye janay wala method document.querySelector() hy iss
// method sy id waly class waly tag walay tamam elements ko access kiya jaa skta hy or yah method bhe 
// document.getElementById() ki tarha aik hi value return karta hy jo sab sy phelay milti hy isy from top to bottom 
// search karey ga jo phely mil gayi jiss sy search kiya jaa raha ho woh laa dy ga works like find method of Array.

// ******Method # 01(A)************  document.querySelector() to access single element of id's 
// id name (#div-1) ky name sy multiple id's present han magar yah method sirf 1st wali id ka element return kara dy ga
// agar sari id's id name (#div-1) wali access karana chah rahy han aik sath to document.querySelectorAll() use karein gy 
// const useOfQuerySelectors = document.querySelector('#div-1');
// console.log("I am from query selector() ID: ",useOfQuerySelectors);

// // // ******Method # 01(B)************  document.querySelectorAll() to access multiple elements of similar id's (Return an array OF NODE LIST)
// const useOfQuerySelectors1 = document.querySelectorAll('#div-1');
// console.log("I am from query selector ALL() ID'S: ",useOfQuerySelectors1);

// Method # 02(A) to access single element of class name 
// class name (checking-DOM) sy multiple classes present han magar yah sirf 1st wali class return kara dy ga agar lekin
// agar sari classes (checking-DOM) wali access karana chah rahy han aik sath to document.querySelectorAll() use karein gy.
// const useOfQuerySelectors = document.querySelector('.checking-DOM');
// console.log("I am query selector() CLASS name: ",useOfQuerySelectors);

// // Method # 02(B) to access multiple element having similar class name. (Return an array OF NODE LIST)
// const useOfQuerySelectors2 = document.querySelectorAll('.checking-DOM');
// console.log("I am query selectorALL() CLASS name: ",useOfQuerySelectors2);

// Method # 03(A) to access single element of by using its TAG/ELEMENT NAME (TAG names are not case sensetive)
// const useOfQuerySelectors = document.querySelector('DIV');
// console.log("I am query selector TAG name: ",useOfQuerySelectors);

// // Method # 03(B) to access multiple element of by using its TAG/ELEMENT NAME (TAG names are not case sensetive) (Return an array OF NODE LIST)
// const useOfQuerySelectors3 = document.querySelectorAll('div');
// console.log("I am query selector ALL() TAG name: ",useOfQuerySelectors3);

// Method # 04(A) to access single element of by using its ATTRIBUTE.
// const useOfQuerySelectors = document.querySelector('[type= "text"]');
// console.log("I am query selector TAG name: ",useOfQuerySelectors);

// Method # 04(B) to access Multiple element of by using its ATTRIBUTE. (Return an array OF NODE LIST)
// const useOfQuerySelectors4 = document.querySelectorAll('[type= "text"]'); 
// console.log("I am query selectorALL() ATTRIBUTES name: ",useOfQuerySelectors4);

// Method # 05(A) WE CAN ALSO access (SINGLE NESTED element) of by using document.querySelector HOW ? Check example
// const useOfQuerySelectors = document.querySelector('footer > ul > li'); //Example # 01
// const useOfQuerySelectors = document.querySelector('#div-1 > figure > figcaption '); //Example # 02
// console.log("I am query selector by using nesting searching of an element: ",useOfQuerySelectors);

// Method # 05(B) WE CAN ALSO access (MULTIPE NESTED element) of by using document.querySelectorAll() HOW ? Check example (Return an array OF NODE LIST)
// const useOfQuerySelectors5 = document.querySelectorAll('footer > ul > li'); //Example # 01
// const useOfQuerySelectors5 = document.querySelectorAll('#div-1 > figure > figcaption '); //Example # 02
// console.log("I am query selectorAll() by using NESTING searching of MULTIPLE elements: ",useOfQuerySelectors5);

// *************METHOD # 06:***************** document.getElementsByName() (Return an array OF NODE LIST)
// Note: Yah method seacrhing karey ga 'NAME' PROPERTY ky through yani woh tamam values lay kar aye ga jin ka 
// name="interest" hoga  yani "interest" ky thorugh secrching karey ga or pory document my woh jahaan jahaan milain gy 
// sab ki NODE LIST bana kar return kara dy ga.
const useOfgetElementsByName = document.getElementsByName('interest')
console.log(useOfgetElementsByName)


// Summary:
// document.querySelectorAll() and document.getElementsByName() always (Return an array OF NODE LIST)
// document.getElementsByClassName and document.getElementsByTagName always always (Return a HTML COLLECTION)

console.log(2 + "2" - 2); // 22 - 2 = 20