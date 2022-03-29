const numeros = [1, 2, 3, 4, 5, 33, 43, 6, 32, 12, 31, 99];
const par = n => n % 2 === 0 
const impar = n => n % 2 === 1 
const numeroPar = numeros.filter(par)
const numeroImpar = numeros.filter(impar)
console.log(numeroPar);
console.log(numeroImpar);