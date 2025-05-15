/**
 * Type Aliases (type) and Interface
 */

/**
 * Type Person
 * @param firstName
 * @param lastName
 */
interface Person {
  firstName: string;
  lastName: string;
}

/**
 * Interface User extends Person
 * @param email,
 */
interface User extends Person {
  email: string;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

/**
 * Structural type system
 * Verify if is a valid object
 */
const person: User = {
  firstName: "David",
  lastName: "Rappa",
  email: "contato@davidrappa.com",
};

const fullName = getFullName(person);

console.log(fullName);
