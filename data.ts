import { Publication, User } from "./models";

export const david: User = {
  firstName: "David",
  lastName: "Rappa",
  email: "david@dev.com",
  age: 28,
};

export const junior: User = {
  firstName: "Junior",
  lastName: "Rappa",
  email: "junior@gmail.com",
  age: 23,
};

export const users: User[] = [david, junior];

export const publication1: Publication = {
  imageURL: "fake-url-1",
  description: "description 1",
  author: david,
};

export const publications: Publication[] = [
  {
    imageURL: "fake-url-2",
    description: "description 2",
    author: junior,
  },
  {
    imageURL: "fake-url-3",
    description: "description 3",
    author: david,
  },
];
