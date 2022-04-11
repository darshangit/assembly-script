// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export const fizzBuzz = (n: number): string[] => {
  var retList: string[] = [];
  let i: number;
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      retList.push("FizzBuzz");
    } else if (i % 3 === 0) {
      retList.push("Fizz");
    } else if (i % 5 === 0) {
      retList.push("Buzz");
    } else {
      retList.push(i + "");
    }
  }
  return retList;
};
