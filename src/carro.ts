export class Carro {
  consumo: number;
  quantidade: number;

  constructor(consumo: number) {
    this.consumo = consumo;
    this.quantidade = 0;
  }

  andar(km: number) {
    const value = km / this.consumo;
    this.quantidade -= value;
    console.log(this);
    console.log("Gasolina consumida: " + value + " litros");
  }

  obterGasolina() {
    console.log(this.quantidade);
    return this.quantidade;
  }

  adicionarGasolina(litros: number) {
    this.quantidade += litros;
    console.log(this);
  }
}
