/**
 * Functions and Any
 * Used any when don't want to convince the typescript about the type (bad)
 * Use tsconfig config noImplicitAny = true
 * Use tsconfig config noImplicitReturns = true, to force it is necessary to pass a return
 */

function sum(value1: number, value2: number, flag?: boolean): number {
  if (flag) {
    return value1 + value2;
  } else {
    return 0;
  }
}

const total = sum(1, 2, true);

console.log("Total: " + total);
