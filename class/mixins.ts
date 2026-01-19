type Constructor = new (...args: any[]) => {};

function Timestamp<T extends Constructor>(Base: T) {
  return class extends Base {
    protected timestamp: Date = new Date();

    getTimestamp(): Date {
      return this.timestamp;
    }
  };
}

class User {
  constructor(public name: string) {}
}

class UserWithTimestamp extends Timestamp(User) {
  constructor(
    public name: string,
    public age: number,
  ) {
    super(name);
  }

  displayInfo(): void {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Created At: ${this.getTimestamp()}`,
    );
  }
}

const user = new UserWithTimestamp("Alice", 30);
console.log(user.name);
user.displayInfo();
