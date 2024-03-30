// JSON: JAVASCRIPT OBJECT NOTATION
// JSON is a text format for storing and transporting data
// JSON is "self-describing" and easy to understand
// JSON is used to send data between computers
// Jab aap server se data mangte hain (API request karte hain), aur jab server aapko response bhejta hai, toh ye data
// typically ek standard format mein hota hai. Two common formats for data exchange between a client (like a web browser)
//  and a server are JSON (JavaScript Object Notation) and XML (eXtensible Markup Language).
// Hamey jab bhe data server sy milta hy to woh aik hi pattern ko follow kar raha hota hy for example: yah pora array string ka array ho ga yah pora number ka array ho ga and soo on 
// JSON is language independent *

// Why we use JSON in JavaScript:
// ***) Data Interchange: JSON is commonly used for data interchange between a web server and a web client. When a web page needs to fetch data from a server or send data to a server, the data is often represented in JSON format.

// Configuration Files: JSON is used for configuration files because of its simplicity and readability. Many applications, including web frameworks, use JSON for configuration settings.

// Storage: JSON is often used to store data locally in web browsers, such as in browser storage (localStorage or sessionStorage). This is because JSON can be easily converted between a string and a JavaScript object.


// JSON Syntax Rules
// JSON syntax is derived from JavaScript object notation syntax:

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

// Note: We cannot use comment in JSON
// JSON light weight hota hy issi lye ham issy data store karny ky liye yah data server ko bhejnay ky liye JSON format use
// karty han array yah object ky bajay for example array agar 10mb ka data lay raha hy to wohi data JSON 5mb lay ga.

// JSON values cannot be one of the following data types:
// a function
// a date
// undefined

// JSON FORMAT identical hota hy JS ky object ky sath ham JSON format ko easily native JS objects my change kar skty han.
  
// Mery pas server sy jo JSON ata hy woh string ki form my hota hy mujhy looping karany hy to string par loops nae laga skta
// server sy client tak repsonse aa chuka hy mery pas aisa nae hy ky string par loop ho nae skta loop string par ho skta hy lekin main masla yah aye ga ky jahaan empty spaces hon gi uss par bhe loop chalay ga or ham aisa nae chahty

// const json = `[
//     {"name":"John", 
//     "age": 21,
//     "city": "karachi",
//     "location": null,
//     "phone no": false,
//     "address" : {"street" : 3, "survey": 87, "Area": "Golden Town"} 
//     },
    
//     {"name":"John", 
//     "age": 21,
//     "city": "karachi",
//     "location": null,
//     "phone no": false,
//     "address" : {"street" : 3, "survey": 87, "Area": "Golden Town"} 
//     },
    
//     {"name":"John", 
//     "age": 21,
//     "city": "karachi",
//     "location": null,
//     "phone no": false,
//     "address" : {"street" : 3, "survey": 87, "Area": "Golden Town"} 
//     }
//     ]`;
//     console.log(typeof json, " : " , json, json.length);
//     // Jab hamary pas jo server sy JSON AYE ga woh string ki form my hoga jab ham uss par loop laagain gy to woh empty spaces par bhe jaa kar check karey ga or fazzoll ki iteration ho gi jo ham nae chahty iss maslay ko JSON.PARSE sy hal kar lein gy  
//     for(let item of json){
//         console.log("item json:" , item);
//     }
//     // // **********This is the WAY to convert JSON into JAVASCRIPT NATIVE OBJECT JSON.PARSE(json)
//     // // jo data meray pas hy woh string my hay to iss ky uper mujhy array yah object ky method use karny hon taa ky my values
//     // // nikal sako in my sy to my iss JSON ko change kar dn ga object my kesy ? example in done below
//     const stringJsonToObjectJson = JSON.parse(json);
//     console.log(typeof stringJsonToObjectJson, stringJsonToObjectJson, stringJsonToObjectJson.length);
//     for(let item of stringJsonToObjectJson){
//         console.log("item json:" , item);
//     }

//     // **********Now JAVASCRIPT NATIVE OBJECT can be converted into JSON by using  JSON.stringify(json)

//     const objectJsonToStringJson  = JSON.stringify(stringJsonToObjectJson,undefined,4);
//     console.log(typeof objectJsonToStringJson," : ", objectJsonToStringJson, objectJsonToStringJson.length)
//     for(let item of objectJsonToStringJson){
//         console.log("item json:" , item);
//     }


    // Important concept of web server and web client
    /*
Certainly! Let's break down the concepts of a web server and a web client in simple terms:
Web Server:
Imagine a Waiter: Think of a web server like a waiter in a restaurant. When you, as a customer (web client), want to order something (request a webpage or data), you talk to the waiter (web server).
Serving Information: The waiter (web server) takes your order (request), goes to the kitchen (server-side code and databases), gets the food (webpage or data), and brings it back to your table (sends the response to your web browser).
Always Ready: Web servers are always waiting for customers (web clients) to make requests. They handle these requests, process them, and provide the requested information.

Web Client:
You, the Customer: In this scenario, you are the web client. You use a web browser (like Chrome, Firefox, or Safari) to interact with the internet.
Making Requests: When you type a website's address into the browser or click a link, you are making a request for information. It's like asking the waiter (web server) to bring you something.
Receiving and Displaying: Once the waiter (web server) brings the requested information, your browser displays it on your screen. This could be a webpage with text, images, videos, or any other content.
In Summary:

Web Server: It's like a waiter in a restaurant, always ready to take orders (requests) and serve information (responses) to customers (web clients).

Web Client: You, using a web browser, making requests for information from the waiter (web server) and receiving and displaying the served content.

So, when you use the internet, your web browser (client) interacts with web servers to request and receive the information you want to see on websites.

*/

// Escape Characters in JS
// In JavaScript, escape characters are used to include special characters in strings that might otherwise be difficult or impossible to represent directly. Escape characters are preceded by a backslash (\), and when used in a string, they modify the interpretation of the character that follows them.
let singleQuoteString = 'This is an example of using a single quote \' in a string.';
console.log(singleQuoteString)
var doubleQuoteString = "This is an example of using a double quote \"haris in a string.";
console.log(doubleQuoteString);
let str = "hello my name is \"Mohammad\" haris"; // for double comma ky liye
console.log(str);
var backslashString = 'This is an example of using a backslash \\ in a string.';
console.log(backslashString)
var multilineString = 'This is the first line.\nThis is the second line.';
console.log(multilineString)
var indentedString = 'This is some text.\tThis is indented with a tab.';
console.log(indentedString)
var carriageReturnString = 'This is a line with a carriage return.\r It goes back to the beginning.';
console.log(carriageReturnString) //nae smjh aaya 
var backspaceString = 'This is a string.\b Backspace removes the preceding character.';
console.log(backspaceString)


// CONCLUSION: These escape characters are useful for situations where you need to include special characters or control the formatting of a 
// string. They allow you to represent characters that might otherwise be treated as part of the string syntax or have special meanings.






