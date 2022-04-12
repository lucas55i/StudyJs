let numero = {
  name: "lucas",
  iades: 21,
  hobby: [
    {
      position: 1,
      categoria: "em casa",
    },
  ],
};

numero.hobby.forEach((numero) => {
  console.log(numero.categoria)
});
