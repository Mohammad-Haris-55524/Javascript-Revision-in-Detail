// Here we are accesing element section after that we will fetch data from an API after that we will create a card for
// each and every product and then we will show it on the UI.
// STEP # 01 (Here we are accesing element section)
const section = document.querySelector("section");
console.log({section});

// STEP # 02 (Here we are fetching data by using PRODUCT API)
// Jab bhe ham fetch ko use karty han to hamey aik bar hamey get karny ky liye API chalani parey gi or dosri bar parse
//  karny liye chalani parey gi for example check line 8 and 9
const fetchProducts = async () =>{
try{
const response = await fetch('https://fakestoreapi.com/products'); // fetching data (getting data...)
const products = await response.json(); // parsing data.
console.log(response,products);
// Method # 01 (By using simple for loop)
for(let i=0; i < products.length; i++){
// console.log(products[i]); // Just for checking iteration working properly or not. It will console a every single product one by one accroding to index for explanation see below:
// Yahaan par my loop karao ga pory products ky (Array) of Object par iss ko loop karany ki wjah sy array break ho gy ga 
// utnay objects my jo uss array my mojood hon gy phr my aik varible banao ga PRODUCT name ka taaky har aik object ko uss
//  my save kara sako aisa my isi liye kar raha hon kiu ky mujhy har single PRODUCT ka alag alag card banana hy
let product = products[i];   // Aisa kiu kar rahy han read above discription 
// console.log(`Product ${product.id}` ,product); 
createProductsCard(product) // here we are passing every single product data to another function (create product card) on each iteration so that we can create multiple card by using every single object values.
}
// Method #02 (By using for each loop)
// products.forEach((product) => {
// // console.log(`Product ${product.id}` ,product); Just for checking iteration working properly or not.
// createProductsCard(product) //Here we are passing each product object one by one to a function of create product card so 
// // that card of each and product can be created by using another function.
// });
}
catch(error){
console.log({error});
}
}
fetchProducts();

// Step # 03 (Here, we are getting product one by one and then creating cards of each product by using the API data)
const createProductsCard= (product) => {
console.log(`Product ${product.id}` ,product);
//**************************************Here we are creating HTML elements*********************************************
const div = document.createElement('div');
console.log(div);
// const input = document.createElement('input');
// console.log(input);
// const link = document.createElement('a');
// console.log(link);
//**********************Here we are setting or changing the attribute value of an HTML element*************************
// NOTE: There are 2 ways of setting attributes of an element. This method (element.attribute = new value) is the most 
// intelligent method of setting attibutes of an element rather than element.setAttribute(attribute, value). Iss method
// (element.attribute = new value) ko yah baat pta hoti hy ky har element par har attribute set nae ho skta hy for 
// detail read below. Or isi trha yah method element.setAttribute(attribute, value) koi bhe element ho yah attribute
// set kara deta hy beshak woh attribute uss elment ka part na ho for example (type = "text" cannot be set on Div but 
// this method is not as  intelligent enough to recongnize it rather than the this method element.attribute = new value )

// **********************(element.attribute = new value) most preferred and intelligent method************************
// NOTE: For above scenrio we are creating DIV element and after that we are setting the attributes like id,href,type,
// placeholder on DIV element but note that these all attributes except id and class will not work on DIV element because
// these all attributes are not the part of DIV. Kiye ky type part hy <input> ka,placeholder part hy <input> ka ,
// isi trha href part hy <a> ka.

// ***********************Wrong way of setting elements accoring to their element type*********************************
div.id = "cards" // This will work because 'id' is a attribute that can be set on div element
//NOTE:  Below all these attribute (type, placeholder,href) cannot be set on DIV element. Every element has some unique 
// attributes that works only on them link type and placeholder works on <input> and href on <a>
// div.type = "number" // will not work 
// div.placeholder="Enter your age"; // will not work
// div.href = 'https://fakestoreapi.com/products'; // will not work
// div.href = 'https://fakestoreapi.com/products'; // will not work

// ***********************Correct way of setting elements accoring to their element type********************************
// div.id = "cards" "number"
// input.type =
// input.placeholder="Enter your age";
// link.href = 'https://fakestoreapi.com/products';

// ******************************METHOD ===> element.setAttribute(attribute, value)*************************************
// Iss method ki functionality same hi hay jesy uper wali property (element.attribute = new value) ki trha kaam karta hy
// lekin farq itna hy yah ziada intelligent nae hy ky FOR EXAMLE: jesy DIV hy iss par placeholder, type, href, ky 
// attribute add nae ho skty lekin yah wala method ==> element.setAttribute(attribute, value) add kara dy ga isi wjah sy
// yah ziada intelligent nae hy.
// div.setAttribute("type","text"); // Type = text is not a attribute of div but this method is adding a property to DIV this and we know that (Type = text) is not a part of DIV element.
// div.setAttribute("placeholder", "Full Name"); //Inspite of not being an attribute of DIV, set arrtibute is still adding placeholder", "Full Name it to DIV
// div.setAttribute("href", "https://fakestoreapi.com/products");
// Note: Best use of set attribute is that when we need to add custom classes we should this method.

//************Creating element, Creating text node, Appending(join/combine) Elements / (nodes) and Updating*************
// (createTextNode: Is a method): Only for creating a node It adds the created node with the existing node (check line 175) for better understanding. 
// 1) Creating an Element:
// const productTitleH1 = document.createElement("h1");
// const paraForDiscription = document.createElement("p");
// // 2) Creating a text node: (createTextNode: Is a method)
// const title = document.createTextNode(product.title);// here i am passing dynamic value getting it from the api response.
// const productDetail = document.createTextNode(product.description);
// // 3) After Creating an Element and dynamic text node, now we are appending an Element with h1:
// productTitleH1.appendChild(title);
// paraForDiscription.appendChild(productDetail);
// // 4) Now the nodes/ elements h1 and p are updated. Now they both contain the information related to tittle and detail.
// console.log(productTitleH1,paraForDiscription);

// Note: These above 4 steps can be done in 1 step by using TEXT CONTENT (PROPERTY). It can GET SET & UPDATE DATA.(check line # 175)
// ************************IMPORTANT CREATETEXTNODE (METHOD) VS TEXT CONTENT (PROPERTY)******************************
// Example # 01
// 1) Creating an Element:
// const productTitleH1 = document.createElement("h1");
// const paraForDiscription = document.createElement("p");
// // 2) Setting the value directly without creating node in the above elements h1 and p which are created dynimically.
// productTitleH1.textContent = product.title;
// paraForDiscription.textContent = product.description;
// // 3) Now the nodes/ elements h1 and p are updated. Now they both contain the information related to title and detail.
// // console.log(productTitleH1,paraForDiscription);
// console.log(productTitleH1,paraForDiscription)

// NOTE: For detail scenerio code is done in the end due to asynchorus coding issue here. (check line # 175)


}
// NOTE: More important thing ky koi bhe attribute kisi element my aik hi bar add kiya ja skta hy nichey walay scenerio my 
// input[1] par phely sy hi placeholder (Enter Your name) ka define tha static HTML sy jab ham ny JS ky thorugh placeholder
// ka attribute add karaya to pichey waly attribute ko iss ny new walay attribute sy replace kar diya add nae kiya uss ky
// sath 
// const input = document.querySelectorAll('input');
// console.log(input);
// input[0].placeholder = "Enter your Full name";
// // input[0].placeholder = "Enter your name"; // yah WALA LAST WALY KO REPLACE KAREY GA ADD NAE KARY GA USS KY SATH 
// input[1].placeholder = "Enter your Last name"; // Yah bhe static HTML ko replace karey ga add nae karey ga uss ky sath. 
// // input[2].placeholder = "eee" // error cannot set property of undefined element.


// **************************element.style.property = new style (Change the style of an HTML element)*******************
// input[0].style.border = "2px solid red";
// input[0].style.borderBottomColor = "black";
// input[0].style.borderRadius = "2rem";
// input[0].style.backgroundColor = "yellow";
// input[0].style.borderBottomLeftRadius = "7rem";

// for (var i =1; i<=3 ; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }

// *******************************************Deleting an Elements******************************************************/
// *******************Deleting an Elements *****************(removeChild is used to delete a single element but note 
// that a single element might contain multiples nodes inside it like 'ul' is a single elemet but it may contain
// multiple 'li' and these muliple li can be delted bu targeting its main node ul. In simple words jab un ka parent 'ul'
// delete hoga to uss ky andar ky 'li' bhe delete ho jayen gy isi trha multiple elements ko bhe delete kara sakty han uss
// ky parent to target kara kar.
// Example # 01 (deleting multiples li by targeting single parent)
// const footer = document.querySelector('footer'); // will show ERROR bcz it is not ul is not direct child of footer 
// const ul = document.querySelector('footer > ul');// will show ERROR bcz it is not ul is not direct child of footer 
// // const footer = document.querySelector('footer > div'); //These line will solve the errors bcz here we are accesing div in footer because ul is a direct child of DIV so remove child works only on direct childs
// // const ul = document.querySelector('footer > div > ul');
// setTimeout(()=>{
// footer.removeChild(ul)
// console.log(footer)
// },3000) // check example 2 and 3 for better understanding. 

// Example # 02 (Nested Example yani footer my div ky andar waly ul ky li's ko delete karao) 
// const div = document.querySelector('footer > div');
// const ul = document.querySelector('div > ul');
// setTimeout(()=>{
// div.removeChild(ul)
// console.log(div)
// },3000)

// Example # 03 (Deleting the entire child element inside a div which is in a footer) 
// const footer = document.querySelector('footer');
// const div = document.querySelector('div');
// // console.log(footer.textContent)
// setTimeout(()=>{
// footer.removeChild(div)
// console.log(footer)
// },3000)


// ***************INTERVIEW QUESTION CREATETEXTNODE VS TEXT CONTENT &&&& INNER HTML VS TEXT CONTENT******************
// ************************IMPORTANT CREATETEXTNODE (METHOD) VS TEXT CONTENT (PROPERTY)******************************

// Example # 02 (TEXT CONTENT)
// SCERNEIO: 1) Update the heading of Introduction to DOM ==> Manupulation in DOM (2) Create an element element inside
// header and show a it on a UI that i am created and set by using text content property.

//Test # 01 (Getting setting and updating on UI in an existing element) 
// const manupulatingh1 = document.querySelector('header > h1');
// console.log(manupulatingh1);
// setTimeout(()=>{
//     // manupulatingh1.textContent = "Manupulation in DOM";
//     // const node = textContent = "Manupulation in DOM"; // Yah pichlay h1 ko replace kar ky uss ki jagah new content update kar dy ga.
//     // manupulatingh1.appendChild(node); //(WILL NOT WORK) textContent par append child ka method direct kaaam nae karta lekin agar  text content ki property use karni hay to phely aik dynamicaally JS ky though create karaya ho yani document.createElement ky through aik elemnt banana pary ga phr usy varible my save karein gy phr append karein gy parent ky sath direct text content work nae karta append child ky sath. Check test # 03 for this  
//     // Doing same above thing using create text node method but i bit changes in behavior
//     const node = document.createTextNode("Manupulation in DOM"); // Yah sath my append karady ga phely wali ko heading ko remove nae kary ga.
//     manupulatingh1.appendChild(node);
// },3000)

//Test # 02 creating getting setting and updating on UI 
const header = document.querySelector('header');
const h4 = document.createElement('h4');
// Yahaan par ham text content or inner html use kar ky html add kar rahy han appendchild ky method ky though to yah sirf 
// end my add ho ga kiu ky jab bhe append child use karty han to woh end my jaa kar add karta hay or sab sy main baat ky 
// ham directly text content ki property header par nae laga rahy balky ham aik dynamically element create karwany ky baad
// apppend kara rahay han isi liye yah saray header ky content ko replace nae karey ga 
h4.textContent = "i am created and set by using text content property"
h4.innerHTML = "i am created and set by using text content property"
header.appendChild(h4);
// han agar document.createElement('h4'); //karaye baghair hi text content use karein gy direct header par to woh pichey
// taamam header ky content ko iss walay content sy overwrite kar dy ga or pichala wala iss content sy replace ho gy ga.
header.textContent = "i am created and set by using text content property"
header.innerHTML = "i am created and set by using text content property"
header.appendChild(h4);


// Test # 03 scenerio: If I have to Show the user result after 1st H1
// const header = document.querySelector('header');
// const afterFirstHeading = header.firstElementChild; 
// const h6 = document.createElement('h6');
// h6.textContent = "i am created and set by using text content property"
// afterFirstHeading.appendChild(h6)


// ***************************************INNER HTML VS TEXT CONTENT***************************************************
// SIMILARITIES : Dono poranay existing content ko replace kar dein gy new updated content sy. In other words yah dono
// pichey tamama chezo ko new content ky sy over write kar dety han.

// DIFFERNECE: Agar HTML pass karein gy yani agar HTML ky TAG use karein gy to usi lihaaz sy text ko TAG ky lihaaz sy 
// show karega yani <h1> Hello my name is haris </h1> agar yah likha hy H1 ky andar to yah isy h1 ki trha render karey ga
// (check line 225) lekin agar yahi textContent: ky sath karen gy to woh TAGs/HTML elements ko as a string deal karey ga
//  sab ko as a string content bana kar render kara dy iss trha ky tag or content ko aik show karey ga yani tags ki 
// property kaam nae karey gi text content my (check line 226)
// const header = document.querySelector('header');
// //********** */ Example # 01 (innerHTML)******************
// header.innerText =  "<h1> Hello my name is haris </h1>";

// // Example # 02
// header.innerHTML = `    <div>
// <h1>Navigation links</h1>
// <ul>
//     <li>facebook</li>
//     <li>Instagram</li>
//     <li>Google</li>
//     <li>Youtube</li>
//     <li>LinkedIn</li>
//     <li>Gmail</li>
// </ul>
// </div>`
// *********************Example # 01 (text content)********************
// header.textContent =  "<h1> Hello my name is haris </h1>";
// Example # 02 (text content)
// header.textContent = `    <div>
// <h1>Navigation links</h1>
// <ul>
//     <li>facebook</li>
//     <li>Instagram</li>
//     <li>Google</li>
//     <li>Youtube</li>
//     <li>LinkedIn</li>
//     <li>Gmail</li>
// </ul>
// </div>`



// Dom Video # 05 Addional topics.
// SEPARATE TOPIC WE WILL REVIEW IT IN THE END
// console.log(footer.firstChild);
// console.log(footer.firstElementChild);
// console.log(footer.lastChild);
// console.log(footer.lastElementChild);
const main = document.querySelector('main');
console.log(main.children); // will return an ARRAY OF HTML COLLECTION OF ALL THOSE ELEMENTS ON WHICH IT IS TARGETED.
// console.log(main.hasChildNodes());
console.log(main.childNodes);// will return an ARRAY of NODES OF ALL THOSE ELEMENTS ON WHICH IT IS TARGETED.
console.log(main.classList);

// getAttribute is used to check the value of the targeted element
const checkAttribute = document.getElementById('check-attribute');
// let checkId = checkAttribute.getAttribute("id")
// console.log(checkId);
// let checkClass = checkAttribute.getAttribute("class")
// console.log(checkClass);

// Add a class attribute to an element:
// element.setAttribute("class", "democlass");



const checkParentElement = document.querySelector('main > h2');
console.log(checkParentElement);
// Parent element It returns the parent element of that element on which it is targeted 
console.log("H2 parent element is ",checkParentElement.parentElement);
// Parent Node It returns the parent Node of that element on which it is targeted 
console.log("H2 parent element NODE : ",checkParentElement.parentNode);
// lastChild: It returns the last Node of that element on which it is targeted 
console.log("H2 last child: ",checkParentElement.lastChild);
// Last Element child: It returns the last element of parent element on which it is targeted. 
console.log("H2 last Element child : ",checkParentElement.lastElementChild);
// First Child: It returns the first Node of that element on which it is targeted 
console.log("H2 first element: ",checkParentElement.firstChild);
// First Element Child: It returns the first element of that element on which it is targeted. 
console.log("H2 first element child: ",checkParentElement.firstElementChild);


// Difference b/w lastChild firstChild vs lastElementChild firstElementChild:
// lastChild and firstChild: Yah dono nodes ko laa kar dety han nodes multiple type ky ho skty han text node ,element node,
// comment Node, attribute node. Elements basicaally khud bhe aik node hay special type ki node han or more important 
// thing ky har element node ho skta hay lekin har node element nae ho skti

// lastElementChild firstElementChild: Yah dono sirf or sirf valid HTML element ko hi laa kar dety han. 
// **************************************Element vs NODE**************************************************
//  Element is a specific type of node that represents an HTML element in the DOM tree. It includes both the opening 
// and closing tags, along with any attributes and nested content.
// Example # 01 for Element  
{/* <div id="container" class="main">
    <h1>Welcome to my website</h1>
    <p>This is a paragraph.</p>
    <!-- <p>Hello world</p> -->
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
</div> */}
// Explanation for above example
{/* <div>, <h1>, <p>, <ul>, and <li> are elements. */}
{/* The <div> element is an element node.
The text "Welcome to my website", "This is a paragraph.", and "Item 1" and "Item 2" are all text nodes.
 This is comment node   <!-- <p>Hello world</p> -->
The attributes id="container" and class="main" are represented as attribute nodes.
The <ul> element contains two <li> elements, making them child nodes of the <ul> element. */}

// NODE:
// A node is a more general term that encompasses all types of entities in the DOM tree, including elements, text, 
// comments, attributes, and more. So, while all elements are nodes, not all nodes are elements.

// Example # 02 for NODE 
{/* <div id="example">
    This is <b>bold</b> text.
</div> */}
// Explanation for above code
// The comment <!-- This is a comment --> is a comment node.
// The <div> element is an element node.
// The text nodes within the <div> element include "This is " and " text.".
// The <b> element is an element node.
// The text node within the <b> element is "bold".
// The entire content within the <div> element is represented by multiple nodes, including text nodes and element nodes.

// CLASSES METHOD (HOW TO ADD REMOVE REPLACE CLASSES)
// Note: JS my ham jab bhe class add remove yah replace karty han to woh har jagah sy remove ho jati hay kiu ky yah object
// ki trha chalti han kiu hy har HTML ELEMENT JS ka aik object hay yani agar aik bhe class my changing karen gy to woh 
// changes reflect hongi like refrence type in objects.
const header = document.querySelector('header > h1');
// METHOD # 01
//We can add classes by using JS on specific scenerio if needed. We could add single or multiple classes at a time.
header.classList.add("bg-color-class");
header.classList.add("border-class", "color-class");
// METHOD # 02
// We can also remove single or multiple class by using JS on specific scenerio if needed.
header.classList.remove("color-class");
// header.classList.remove("border-class", "color-class");
// METHOD # 03
// We can also replace single or multiple classes at a time by using JS on specific scenerio if needed.
header.classList.replace("border-class","font-size-class")
console.log(header.classList);
// METHOD # 04
// How to check if class present on specific element or not (It will return only boolean values yes or no)
// console.log(header.classList.contains("border-class")); //FALSE: because it has been replaced by font-size-class
// // METHOD # 05
// We can also do iteration on classes by using for each
header.classList.forEach(c=>{
console.log(c);
});
// METHOD # 06
const iterator = header.classList.entries()
console.log(iterator);
for(const arrayOfClasses of iterator){
    console.log(arrayOfClasses);
}
// ***************************ADDING AND REMOVING CLASSES By using ADD EVENT LISTENERS************************************
// By using ADD EVENT LISTENERS IN WHICH WE ARE USING EVENT LIKE FOCUS AND BLUR ON ALL INPUT FIELDS. HERE WE ARE ADDING AN 
// REMOVING CLASSES OF MUTIPLE ELEMENT AT A TIME. Isi trha 1 1 element ko get kar ky alag alag add event 
// listner bana kar bhe yah kaam kiya jaa skta tha lekin woh bhot lamba ho jata kiu ky maan lo agar 10 input fields hoti to 
// 10 input fields ky liye 20 addEventListener use karnay party 10 focus ky liye 10 blur karnay ky liye wohi kaam ham ny short
// my querySelectorAll() ky though kar liya sab ko get kar ky jo NODE LIST AY gi uss par for each ky thorugh sab ky uper
// //  iteration kara kar aik sath addEventListener laga  kar diya (SHORT METHOD)
// For adding class
// let elements = document.querySelectorAll('input');
// elements.forEach(element=>{
//     element.addEventListener("focus",()=>{
//         element.classList.add("focus-class")
//         element.classList.remove("blur-class")
//     })
// })
// // For removing class
// elements.forEach(element=>{
//     element.addEventListener("blur",()=>{
//         element.classList.add("blur-class")
//         element.classList.remove("focus-class")
//     })
// })

// LONG METHOD BY TARGETING 1 FIELD AT A TIME AN APPLY FOCUS AND BLUR EVENT ON THEM.
// ****************For NAME INPUT FILED **********************
// HERE, WE ARE DOING CODE FOR FOCUS EVENT (To add class for FOCUS to apply css on it when it is focused also removes the
// previous class blur class)
let elementName = document.getElementById('name');
elementName.addEventListener("focus",()=>{
    elementName.classList.add("focus-class")
    elementName.classList.remove("blur-class")
})
// HERE, WE ARE DOING CODE FOR BLUR EVENT (To add class for BLUR to apply css on it when it is blured and also remove the
// previous focus class)
elementName.addEventListener("blur",()=>{
    elementName.classList.add("blur-class")
    elementName.classList.remove("focus-class")

})

// **********For PASSWORD INPUT FILED *******************
// HERE, WE ARE DOING CODE FOR FOCUS EVENT (To add class for FOCUS to apply css on it when it is focused also removes the
// previous class blur class)
let elementPassword = document.getElementById('password');
elementPassword.addEventListener("focus",()=>{
    elementPassword.classList.add("focus-class")
    elementPassword.classList.remove("blur-class")
})
// HERE, WE ARE DOING CODE FOR BLUR EVENT (To add class for BLUR to apply css on it when it is blured and also remove the
// previous focus class)
elementPassword.addEventListener("blur",()=>{
    elementPassword.classList.add("blur-class")
    elementPassword.classList.remove("focus-class")
 })



