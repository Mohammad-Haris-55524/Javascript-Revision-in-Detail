//We can Name exports in 2 ways 1-) (Inline Indivudullay exports) 2-) export {userName, fatherName, regId, arrayOfName, 
// userInformation} make an objects of all things that you want to exports (All at once at a bottom).

// ******************************************Naming Exports are of 2 Types************************************************
// ********Type # 01 (Naming Export) (Inline Indivudullay exports)***************
// export var userName = "Mohamamd Haris";
// export let fatherName = "Abdul Hameed";
// export const regId = 55524;
// export let arrayOfName = ["Haris", "Hassan", "Ali haider", "Zain Ahmed Khan"];
// export const userInformation = {
//   "First name": "mohammad",
//   "last Name": "Haris",
//   "Cell No": +923322435117,
//   Address: {
//     Street: 3,
//     Area: "Golden Town",
//     City: "Karachi"
//   },
//   Hobbies: ["Playing cricket", "watching movies"],
// };

// *************Type # 02 (All at once at a bottom)*************************
// var userName = "Mohamamd Haris";
// let fatherName = "Abdul Hameed";
// const regId = 55524;
// let arrayOfName = ["Haris", "Hassan", "Ali haider", "Zain Ahmed Khan"];

// const userInformation = {
//   "First name": "mohammad",
//   "last Name": "Haris",
//   "Cell No": +923322435117,
//   Address: {
//     Street: 3,
//     Area: "Golden Town",
//     City: "Karachi"
//   },
//   Hobbies: ["Playing cricket", "watching movies"],
// };
// export {userName, fatherName, regId, arrayOfName, userInformation}


// ***************************************TYPE # 02 (Default Exports)**************************************************
// NOTE: There can be multiple naming exports in a file but default export should be only 1 in a file. We cannot make
// multiple default export in a single file.

var userName = "Mohamamd Haris";
let fatherName = "Abdul Hameed";
const regId = 55524;
let arrayOfName = ["Haris", "Hassan", "Ali haider", "Zain Ahmed Khan"];

const userInformation = {
  "First name": "mohammad",
  "last Name": "Haris",
  "Cell No": +923322435117,
  Address: {
    Street: 3,
    Area: "Golden Town",
    City: "Karachi"
  },
  Hobbies: ["Playing cricket", "watching movies"],
};
export default {userName, fatherName, regId, arrayOfName, userInformation}

