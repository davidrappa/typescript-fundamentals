/**
 * Readonly
 * Is a utility type that makes all properties of a type immutable.
 * Once set, the properties cannot be changed.
 * Useful for enforcing immutability in objects.
 */
interface Todo {
  title: string;
  description: string;
  done: boolean;
}

const task: Todo = {
  title: "Learn React",
  description: "learn the best web framework (library?)",
  done: false,
};

const taskCopy: Readonly<Todo> = task;
taskCopy.description = "aaa";

console.log(task);

Object.freeze(task);

task.title = "Learn TypeScript";
console.log(task);
