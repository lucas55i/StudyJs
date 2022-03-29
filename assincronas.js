//callbacks
const fs = require("fs");
// fs.readFile("./arq1.txt", (error, resposta) => {
//   if (error) {
//     console.log("Deu ruim**", error.stack);
//     return;
//   }

//   console.log("resposta", resposta.toString());
// });

fs.readFile("./arq1.txt", (erroArq1, respostaArq1) => {
  if (erroArq1) {
    console.log("Deu erro no arquivo 1", erroArq1);
    return;
  }
  fs.readFile("./arq2.txt", (erroArq2, respostaArq2) => {
    if (erroArq2) {
      console.log("Deu erro no arquivo 2", erroArq2);
      return;
    }
    fs.readFile("./arq3.txt", (erroArq3, respostaArq3) => {
      if (erroArq3) {
        console.log("Deu erro no arquivo 3", erroArq3);
        return;
      }

      const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`;
      fs.writeFile("./final.txt", conteudo, (errorWrite, respostaWrite) => {
        if (errorWrite) {
          console.error("Deu erro ", errorWrite);
          return;
        }
        console.log("Arquivo salvo com sucesso", respostaWrite);
      });
    });
  });
});
