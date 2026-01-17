class User {
  name: string;
  readonly email: string;
  lastName?: string;

  constructor(name: string, email: string, lastName?: string) {
    this.name = name;
    this.email = email;
    this.lastName = lastName;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const user = new User("Alice", "alice@example.com");
console.log(user);
console.log(user.greet());

class Admin extends User {
  isAdmin: boolean = true;
  usersReporting: number;

  constructor(
    name: string,
    email: string,
    usersReporting: number,
    lastName?: string
  ) {
    super(name, email, lastName);
    this.usersReporting = usersReporting;
  }
}

const user2 = new Admin("Bob", "bob@example.com", 5);
const admin: Admin = new Admin("Charlie", "charlie@example.com", 10);
