let a: number[] = [1, 2, 3];
let b: Array<string> = ["a", "b", "c"]; // not recommended because of Generics
let c: (number | string)[] = [1, "a", 2, "b"];

type AirplaneCaterer = {
  name: string;
  address: string;
  phone: number;
};

type AirplaneSeats = {
  [key: string]: string;
};

type AirplaneAirplane = {
  model: string;
  flightNumber: number;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
  seats: Seats;
};

type Airplanes = AirplaneAirplane[];

let airplane: Airplanes = [
  {
    model: "Boeing 747",
    flightNumber: 123,
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
      name: "Sky Catering",
      address: "123 Sky St, Cloud City",
      phone: 5551234,
    },
    seats: {
      A1: "John Doe",
      B1: "Jane Smith",
    },
  },
];
