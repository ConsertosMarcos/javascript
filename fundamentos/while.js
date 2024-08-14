/**
 * Exemplo da estrutura while do-while
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const input = require('readline-sync')

//modificar valores da variavel para ver qual a diferença das estruturas
let x = 1
let y = 1

console.clear()


while (x < 11) {
    console.log("teste da estrutura whitle")
    x++
}

input.question("Pressione a tecla [ENTER] para continuar: ")
console.clear()
do {
    console.log("teste da do-estrutura do-whitle")
    y++
} while (y < 11)