export class Conta {
  numConta: string;
  nomeCorrentista: string;
  saldo: number;

  constructor(numConta: string, nomeCorrentista: string, saldo: number = 0) {
    this.numConta = numConta;
    this.nomeCorrentista = nomeCorrentista;
    this.saldo = saldo;
  }

  alterarNome(novoNome: string) {
    this.nomeCorrentista = novoNome;
    console.log(this);
  }

  deposito(valorDeposito: number) {
    this.saldo += valorDeposito;
    console.log(this);
  }

  saque(saida: number) {
    if (saida > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= saida;
      console.log("O saque foi de" + this);
    }
  }
}
