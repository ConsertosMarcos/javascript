/**
 * Calculo Gasolina ou Etanol
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

//importar a biblioteca/pacotes
const imput = require('colors')
const input = require('readline-sync')

//variaveis
let Gasolina, Etanol
 
console.clear ()
console.log (Etanol ou Gasolina)

//entrada
Etanol = Number(input.question("Digite o valor do Etanol"))
Gasolina = Number(input.question("Digite o valor da Gasolina"))

//Processamento/saída
if (Etanol < 0.7 * Gasolina) {
    console.log("Abastecer com Etanol".green)
} else {
    console.log("Abastecer com Gasolina".yellow)
}