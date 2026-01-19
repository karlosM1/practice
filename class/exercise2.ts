class Employee {
  static companyName: string = "Tech Corp";

  constructor(
    public name: string,
    public age: number,
    private _salary: number,
    protected id: number,
  ) {}

  public static getCompanyName(): string {
    return Employee.companyName;
  }

  public set salary(salary: number) {
    if (salary < 0) {
      throw new Error("Salary must be a positive number");
    }
    this._salary = salary;
  }

  public get salary(): number {
    if (this._salary === undefined) {
      throw new Error("Salary is not set");
    }
    return this._salary;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Company: ${Employee.getCompanyName()}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    salary: number,
    id: number,
    public department: string,
  ) {
    super(name, age, salary, id);
  }
  //overriding method
  getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}

const employee: Employee = new Employee("Alice", 28, 50000, 1);
console.log(employee.getDetails());
employee.salary = 55000;
console.log(`Updated Salary: ${employee.salary}`);

const manager: Manager = new Manager("Bob", 35, 80000, 2, "Sales");
console.log(manager.getDetails());
manager.salary = 85000;
console.log(`Updated Salary: ${manager.salary}`);
