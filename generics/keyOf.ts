type Events = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};

type UnionOfKeysOfEvents = keyof Events; // "id" | "date" | "type" // keyof operator only works with object types

let idOfEvent: UnionOfKeysOfEvents = "id"; // valid

let dateOfEvent: UnionOfKeysOfEvents = "date"; // valid

let typeOfEvent: UnionOfKeysOfEvents = "type"; // valid

type Numberic = {
  [key: number]: string;
};

type NumericKeyOf = keyof Numberic; // number

let numericKey: NumericKeyOf = 42; // valid

type NumberAndString = {
  [key: string]: string;
};

type NumberAndStringKeyOf = keyof NumberAndString; // string

let stringKey: NumberAndStringKeyOf = "example"; // valid

let StringObject: NumberAndString = {
  0: "zero",
  one: "one",
};

type Person = {
  name: string;
  age: string;
  address: string;
};

type PartialPerson = {
  [T in keyof Person]?: Person[T] | null;
};

let partial: PartialPerson = {
  name: "John",
  age: null,
};
