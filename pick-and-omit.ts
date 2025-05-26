/**
 * Pick and Omit
 * Pick -> choose a interface/type and pick props
 * Omit -> choose a interface/type and omit props
 * @example Pick<Type, Keys> and Omit<Type, Keys>
 */
import { User } from "./utility-models";

// type UserPreviewKeys = "firstName" | "lastName" | "profileImageUrl";
type UserPreview = Pick<User, "firstName" | "lastName" | "profileImageUrl">;

const user: UserPreview = {
  firstName: "John",
  lastName: "Doe",
  profileImageUrl: "https://example.com/johndoe.jpg",
};

// Omit<Type, Keys>
type UserForm = Omit<User, "id" | "isOnline">;

const userForm: UserForm = {
  email: "david@dev.com",
  firstName: "David",
  lastName: "Rappa",
  phoneNumber: "123456789",
  profileImageUrl: "https://example.com/david.jpg",
};
