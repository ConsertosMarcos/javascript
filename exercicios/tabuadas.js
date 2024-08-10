/**
 * Tabuadas(Exemplo de encadeamentos do laço forte)
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const input = require('readline-sync')
const colors = require('colors')

console.clear()

for (let i = 1; i < 11; i++) {
    console.log("")
    console.log(`Tabuada do ${i}: `)
    for (let j = 1; j < 11; j++) {
        console.log(`${i} x ${j} = ${i * j} `)
    }
}