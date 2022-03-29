//operador ternário
let idade = 19;
let podeDirigir = idade >= 18 ? true : false;
// console.log(podeDirigir);

//operador ternário retorna string
let testeCovid = true;
let resultadoTest = testeCovid == true ? "Positivo" : "Negativo";
// console.log(resultadoTest);

//operador ternários mais de uma condição
let tipoPedido = "entrega";
let statusPagamento = "pago";

let situacaoEntrega =
  tipoPedido == "entrega" && statusPagamento == "pago"
    ? "Entrega liberada"
    : "não liberar";
console.log(situacaoEntrega);
