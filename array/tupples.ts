let persona: [string, string, number] = ["Mark", "Doe", 32];

type User = [string, string, number, string?];
let user: User = ["John", "Smith", 28];

type listOfStudents = [number, boolean, ...string[]];

const passingStudents: listOfStudents = [3, true, "Alice", "Bob", "Charlie"];

type StringBooleansNumber = [string, ...boolean[], number];

const example1: StringBooleansNumber = ["start", true, false, true, 42];
const example2: StringBooleansNumber = ["onlyStartAndEnd", 99];

let numnber: readonly number[] = [1, 2, 3, 4];

//array

type a = Readonly<string[]>;
