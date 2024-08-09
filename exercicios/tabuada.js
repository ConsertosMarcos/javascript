/**
 * Tabuada
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const input = require('readline-sync')
const colors = require('colors')

let valor

console.clear()
console.log("TABUADA".blue)
valor = Number(input.question("Digite o valor da tabuada: "))
console.log("")

for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
}