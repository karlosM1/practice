class Box<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set value(newValue: T) {
    this._value = newValue;
  }
}

const numberBox = new Box(42);

const stringBox = new Box<string>("Hello, TypeScript!");

//
//
//

type Identifiable = {
  id: number;
};

class Repository<T extends Identifiable> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    return this.items.find((item: T) => item.id === id);
  }

  getAll(): T[] {
    return this.items;
  }

  removeById(id: number): void {
    this.items = this.items.filter((item: T) => item.id !== item.id);
  }
}

type User = Identifiable & {
  name: string;
  email: string;
};

type Books = Identifiable & {
  title: string;
  ISBN: string;
};

const userRepository = new Repository<User>();
userRepository.add({ id: 1, name: "Alice", email: "alice@example.com" });
userRepository.add({ id: 2, name: "Bob", email: "bob@example.com" });
const user = userRepository.getById(1);

userRepository.removeById(2);
console.log(userRepository.getAll());

const booksRepository = new Repository<Books>();
booksRepository.add({
  id: 1,
  title: "The Great Gatsby",
  ISBN: "9780743273565",
});
booksRepository.add({ id: 2, title: "1984", ISBN: "9780451524935" });
const book = booksRepository.getById(1);
booksRepository.removeById(2);
console.log(booksRepository.getAll());
