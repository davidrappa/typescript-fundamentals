import { User } from "./utility-models";

/**
 * Parameters
 * Extract the types of the parameters of a function type.
 */
function sendEmail(user: Pick<User, "email" | "firstName">, message: string) {}

type SendEmailFn = typeof sendEmail;
/**
 * Tuple: it's array with a fixed length
 * and specific types assigned to each element.
 * It allows you to define the exact type
 * and order of elements in the array.
 */
type SendEmailParams = Parameters<SendEmailFn>;
// [user: Pick<User, "email" | "firstName">, message: string]

function sendWelcomeEmail(user: SendEmailParams[0]) {
  sendEmail(user, "welcome to advanced typescript");
}

sendWelcomeEmail({ email: "david@dev.com", firstName: "David" });
