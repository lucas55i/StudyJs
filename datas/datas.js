// let data = new Date();

function formatarData(data) {
  let newDate = new Date(data);
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
}

// console.log(formatarData(data));

//calcular a diferença de dias entre datas

// let diaAtual = new Date();
// let dataPassada = new Date(2021, 08, 2)

// let dataEmMilissegundos = Math.abs(diaAtual.getTime() - dataPassada.getTime())
// let diasDiferença = Math.ceil(dataEmMilissegundos / (1000 * 60 * 60 * 24))
// console.log(`A diferença de dias é ${diasDiferença}`);

// somar dias a uma data

// let data = new Date();
// let quantidadeDias = 1;
// data.setDate(data.getDate() + quantidadeDias)
// // console.log(formatarData(data));

//como pegar primeiro o último dia do mes
let data = new Date();

let primeiroDia = new Date(data.getFullYear(), data.getMonth(), 1);
let ultimoDia = new Date(data.getFullYear(), data.getMonth(), +1, 0);
console.log(formatarData(primeiroDia));
console.log(formatarData(ultimoDia));
