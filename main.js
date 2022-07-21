//first require the dotenv config file
require('dotenv').config()
//this just checks to make sure secret api key is listed in the environment variables. uncomment to see. 
console.log(process.env);

//put the secret key in a variable
const api_key = process.env.SECRET_API_KEY;

console.log(api_key)