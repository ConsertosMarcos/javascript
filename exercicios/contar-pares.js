/**
 * Contar quantos pares exitem do 1 ao 20
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const input = require('readline-sync')
const imput = require('colors')
console.clear()

let pares = 0


for (let i = 1; i < 21; i++) {
    if (i % 2 === 0) {
    pares++
    }
}
console.log(pares)