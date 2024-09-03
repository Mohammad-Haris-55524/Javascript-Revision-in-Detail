// Try to Create class first letter with Capital letter. 
class Car{
// Creating a constructor() method for passing dynamic data 
// These are the Properties of the car. Jo chezain har Car ki change ho skti han unhay constructor ky andar rakh kar
// instance create karaty time dynamically pass karen gy kiu ky yah har car ki dosri CAR sy different hongi.
constructor(make,model,year,color){ // NOTE: If i have nothing in dynamic data to pass so then hamari marzi hy constructor function banayen yah nahe banayen.
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    // Here speed is a 'static property' BCZ I am not passing speed while creating instance of a class 
    this.speed = 0;
}
// Jo cheez har class my same hi hoskti hy un ky methods bana dein gy taky bar bar use kar saken.
// Here, we are creating multiple methods(functionalities) that a car can perform/do.
// Syntax # 02 for creating method in classes (ES 6 new updated syntax)
accerlarate(){
// Car speed will be incresed by 30 km/hr on every trigger of accerlarate() function. 
 this.speed += 30;
//  this.horn();
return(`In ${this.year} '${this.make}' with model '${this.model}' in ${this.color} color was accelarating 
 with ${this.speed} KM/HR`)
}

// Car speed will be decreased by 10 km/hr on every trigger of this brake() function. 
brake(){
if(this.speed > 0){
this.speed -= 10; 
 return(`In ${this.year} '${this.make}' with model '${this.model}' in ${this.color} color was braking with 
 current speed of ${this.speed} KM/HR`)}
else{
    return(`Cannot apply brake on car '${this.make}' with model '${this.model}' bcz its speed already at ${this.speed} KM/HR`)}
}

// Car will HORN when this function will be triggered
horn(){
    return(`BEEP! BEEP! '${this.make}' with model '${this.model}' in ${this.color} is Beeping`)}
}


// Here Creating mulitple instances(OBJECTS) from a blue print(CLASS).
// Constructor method tab tab call hota hy jab ham class ka instance create karty han
// const car1 = new Car(); // Agar dynamic data pass nahe kar rahy to hamari marzi hy constructor function banaye yah nae banayen. 
const car1 = new Car("BMW","BMW I3", 2022, "Black"); // Setting dynamic values to a constructor function.
const car2 = new Car("Toyota","COROLLA", 2023, "White");
const car3 = new Car("Toyota","PRIUS", 2020, "Grey");
const car4 = new Car("Honda","ACCORD", 2015, "Silver");
console.log("Before Any Function triggers: ",car1);
console.log(car1.accerlarate());
console.log(car1.accerlarate());
console.log("Accelaration: ",car1);
console.log(car2);
console.log(car2.brake());
console.log(car2.accerlarate());
console.log(car2);
console.log(car3);

// Here i am using inheritance(Yahaan Car (base class) or (parent class) bol lein aik hi baat hay or electricCar child
// class hay jo parent class sy properties or methods ko derived kar rahi hay)
class ElectricCar extends Car{
constructor(name,model,year,color,batteryCapicity){
// In JavaScript, the super keyword is used to call functions on the parent class within a subclass. This is particularly
// useful when you want to access methods or properties defined in the parent class from the child class, or when you want
// to override methods in the parent class but still call the original implementation.
super(name,model,year,color) //Here, accesing properties of parent Class Car.

// What If my super keyward use na karo kiu ky my kuch bhe parent class sy nahe mangwana chahta to kiya child 
// class(ElectricCar) ka output aa gy ga mery pas? Answer: No, child class ko run karwana chahty ho to super keyward
// zaroor use karna pary ga warna child class work nahe kary gi behsak ap parent sy kuch nahe bhe mangwa rahy ho super() ko
// empty rakh do magar use karo warna child class run nahe hogi.
    // super(); //Agar parent sy kuch nahe mangwana to empty rakh skty han isy...
    // Here, i have created a new property in child class which was different from parent class.
    this.batteryCapicity = batteryCapicity;
}
charge(){
return(`In ${this.year} '${this.make}' with model '${this.model}' in color ${this.color} With Battery Capicity: ${this.batteryCapicity} `)
}

// My yahaan par aik method bana kar parent class ky method ko access karr raha hon 2 tarkio sy. Zarori nahe hay ky my 
// method bana kar hi parent class ky method ko use karo uss ky begahir bhe use kar skta hon check brake() example for it
electricCarAccelaration(){
// Super keyward ky through ham parent class ky method ko ko child class ky andar use kar skty han or iss ky begahair bhe
// this keyward ky though bhe access kar skty han.
// Method # 01: By using this keyward:
return(this.accerlarate());
// Method # 02: By using super keyward:
// return(super.accerlarate());
}
// What is method overloading? Or method over writting ?
// Here I am using the parent class method and making some changes into it these changes will only affects the child class
// method brake() parent class method brake() will remain same as declared in parent class.
brake(){
if(this.speed > 0){
this.speed -= 5;  // new change made
 return(`In ${this.year} '${this.make}' with model '${this.model}' in ${this.color} color was braking with 
 current speed of ${this.speed} KM/HR`)}
else{
    return(`Cannot apply brake on car '${this.make}' with model '${this.model}' bcz its speed already at ${this.speed} KM/HR`)}
}

}
const electricCar1 = new ElectricCar("BMW","BMW I3", 2022, "black",100);
console.log("Electric car: ",electricCar1)// child class object
console.log(electricCar1.charge());
console.log(electricCar1.accerlarate());// HERE, yah check karey ga ky accelarate() method iss ki child class my hay yah
//nahe agar nahe hay to parent class sy inherit kar lay ga. Or wesy bhe child class my accelarate() ka method nahe hy. Note: Yah phely child class my isi liye check kary ga kiu ky ham instance child class ka bana rahy han.
console.log("I am derived from parent Class to child class: ",electricCar1.electricCarAccelaration());
console.log("Electric Car(child class) braking: ",electricCar1.brake()); //child class is braking with -5 km/hr rate
console.log(car1); // parent class object previois speed after accelaration is 60 km/hr not on real time upate of object do not see inside object beacuse it updates on real time.
console.log("Parent Class breaking: ",car1.brake());  //parent class is braking with -10 km/hr rate





// Syntax # 01 for creating method in classes
// accerlarate= function(){
//  this.speed += 10;
//  console.log(`In ${this.year} '${this.make}' with model '${this.model}' in ${this.color} color was accelarating with ${this.speed} KM/HR ` )
// }


// ****************************************Example # 02 of INHERITANCE*************************************************
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      return "Generic Animal Sound";
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // calling the parent class constructor
      this.breed = breed;
    }
  
    // makeSound() {
    //   return "Woof Woof!";
    // }
  
    getFullDescription() {
      return `Name: ${this.name}, Breed: ${this.breed}`;
    }
  
    makeAnimalSound() {
        //   return super.makeSound(); // calling the parent class method by using super keyward.
        return this.makeSound() // calling the makeSound() method using this mtlb agar isi child class my makeSound() hay to laa kar dy do warna my parent sy utha loga
    }
  }
  let parentDog = new Animal("husky");
  console.log(parentDog.makeSound());
  console.log(parentDog.makeSound());
  // Creating an instance of the Dog class
  let myDog = new Dog("Buddy", "Labrador");
  
  // Accessing properties and methods of Dog class
//   console.log(myDog.getFullDescription()); // Output: Name: Buddy, Breed: Labrador
  console.log(myDog.makeSound()); // Output: Woof Woof!
  
  // Accessing method from parent class using super
  console.log(myDog.makeAnimalSound()); // Output: Generic Animal Sound
  

