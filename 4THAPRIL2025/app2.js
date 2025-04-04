import dotenv from "dotenv";
dotenv.config();


let userName = process.env.USERNAME;
let password = process.env.PASSWORD;
console.log(userName,password);