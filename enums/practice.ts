let a: number[] = [1, 2, 3];
let b: Array<string> = ["one", "two", "three"];

type TupleType = [string, number];
let c: TupleType = ["Mark", 42];

const colors: readonly string[] = ["red", "green", "blue"];
const moreColors: readonly [number, number] = [1, 2];

enum StatusEnum {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}

// type User = {
//   id: number;
//   name: string;
//   status: StatusEnum;
// };
// const Status: User = {
//   id: 1,
//   name: "John Doe",
//   status: StatusEnum.Active,
// };
