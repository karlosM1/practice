class User {
  // lastName?: string;
  // protected phone: number;

  constructor(
    public name: string,
    public readonly email: string,
    public phone?: number,
    public lastName?: string,
  ) {}

  public greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const user = new User("Alice", "alice@example.com", 1234567890);
console.log(user);
console.log(user.greet());

class Admin extends User {
  public isAdmin: boolean = true;

  constructor(
    name: string,
    email: string,
    phone: number,
    public usersReporting: number,
    lastName?: string,
  ) {
    super(name, email, phone, lastName);
  }

  public printNumber() {
    return this.phone;
  }

  public greet(): string {
    return `Hello, I am admin ${this.name}! I am the admin`;
  }
}

const user2 = new Admin("Bob", "bob@example.com", 1234567890, 5);
const admin: Admin = new Admin(
  "Charlie",
  "charlie@example.com",
  1234567890,
  10,
);

console.log(user.greet());
console.log(admin.greet());
