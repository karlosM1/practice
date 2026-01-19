function loadInitialCount(): number {
  return 10;
}

class Counter {
  static count = 0;

  static increment() {
    Counter.count++;
  }

  static {
    console.log("Static block executed");
    Counter.count = loadInitialCount();
  }
}
Counter.increment();
console.log(Counter.count); // 1

const counter: Counter = new Counter();
