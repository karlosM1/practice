function returnParams<T>(param: T): T {
  // generatics are varuable type
  return param;
}

returnParams<string>("Hello Generics");
returnParams<number>(12345);

const myParam: <T>(param: T) => T = (param) => {
  return param;
};

const myParam2 = function <T>(param: T): T {
  return param;
};

type ObjectTypo = {
  myParam: <T, X>(param: T, param2: X) => T | X;
};

type MyParam = <T>(param: T) => T;

type GetFirstElement = <T>(arr: T[]) => T;

const getFirstElement: GetFirstElement = (arr) => {
  return arr[0];
};

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["a", "b", "c", "d", "e"];

const firstNumber = getFirstElement(numberArray);
const firstString = getFirstElement(stringArray);

type FirstElement<T> = (arr: T[]) => T; // generic type parameter T is different from previous one

const getFirstElementNumber: FirstElement<number> = (arr) => {
  return arr[0];
};

interface ApiResponse<T> {
  data: T;
  status: number;
}

const response: ApiResponse<string> = {
  data: "Success",
  status: 200,
};

type HasLength = {
  length: number;
};

function logLength<T extends HasLength>(item: T): void {
  //contraint T to types that have length property
  console.log(item.length);
}

logLength(numberArray);
logLength(stringArray);
logLength("Hello, World!");
logLength({ length: 10, value: "Test" });

type KeyValuePair<T, V> = {
  key: T;
  value: V;
};

let stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

let numberArrayPair: KeyValuePair<number, string[]> = {
  key: 1,
  value: ["a", "b", "c"],
};

type HasId = {
  id: number;
};

function printId<T extends HasId>(obj: T): void {
  console.log("ID:", obj.id);
}

const user = {
  id: 101,
  name: "Alice",
};

printId(user);
