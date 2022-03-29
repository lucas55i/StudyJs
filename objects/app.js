let pessoa = [
  {
    nome: "lucas",
    idade: 21,
  },
  {
    nome: "falcao",
    idade: 21,
  },
];
// let pessoaCerta = "";
// if (pessoa[0].nome == "lucas") {
//   pessoaCerta = pessoa[0].nome;
//   console.log(`nome da pessoa é ${pessoaCerta}`);
// }

const verificaPessoa = ( idade) => {
    if(idade < 18){
        console.log('erro 2');
    }
}


verificaPessoa(pessoa[0].idade)


// console.log(pessoa[1]);
