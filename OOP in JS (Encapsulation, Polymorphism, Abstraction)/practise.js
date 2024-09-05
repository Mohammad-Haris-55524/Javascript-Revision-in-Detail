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
    if (
      (typeof make !== "string" ||
        typeof model !== "string" ||
        typeof color !== "string",
      typeof year !== "number")
    ) {
      throw new Error(
        "Make, model, and color must be strings and year should be in number"
      );
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
    if (typeof value === "string") {
      this._make = value;
    } else {
      console.log("Invalid Make value: ", value);
    }
  }

  // For 2ND constructor value (MODEL)
  get getModel() {
    return this._model;
  }
  set getModel(value) {
    if (typeof value === "string") {
      return (this._model = value);
    } else {
      console.log("Invalid Model value: ", value);
    }
  }

  // For 3RD constructor value (SPEED)
  get getSpeed() {
    return this.speed;
  }
  // Creating Setter function so the user cannot set wrong values itself. It will restirct the user from setting wrong inputs.
  set getSpeed(value) {
    console.log("Set speed method: ", this.getSpeed, this.speed, value);
    if (value >= 0 && typeof value === "number") {
      this.speed += value;
    } else {
      console.log("Invalid Speed Cannot set speed: ", value);
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
  static greeting() {
    return "Hello";
  }
}

const bmwI3 = new Car("BMW", "BMW I3", 2022, "black");
console.log(bmwI3);
bmwI3.getMake = 12345; // will not set the worng value due to its invalid data type
bmwI3.getModel = 123; // will not set the worng value due to its invalid data type
bmwI3.accerlarate(); //30
bmwI3.accerlarate(); // 30 (30+ 30  speed = 60)
bmwI3.getSpeed = "Red123"; // will not set the worng value due to its invalid data type
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
bmwI3.speed = "red car"; // speed value cannot be a string.
console.log(bmwI3); // Wrong inputs ki wjah sy ham data ko protect nahe kar saky or worng inputs aik bar phr object my save ho gy han
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

//------------------------------ POLYMORPHISM POLY MEANS MANY MORPHISM MEANS FORMS--------------------------------------

// Polymorphism is a key concept in object-oriented programming (OOP) that allows objects of different classes to be 
// treated as objects of a common superclass. It enables code to work with objects of various types in a uniform way, 
// providing flexibility and extensibility to the codebase.

// In JavaScript, polymorphism can be achieved through method overriding and method overloading (check line 478 for detail)

// Super class (Parent class/Base class)
class Radius {
  // Main Method of(Parent class) can also have its multiple methods with same method name but with different definations
  //  that are used inside the derived(child class) class.
  constructor(lenght, width){
    this.lenght = lenght
    this.width = width
  }
  findRadius() {
    throw new Error("find radius function not found");
  // return this.lenght + this.width;
  }
}

// Sub Class(Derived class/ child class)
class Circle extends Radius {
  constructor(radius) {
    // Super keyward is used in a child class to access the properties and methods of its base/parent class
    super();
    this.radius = radius;
  }
  // Main method is inherited in a child class from a parent class with same method name but with different method 
  // defination this phenomenon is known as Polymorphim.
  // We are Overriding the method of parent class
  findRadius() {
    return Math.PI * (this.radius * this.radius);
  }
}
// Creating Intance of a child class(Circle) to pass values to a constuctor function radius=10
const radius = new Circle(10);
console.log("Circle Radius: ",radius.findRadius());
console.log(radius.radius);

// Sub Class(Derived class/ child class)
class Square extends Radius {
  constructor(lenght, width) {
    // Super keyward is used in a child class to access the properties and methods of its base/parent class
    super(lenght, width);
  }
  // Main method is inherited in a child class from a parent class with same method name but with different method 
  // defination this phenomenon is known as Polymorphim.
  // We are Overriding the method of parent class.
  findRadius(){
    return (this.lenght * this.width);
  }
}
// Creating Intance of a child class to pass values to a constuctor function lenght=10, width=20
const square = new Square(10,20)
console.log("Square Radius: ",square.findRadius());
console.log(square.lenght, square.width);

class Rectangle extends Radius {
  constructor(lenght, width) {
    super();
    this.lenght = lenght;
    this.width = width;
  }
// What if findRadius() method is not created in child class(sub class) and this same method findRadius() is already 
// present in parent class(Super class) What will happen if we call this method in child class? Either it will show
// a error or not? 
// It will not show any error : Iss surat my parent class wala method execute hogy ga kiu ky child class my agar kabhi
// koi method na banaya ho or jis name sy ham child class ky method ko access karna chah rahy han usi same name ka method
//  parent class my present ho to JS super() keyward ka faida uthaty howy hamey parent class wala method la kar dy day gi
// isy inheritance bhe bolty han. check line 478
}
const rectangle = new Rectangle(5,10)
// console.log(rectangle.findRadius());  // What will happen if child class have not findRadius() method 
// Answer: The super class method will be executed yani parent wala method execute hogy ga.
// console.log(rectangle.radis());


// -----------------------Differnce between method overloading and method overriding----------------------------------- 
// Method Overriding: Method overriding occurs when a subclass provides a specific implementation of a method that is 
// already defined in its superclass. This allows objects of the subclass to replace the implementation of the method 
// inherited from the superclass.

// Method overriding tab hoti hay jab child class(sub class) my koi aisa method mojood ho jo ky parent class(super class)
// my bhe mojood tha (yani parent class or child class ky method ky name same ho jayen to konsa method execute hoga uss ki
// child class my?) . Iss sy hoga yah ky jo child class ka method hay woh parent class ky method ko override kar day ga
// yani parent class wala method ky bajye child class wala method execute hoga.

// Querie #01 related to method overriding ....
// Iss sy aik or sawal banta hay for example: Agar my aik method access karna chahta hon jo meri child class my hay hi 
// nahe to kiya hoga? Answer: Error aagy ga (rectangle.radis is not a function) in etc class.

// Querie #02 related to method overriding .....
// Iss sy agy aik or sawal bhe banta hay for example: Agar my aik method access karna chahta hon jo meri child class
// my hay hi nahe lakin usi same name ka method meri parent class my mojood hay mtlb yah ky radius() name ka method meri
// child class my tha nahe lekin my access karna chah rha tha or yahi same name ka method radius() meri parent class my
// mojood tha to ab kiya hoga? 
// Answer: Iss surat my parent class wala radius() method automatic call hogy ga kiu ky ham child class ko extend kar rahy 
// hty han parent class sy or sath my super() keyward use kar rahy hoty han to iss sy hoga yah ky phely yah check kary ga
// ky radius() wala method child class my hay agar nahe hay to parent class sy lay kar aagy ga 

// Method Overloading: Method overloading involves defining multiple methods with the same name but different parameters
// within the same class or object. JavaScript does not support method overloading directly, but you can simulate it by
// checking the number or types of arguments passed to a method and then implementing different behaviors accordingly.

// Queries related to method Overloading .....
// Maan lo ham ny same class ky andar same name sy 2 function bana diye phelay method my 1 parameter pass ho raha tha
// or 2nd method my 2 parameter pass ho rahy thy jab ham inhay call karein gy to method call karty time in my arguments
// pass karein gy phelay walay method my 1 augument pass karein gy or 2nd waly method my 2 arugument pass karein gy to yah 
// batao ky JAVASCRIPT ko kesy pata chaly ga konsa method execute karana hay kiu ky dono ky name same hay to kiya 
// Javascript baad waly function ko phely walay function sy replace/override kar dy gi ?
// Answer: JavaScript does not support method overloading. JS apna normal behaior hi show kareye ga yani same name sy 2 
// method agar bana diye han to JS baad waly function ko phelay waly function sy override kar dy ga JS my method
// overloading supported nahe hoti. Han lekin agar koi or language hoti jesy C++ JAVA to kiya hota ... 
// AGAR C++ JAVA languages hoti to yah method ko override nahe karey ga balkay yah LANGUAGES(C++ JAVA) itna effiecent hay
// ky numbers of arguments ki based par pehchan lay ga ky ham konsay method my kis ki value pass kar rahy han or konsa 
// wala method call karwana chah rahy han on the bases of its passing arguments into a method while calling it.

// Example for method overloading
class MathUtils {
  // Overloaded method to calculate the area of a square
  static calculateArea(side) {
    console.log(side)
    return side * side;
  }
  // Overloaded method to calculate the area of a rectangle
  static calculateArea(length, width) {
    return length * width;
  }
}
// Call the appropriate overloaded method based on the number of arguments
console.log("Method Overloading area of a square: ",MathUtils.calculateArea(5)); //According to (C++ JAVA) Output: 25 (area of a square). But in JS it show NAN Because JS my baad wala function phelay waly function ko override kar dy ga kiu ky dono ky name same hay.
console.log("Method Overloading area of a rectangle: ",MathUtils.calculateArea(4, 6)); // Output: 24 (area of a rectangle)

// ---------------------------------WHAT ARE STATIC PROPERTIES AND METHODS--------------------------------------------
// Why Static Properties and Methods? 
// Kabhi ham chahty han ky jo properties and methods ham bana rahy han un ka access objects ky pas naa hon yani woh objects
// jo ham instance create kar ky banatay han un ky pas in properties or methods ka access nahe hoga jo bhe ham static 
// keyward ky through banatay han Or yah bhe ky ham static properties or methods ko bina object banaye bhe call kar skty
// han directly hamey isy call karny ky liye new keyward ky through instance bana kar call karny ki zarorat nahe parti.

// POINT TO REMEMBER:
// Basically jo bhe properties yah methods static keyward ky through banty han woh sirf usi class ko hi access hoty han 
// jin ky andar woh baney hoty han objects ko in ka access nahe hota 

// We can set static properties of a class by 2 ways.
// 1) Inside the class using static keyward. A good and a cleaner way to iniatialize static properties and methods.
// 2) Outside the class by just accessing the class name.property/method = ... etc (This is a poor way).

// Method # 01
class Animal{
  constructor(name,color){
    if(typeof name !== "string" || typeof color != "string"){
      throw new Error ("Type Error !!")
    } 
    this._name = name
    this._color = color
  }
  static typeOfAnimal = "Carnivores"; // It is a static property(Good way and clean syntax way to iniatialize static property)
   
  // It is a static Method: (Good way and clean syntax way to iniatialize static Method)
  static animalType(){
    return "I AM CARNIVORES ANIMAL";
  }
// --------------------------------------------What are static block?--------------------------------------------------
// Static block my jo bhe code likhty han woh khud run hojata hy usy run karny ky liye class yah object create karwanay 
// ki zarorat nahe hoti or important thing that kia iss ka static block my likhy gy code ka access kahaan kahaan hoga?
// Static block my likhy gay code ka access ka sirf usi class my hoga jis my isy create kiya gya hoga yani iss ka scope
// within a class hi hoga global scope nahe hoga iss ka.

static {
  console.log("hello");
}
  greeting(){
    return "Hello i am an Parent Animal Class";
  }
  sound(){
    return "Some generic sound"
  }

}
class Dog extends Animal{
  constructor(name,color,teeth){
    // Super keyward is used to access the properties and of parent class into a child class
    super(name,color) // accesing properties of parent class
    // Here, I am accesing parent class method into a child class method by using super keyward.
    super.greeting(); // accesing method of parent class into a child class
    // super.sound();
    this._teeth = teeth
  }
  sound(){
    return "I am from (DOG) child class: Woof woof";
  }
}
class Cat extends Animal{
  constructor(name,color,teeth){
    super(name,color)
    this._teeth = teeth;
  }
  sound(){
    return "I am from (CAT) child class: meo meo";
  }
}

// For parent Class:
const animal1 = new Animal("cat", "black");
console.log(animal1);
// console.log(animal1.sound());

// For child Class Dog:
const animal2 = new Dog("Pitbull","White", "Sharp teeth");
console.log(animal2);
console.log(animal2.greeting());
console.log(animal2.sound()); // Yah phelay check kary ga ky sound() ka method child class my hay yah nahe Agar sound() 
// ka method na bhe howa child class my or super() keyward bhe ham ny use na kiya ho child class my tab bhe yah khud sy
// hamey parent class ka method la kar dy day ga agar parent my isi name (sound()) sy method para howa ho to. 
// console.log(animal2.sound1()); //Acha Tab kiya hoga agar koi aisa method jo parent or child dono classes my na ho ?
// Iss surat my error aye ga Uncaught TypeError: animal2.sound1 is not a function 

// For child Class Cat:
const catAnimal = new Cat("mano","Black","small and sharp teeths");
console.log(catAnimal);

//--------------------------------HOW TO ACCESS STATIC PROPERTIES AND METHODS----------------------------------------
// Static properties and method cannot be accessed by creating an instance of a class but they can be accessed simply 
// just by using the class name.
// Static properties directly class my ati hay object my nahe ati object ka mtlb jo instance bana kar access karty han 
// uss my yah static properties show nahe hoti yah sirf or sirf directy class my hi ati han jab bhe ham static keyward 
// sy koi property yah method ko iniatialize karwaty han.
console.log(Animal.typeOfAnimal)
console.log(Animal.animalType());

// Method 02 of creating Static properties and method ==>> By just accessing the class name outside the class and provide
// them the property or method as according to our need.

// Iss method sy sirf sirf property ko hi override kar skty han method ko nahe kar skty 
Animal.typeOfAnimal = "herbivores"; // it will override the old property
console.log(Animal.typeOfAnimal)



