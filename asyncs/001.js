// Promise
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;

  if (a == 2) {
    resolve("Sucess");
  } else {
    reject("Error");
  }
});

p.then((message) => {
  console.log("This is in the then" + message);
}).catch((err) => {
  console.log("This in the catch" + err);
});
