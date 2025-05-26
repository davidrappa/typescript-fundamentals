/**
 * Partial and Required
 * Partial<Type> Constructs a type with all properties of Type set to optional
 * Required<Type> Constructs a type consisting of all properties of Type set to required.
 */
function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const david: User = {
  id: "1",
  name: "David",
  email: "david@dev.com",
};
const updated = updateUser(david, { email: "david@mobile.com" });

console.log(updated);

type User = {
  id: string;
  name?: string;
  email?: string;
};

function sendWelcomeEmail(user: Required<User>) {
  const body = createBody(user.name);
  sendEmail(user.email, body);
}

function createBody(name: string): string {
  return `Hi ${name}`;
}

function sendEmail(email: string, body: string) {
  console.log(`sending ${body} to ${email}`);
}
