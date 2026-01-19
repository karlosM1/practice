class Person {
  private _age?: number;
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  public set age(age: number) {
    if (age < 0 || age > 150) {
      throw new Error("Age must be between 0 and 150");
    }
    this._age = age;
  }
  public get age(): number {
    if (this._age === undefined) {
      throw new Error("Age is not set");
    }
    return this._age;
  }

  public fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("John", "Doe");
const person2: Person = new Person("Jane", "Smith");

person.age = 30;
person2.age = 25;
console.log(person.age);
console.log(person2.age);

console.log(person.fullName());
