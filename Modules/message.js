// NOTE: Exporting is basically of 2 type types Naming exports and defualt exports. But NAMING exports has more two types.
// *********************************TYPE # 01 (Naming Exports are of 2 Types)******************************************
// ************Individual Naming Export******************
// export function greeting(userName) {
//     console.log("hello ", userName)
// }
// greeting("haris");

// **************(Exporting All at once at a bottom*****************
// (Exporting All at once at a bottom we can exports mutiple functions, datatypes all at once in the bottom for better
// understanding check datatype.js file and airthmetic.js file). 
// function greeting(userName) {
//     console.log("hello ", userName)
// }
// export {greeting}

// ****************************************TYPE # 02 (Default Exports)**************************************************
// NOTE: There can be multiple naming exports in a file but default export should be only 1 in a file. We cannot make
// multiple default export in a single file.
function greeting(userName) {
    console.log("hello ", userName)
    // return ("hello ", userName)
}
export default greeting;