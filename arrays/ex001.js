const pessoa = [
  {
    nome: "lucas",
    profissao: "Desenvlvedor Jr",
    idade: 21,
    habilidades: ["Violão", "Clarinete", "Piano"],
    cursos: {
      graduacao: "Analise e Desenvolvimento de Sistemas",
      técnico: "Técnico em Plásticos",
    },
  },
  {
    nome: "Pedro",
    profissao: "Padeiro",
    idade: 32,
    habilidades: ["Confeiteiro", "Piano"],
    cursos: {
      graduacao: "Gastronomia",
      técnico: "Técnico em manipulação de alimentos",
    },
  },
  {
    nome: "Manuel",
    profissao: "Pescador",
    idade: 51,
    habilidades: ["Pesca"],
    cursos: {
      graduacao: "",
      técnico: "",
    },
  },
];

const filtroPessoas = (pessoa) => pessoa.cursos.graduacao === "Gastronomia";

const somaIdades = pessoa.reduce(
  (acumulado, pessoas) => acumulado + pessoas.idade / pessoa.length,
  0
);
const filtro = pessoa.filter(filtroPessoas);
console.log(filtro);
console.log(somaIdades);


const duplicar = (pessoa) => pessoa.idade * 2


const mudarProfissao = pessoa.map(duplicar)
console.log(mudarProfissao);
