// let numero = 7;

// for (var contador = 1; contador <= 9; contador++) {
//   console.log(numero * contador);
// }

let listaDeNomes = ["cristiano ronaldo", "lionel messi", "neymar"];

for (var index = 0; index < listaDeNomes.length; index++) {
  let message = "Joga muito, " + listaDeNomes[index] + "!";

  console.log(message);
  if (listaDeNomes[index] == "lionel messi") break;
}
