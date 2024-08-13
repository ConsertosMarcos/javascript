/**
 * Tabuada whitle
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */


const input = require('readline-sync')
const colors = require('colors')

let i = 1
let valor

console.clear()
console.log("TABUADA".blue)
valor = input.question("Digite o Numero desejado: ")
console.log("")

while (i < 11) {
    console.log(`${valor} x ${i} = ${i * valor}`)
    i++
}