const produtos = [
  { id: 1, categoria: "limpeza", name: "Amaciante" },
  { id: 2, categoria: "limpeza", name: "Detergente" },
  { id: 3, categoria: "alimento", name: "ovo" },
  { id: 4, categoria: "alimento", name: "alface" },
];
const idsAlimentos = produtos
  .filter((p) => p.categoria === "alimento") // inline
  .map((p) => p.name);
console.log(idsAlimentos);
