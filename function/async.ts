async function fetchFromDatabase(id: number): Promise<any> {}

const anotherAsyncFunction = async (): Promise<any> => {};

async function returnString(id: number): Promise<string> {
  return Promise.resolve("String");
}

type Userr = {
  name: string;
  age: number;
};

async function returnUser(id: number): Promise<Userr> {
  return Promise.resolve({ name: "john", age: 25 });
}

function multipyBy(by: number, ...numbers: number[]) {
  return numbers.map((num) => by * num);
}

// const args = [8, 5];
// const agele = Math.atan2(...args); // spread operator with rest parameters

const args1 = [8, 5] as const;
const angle = Math.atan2(...args1);

type Numbers = {
  a: number;
  b: number;
  c: number;
};

function sum({ a, b, c }: Numbers): number {
  return a + b + c;
}

type FetchDataFunction = (
  url: string,
  ...params: string[]
) => Promise<string[]>;

// Async function implementing the FetchDataFunction
const fetchData: FetchDataFunction = async (url, ...params) => {
  const query = params.join("&");
  const response = await fetch(`${url}?${query}`);
  const data = await response.json();
  return data;
};

type Userrr = {
  firstName: string;
  lastName: string;
  age: number;
};
const getUserInfo = async ({
  firstName,
  lastName,
  age,
}: Userrr): Promise<string> => {
  return `User: ${firstName} ${lastName}, Age: ${age}`;
};

const user: Userrr = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
