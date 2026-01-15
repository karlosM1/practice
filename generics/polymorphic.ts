// type Filter = {
//   (array: number[], preducate: (item: number) => boolean): number[];
//   (array: string[], preducate: (item: string) => boolean): string[];
//   (array: object[], preducate: (item: object) => boolean): object[];
// };

const filter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
  let result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

let numbers = [1, 2, 3, 4, 5, 6];

function preducate(item: number) {
  return item > 7;
}

let animals = ["cat", "dog", "elephant", "tiger"];

function animalPredicate(item: string) {
  return item === "cat";
}
console.log(filter(numbers, preducate)); // []
console.log(filter(animals, animalPredicate)); // ["cat"]
