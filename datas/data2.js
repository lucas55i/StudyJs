// function simpleArraySum(arr) {
//   var soma = 0;
//   for (var i = 0; i < arr.length; i++) {
//     soma += arr[i];
//   }
//   return soma
// }

// var arr = [1, 2, 3, 4, 10, 11];

// console.log(simpleArraySum(arr))

// function compareTriplets(a, b) {
//     let result =""
//     if (a[0] > b[0] && a[2] < b[2]){
//        console.log('1, 1')
//     }
//     return result

// }
// let a = [5, 6, 7]
// let b = [3, 6, 10]
// console.log(compareTriplets(a,b))

// if(a[0] > b[0] && a[2] < b[2]) {
//     console.log(1, 1);
// }

notaFinal = (nota) => {
  let multiplo5 = Math.ceil(nota / 5) * 5;
  let result = multiplo5 - nota;

  if (nota == 4) {
    return result;
  }

  if (nota <= 37) {
    return nota;
  }

  if (result < 3) {
    return multiplo5;
  }

  if (result > 3) {
    return nota;
  }
  return nota;
};

console.log(notaFinal(4));
console.log(notaFinal(73));
console.log(notaFinal(67));
console.log(notaFinal(38));
console.log(notaFinal(33));

// function gradingStudents(grades) {
//     let multiplo5 = Math.ceil(grades / 5) * 5;
//        let result = multiplo5 - grades;

//        if (grades <= 40) {
//          return grades;
//        }

//        if (result < 3) {
//          return multiplo5;
//        }

//        if (result >= 3) {
//          return grades;
//        }
//        return grades;
//    }

//    console.log(gradingStudents(4))
//    console.log(gradingStudents(73))
//    console.log(gradingStudents(67))
//    console.log(gradingStudents(38))
//    console.log(gradingStudents(33))
