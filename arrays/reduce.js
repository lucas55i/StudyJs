const numeros = [1, 2, 3, 4];

// const total = numeros.reduce((acumulado, x) => {
//   // console.log(`${acumulado}+${x} = ${acumulado+ x}`);
//   return acumulado + x;
// });

const produtos = [
  { valor: 6.5, id: 1, categoria: "limpeza", name: "Amaciante" },
  { valor: 1.2, id: 2, categoria: "limpeza", name: "Detergente" },
  { valor: 6.9, id: 3, categoria: "alimento", name: "ovo" },
  { valor: 2.0, id: 4, categoria: "alimento", name: "alface" },
];

// const total = produtos.reduce(
//   (acumulado, produto) => acumulado + produto.valor,
//   0
// );
// console.log(total);

const alunos = [
  {
    id: 1,
    nota: 2,
  },
  {
    id: 2,
    nota: 9,
  },
  {
    id: 3,
    nota: 10,
  },
];

const total = alunos.reduce((acumulado, alunos) => acumulado + alunos.nota, 0);
console.log(total);
