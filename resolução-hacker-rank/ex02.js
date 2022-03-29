function gradingStudents(nota) {
  let multiplo5 = (nota / 5) * 5;
  let result = multiplo5 - nota;

  if (nota == 4) {
    nota - nota;
  }

  if (nota <= 37) {
    return nota;
  }

  if (result < 3) {
    return multiplo5;
  }

  if (result >= 3) {
    return nota;
  }
  return nota;
}

console.log(gradingStudents(4));
console.log(gradingStudents(73));
console.log(gradingStudents(67));
console.log(gradingStudents(38));
console.log(gradingStudents(33));
