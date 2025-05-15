// null (nulo) => representa ausência de valor
// undefined (não definido) => nem um valor foi atribuído

/**
 * Strict Null Checks
 * Null represent absence of value
 * Undefined (not defined) represent when the value is not assigned
 * Tsconfig strictNullChecks = true, is necessary check value before return
 */

let value1;

console.log(typeof value1); // undefined

value1 = null;

console.log(typeof value1); // should be null but receive object

function hello(value: string | null | undefined) {
  if (value) {
    console.log("Hello, " + value.toUpperCase());
  }
}

hello("David");
