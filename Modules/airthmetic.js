// NOTE: There can be multiple naming exports in a file but default export should be only 1 in a file. We cannot make
//  multiple default export in a single file.
// *********************************TYPE # 01 (Naming Exports are of 2 Types)******************************************
// ************Individual Naming Export******************
// // Function # 01 (Addition)
// export function add(a,b) {
//   return a + b;
// }

// // Function # 02 (Subtraction)
// export function sub(a,b) {
// return a - b;
// }

// // Function # 03 (Multiplication)
// export function mul(a,b) {
//   return a * b;
// }

// // Function # 04 (Division)
// export function div(a,b) {
//   return a / b;
// }

// // Function # 05 (Subtraction)
// export function modulus(a,b) {
//   return a % b;
// }

// **************(Exporting All at once at a bottom*****************
// Function # 01 (Addition)
// function add(a, b) {
//   return a + b;
// }

// // Function # 02 (Subtraction)
// function sub(a, b) {
//   return a - b;
// }

// // Function # 03 (Multiplication)
// function mul(a, b) {
//   return a * b;
// }

// // Function # 04 (Division)
// function div(a, b) {
//   return a / b;
// }

// // Function # 05 (Subtraction)
// function modulus(a, b) {
//   return a % b;
// }

// export {add,sub,mul,div,modulus}

// ****************************************TYPE # 02 (Default Exports)**************************************************
// NOTE: There can be multiple naming exports in a file but default export should be only 1 in a file. We cannot make
// multiple default export in a single file.

// Function # 01 (Addition)
function add(a, b) {
    return a + b;
  }
add(2,2)
  
  // Function # 02 (Subtraction)
  function sub(a, b) {
    return a - b;
  }
  
  // Function # 03 (Multiplication)
  function mul(a, b) {
    return a * b;
  }
  
  // Function # 04 (Division)
  function div(a, b) {
    return a / b;
  }
  
  // Function # 05 (Subtraction)
  function modulus(a, b) {
    return a % b;
  }
  
export default {add,sub,mul,div,modulus}