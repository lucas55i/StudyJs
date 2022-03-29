function compareTriplets(a, b) {
  const { A, B } = a.reduce(
    (acc, cur) => {
      const { counter } = acc;
      if (a[counter] > b[counter]) {
        acc.A++;
      } else if (a[counter] < b[counter]) {
        acc.B++;
      }
      acc.counter++;
      return acc;
    },
    { A: 0, B: 0, counter: 0 }
  );
  return [A, B];
}

let a = [5, 6, 7];
let b = [3, 6, 10];
console.log(compareTriplets(a, b));
