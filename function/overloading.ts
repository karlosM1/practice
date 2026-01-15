type Reservation = {
  deoartureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  desination: string;
};

type Reserve = {
  (
    deoartureDate: Date,
    returnDate: Date,
    departingFrom: string,
    desination: string
  ): Reservation | never;
  (departureDate: Date, departingFrom: string, desination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (
  deoartureDate,
  returnDateOrDepartingFrom,
  departingFromOrDesination?: string,
  desination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && desination) {
    return {
      deoartureDate: deoartureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDesination!,
      desination: desination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      deoartureDate: deoartureDate,
      departingFrom: returnDateOrDepartingFrom,
      desination: departingFromOrDesination!,
    };
  }
  throw new Error("Invalid arguments");
};
