import calculadora from "./calculadora";

describe("calculadora", () => {
  test("getFactorial should be a Object", () => {
    expect(calculadora).toBeInstanceOf(Object);
  });

  test("espero que a soma de 1 + 1 seja 2", () => {
    const valores = calculadora.somar(1, 1);
    const esperado = 2;

    expect(valores).toBe(esperado);
  });

  test('espero que a subtração de 1 - 1 seja 0', () => {
    const valores = calculadora.subtracao(1, 1);
    const esperado = 0;

    expect(valores).toBe(esperado);
  })

  test("espero que a multiplicação de 2 * 2 seja 4", () => {
    const valores = calculadora.multiplicacao(2, 2);
    const esperado = 4;

    expect(valores).toBe(esperado);
  })

  test('espero que a divisão de 2 / 2 seja 1', () => {
    const valores = calculadora.divisao(2, 2);
    const esperado = 1;


    expect(valores).toBe(esperado);
  })


});
