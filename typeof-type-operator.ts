/**
 * Sometimes in the context to express (Javascript)
 */
console.log(typeof "Hello :D");

/**
 * Typeof - Type Operator
 * In the context of type, used to referenced a type on a variable or property
 * Example: if you add a new color in lightMode, is necessary to update darkMode
 * Because darkMode using Colors type with typeof lightMode
 */

const lightMode = {
  success: "#28A745",
  danger: "#DC3545",
  warning: "#FFC107",
  info: "#17A2b8",
  primary: "#8158F9",
};

type Colors = typeof lightMode;

const darkMode: Colors = {
  success: "#28A745",
  danger: "#DC3545",
  warning: "#FFC107",
  info: "#17A2b8",
  primary: "#8158F9",
};
