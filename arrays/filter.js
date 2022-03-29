const produtos = [
  { id: 1, categoria: "limpeza", name: "Amaciante" },
  { id: 2, categoria: "limpeza", name: "Detergente" },
  { id: 3, categoria: "alimento", name: "ovo" },
  { id: 4, categoria: "alimento", name: "alface" },
];

const isAlimento = produto => produto.categoria === 'alimentos';

const alimentos = produtos.filter(isAlimento)
console.log(alimentos);

// Método fiilter filtrar apartir de um parametro, é bom para uso de compração ou diferente.