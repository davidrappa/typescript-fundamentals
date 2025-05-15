/**
 * Type Assertions
 * Use "as"
 * Sometimes you had information about the type of value where typescript
 * not recognized
 */

type Person = {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    zipCode: string;
  };
};

const value = { firstName: "David" } as Person; // recommend use to "as"
// const value = <Person>{};

// 1 - Something happen in time of execution or external factor
value.firstName = "David";

// 2 - Creating mocks for automated tests
value.lastName = "Rappa"; // unit test to lastName

console.log(value);

// console.log(value.address.zipCode); // TypeError: Cannot read properties of undefined (reading 'zipCode')
