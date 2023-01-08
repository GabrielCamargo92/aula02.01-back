export class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor() {
    this.tipoCombustivel = "Gasolina";
    this.valorLitro = 4.69;
    this.quantidadeCombustivel = 100;
  }

  abastecerPorValor(valorAbastecer: number) {
    let abastecer = valorAbastecer / this.valorLitro;
    if (this.quantidadeCombustivel - abastecer < 0) {
      return;
    }
    this.quantidadeCombustivel -= abastecer;
    console.log(this);
    console.log("Quantidade abastecida: " + abastecer);
  }

  abastecerPorLitro(litros: number) {
    const abastecer = litros * this.valorLitro;

    if (this.quantidadeCombustivel < abastecer) {
      return;
    }
    this.quantidadeCombustivel -= abastecer;
    console.log("Quantidade em litros abastecida: " + abastecer);
  }

  alterarValor(valor: number) {
    this.valorLitro = valor;
    console.log(this);
  }

  alterarQuantidadeCombustivel(quantidade: number) {
    this.quantidadeCombustivel = quantidade;
    console.log(this);
  }
}
