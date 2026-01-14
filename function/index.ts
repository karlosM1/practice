function intro(name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

const intro2 = function (name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};
const intro3 = (name: string, age: number): string => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};

function intro4(name: string, age: number, country?: string): string {
  if (country) {
    return `Hello, my name is ${name}, I am ${age} years old and I am from ${country}.`;
  }
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

enum AgeUnit {
  Years = "years",
  Months = "months",
  Days = "days",
}

type GreetingFunction = (greeting: string) => string;

type Personn = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  greet: GreetingFunction;
};

const person: Personn = {
  name: "Bob",
  age: 30,
  ageUnit: AgeUnit.Years,
  greet: (greeting: string) => `${greeting}, I am ${person.name}`,
};

function convertAgetomonths(person: Personn): Personn {
  if (person.ageUnit === AgeUnit.Years) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.Months;
    return person;
  }
  return person;
}

console.log(convertAgetomonths(person));
console.log(person.greet("Hello"));

const student: string[] = ["Alice", "Bob", "Charlie"];
student.map((student) => {
  console.log(student);
});

function writeToDatabase(value: string): void {
  console.log("Writing to database:", value);
}

function throwError(error: string): never {
  throw new Error(error);
}
