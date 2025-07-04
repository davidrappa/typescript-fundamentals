import { User } from "./utility-models";

/**
 * Return Type
 * Extract the return type of a function type.
 */
async function sendEmail(
  user: Pick<User, "email" | "firstName">,
  message: string
): Promise<string> {
  return message;
}

type SendEmailFn = typeof sendEmail;

type Return = Awaited<ReturnType<SendEmailFn>>;

type T1 = Promise<Promise<string>>;

type T2 = Awaited<T1>;

type T3 = Awaited<boolean | Promise<string>>;
