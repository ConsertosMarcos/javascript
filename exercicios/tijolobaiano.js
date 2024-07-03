/**
 * Calculo da quantidade de tijolos baiano 8 furos por metro quadrado
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const imput = require('readline-sync')

//variaveis
let m2, tijolos

console.clear()
console.log("calculo de tijolos baiano por metro quadrado")

//entrada
m2 = Number(imput.question("quantos metros voce precisa?"))

tijolos = m2 * 28
console.log(`voce precisara de ${tijolos} tijolos`)