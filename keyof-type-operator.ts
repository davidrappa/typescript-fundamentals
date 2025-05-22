/**
 * Keyof - Type Operator
 * Create a new type from union keys of object
 */
import { david, publication1 } from "./data";
import { User } from "./models";

// const email = david["email"];
// console.log(email);

// type UserKey = "firstName" | "lastName" | "email";
function getProperty<T>(value: T, key: keyof T) {
  return value[key];
}

console.log(getProperty(publication1, "description"));
