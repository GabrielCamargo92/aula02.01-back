export class ModelaBola {
  cor: string;
  circunferencia: string;
  material: string;

  constructor({
    cor,
    circunferencia,
    material,
  }: {
    cor: string;
    circunferencia: string;
    material: string;
  }) {
    this.cor = "red";
    this.circunferencia = "50cm";
    this.material = "capotão";
  }

  trocarCor(novaCor: string) {
    this.cor = novaCor;
    console.log(novaCor);
  }

  mostrarCor() {
    this.cor = this.cor;
    console.log(this.cor);
  }
}
