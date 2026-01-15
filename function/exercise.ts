function greet(name: string): string {
  return `Hello, ${name}!`;
}

type Product = {
  id: number;
  name: string;
};

function getProduct(id: number): Product {
  return { id, name: `Product ${id}` };
}

type Calculator = (a: number, b: number) => number;
const add: Calculator = (a, b) => a + b;
const subtract: Calculator = (a, b) => a - b;

function logMessage(message: string): void {
  console.log(message);
}

function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}
