function resolverDepoisde2Segundos(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function adicionar1(x) {
  let a = resolverDepoisde2Segundos(20);
  let b = resolverDepoisde2Segundos(30);
  return x + (await a) + (await b);
}

adicionar1(10).then((v) => {
  console.log(v);
});

async function adicionar2(x) {
  let a = resolverDepoisde2Segundos(20);
  let b = resolverDepoisde2Segundos(30);
  return x + (await a) + (await b);
}

adicionar2(10).then((v) => {
  console.log(v);
});
