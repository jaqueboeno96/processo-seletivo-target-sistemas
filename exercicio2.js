/*
Autor: Jaqueline A. O. Boeno
Data: 27/02/2023
Descrição: Programa que identifica se um número pertence a sequência de Fibonacci.
*/

var primeiro = 0;
var segundo = 1;
var atual = 0;
var achou = false;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (num) => {

    while(atual <= num){
        atual = primeiro + segundo;
        primeiro = segundo;
        segundo = atual;

        if (atual == num){
            achou = true;
        }
    }
   
    if (achou == true){
        console.log("O número " + num.toString() + " foi encontrado.")
    }else{
        console.log("O número " + num.toString() + " não foi encontrado.")
    }
 
    rl.close();
});