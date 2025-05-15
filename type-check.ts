/**
 * Type Check
 * The let message start with string and after that receive a number where a fn
 * toUpperCase is not exist and showing a error message.
 * But in the typescript he's alert where the number 6 is put instead a string
 */

let message = "Hello World";

message = 6;

console.log(message.toUpperCase());
