const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum Roles {
  ADMIN = "admin",
  AUTHOR = "author",
  EDITOR = "editor",
}

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const personn: Person = {
  name: "Alice",
  email: "alice@example.com",
  password: "securePassword123",
  role: Roles.ADMIN,
};

enum Direction3 {
  Up = 1,
  Down = "DOWN",
  Left = 3,
  Right = "RIGHT",
}
