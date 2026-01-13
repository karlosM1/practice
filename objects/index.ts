let person = {
  name: "Mark",
  age: 32,
};

let car: Object = {
  brand: "BMW",
  color: "black",
};

car = [];

let newCar: {
  brand: string;
  color: string;
} = {
  brand: "BMW",
  color: "black",
};

type AwardDetails = {
  name: string;
  year: Date;
};
type Awards = {
  [key: string]: AwardDetails;
};

type Author = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "ai";
};
type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
  category?: string;
};

let post: Post = {
  title: "My Post",
  content: "This is my post",
  date: new Date(),
  author: {
    name: "John",
    age: 22,
    email: "john@example.com",
    type: "human",
  },
  awards: {
    web: {
      name: "Best Web Post",
      year: new Date(),
    },
    web3: {
      name: "Best Web3 Post",
      year: new Date(),
    },
  },
};

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Rex",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Mittens",
  purrs: true,
};

type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Seats = {
  [key: string]: string;
};

type Airplane = {
  model: string;
  flightNumber: number;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
  seats: Seats;
};
