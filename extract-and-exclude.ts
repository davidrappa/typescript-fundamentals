/**
 * Extract and Exclude
 * Use in literal types
 */
import { User } from "./utility-models";

// Extract<Type, Union>
type AppEvents = "click" | "hover" | "scroll" | "resize";

type MarketingEvents = Extract<
  AppEvents,
  "click" | "scroll" | { name: string } | User
>;

const event: MarketingEvents = "click";

// Exclude<UnionType, ExcludedMembers>
type UserRoles = "admin" | "editor" | "viewer" | "guest";

type ViewCommentsRoles = Exclude<UserRoles, "guest">;
