/*
Autor: Jaqueline A. O. Boeno
Data: 27/02/2023
Descrição: Programa que identifica menor valor de faturamento ocorrido em um dia do mês, 
maior valor de faturamento ocorrido em um dia do mês e número de dias em que o faturamento diário foi superior à média mensal
*/

var faturamentoDiario = [22174.1664, 24537.6698, 26139.6134, 0.0, 0.0, 26742.6612, 0.0, 42889.2258, 46251.174, 11191.4722, 0.0, 0.0, 0.0, 3847.4823, 
373.7838, 2659.7563, 48924.2448, 18419.2614, 0.0, 0.0, 35240.1826, 43829.1667, 18235.6852, 4355.0662, 13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 
8414.61];

// Cálculo do menor valor de faturamento diário
var menorFaturamento = Math.min(...faturamentoDiario);
    console.log("O menor faturamento diário foi de R$" + menorFaturamento);

// Cálculo do maior valor de faturamento diário
var maiorFaturamento = Math.max(...faturamentoDiario);
    console.log("O maior faturamento diário foi de R$" + maiorFaturamento);

// Cálculo da média mensal de faturamento diário
var mediaMensal = faturamentoDiario.reduce((soma, valor) => soma + valor, 0) / faturamentoDiario.length;

// Cálculo do número de dias em que o faturamento diário foi superior à média mensal
var diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;
    console.log("O número de dias em que o faturamento diário foi superior à média mensal foi de " + diasAcimaDaMedia);
