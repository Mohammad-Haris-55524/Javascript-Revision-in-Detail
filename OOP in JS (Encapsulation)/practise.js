// // -------------------------------------Procedural Programming VS OOP-------------------------------------------------
// // Procedural Programming my ham aik cheez kia note kar rahy han ky iss my code mess up hota hy jesy ham dekh skty han ky
// // hamary pas 4 function han or un ky variables globally declared han jo tamam functions my use ho rahy han agay aisa bhe
// // ho skta hy ky hamary pas or bhe 9-10 functions hon bhot saray functions or varibales banay sy hamara code mess up
// // ho raha hy iss my issue aik or issue bhe aa skta hay ky area sy related or airthmetic operation sy related sara code
// // aik hi jagah para hy or yah bhe possible hy ky jo varibles globally decalred han woh or bhe bhot sy functions my use ho
// // rahy hon jis ki wjah sy code mix up ho raha hy to ab ham kiya kren?
// // Aisi tamam chezo sy bachnay ky liye ham OOP use karty han taky har entity sy related code yani har aik block (unit) sy related
// // code ki apni class hoti hay or uss class my uss ki properties or methods hoty han iss sy code mess up nahe hota yani
// // or iss syh code ki reusiblity barh jati hy or code ko maintain karna bhe easy hojata hy.
// // yah aa skta hy ky saray functions aik to mix up howy wy han

// // Just dummy code for explaning Procedural Programming vs OOP.
// let num1 = 10;
// let num2 = 20;
// let radius = 10;
// // Code related to area
// function area(num1, num2) {
//   return num1 * num2;
// }
// console.log(area(num1, num2));

// function areaOfCircle(num1, num2, radius) {
//   return (num1 + num2) / radius;
// }
// console.log(areaOfCircle(num1, num2, radius));

// // Code related to Airthmetic operations
// function add(num1, num2) {
//   return num1 + num2;
// }
// console.log(add(num1, num2));

// function sub(num1, num2) {
//   return num1 - num2;
// }
// console.log(sub(num1, num2));

// // Note: HERE, what we noticed that the all code is getting mixed up. Wether it is related to finding areas and airthmetic
// // operation. That is why we prefer OOP that allows us to create blocks(unit) of code related to each entity. Means that i can
// // create a class in OOP of (Class airthemetic) opertation where i can maintain code related to airthmetic operations and
// // same as i can also create a class realeted to Area where i can maintain code only related to area this things will
// // make the my code safer from mixing up and also increase the resuiblity and easy maintainiblity of my code.

// // ------------------------------Encapsulation using Procedural programming---------------------------------------------
// let object = {
//   radius: 10,
//   calculateRadius() {
//     return Math.PI * this.radius * this.radius;
//   },
// };
// // object.radius = 20;
// console.log(object.calculateRadius());
// // Iss trha karany sy ho kia raha hay ky mery functions ky parameter reduce hon gy han kiu ky function ky andar my this
// // use kar rahy han to woh this usi object ky andar ki values ko hi access karr raha hy.

// // --------------------------------------Why we need to use encapsulation?-----------------------------------------------
// // Koi bhe aisi chezain jis ka hamey lagta hy ky hamey outside user ko uss ka access nahe dy skty yah access nahe dena
// // chaihyee kisi varibale ka taky woh usy update na kar sky yah  directly use na kar py yah directly modify na kar py to
// // iss trha ky scenerios my ham encapsulation use karein gy. Yah basically outside the class directly access ko restrict
// // karny ky liye use hota hy taky ham class ky bahar values ko access kar ky modify yah update na kar saken

// // Try to Create class first letter with Capital letter.
// class Car {
//   constructor(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     // Here speed is a 'static property'/Default property/Initial value BCZ I am not passing speed while creating instance of a class
//     this.speed = 0;
    
//   }

// // Creating Getter function this will act same as property not like method.
//   // get getSpeed() {
//   //   console.log(typeof this.speed)
//   //   if(this.speed <= 30 && typeof this.speed === "string"){
//   //       return 0;
//   //   }
//   //   return this.speed;

//   // }
//  get getSpeed(){
//   return this.speed;
//  }
  
// // Creating Setter function so the user cannot set wrong values itself. It will restirct the user from setting wrong inputs.
//   set getSpeed(value){
//     console.log("Set speed method: ",this.getSpeed,this.speed, value);
//         if(value >= 0 && typeof value === "number"){
//         this.speed = value;
//     }
//     else{
//         console.log("Invalid Speed Cannot set speed: ")
//     }
    
//   }

// // By creating a simple function we can also acheive the same result.
// // getSpeed() {
// //     if(this.speed <= 30){
// //         console.log("Entering If");
// //         return 0;
// //     }
// //     else{
// //         console.log("Entering else")
// //         return this.speed;
// //     }
// //   }
//   accerlarate() {
//     this.speed += 30;
//     return `In ${this.year} '${this.make}' with model '${this.model}' in ${this.color} color was accelarating 
//    with ${this.speed} KM/HR`;
//   }

//   brake() {
//     if (this.speed > 0) {
//       this.speed -= 10;
//       return `In ${this.year} '${this.make}' with model '${this.model}' in ${this.color} color was braking with 
//    current speed of ${this.speed} KM/HR`;
//     } else {
//       return `Cannot apply brake on car '${this.make}' with model '${this.model}' bcz its speed already at ${this.speed} KM/HR`;
//     }
//   }

//   horn() {
//     return `BEEP! BEEP! '${this.make}' with model '${this.model}' in ${this.color} is Beeping`;
//   }
// }

// // const car1 = new Car(); // Agar dynamic data pass nahe kar rahy to hamari marzi hy constructor function banaye yah nae banayen.
// const bmwI3 = new Car("BMW", "BMW I3", 2022, "Black"); // Setting dynamic values to a constructor function.
// const corolla = new Car("Toyota", "COROLLA", 2023, "White");
// const prius = new Car("Toyota", "PRIUS", 2020, "Grey");
// // -------------------------------Why we need to use encapsulation IN DETAIL?-------------------------------------------
// //--------------------------------TYPE OF ISSUES WE CAN FACE DUE TO WRONG INPUTS----------------------------------------
// // Yahaan ham user ko pura pura access dy rahy han ky woh code my apni marzi sy values daal raha hy jis ki wjah sy error
// // aa skta hy Error kesy aa skta hy mtlb? Dekho ham ny speed ko static define kiya howa tha constructor function ky andar
// // or uss ki value 0 the ham ny aik accerlarate() ka function banaya tha jis ky trigger hony par speed ki value +30 hogy
// // gi or isi trha brake() ka function banaya howa tha jis ky trigger hony par speed -10 hogy gi lekin issue kab aye ga?
// // Issue # 01: Issue tab aye ga ky ham ny user ko direct access diya howa hy code ka ky woh class ky bahar sy speed
// //  ki value ko increase or decrese kara skta hy.
// // Issue # 02: Dosra issue yah bhe aa skta hy ky user speed ki value number my pass karnay ky bajaye koi string value
// // pass kar dy.
// // Issue # 03: Isi trha color ki value ho skta hy user string pass karny ky bajye koi number pass kar dy kiu ky ham ny user
// // ko access diya howa hy ky woh class ky bahar sy code ko modify kar skta hy
// // Issue # 04: And same issues for year, name, model ...
// // Issue # 05: Aisa bhe possible hy ky hamary pas user input hota koi jahaan hamey speed ya color ki value pass karni
// // hoti or user uss ki jagah ghalat data type ki value pass kar deta (yani speed ko string my or color ko number my).
// // Iss trha ky issues anay ki wjah sy hamara code break ho jata hay

// //------------------------------------------HOW TO SOLVE SUCH ISSUES----------------------------------------------------
// // To Aisi sitution my jahaan hamary user ki pas directly access ho ky woh UI ky through code sy pangay lay saky to yah
// // phr class sy bahar code ko access kar ky uss my ghalat values ko input kara saky to aisi tamam situtions sy bachnay
// //  ky liye ham ENCAPSULATION use karty han or uss ky sath GETTER and SETTER function bhe use karty han taky user apni marzi sy values
// // get or set naa kara sakay balkay ham condionally kaam kar saken yani ky agar user speed ko get kar ky string value set 
// // karaiye to ham usy restrict kar saken GETTER OR SETTER function use kar ky kiu ky speed ki values sirf numbers my 
// // hoskti hay.
// // GETTER SETTER functions ham tab use karty han jab hamey values ko update karaana hota hy or phr un ki values ko ham
// // condionally check karwa kar getter or setter ky thorugh set karwaty han Getter or setter function normally PROPERTIES 
// // ki trha hi kaam karty han iss sy user ghalat tarikay sy values ko set nahe kara skta kiu ky iss my ham condionally 
// // har user input ko check karty han jo UI ky though set kara raha hota hy agar user ghalat value set karata hy to yah 
// // GETTER OR SETTER uss ki values set nahe karty jis ki wjah sy hamara code properly work karta hy. 
// // Agar ham getter and setter use nahe karein gy or sath hi my user ghalat input values set kara dy ga to uss sy hamary 
// // code ky andar ki implementation kharab ho skti hay jesy ham ny uper mention kiye howy han 5 trha ky issue aa skta han
// // check line number(114) to in sab chezo sy bachnay ky liye ham GETTER and SETTER use karty han 

// // Object refrence type hay user jab wrong inputs daal kar object my changes kar raha hy to woh changes orignal object
// // my bhe relfect ho rahi han to uss sab sy bachnay ky liye ham orignal object ko clone kar rahy han yani uss ki copy
// // bana rahy han.
// // console.log("Orignal Object is also getting disturbed due to worng input: ",bmwI3);

// // So, to Avoid such issue we are cloning our orignal object.
// let orignalObjectCopy = { ...bmwI3 };
// console.log("Orignal Values:", orignalObjectCopy);

// // -----------------Getting and then seeting values directly without using getter and setter (Poor way)----------------
// // bmwI3.speed = "speed"; //Code chala raha hay magar yah error hay kiu ky speed value cannot bhe a String (Code is breaked).
// // bmwI3.color = 20; //Code chala raha hay magar yah ERROR: hay kiu ky color value cannot bhe a Number (Code is breaked).
// // bmwI3.make = 20000; //Code chala raha hay magar yah ERROR: hay kiu ky make value cannot bhe a Number (Code is breaked).
// // bmwI3.accerlarate(); // speed accelareted to 30
// // console.log(
// //   "Wrong values due to wrong way of setting values: ",
// //   bmwI3
// // );
// // ------------------------Acessing properties values without getter. (Poor way)-----------------------------
// // console.log("Getting Speed Value without Getter: ",bmwI3.speed); // accessing speed using speed property declared in constructor function.
// // console.log("Getting Speed Value without Getter by using function (before setting speed):  ",bmwI3.getSpeed()); // accessing speed by using normal function of getSpeed().
// // bmwI3.speed = "Red" // setting speed value without using setter and cause issues and breakups in the code kiu ky ho skta 
// // //hy user speed number my pass karny ky bajaye string my pass kar dy to code chaly ga sahi magar logically yah ghalat hoga
// // bmwI3.accerlarate();
// // console.log("Getting Speed Value without Getter using function (after setting speed): ",bmwI3.getSpeed());



//--------------------------Acessing and setting properties values using GETTER and SETTER-------------------------------
class Car {
  constructor(make, model, year, color) {
    // OR || isi liye use kar rahy han ky agar koi aik bhe condition true hogayi to yah error throw kar dy ga taky uss 
    // code agy nahe chaly or objects ki mazeed ghalat values koi set naa kara sakay. 
    if (typeof make !== 'string' || typeof model !== 'string' || typeof color !== 'string', typeof year !== 'number') {
      throw new Error('Make, model, and color must be strings and year should be in number');
    }
  // this.make = make; // Agar my underscore use nahe kar raha tha uss ki wjah sy (Uncaught RangeError: Maximum call stack
  //  size exceeded) ka error aa raha hy kiu ky this.make = make yani jo value this.make my ati the wohi = make my set 
  // ho jati the or isi trha infinite time bar bar yah chal raha tha kiu ky ham setter function ky thorugh values set karwa 
  // rahy thy to yah bar bar khud values set kar raha tha again again infnite time chalta jaa raha tha kiu ky variable or
  // value dono ky name same thy to iss sy bachnay ky liye ham varibale ka name change kar dein gy jesy ham ny varible ka 
  // name change karny ky liye uss ky sath underscore laga diya taky infoite chalnay sy ruk gy check below examples
// Private variable conventionally indicated by underscore
    this._make = make;
    this._model = model;
    this._year = year;
    this._color = color;
    this.speed = 0;
}
// Here, I will create the getter function of all properties so that i can get their values and then i will create the 
// setter function of all the getter functions so that the user cannot be able to set the worng inputs this process of 
// restricting the user or to protect our code from setting the set wrong inputs is called encapsulation.
// For 1st constructor value (MAKE)

// Point to remember: Getter is a function but it will act as a property because we can access it like a property outside
// the class for example==> bmw.getMake (agar yah function hoti to ham isy bmw.getMake() kay ky access karty).
get getMake() {
    return this._make;
  }
// Creating Setter function so the user cannot set wrong values itself. It will restirct the user from setting wrong inputs.
set getMake(value) {
    if (typeof value === 'string') {
      this._make = value;
    } else {
      console.log('Invalid Make value: ',value);
    }
  }

// For 2ND constructor value (MODEL)
get getModel(){
  return this._model;
}
set getModel(value){
  if(typeof value=== "string"){
    return this._model = value
  }
  else{
    console.log("Invalid Model value: ",value)
  }
}

// For 3RD constructor value (SPEED)
 get getSpeed(){
  return this.speed;
 }
// Creating Setter function so the user cannot set wrong values itself. It will restirct the user from setting wrong inputs.
  set getSpeed(value){
    console.log("Set speed method: ",this.getSpeed,this.speed, value);
        if(value >= 0 && typeof value === "number"){
        this.speed += value;
    }
    else{
        console.log("Invalid Speed Cannot set speed: ",value)
    } 
  }
  accerlarate() {
    this.speed += 30;
    return `In ${this.year} '${this.make}' with model '${this.model}' in ${this.color} color was accelarating 
   with ${this.speed} KM/HR`;
  }

  brake() {
    if (this.speed > 0) {
      this.speed -= 10;
      return `In ${this.year} '${this.make}' with model '${this.model}' in ${this.color} color was braking with 
   current speed of ${this.speed} KM/HR`;
    } else {
      return `Cannot apply brake on car '${this.make}' with model '${this.model}' bcz its speed already at ${this.speed} KM/HR`;
    }
  }

  horn() {
    return `BEEP! BEEP! '${this.make}' with model '${this.model}' in ${this.color} is Beeping`;
  }
  static greeting(){
    return "Hello";
  }
}

const bmwI3 = new Car("BMW", "BMW I3", 2022, "black"); 
console.log(bmwI3);
bmwI3.getMake = 12345 // will not set the worng value due to its invalid data type
bmwI3.getModel = 123 // will not set the worng value due to its invalid data type
bmwI3.accerlarate(); //30
bmwI3.accerlarate(); // 30 (30+ 30  speed = 60)
bmwI3.getSpeed= "Red123" // will not set the worng value due to its invalid data type
// bmwI3.getSpeed= 40 // 30 + 30 + 40 speed = 100 sucessfully speed updated;
console.log(bmwI3); // ORIGNAL OBJECTS REMAINS SAME BECAUSE USER INPUTS WRONG VALUES AND IT WILL NOT ALLOW IT TO SET THE WORNG VALUES IN OBJECT WITH THE HELP OF GETTER AND SETTERS
// CONCLUSION:
// We noticed that now a user cannot set wrong inputs values mtlb ky agar user ko make ya model my string value pass karni
// the or woh number my value pass kar deta hy to getter function uss ki values uthaye ga or setter my jaa kar condionally
// check karwage ga agar woh values condition par pora nahe utaray gi to un ghalat inputs ki values ko object my set nahe
// honay dy ga

// Finally the encapsulation in completed and getter and setter functions are also completed

// ---------------------------------------Topics # 02: Access modifiers:-------------------------------------------------
// Ham ny aik cheez note ki hay ky getter and setter ky through ham ny worng inputs values ki values par validations to laga
// dein han lekin aik or issue bhe hay jo ham ny note kiya hy woh issue kiya hy? Dekho agar user direct constructor ky
// andar ki properties ko class ky bahar direct access kar ky wrong data type ki values ko set kara dy to kiya hoga. 
// Ham ny getter or setter to banaye han lekin user abi bhe user outside the class values ko directlty manupulate kar skta hay
//  to ab usy kesy rokain gy 
// For example: 
bmwI3._make = 2000; // make value cannot be a number
bmwI3._model = 12323; // model value cannot be a number
bmwI3.speed = "red car"// speed value cannot be a string.
console.log(bmwI3) // Wrong inputs ki wjah sy ham data ko protect nahe kar saky or worng inputs aik bar phr object my save ho gy han 
// NOW TO SOLVE THESE ALL ISSUES WE WILL USE ACCESS MODIFIERS
// There are 3 types of access modifiers 
// 1) Public
// 2) Private
// 3) Protected

// Public: By defualt all properties and methods are public yani jesy ky hamari class Car my hamari sari properties by
// default PUBLIC hoti han yani ham in tamam properties or methods ko class ky bahar use kar skty han jis ki wjah sy
// hamary pas issue aa raha tha ky user class ki properties ko class ky bahar access kar ky un my gahalat values ko input 
// kara raha tha to ham agar chahty han ky user Class Car ki properties ko Class Car sy bahar use na kary to ham un tamam
// properties ko PRIVATE bana dein gy.

// Private: Agar ham chahty han ky user class Car ki properties or methods ko class ky bahar use naa kar sky to ham Class
// Car ki properties ko PRIVATE bana dein gy. Isi trha sy hamara jo issue aa raha tha ky user properties ko class ky
// bahar access kar ky ghalat values set kara deta tha to ab user ko un tamam properties ka access nahe milay ga jo 
// PRIVATE hongi. Properties or methods ko private banay sy aik or issue aa skta hy ky ham ny jin jin Properties or methods ko 
// private banaye hoga woh ab hamey child class my bhe access karny ko nahe milain gy lekin iss ka bhe solution hay use 
// Protected Access modifier

// Protected: Dekho jab ham ny tamam properties ko private kar diya lekin ab kisi property yah method ko mujhy child class
// my kahen use karna par jata hy to mujhy woh accesiable nahe hongi to agar my chahta hon ky koi aisi property yah method
// jo mery child class my kaam aa rahi ho jab my inheritance kar raha hon to un propteries or methods ky liye my PROTECTED
// use karo ga. Iss sy yah benefit hoga ky user class sy bahar directly manupulation bhe nahe kar saky ga or my un 
// propteries or methods ko child class my bhe inherit(use) kara sako ga

console.log(Car.greeting());