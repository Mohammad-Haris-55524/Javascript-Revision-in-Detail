// alert(
//   "Starting with name of ALLAH who is the most benificial and the most magnificent"
// );
// **************************************OPERATORS***************************************
// The numbers (in an arithmetic operation) are called operands.
// The operation (to be performed between the two operands) is defined by an operator.
// operator(+ , = - / are operators) and operand (5, 20 ,10 value are operands)
// = is assignment operator

// var x = 10;
// var y = 20;
// // method # 01:-
// console.log("Value of x before increment = " + x);
// x++;  //10 mem 11
// console.log("Value of x after increment = " + x++ ,x); //post increment   //11 mem 12
// x++;  //12 mem 13
// x++; //13 mem 14
// --x; //13
// ++x; //14
// ++x; //15
// console.log(x++);  //15 mem 16 
// console.log(x++,++x,x++,x);  //16,18,18 ,19

//method #02:-

// alert("value of x before increment x = " + x++);
// alert("value of x after increment x = " + x);

// alert(
//   "value of x before decrement x = " +
//     x-- +
//     "The value of x after decrement x = " +
//     x
// );

// alert("The value of ++y is = " + ++y); //pre increment
// alert("Now the value of y is = " + y);

// var z = 12;
// alert("The value of --z is = " + --z);
// alert("The value of z is = " + z);
// var a = 10,
//   b = 20;
// alert(--a + --b + ++b);
// alert("a = " + a + "b =" + b);
// var a = 10;
// a++; //10 -->11
// alert(++a + a--); //12+12-->11 =24
// a--; //11 --> 10
// alert(a-- - --a); // (10-->9 - 8=2 (10-8=2))

// alert(a++);
// alert(a++)
// alert(a--); //10 -->9
// alert(a--); //9 -->8
// alert(--a); // 7

// var z = 10;
// //z = z + 10;
// z += 10;
// alert(z);
// *************************Operator Precedence
// Operator precedence describes the order in which operations are performed in an arithmetic expression.
// Example
// console.log(2-2+3+3*4/2) //here it will follow DMAS RULE Ans ==> 9
// console.log((2-2)+(3+3)*(4/2)); // here it will also follow BODMAS with respect to brackets ==> 12 
console.log((2-2) + 3+3 * 4/2); //9
//*************************************TYPE CASTING (COERCION OR TYPE CONVERSION)******************************************/
// Q) Typecasting in JavaScript means converting one data type to another data type i.e., the conversion of a string data type to Boolean or the conversion of an integer data type to string data type. The typecasting in JavaScript is also known as type conversion or type coercion
// ANS) The typeof operator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.
// Q) What is the d/f b/w type conversion and coercion
// ANS) Type conversion refers to the process of explicitly changing the type of a value, whereas coercion refers to the implicit type conversion that happens when JavaScript tries to perform an operation with values of different types.
// In JavaScript there are 5 different data types that can contain values:
// string
// number
// boolean
// object
// function

// And 2 data types that cannot contain values:
// null
// undefined

// *********FALSY VALUES ARE (5 types) *************
// undefined, Null, ""(empty string), 0(zero means false),  NaN

//Why we use type of operator
// You can use the typeof operator to find the data type of a JavaScript variable
// function greet(){
//     console.log("hello");
// }
// greet();
// console.log(typeof greet); //function

// const arr = ["apple" ,"mango"];
// console.log(typeof arr); //object

// const obj = {
//     name:"m haris",
//     "reg id no": 55524
// }
// console.log(typeof obj); //object

// const num1 = 14;
// const str = "abc"
// // const output = num1 + str; //14abc type: string
// const output = num1 - str; //NaN type: Number (jab number ko string ky sath solve karain(except addition kiu ky woh concat hojata hy) gy NaN aye ga or zero ko zero ky sath divide karany par bhe NaN aye ga)
// console.log(typeof output, " ", output); 

// let x =null;
// console.log("type of null: ",typeof x); //object

// let y = "John";
// let x = + y;
// console.log(typeof y, typeof x); //y: string, x: number


// Certainly! Coercion in JavaScript is the process of automatically converting one data type to another. JavaScript has two types of type coercion: implicit and explicit.

// 1. Implicit coercion: JavaScript can automatically change the type of a value to work with another type. For example:

// ```javascript
// var x = 5;
// var y = "10";
// var result = x + y; // JavaScript converts the number 5 to a string and concatenates it with the string "10"
// ```

// Here, the number `5` is automatically converted to the string `"5"` to perform string concatenation with the string `"10"`. This is an example of implicit coercion.

// 2. Explicit coercion: This type of coercion occurs when a developer manually converts a value from one type to another. For example:

// ```javascript
// var x = "5";
// var y = 10;
// var result = Number(x) + y; // JavaScript explicitly converts the string "5" to a number and adds it to the number 10
// ```

// In this case, the string `"5"` is explicitly converted to a number using the `Number` function, allowing it to be added to the number `10`.

// Understanding coercion is important in JavaScript because it affects how values are compared and manipulated. Developers should be aware of the implications of coercion to ensure that their code behaves as expected.

// let num1 = "10abc";
// let num2 = 20;
// let num3=30;
// let ans = num2 + num3 + num1;
// console.log(typeof ans,":", ans);

// let num = 42;
// let str = "The answer is " + num; // this is called implicit conversion
// console.log(typeof num,":",num, typeof str, ":",str)
// console.log(typeof str);

// let num = 42;
// let str = "42";
// console.log(num == str); // true
// console.log(typeof num,":",num, typeof str, ":",str)

// console.log([]);

// undefined null are not use for type convesion

// const str = "hello";
// const bool = Boolean(str);
// console.log(bool);

// const str = "";
// const bool = Boolean(str); //false
// console.log(bool);

// empty array is truthy 2 arrays ko jab bhe apas my compare karein gy beshak value un ki same ho yah diffrnet ho woh false hi return karein gy 
// console.log([] == []); //false
// console.log([1] == [1]); //false
// console.log([] == ![]); //True
// console.log([1] == []); //false
// console.log([0] == [0]); //false
// console.log([]); //false
// console.log(true == ![]); //false
// console.log(true == [1]); //true
// console.log([]); // empty array is true
// main cheez jab ham 2 same data types ko compare karty han to un ka behaviour same rehta hy magar jesy hi ham 2 differnet data types ko apas my compare karty han jesy array ko boolean ky sath to hamesha array hi uss data type my change ho gy ga jis sy woh compare ho raha ho
// console.log(12/0) //infinity
// console.log("what: ", 2/0); //infinity
// console.log("w" == Infinity);
// console.log('2' + 20); //220
// console.log('2' - 20); // here it will implicitly converts the data type of string to number itself and answer = -18
// console.log('2' * 20); //40
// console.log('2' / 20); //0.1
// console.log("abc" - 24); //NaN
// console.log("abc" + 24) //abc24
// console.log("abc" * 24) //NaN
// console.log(0/0); //NaN 

// window.prompt("enter your name");
// const a = false;
// console.log(Number(a)); //type casting (Explicit conversion) boolean to number
// console.log(a.toString()); //Boolean to String

// let x =10;
// let y = x + + "5"; //+ changes string 5 to number ans==>15
// console.log(y);

// console.log(typeof +"10"); //number

//************Exponentiation Assignment**********
// let y = 10;
// let z = 5;
// console.log(y**z); //10 ky uper power 5

// let x = 10;
// x **= 5;
// console.log(x); //100000

// let x = 10;
// x %= 5;
// console.log(x)