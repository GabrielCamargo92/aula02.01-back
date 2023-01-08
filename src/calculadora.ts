export class Calculator {
  history: number[];
  //   resultado: number;
  //   operador: string;

  constructor(history: number[] = []) {
    this.history = history;
    // this.resultado = 0;
    // this.operador = this.operador;
  }

  calculo(operador: string, valor1: number, valor2: number) {
    let resultado: number;

    if (operador == "+") {
      resultado = valor1 + valor2;
      this.history.push(valor1, valor2, resultado);
      console.log(resultado);
      console.log("O último resultado foi: " + this.history);
    } else if (operador == "-") {
      resultado = valor1 - valor2;
      this.history.push(valor1, valor2, resultado);
      console.log(resultado);
      console.log("O último resultado foi: " + this.history);
    } else if (operador == "*") {
      resultado = valor1 * valor2;
      this.history.push(resultado);
      console.log(resultado);
      console.log("O último resultado foi: " + this.history);
    } else if (operador == "/") {
      resultado = valor1 / valor2;
      this.history.push(valor1, valor2, resultado);
      console.log(resultado);
      console.log("O último resultado foi: " + this.history);
    }
  }
}
