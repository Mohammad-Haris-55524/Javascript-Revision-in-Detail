// ----------------------------------------------------------OBJECT ASSIGN---------------------------------------------------------------------
// Yah method tamam objects ko combine kar ky targeted object my copy kar ky aik new combined object bana deta hay. Bas yaad
// rahay ky agar jin objects ko ham targeted object ky sath combine karwana chah rahy han or un ki keys agar same name sy
// howi to woh baad waly objects ki keys sy puranay waly objects ko overWrite kar day ga (For better understading check 
// Example # 02). Aik or baat yah ky jab ham objects ko targeted object my assign kar rahy hoty han to yaad rahay ab 
// ORIGNAL OBJECT my old values nahe rehti ab is object my woh tamam value aa chuki hoti han jo iss my sources ki assign
// karwai hoti han ===> check example # 01 (console.log) for better understanding. 

// Example # 01
// const target = { a: 1, b: 2 };
// const source1 = { c: 3, d: 4 };
// const source2 = { e: 13, f: 14 };
// const source3 = { g: 23, h: 24 };

// const newCombinedObject = Object.assign(target, source1,source2,source3); //COPY SOURCE1, S2 & S3 VALUES TO TARGET OBJECT
// console.log("New combined OBJECT: ",newCombinedObject,
// "ORIGNAL OBJECT",target,
// "SOURCE OBJECT 1",source1,
// "SOURCE OBJECT 2",source2,
// "SOURCE OBJECT 3",source3);
// NOte: Yaahaan aik cheez notice ki hay ham ny (newCombinedObject) my or orignal(target) object my dono my same values
//  aa gaye han due to normal object behavior of copy by Reference type.

// Example # 02 (Iss example my source2 ki keys target sy match kar rahi han to source2 wali keys ki values overwrite
// ho jayen gi target Object my this also remain same for source3)
// const target = { a: 1, b: 2 };
// const source1 = { c: 3, d: 4 };
// const source2 = { a: 13, c: 14 };
// const source3 = { b: 23, d: 24 };
// const newCombinedObject = Object.assign(target, source1,source2,source3);
// console.log("New combined OBJECT: ",newCombinedObject, "ORIGNAL OBJECT",target);

// --------------OBJECT.ASSIGN METHOD FUNCTIONALITY CAN BE ALSO BE ACHEIVED BY USING SPREAD OPERATOR-------------------
// This same things means that the copying or combining of multiple objects with one object can be acheived by SPREAD
// OPERATOR TOO.
// SPREAD OPERATOR KA FAIDA YAH HO GA KY YAH ORIGNAL (target) OBJECT KO DAMAGE NAHE KARY GA USS KO WESY KA WESA REHNY DY GA.
// const target = { a: 1, b: 2 };
// const source1 = { c: 3, d: 4 };
// const source2 = { a: 13, c: 14 };
// const source3 = { b: 23, d: 24 };

// const newCombinedObject = ({...target, ...source1,...source2,...source3});
// console.log("New combined OBJECT: ",newCombinedObject, "ORIGNAL OBJECT",target);
// **********************************************************************************************************************

// ----------------------------------------------------------OBJECT.ENTERIES-------------------------------------------------------------------
// Iss method my hamey hamesha array of array milta hay. Beshak ham objects hi kiu na use kar rahy  hon yah har object
//  ki (Property) ko yah break kar dy ga aik array my jis ki index[0] par key , or index[1] par value hogi uss object ky
// property ki, Yaad rahay jitni keys hon gy utnay hi arrays banayen gy object1 my 4 keys han to 4 arrays banayen gay.

const object1 = { 
name : "Mohammad Haris", //Here it will breakdown each object PROPERTY INTO AN ARRAY LIKE [index[0] = name, index[1] = Mohammad haris].
RegId: 55524,  // har key ka array bana dy ga [index[0] = refId, index[1] = 55524
group: "BSCS",
address: { // har key ka array bana dy ga [index[0] = address, index[1] = {...remaing properties}
    city: 'New York',
    zip: '10001',
    location:{
        street: "5",
        area: "Golden town"
    }
  }
}
let iterator = (Object.entries(object1));
console.log("Array of arrays: ",iterator) // It will return an ARRAY OF ARRAY jis ky andar har object ki property ko kuch yuh breakdown kiya
// hoga [index[0] = KEY NAME, index[1] = PROPERTY/value]
// For better understanding yah kuch aisay kaam kar raha hy 
// [[index[0](name) index[1]("Mohammad Haris")], [index[0](RegId) index[1](55524)], [index[0](group) index[1]("BSCS"),
// [index[0](address) index[1]({city: 'New York', zip: '10001', location: {…}})]]]
for(let [key, value] of iterator){
    // console.log(key , value);
    console.log(`${key}: ${value}`);
}
// -----------------------------------------------------OBJECT.KEYS (objectname) METHOD--------------------------------------------------------
// This Method will provides us an ARRAY of all the keys present in an targeted object.
console.log("KEYS: ",Object.keys(object1));

// ----------------------------------------------------OBJECT.VALUES (objectname) METHOD-------------------------------------------------------
// This Method will provides us an ARRAY of all the VALYES/PROPERTY that are present in an targeted object.
console.log("Values: ",Object.values(object1));

// ----------------------------------------------------OBJECTNAME.HASOWNPROPERTY METHOD--------------------------------------------------------
// This method will check ky PROPERTY uss object my mojood hay ky nahe agar nahe hay to false return kar do agar hay to TRUE return kar do.
console.log(object1.hasOwnProperty("name")) //true
console.log(object1.hasOwnProperty("RegId")) //true
console.log(object1.hasOwnProperty("fatherName")) //false
console.log(object1.hasOwnProperty("group")) //true
console.log(object1.hasOwnProperty("address")) //true

// -------------------------------------------------------Object.fromEntries()----------------------------------------------------------------
// This methods converts an array/  array of array into an OBJECT
// EXAMPLE # 01
// const entries = [['a', 1], ['b', 2], ['c', 3]];
// const obj = Object.fromEntries(entries);
// console.log(obj);

// EXAMPLE # 02
// --------------WHAT IS THE DIFFERENCE BETWEEN Object.Entries() VS Object.fromEntries()------------------
// Object.Entries()
const obj = { a: 1, b: 2, c: 3 };
// Convert object to array of key-value pairs
const entries = Object.entries(obj);
console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]

// Object.fromEntries()
// Convert array of key-value pairs back to object
const newObj = Object.fromEntries(entries);
console.log(newObj); // Output: { a: 1, b: 2, c: 3 }

// Example # 03
console.log(Object.fromEntries(iterator)); //getting values of iterator from an object.enteries() method form line # 65
// Output: This Method converts the entire array of array(iterator value) into an object.


// ------------------------------------------------------------Object.seal()-------------------------------------------------------------------
// Jab ham kisi object ko seal kar dety han Object.seal(obj01) to tab ham uss object my mazeed properties ko naa he add kara sktay han or 
// naa kisi property ko delte kara skty han sirf or sirf property ko modify/update kara skty han . Yaad rahay property delete or add karanay 
// ki surat my ERROR nahe aye ga bss property naa he add hogi nahe delete hogi. 

const obj01 = {
    name: 'John',
    age: 30
  };
  Object.seal(obj01);
  // Try to add a new property 
  obj01.gender = 'Male'; // This won't throw an error, but the property won't be added
  console.log(obj01.gender) // undefined kiu ky genger name ki property hay hi nahe or add nahe kara skty kiu ky seal kiya howa hay object ko ham ny 
  // Try to delete a property
  delete obj01.age; // This won't throw an error, but the property won't be deleted
  // Modify/update an existing property
  obj01.age = 35;
  console.log(obj01); // Output: { name: 'John', age: 35 }
  
// ---------------------------------------------------------(Object.isSealed(obj01))----------------------------------------------------------
console.log(Object.isSealed(obj01)) // Will check the targeted object is sealed or not if sealed it will return TRUE else FASLE


// ------------------------------------------------------------Object.freeze(obj01)------------------------------------------------------------
// Jab ham kisi object ko freeze kar dety han Object.freeze(obj01) to tab ham uss object my naa he mazeed properties ko naa he add kara sktay
// han or naa kisi property ko deelte kara skty han or nahe kisi property ko modify/update kar skty han. Yaad rahay ky agar ham agar kisi 
// property ko add/delete/modify karanay ki koshish karen gy to ERROR nahe aye ga bss property naa he add hogi nahe delete hogi or nahe 
// update/modify hogi. 

const obj02 = {
    name: 'Alice',
    age: 25
  };

  Object.freeze(obj02);
  // Try to add a new property
  obj02.gender = 'Female'; // This won't throw an error, but the property won't be added
  console.log(obj02.gender)
  // Try to delete a property
  delete obj02.age; // This won't throw an error, but the property won't be deleted
  // Try to modify an existing property
  obj02.age = 30; // This won't throw an error, but the property value won't change
  console.log(obj02); // Output: { name: 'Alice', age: 25 }

// ---------------------------------------------------------(Object.isFrozen(obj01))----------------------------------------------------------
console.log(Object.isFrozen(obj01)) // Will check the targeted object is freezed or not if freezed it will return TRUE else FALSE


// ------------------------------WHAT IS THE DIFFERENCE BETWEEN Object.seal() VS Object.freeze():---------------------------------
// Note:
// Object.seal(): allows properties to be modified but not added or deleted.
// Object.freeze(): makes objects completely immutable, preventing any changes to properties.

// **********************************************************IMPORTANT TOPIC*******************************************************************

// HERE, WE WILL LEARN HOW TO GROUP OBECTS BY USING OBJECT METHOD (object.group()) AND ALSO BY SOME HIGHER ORDER METHODS LIKE (FILTER,REDUCE,FOR EACH)  
// --------------------------------------------------------------object.group()--------------------------------------------------------------
// Yah method ham wahaan use kar skty han jab hamey grouping karwani ho jesy for example my ny group karwana hay data with respect to type mtlb
// my ny dress par click kiya or dress sy realated sary dresses ky array of objects mery pas aajayen gy. Isi trha my ny mobile par click kiya 
// // to mery pas saray mobiles aajayen gy gy.
// Basically object.group() hamey multiples objects ky andar same type ky objects ko aik hi array my rakhwanay ky liye kaam aa skta hay. Yahi 
// same grouping of data ham filter() or reduce() method ky through bhe kar sakty han lekin uss my thori ziada mehnat lagay gi  
const inventory = [
  {name: "Jackets", type: "dress", quantity: 10},
  {name: "Iphone", type: "mobile", quantity: 2},
  {name: "T-shirts", type: "dress", quantity: 20},
  {name: "Samsung", type: "mobile", quantity: 4},
  {name: "Banana", type: "fruit", quantity: 50},
  {name: "Brinjal", type: "vegetables", quantity: 23},
  {name: "Apple", type: "fruit", quantity: 50},
  {name: "Spinach", type: "vegetables", quantity: 13},
]
const groupByType = Object.groupBy(inventory, (inventories) =>{
  // console.log(inventories.type)
  return inventories.type
});
console.log("Grouping inventory according to type using groupBy method: ",groupByType)

// -----------------------------Now we will do same grouing of data according to type by using filter method.-------------------------------
const array = [];
const groupByTypeUsingFilter = inventory.forEach(inventories => array[inventories.type] = inventory.filter(i => i.type === inventories.type)) //i.type === "dress"(inventories.type) har iteratation par match karwaye ga or agar array ki keys name or object ki type name save hogi to usy object bana kar empty array my store kara dy ga
// console.log(inventory.filter(i => i.type === "dress")) //filter wala part kuch aisa trha filter karwa kar array my kuch iss trha save kara
// raha hy ky dress wala dress my mobile wala mobile my save ho.
// console.log("Grouping inventory according to type using filter method: ",array)

// ---------------------------Now we will do same grouing of data according to type by using reduce method.---------------------------------
// Reduce method my hamey empty array initialize karana nahe pary ga han acc ko hi use karty howy usi ky through array ki key bana kar uss my 
// values ko push kara dein gy 
const groupByTypeUsingReduce = inventory.reduce((acc,current)=>{
  // console.log("Previous value",acc)
  // console.log("Current Value",current)

  // Method # 01
  if(!acc[current.type]){
    acc[current.type] = []
  }
  acc[current.type].push(current)
  return acc;

  // Method # 02
//   let type = current.type
//   // console.log(type)
//   if(!acc[type]){
//     acc[type] = []
//   }
//   acc[type].push(current)
//   // console.log(acc[type])
// return acc
},{})
console.log("Grouping By using For Reduce method: ",groupByTypeUsingReduce)

// -------------------------Now we will do same grouing of data according to type by using simple forEach loop method.-------------------------
const emptyArray01 = [];
const groupByTypeUsingForEach = inventory.forEach(inventories =>{
  if(!emptyArray01[inventories.type]){
    emptyArray01[inventories.type] = []
  }
  emptyArray01[inventories.type].push(inventory)
} )
console.log("Grouping By using For each loop method: ",emptyArray01)


// object.group() same like reduce method Is moslty used for creating groups/chunks of objects related to same type or price etc.

// ---------------------------Example # 02 Again doing grouping of students according to grades using filter property--------------------------
// NOW WE WILL DO THE SAME GROUPING OF DATA USING FILTER METHOD
// Make a group of data according to grades. Students with same grade should be in the same Array. 
// const students = [
//   { name: 'Alice', grade: 'A' },
//   { name: 'Bob', grade: 'B' },
//   { name: 'Charlie', grade: 'A' },
//   { name: 'David', grade: 'C' }
// ];
// const groupedByGrade = [];
// students.forEach(student => {
//   groupedByGrade[student.grade] = students.filter((s) => s.grade === student.grade)
// })
// console.log(groupedByGrade)

 
// let x =[1,2,3]
// x.push(...[4,5])
// console.log(x)

// let a = "apple" //ASCII CODE OF a = 97
// let b = "Banana" //ASCII CODE OF B = 66
// let result = a > b;
// console.log(result)
// console.log(a.charCodeAt(0));
// console.log(b.charCodeAt(0));
