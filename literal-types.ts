/**
 * Literal Types
 * The variable can do part of a specific group of strings or numbers
 * ex: Direction -> left, right, top and bottom
 */

type Direction = "left" | "top" | "right" | "bottom";

// const value: Direction = "top";

function moveTo(direction: Direction) {
  switch (direction) {
    case "left":
      console.log("move to left");
      break;
    case "right":
      console.log("move to right");
      break;
    case "top":
      console.log("move to top");
      break;
    case "bottom":
      console.log("move to bottom");
      break;

    default:
      console.log("I don't know where to go :(");
  }
}

moveTo("right");

type METHOD = "GET" | "POST";
declare function handleRequest(url: string, method: METHOD): void;

const req: { url: string; method: METHOD } = {
  url: "https://example.com",
  method: "GET",
};

req.method = "POST";

handleRequest(req.url, req.method);
