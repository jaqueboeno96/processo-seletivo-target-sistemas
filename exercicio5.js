/*
Autor: Jaqueline A. O. Boeno
Data: 27/02/2023
Descrição: Escreva um programa que inverta os caracteres de um string.
*/


var string = "Jaqueline Boeno!"; 
var stringInvertida = "";

for(var i = string.length - 1; i >= 0; i--) {
  stringInvertida += string[i];
}

console.log(stringInvertida);
