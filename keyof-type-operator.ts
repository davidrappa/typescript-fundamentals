/**
 * Keyof - Type Operator
 * Create a new type from union keys of object
 */
import { david, publication1 } from "./data";
import { User } from "./models";

// const email = david["email"];
// console.log(email);

// type UserKey = "firstName" | "lastName" | "email";
function getProperty<T, Key extends keyof T>(value: T, key: Key): T[Key] {
  return value[key];
}

const value = getProperty(publication1, "author");
