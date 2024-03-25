// // ROUND OFF || FLOOR VALUE || CEIL VALUES FOR POSTIVE NUMBERS
//agar point ky baad values 0 hon sab to round floor or ceil jo value enter ki hoti hy wohi return kar dety han 
// let numbers = +prompt("Enter any number: ");
// console.log(numbers);
// let round_Num = Math.round(numbers);
// console.log(round_Num); // math.round() will round about the value
// let floor_Num = Math.floor(numbers);
// console.log(floor_Num); // math.floor() will return the the value before decimal values. 9.8 = 9
// let ceil_Num = Math.ceil(numbers);
// console.log(ceil_Num); // math.ceil() will add 1 in the value before decimal values. 9.2 = 10 or 55.2 = 56

// ROUND OFF || FLOOR VALUE || CEIL VALUES FOR NAGITIVE NUMBERS
// let num = +prompt("Enter any number: ");
// console.log(num);
// let round_Num = Math.round(num); //round off will remain same for psotive and nagetive numbers
// console.log(round_Num); //
// let floor_Num = Math.floor(num);
// console.log(floor_Num); // math.floor() will add 1 in the value before decimal values for nagitve number. -9.8 = 10 || -988.678 = 989
// let ceil_Num = Math.ceil(num);
// console.log(ceil_Num); // math.ceil() will return the same value before decimal values. 9.2 = 9 or 55.2 = 55

// Finding the absoltute values of numbers
// let num = +prompt("Enter any number: ");
// console.log(num);
// let absolute_Num = Math.abs(num); // IT Will convert the nagitve value to postive value
// console.log(absolute_Num);

// Random number genrator  (EXAMPLE # 01)
// let dice = Math.random() * 10;
// let randomDice = Math.round(dice);
// console.log("Random dice value: ", randomDice);

// Random number genrator  (EXAMPLE # 02)
// let coin = Math.random() * 10;
// let randomFlip = Math.round(coin);
// if (randomFlip === 2) {
//   console.log("Heads");
// } else if (randomFlip === 1) {
//   console.log("Tails");
// } else {
//   console.log("Try again");
// }
// console.log("Random dice value: ", randomFlip);

// Random number genrator  (EXAMPLE # 03)
// let genrateRandomNumber = [];
// let storeRandomNumber = [];
// for (let i = 1; i <= 100; i++) {
//   genrateRandomNumber[i] = Math.random() * 100;
//   storeRandomNumber[i] = Math.round(genrateRandomNumber[i]);
//   console.log(storeRandomNumber[i]);
// }

// Random number genrator  (EXAMPLE # 04)
// let genrateRandomNumber;
// let storeRandomNumber;

// genrateRandomNumber = Math.random() * 100;
// storeRandomNumber = Math.round(genrateRandomNumber);
// console.log("Random no between 1 to 100: ", storeRandomNumber);

// Random number genrator  (EXAMPLE # 05)
// let secretNumber = Math.round(Math.random() * 10);
// console.log(secretNumber)
// let userInputNumber = +prompt("Enter the number you like between 1-10", "5");
// if (secretNumber === userInputNumber) {
//   alert("Congrats U won");
// } else {
//   console.log("Hard Luck try again", secretNumber, userInputNumber);
// }

// TO FIXED MATHOD // agar entered number fixed ki batayi huwi value sy kam ho ga to woh utny zero 0 laga dy ga aagay
// let num = +prompt("Enter any number: ");
// // let num = Math.random();
// let num1 = num.toFixed(3);
// console.log(num1);


// let num = 123445.34356;
// let y =parseFloat(num);
// console.log(y, typeof y);

// let num1 = "123445.34356";
// let y1 =parseInt(num);
// console.log(y1, typeof y1);


// Number can return both vaue of integers and float
// let num = "123445.34356";
// let abc = "A";
// let y =Number(num) + abc ;
// console.log(y, typeof y);

// let y =parseInt("-66.67");
// console.log(y, typeof y);

// let y = Number(99);
// let y = Number("999.4646");
// let y = Number("45546 6464");  //NaN
// let y = Number("abcd");
// let y = Number(); //0
// console.log(y);


