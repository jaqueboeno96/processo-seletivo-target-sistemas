/*
Autor: Jaqueline A. O. Boeno
Data: 27/02/2023
Descrição: Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total 
mensal da distribuidora.
*/

var faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  }; 
  
  var totalFaturamento = 0;
  for(var estado in faturamentoPorEstado) {
    totalFaturamento += faturamentoPorEstado[estado];
  }
  
  for(var estado in faturamentoPorEstado) {
    var percentualRepresentacao = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
    console.log(estado + ": " + percentualRepresentacao.toFixed(2) + "%");
  }
  