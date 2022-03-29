const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// terminal.question("Qual é o seu nome?\n", (nome) => {
//   terminal.question("Qual é o seu telefone?\n", (telefone) => {
//     console.log(
//       `
//             Nome: ${nome},
//             Telefone: ${telefone}
//             `
//     );
//   });
// });

function questionAsync(texto) {
  return new Promise((resolve, reject) => {
    terminal.question(`${texto}\n`, resolve);
  });
}

let nome = "";
let telefone = "";
Promise.resolve()
  .then(() => questionAsync("Qual é o seu nome?"))
  .then((respostaNome) => {
    nome = respostaNome;
  })
  .then(() => questionAsync("Qual é o seu telefone?"))
  .then((respostaTelefone) => {
    if (!respostaTelefone) throw new Error("Campo Vazio");

    telefone = respostaTelefone;
  })
  .then(() => {
    console.log(`Nome: ${nome}, Telefone: ${telefone}`);
  })
  .catch((error) => {
    console.log(`Deu ruim ${error}`);
  })
  .finally(() => terminal.close());
