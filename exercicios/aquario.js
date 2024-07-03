/**
 * Calculo de quantos litros cabem no aquario
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

//importar a biblioteca
const imput = require('readline-sync')

//variaveis
let altura, largura, comprimento, litros

console.clear()
console.log("Calculo do volume do aquario")

//entrada
comprimento = Number(imput.question("digite o compremento em cm do aquario"))
largura = Number(imput.question("digite o largura em cm do aquario"))
altura = Number(imput.question("digite o altura em cm do aquario"))

//processamento
litros = (comprimento * largura * altura) / 1000

//saida
console.log(`No aquario cabem ${litros.toFixed(1)} litros`)