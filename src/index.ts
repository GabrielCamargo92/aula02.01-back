import { Contador } from "./contador";
import { ModelaBola } from "./modelarBola";
import { Calculator } from "./calculadora";
import { BombaCombustivel } from "./combustivel";
import { Conta } from "./conta";
import { Carro } from "./carro";

//-------------------------------------------------------------------------------//
//Exercício (1)

// let contador = new Contador(50);

// contador.incrementaValor();
// contador.zerarValor();
// contador.retornaValor();
// console.log(contador);

//-------------------------------------------------------------------------------//
//Exercício (2)

// let ball = new ModelaBola({ cor: "cor", circunferencia: "circunferencia", material: "material" });
// console.log(ball);
// ball.mostrarCor();
// ball.trocarCor("blue");
// ball.mostrarCor();

//-------------------------------------------------------------------------------//
//Exercício (3)

// let account = new Conta("00485", "Gabriel Camargo");
// account.deposito(2000);
// account.alterarNome("Gabriel Augusto");

//-------------------------------------------------------------------------------//
//Exercício (4)

// let calculadora = new Calculator();
// calculadora.calculo("*", 10, 3);

//-------------------------------------------------------------------------------//
//Exercício (5)

// let abastecer = new BombaCombustivel();
// abastecer.alterarValor(5);  //Muda o valor pré-definido do combustível;
// abastecer.abastecerPorLitro(5); //Abastece pela quantidade em Litros;
// abastecer.abastecerPorValor(50); //Abastece pelo Valor em reais;
// abastecer.alterarQuantidadeCombustivel(150); //Altera a quantidade de combustível disponível na bomba;

//-------------------------------------------------------------------------------//
//Exercício (6)

let meuFusca = new Carro(10); //Consumo por litro do carro;
meuFusca.adicionarGasolina(30); //Qtd de gasolina abastecida;
meuFusca.andar(80); //Distância a ser percorrida -> Mostra quantos L foram utilizados para tal;
meuFusca.obterGasolina(); //Mostra a quantidade de Gasolina disponível;
