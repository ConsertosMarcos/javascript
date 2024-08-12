/**
 * 
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const imput = require('readline-sync')
const colors = require('colors')

console.clear()

let soma = 0

for (let i = 1; i < 101; i++) {
    soma += i
}
console.log(soma)