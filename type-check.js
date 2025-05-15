/**
 * Type Check
 * A let message inicia como string e depois passa para um number onde a fn de
 * toUpperCase não existe, gerando assim um erro.
 */

let message = "Hello World";

message = 6;

console.log(message.toUpperCase());
