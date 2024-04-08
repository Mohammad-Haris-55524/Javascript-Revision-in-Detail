// // THIS DATE IS GENREATED FROM OUR SYSTEM DATE 
// // let date = new Date("year,month,day,hours,minutes,seconds,ms"); Foramt we follow to set dates according to us. 
// // Passing all things like (year,month,day,hours,minutes,seconds,ms) does not require we pass things according to our need. 
// let date = new Date("2022-03-25"); // complete current date time day according to our system
// let date = new Date(); // complete current date time day according to our system
// console.log(typeof date, date);
// // NOTE: MONTHS AND DAYS START FROM 0 FOR EXAMPLE JANUARY = 0 FEBUARY = 1 || SUNDAY = 0 MONDAY = 1
// // To get Months they start from JANUARY it will only shows 0,1,2..... because they are stored in an array and everythings 
// // comes form an array we deal with them according to its index number 0 for JANUARY 1 for FEBUARY as so on ....
// console.log(date.getMonth());
// // To get day days they start from sunday it will only shows 0,1,2.... because they are stored in an array and everythings 
// // comes form an array we deal with them according to its index number 0 for sunday 1 for monday as so on .....
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// // Note: getTime() iss method sy woh time ata hy hamaray pas jo jan 1st 1970 lay kar ab tak ka sara time guzra hy woh
// // milliseconds my ata hy hamary pas
// // Real life scenerio: // This is the best method to compares times and dates For E.G: Facebook will use this method to 
// // show its users when a person A has created his post to a person B by comparaing 2 time togther How ? Like it will take
// // the time of user A when he created the post converts it into millisec then it will take the current time convert it 
// // into millsec then both millisec time is subtracted and then converted according to the scenerio that either we need
// // days years, seconds etc... 
// console.log(date.getTime());  

// let y =date.getMinutes();
// console.log(y);
// let date_String = date.toString();
// console.log(typeof date_String, date_String);

// QUESTION # 02
// let months = [
//   "january",
//   "febuarary",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "august",
//   "september",
//   "october",
//   "november",
//   "december",
// ];

// let date =  new Date();
// console.log(date);
// monthNames = months[date.getMonth()]; //method # 01 to get  months name
// console.log("Month: ", monthNames);

// let date = new Date();
// // date = date.getFullYear()
// date = date.ge
// console.log(date);


// let day = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursaday",
//   "Friday",
//   "Saturday",
// ];

// let date = new Date();
// let dayName = day[date.getDay()];

// console.log(dayName);

// let date = new Date();
// let dayName = day[date.getDay()]; //method # 01 to get day name or months name

// // let y = day[dayName]; // method # 02 to get day name or months name
// // console.log(y)

// if (dayName === "Wednesday" || dayName === "Thursaday") {
//   console.log("Fun day bcz it's", dayName);
// } else {
//   console.log("Bad Day");
// }

//Q5
// let date = new Date();
// let today_Date = date.getDate();
// if (today_Date < 16) {
//   console.log("First fifteen days of month");
// } else {
//   console.log("Last days of the month");
// }

//Q6
// let date = new Date();
// console.log("Curent Date: ", date);
// let MilliSeconds = date.getTime();
// console.log("Elaspsed MilliSeconds since Jan 1 1970: ", MilliSeconds);
// let Minutes = MilliSeconds / (1000 * 60 ); // Jo bhe answer anta hy woh millisec my ata hy then we convert millisec into minutes we divide by milliseconds (1000) and minutes (60) with the value
// console.log("Elaspsed Minutes since Jan 1 1970: ", Minutes);

//Q7
// let date = new Date();
// let hours = date.getHours();
// if (hours <= 12) {
//   console.log("Its", hours, "AM");
// } else {
//   console.log("PM");
// }
// console.log(hours);

//Q8
// let laterDate = new Date("Thu, Dec 31, 2020"); //Template # 01
// // let laterDate = new Date("2020-12-31"); //Template # 02
// console.log(laterDate);

//Q9 jitna date baad wali ho gi utnay ziada milli seconds hon gy
// Jab bhe hamary ko comparision karwana ho 2 dates ya time ky darmain to sab sy phely ham uss date ka date.getTime() 
// karen gy to hamey time milay ga milli seconds ky andar phr jo abi yani aj ki date chal rahi hy uss ki date nikalain gy
// phr uss date ka date.getTime() karen gy phr dono time hamary pas jo ayen gy .getTime() method ky thorugh woh millisec
// my hon gy ab ham unhy apas my minus karein gy jo bari date hogi yani aj wali date jo bhe hogi uss ko minus karein gy
// uss date ky millisconds ky sath to hamey millisec my time mil gy ga phr hamari marzi ho gi phr ham usy apny scenerio
// ky lihaaz sy change kar lein gy ky hamey days chaihyee year chaihyee minutes chaihyee yah sec chaihyee kiu ky jo time
// comparison ky baad nikaly ga woh bhe millisec my hoga ussy change karna parey ga apni need ky mutabiq
// let old_Date = new Date("June 18, 2015");
// let msOld_Date = old_Date.getTime();
// console.log(msOld_Date,old_Date);
// let new_Date = new Date();
// let msNew_Date = new_Date.getTime();
// console.log(msNew_Date);
// let msDiff = msNew_Date - msOld_Date;
// // msDiff = msDiff / (1000 * 60 * 60 * 24 * 365); //for years
// msDiff = msDiff / (1000 * 60 * 60 * 24); //for days
// let y = Math.round(msDiff);
// console.log(y + " Days have been passed since 1st ramzan ", old_Date);

// let olderDays = old_Day.getDay();

// let startDate = new Date("1 Jan 2015");
// let refDate = new Date("5 Dec 2015");
// let ms_Start_Date = startDate.getTime();
// ms_Start_Date = ms_Start_Date / (1000 * 60 * 60 * 24);
// let ms_Ref_Date = refDate.getTime();
// ms_Ref_Date = ms_Ref_Date / (1000 * 60 * 60 * 24);
// // let elaspsed_Seconds = ms_Start_Date - ms_Ref_Date;
// // console.log(elaspsed_Seconds);
// console.log(ms_Start_Date);
// console.log(ms_Ref_Date);

// var msDiff =
//   new Date("Dec 31, 2015").getTime() - new Date("Jan 01, 2015").getTime();
// console.log(msDiff);
// msDiff = (msDiff / (1000*60));
// console.log(
//   msDiff +
//     " Seconds have been passed since " +
//     new Date("Jan 01, 2015").getFullYear()
// );
// var daysTillDoom = (msDiff / (1000 * 60 * 60 * 24 * 365));
// console.log(daysTillDoom);

//Q11
// **********METHOD # 01************
// let currentDate = new Date();
// console.log(currentDate)
// // Get the current time in milliseconds
// let currentTime = currentDate.getTime();
// console.log(currentTime)
// Add one hour (in milliseconds) to the current time
// let oneHourAhead = currentTime + 60 * 60 * 1000;
// // Set the Date object to the new time
// currentDate.setTime(oneHourAhead);
// // Display the date object in the browser
// console.log(currentDate);
// ***********What if 5 hours ahead ? *****************
// Add one hour (in milliseconds) to the current time
// let fiveHourAhead = currentTime + 5 * 60 * 60 * 1000;
// // console.log(fiveHourAhead);
// // Set the Date object to the new time to 5 hour ahead
// currentDate.setTime(fiveHourAhead);
// console.log(currentDate)
// // **********METHOD # 02***************
// let currentDate = new Date();
// console.log("Current Time:", currentDate);
// // Add five hours to the current date and time
// currentDate.setHours(currentDate.getHours() + 5);
// // Display the date object in the browser
// console.log("Updated Time after 5 hours: ",currentDate);

//Q12
// let date = new Date();
// console.log("Current Date: ", date);
// date.setFullYear(date.getFullYear() - 100);
// console.log("100 YEARS back it was ", date);

// let date = new Date();
// let userInputAge = +prompt("Enter your Age: ", "24");
// let newAge = date.getFullYear() - userInputAge;
// console.log(
//   "Your Date of birth is:",
//   newAge,
//   " You are ",
//   userInputAge,
//   " years old"
// );

// let userInputAge = +prompt("Enter your age");
// console.log(userInputAge);
// let date = new Date();
// let birthYear = date.getFullYear() - userInputAge;
// console.log("You were born on: ",birthYear);


//Q14

// let months = [
//   "January",
//   "Febuarary",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// console.log("K-ELECTRIC BILL");
// let costName = "ABC Customer";
// console.log("Customer name: ", costName);
// let date = new Date();
// console.log("Billing Month: ", months[date.getMonth()]);
// let noOfUnits = 410;
// let UnitRate = 16;
// let lateSurcharge = 350;
// let NetAmountPayable = noOfUnits * UnitRate;
// console.log("Net Amount Payable(within due date): ", NetAmountPayable);
// console.log("Late payment surcharge: ", lateSurcharge);
// let grossAmountPayable = NetAmountPayable + lateSurcharge;
// console.log("Gross Amount Payable(within due date): ", grossAmountPayable);

// *************************THINGS TO REMEMBER******************************
// Order of passing paramters and arguments values always matters
// when number is added with undefined results = NaN
// function add(sum,a,b){
// sum = a + Number(b);
// console.log(sum);  // number + undefinaed = NaN
// // console.log(typeof a, typeof b, typeof sum, a,b,sum);   
// }
// add(5,5);   //NaN (Here we are passing 2 value as an argument to the parameters 1st 5 will go to 'sum', 2nd 5 will go to 'a' and b will reamain undefined so when a(5) + undefined = NaN)

//
// function add(a=55,b=5){    
//   return a+b
    
// }
// console.log(add());  

// toFixed() mean point ky baad utnay 0 zero laga do jitnay tofixed(3) my pass han agar point ky baad koi 0 zero nae hy 
// 3 zero laga do jitny toFixed(3) my pass kiye han or agar zaida han 3 sy zero to phr point ky baad 3 zero kar do or agar 
// point ky baad 2 zero han or toFixed(3) my ap ny 3 pass kiye han to point ky baad 2 zero my aik or 0 zero add kar do 
// total 3 bana do:- Example below ......
// let x=31
// let x=31.23
// let x=312
// let y =x.toFixed(3);
// console.log(y);

let date = new Date() //(DMDYT) FORMAT
// console.log("MORMAL DATE: ",typeof date, date);  // DATE FORMAT WILL BE DMDY(TIME) = DAY MONTH DATE YEAR TIMES (DMDYT)
// let y= date.toLocaleString();  // DATE FORMAT WILL BE MDY(TIME) = MONTH DATE YEAR TIME (MDYT)
// console.log("LOCAAL STRING FORMAT: ",typeof y,y);
// console.log("I am TO DATE STRING: ",date.toDateString(), typeof date.toDateString());
// let z =date.toLocaleDateString();   //  it will onlyshow date in string  MDY MONTH DATE YEAR
// console.log(typeof z, z);
// let x = date.toLocaleTimeString();   // it will only show time in string hours min and second format
// console.log(typeof x, x);
// console.log("I am JSON FORMAT: ",date.toJSON(),typeof date.toJSON() );
/*n the context of ISO dates, "ISO" stands for the International Organization for Standardization. ISO is an independent,
non-governmental international organization that develops and publishes standards to ensure the quality, safety, 
efficiency, and interoperability of various products and services across industries. */
console.log("I am ISO FORMAT: ",date.toISOString(), typeof date.toISOString()); // year, month, day, hour, minute, second, and timezone 
// // UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time)
console.log("I am UTC FORMAT: ",date.toUTCString(), typeof date.toUTCString());





// let day;
// switch (new Date().getDate()) {
//   case 0:
//     day = "Sunday";
    
//   case 1:
//     day = "Monday";
    
//   case 2:
//     day = "Tuesday";
  
//   case 3:
//     day = "Wednesday";
    
//   case 4:
//     day = "Thursday";
   	
//   case 5:
//     day = "Friday";

//   case  6:
//     day = "Saturday";

//     default:
//     day = "Looking forward to the Weekend";
    
// }

// console.log(day);