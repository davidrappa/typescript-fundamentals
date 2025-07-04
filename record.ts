/**
 * Record
 * Is used to map properties of a type to another type.
 * It allows you to create an object type with specific keys and their corresponding types.
 * It is a utility type that helps in creating objects with a fixed set of keys.
 * It is often used to create a type-safe mapping of keys to values.
 * It is a way to define an object type with specific keys and their corresponding types.
 * It is a way to create an object type with a fixed set of keys and their corresponding
 */

type ButtonVariant = "primary" | "danger" | "disable";

type ButtonStyle = {
  backgroundColor: string;
  isEnabled: boolean;
  // borderColor: string;
};

function getButtonStyle(variant: ButtonVariant): ButtonStyle {
  switch (variant) {
    case "primary":
      return { backgroundColor: "#8158F9", isEnabled: true };
    case "danger":
      return { backgroundColor: "#DC3545", isEnabled: true };
    case "disable":
      return { backgroundColor: "#CCC", isEnabled: false };
    default:
      return { backgroundColor: "#FFF", isEnabled: true };
  }
}

getButtonStyle("primary");

const buttonStyles: Record<ButtonVariant, ButtonStyle> = {
  primary: { backgroundColor: "#8158F9", isEnabled: true },
  danger: { backgroundColor: "#DC3545", isEnabled: true },
  disable: { backgroundColor: "#CCC", isEnabled: false },
};

function renderButton(title: string, variant: ButtonVariant) {
  const style = buttonStyles[variant];
}
