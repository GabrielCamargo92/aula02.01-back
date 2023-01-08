export class Contador {
  valor1: number;

  constructor(valor1: number) {
    this.valor1 = valor1;
  }

  zerarValor() {
    this.valor1 = 0;
  }

  incrementaValor() {
    this.valor1 += 1;
  }

  retornaValor() {
    this.valor1 = this.valor1;
  }
}
