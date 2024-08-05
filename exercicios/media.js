/**
 * Calculo da media - de duas notas 
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

//importar a biblioteca
const imput = require('readline-sync')
const colors = require('colors')

//variaveis
let nota1, nota2, media

console.clear()
console.log ("Calculo da Media")
//captura da nota pelo pacote readline-sync

//entrada:
nota1 = Number(imput.question("digite a nota1:")) 
//console.log (nota1)
nota2 =Number(imput.question("digite a nota2:")) 
//console.log (nota2)

//processamento:
media = (nota1, nota2) / 2
//saida
console.log (`Média: ${media.toFixed(1)}`)
//exemplo de uso de estrutura  if - else if
if (media < 2) {
    console.log("REPROVADO".red)
} else if (media >= 2 && media < 5) {
    console.log("RECUPERAÇÃO".yellow)
} else {
    console.log("APROVADO".blue)
}