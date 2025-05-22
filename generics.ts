/**
 * Type Variable
 * Generics receive the type of arg inside the function instead to
 * fixed only one type
 */
function identity<Type>(arg: Type): Type {
  return arg;
}

const argString: string = "value";
const value = identity(argString);

const value2 = identity<number>(4);
